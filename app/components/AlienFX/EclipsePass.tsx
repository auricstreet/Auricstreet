// ECLIPSE PASS
// A soft moving shadow that travels behind the page,
// like a mini solar eclipse. Dramatic but very subtle.

export default function EclipsePass() {
  return (
    <div className="absolute inset-0 pointer-events-none auric-eclipse z-0" />
  );
}