import sharp from "sharp";
import { readFile } from "node:fs/promises";

const W = 1200;
const H = 630;

const logoB64 = (
  await readFile(new URL("../public/logo-square.png", import.meta.url))
).toString("base64");

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glowBlue" cx="0%" cy="0%" r="70%">
      <stop offset="0%" stop-color="#1d4ed8" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#060608" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowOrange" cx="100%" cy="100%" r="70%">
      <stop offset="0%" stop-color="#ea580c" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="#060608" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="brandBar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="50%" stop-color="#818cf8"/>
      <stop offset="100%" stop-color="#fb923c"/>
    </linearGradient>
    <pattern id="dots" x="0" y="0" width="44" height="44" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.6" fill="#ffffff" fill-opacity="0.05"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="#060608"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  <rect width="${W}" height="${H}" fill="url(#glowBlue)"/>
  <rect width="${W}" height="${H}" fill="url(#glowOrange)"/>

  <!-- R logo -->
  <image href="data:image/png;base64,${logoB64}" x="86" y="155" width="320" height="320" preserveAspectRatio="xMidYMid meet"/>

  <!-- Wordmark -->
  <text x="470" y="268" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="112" font-weight="700" fill="#fafafa" letter-spacing="-3">Raisevane</text>
  <rect x="474" y="300" width="330" height="8" rx="4" fill="url(#brandBar)"/>
  <text x="470" y="382" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="42" font-weight="600" fill="#e5e5e5">Full-service digital agency</text>
  <text x="470" y="440" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="34" font-weight="400" fill="#8f8f96">Web · Mobile · AI · Design</text>

  <!-- Domain -->
  <text x="470" y="560" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="30" font-weight="500" fill="#6b6b74">raisevane.vercel.app</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og.png");
console.log("OG image written: public/og.png (1200x630)");
