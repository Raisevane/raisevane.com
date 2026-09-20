/**
 * AuroraBackground — site-wide ambient background.
 * Soft radial "light blobs" in blue / purple / pink drifting slowly.
 * Rendered once in the root layout, behind all content.
 */
export function AuroraBackground() {
  return (
    <div className="aurora-root" aria-hidden>
      <div className="aurora-blob aurora-blue" />
      <div className="aurora-blob aurora-purple" />
      <div className="aurora-blob aurora-pink" />
      <div className="aurora-blob aurora-teal" />
      {/* subtle vignette so text stays readable */}
      <div className="aurora-vignette" />
    </div>
  );
}
