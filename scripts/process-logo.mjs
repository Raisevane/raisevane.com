import sharp from "sharp";

const src = "/tmp/logo-crop.png";

// sample: find bounding box of "bright" pixels (logo) vs near-black bg
async function trimAndProcess() {
  const img = sharp(src);
  const { width, height } = await img.metadata();
  const raw = await img
    .clone()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = raw;
  const threshold = 28; // bg is ~ #0d0d10-#111

  let minX = width, minY = height, maxX = 0, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * info.channels;
      const r = data[i], g = data[i + 1], b = data[i + 2];
      if (r > threshold || g > threshold || b > threshold) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  const pad = 12;
  minX = Math.max(0, minX - pad);
  minY = Math.max(0, minY - pad);
  maxX = Math.min(width - 1, maxX + pad);
  maxY = Math.min(height - 1, maxY + pad);
  const w = maxX - minX + 1;
  const h = maxY - minY + 1;
  console.log("bbox", { minX, minY, w, h });

  // extract logo region, make black pixels transparent
  const cropped = await sharp(src)
    .extract({ left: minX, top: minY, width: w, height: h })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data: d2, info: i2 } = cropped;
  const out = Buffer.alloc(w * h * 4);
  for (let p = 0; p < w * h; p++) {
    const r = d2[p * 4], g = d2[p * 4 + 1], b = d2[p * 4 + 2];
    out[p * 4] = r;
    out[p * 4 + 1] = g;
    out[p * 4 + 2] = b;
    // luminance-based alpha: dark -> transparent, smooth edge
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    let a;
    if (lum <= 18) a = 0;
    else if (lum >= 60) a = 255;
    else a = Math.round(((lum - 18) / 42) * 255);
    out[p * 4 + 3] = a;
  }

  await sharp(out, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toFile("public/logo.png");

  // square padded versions
  const sq = await sharp("public/logo.png")
    .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile("public/logo-square.png");

  await sharp("public/logo.png")
    .resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile("public/apple-touch-icon.png");

  await sharp("public/logo.png")
    .resize(64, 64, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile("public/favicon.png");

  console.log("done");
}

trimAndProcess().catch((e) => { console.error(e); process.exit(1); });
