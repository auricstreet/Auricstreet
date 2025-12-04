// auric-reveal.js
export function initAuricReveal({ mode = 'auto' } = {}) {
  // Decide pages: homepage gets full cinematic; others get light.
  const isHome = typeof window !== 'undefined' && location.pathname === '/';
  const useFull = mode === 'full' || (mode === 'auto' && isHome);

  // quick helper to add/remove classes
  const add = (el, cls) => el && el.classList && el.classList.add(cls);
  const remove = (el, cls) => el && el.classList && el.classList.remove(cls);

  // 1. create curtain + sweep DOM nodes (add-only)
  const curtain = document.createElement('div'); curtain.className = 'auric-curtain';
  const sweep = document.createElement('div'); sweep.className = 'auric-goldsweep';
  document.body.appendChild(curtain);
  document.body.appendChild(sweep);

  // 2. Set initial states for elements we expect (safe: use query selectors)
  const navbar = document.querySelector('.navbar') || document.querySelector('nav');
  if (navbar) navbar.classList.add('auric-navbar-prepare');

  const heroLines = Array.from(document.querySelectorAll('.hero .hero-line, .hero h1, .hero .sub, .hero p'));
  heroLines.forEach(el => el.classList.add('auric-hero-line'));

  const orb = document.querySelector('.auric-orb, .floating-orb, .auric-orb-wrapper');
  if (orb) orb.classList.add('auric-orb');

  const panelsLeft = document.createElement('div');
  panelsLeft.className = 'auric-panel-left';
  panelsLeft.style.left = 0;
  const panelsRight = document.createElement('div');
  panelsRight.className = 'auric-panel-right';
  document.body.appendChild(panelsLeft); document.body.appendChild(panelsRight);

  // Helper timeline using timeouts (keeps things simple, no libraries)
  const t0 = 350; // initial sweep delay
  setTimeout(() => {
    // sweep animation plays automatically by CSS
    // after sweep complete, reveal navbar
    setTimeout(() => {
      if (navbar) {
        add(navbar, 'auric-navbar-in');
        add(navbar, 'auric-navbar-underline'); // ensures underline effect
        // toggle active to show underline
        setTimeout(()=> navbar.classList.add('active'), 260);
      }
      // hero lines stagger
      heroLines.forEach((el, idx) => {
        setTimeout(() => el.classList.add('in'), 120 * idx + 80);
      });

      // orb reveal
      setTimeout(()=> { if(orb) orb.classList.add('in'); }, 1400);

      // side panels
      setTimeout(()=> { document.body.classList.add('auric-panels-in'); }, 1700);
      // remove curtain/sweep once finished
      setTimeout(()=> {
        try { curtain.remove(); sweep.remove(); panelsLeft.remove(); panelsRight.remove(); } catch(e){}
      }, 2600);
    }, 560);
  }, t0);

  // Scroll reveal: observe sections with .auric-section
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add('in');
        // optional stagger children
        const children = el.querySelectorAll('.reveal-item');
        children.forEach((c, idx) => setTimeout(()=> c.classList.add('in'), idx * 80));
      }
    });
  }, { threshold: 0.18 });

  document.querySelectorAll('.auric-section').forEach(s => observer.observe(s));

  // If user prefers reduced motion, skip heavy animations
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // remove temp nodes
    try { curtain.remove(); sweep.remove(); panelsLeft.remove(); panelsRight.remove(); } catch(e){}
    document.querySelectorAll('.auric-hero-line').forEach(el=>el.classList.add('in'));
    if (navbar) navbar.classList.add('auric-navbar-in','active');
    if (orb) orb.classList.add('in');
  }
}