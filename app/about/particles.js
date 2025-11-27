// VERY lightweight star particle generator

export function initAuricParticles() {
  const container = document.querySelector(".about-wrapper");
  if (!container) return;

  let count = 0;

  window.addEventListener("mousemove", (e) => {
    if (count % 4 !== 0) { 
      count++;
      return;
    }
    count++;

    const star = document.createElement("div");
    star.className = "cursor-star";

    star.style.left = e.clientX + "px";
    star.style.top = e.clientY + "px";

    container.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 1200);
  });
  window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  document.querySelector(".about-wrapper")?.style.setProperty("--px", x);
  document.querySelector(".about-wrapper")?.style.setProperty("--py", y);
});
window.addEventListener("scroll", () => {
  const fog = document.querySelector(".nebula-fog");
  if (!fog) return;

  const ratio = Math.min(1, window.scrollY / 600);
  fog.style.opacity = ratio * 0.8;
});
}