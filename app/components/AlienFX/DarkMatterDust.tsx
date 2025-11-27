export default function DarkMatterDust() {
  console.log("Rendering DarkMatterDust component");
  return (
    // This fills the entire screen, stays behind everything.
    <div className="absolute inset-0 z-0 pointer-events-none auric-dust" />
  );
}