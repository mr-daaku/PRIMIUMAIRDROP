/* =====================================================================
   PRIMIUM AIRDROP — 3D WEBSITE — app.js
   Three.js scene + Custom cursor + 3D card tilt + All interactions
   ===================================================================== */

"use strict";

/* ═══════════════════════════════════════════
   THREE.JS 3D SCENE — Particle Galaxy + Floating Geometry
═══════════════════════════════════════════ */
(function initThreeScene() {
  const canvas = document.getElementById("three-canvas");
  if (!canvas || typeof THREE === 'undefined') return;

  // Renderer
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  // Scene + Camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // ── Particle Galaxy ──
  const particleCount = 3000;
  const positions = new Float32Array(particleCount * 3);
  const colors    = new Float32Array(particleCount * 3);
  const sizes     = new Float32Array(particleCount);

  const goldColor = new THREE.Color(0xFFB800);
  const cyanColor = new THREE.Color(0x00E5FF);
  const whiteColor= new THREE.Color(0xDDDDFF);

  for (let i = 0; i < particleCount; i++) {
    // Spiral galaxy distribution
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.pow(Math.random(), 0.5) * 18;
    const spiral = angle + radius * 0.3;
    positions[i * 3]     = Math.cos(spiral) * radius + (Math.random() - 0.5) * 2;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 2] = Math.sin(spiral) * radius + (Math.random() - 0.5) * 2;

    // Mix colors
    const r = Math.random();
    let c = r < 0.15 ? goldColor : r < 0.25 ? cyanColor : whiteColor;
    colors[i * 3]     = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
    sizes[i] = Math.random() * 2.5 + 0.3;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color',    new THREE.BufferAttribute(colors, 3));
  geo.setAttribute('size',     new THREE.BufferAttribute(sizes, 1));

  const mat = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 0.75,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const galaxy = new THREE.Points(geo, mat);
  scene.add(galaxy);

  // ── Floating Icosahedron (Crystal) ──
  const crystalGeo = new THREE.IcosahedronGeometry(1.2, 0);
  const crystalMat = new THREE.MeshPhongMaterial({
    color: 0xFFB800,
    emissive: 0x442200,
    transparent: true,
    opacity: 0.18,
    wireframe: false,
    side: THREE.DoubleSide,
  });
  const crystal = new THREE.Mesh(crystalGeo, crystalMat);
  crystal.position.set(3.5, 0.5, -3);
  scene.add(crystal);

  // Wireframe of same crystal
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0xFFB800,
    wireframe: true,
    transparent: true,
    opacity: 0.12,
  });
  const wireframe = new THREE.Mesh(crystalGeo, wireMat);
  wireframe.position.copy(crystal.position);
  scene.add(wireframe);

  // ── Second gem — Octahedron ──
  const octaGeo = new THREE.OctahedronGeometry(0.7, 0);
  const octaMat = new THREE.MeshBasicMaterial({ color: 0x00E5FF, wireframe: true, transparent: true, opacity: 0.1 });
  const octa = new THREE.Mesh(octaGeo, octaMat);
  octa.position.set(-4, -1, -4);
  scene.add(octa);

  // ── Torus ring ──
  const torusGeo = new THREE.TorusGeometry(1.8, 0.02, 8, 80);
  const torusMat = new THREE.MeshBasicMaterial({ color: 0xFFB800, transparent: true, opacity: 0.1 });
  const torus = new THREE.Mesh(torusGeo, torusMat);
  torus.position.set(0, 0, -8);
  torus.rotation.x = Math.PI / 3;
  scene.add(torus);

  // ── Lights ──
  const ambLight = new THREE.AmbientLight(0xFFB800, 0.4);
  scene.add(ambLight);
  const pointLight = new THREE.PointLight(0xFFB800, 1.2, 20);
  pointLight.position.set(3, 3, 3);
  scene.add(pointLight);
  const cyanLight = new THREE.PointLight(0x00E5FF, 0.6, 20);
  cyanLight.position.set(-3, -2, 2);
  scene.add(cyanLight);

  // ── Mouse parallax ──
  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;
  document.addEventListener('mousemove', e => {
    mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // ── Resize handler ──
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // ── Scroll-based tilt ──
  let scrollY = 0;
  window.addEventListener('scroll', () => { scrollY = window.scrollY; });

  // ── Animate ──
  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    // Smooth camera drift
    targetX += (mouseX * 0.3 - targetX) * 0.04;
    targetY += (mouseY * 0.2 - targetY) * 0.04;
    camera.position.x = targetX;
    camera.position.y = -targetY;
    camera.lookAt(scene.position);

    // Galaxy slow rotation
    galaxy.rotation.y = t * 0.04;
    galaxy.rotation.x = scrollY * 0.0002;

    // Crystal spin + bob
    crystal.rotation.x = t * 0.4;
    crystal.rotation.y = t * 0.6;
    crystal.position.y = 0.5 + Math.sin(t * 0.8) * 0.3;
    wireframe.rotation.copy(crystal.rotation);
    wireframe.position.copy(crystal.position);

    // Octa spin
    octa.rotation.x = t * 0.5;
    octa.rotation.z = t * 0.3;

    // Torus pulse
    torus.rotation.z = t * 0.15;
    torus.material.opacity = 0.06 + Math.sin(t * 1.2) * 0.04;

    renderer.render(scene, camera);
  }
  animate();
})();


/* ═══════════════════════════════════════════
   CUSTOM CURSOR
═══════════════════════════════════════════ */
(function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    // Dot follows instantly
    dot.style.left  = e.clientX + 'px';
    dot.style.top   = e.clientY + 'px';

    // Ring lags
    rx += (e.clientX - rx) * 0.14;
    ry += (e.clientY - ry) * 0.14;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
  });

  // Smooth ring lerp
  function lerpRing() {
    requestAnimationFrame(lerpRing);
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
  }
  lerpRing();

  // Expand on interactive elements
  const interactives = 'a, button, .f-card, .c-item, .ptag, .pill, .stat-block, .btn-3d, .float-cta, .nav-cta, .tl-content';
  document.querySelectorAll(interactives).forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-expand'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-expand'));
  });

  // Hide on leave
  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
})();


/* ═══════════════════════════════════════════
   3D CARD TILT EFFECT
═══════════════════════════════════════════ */
(function initTilt() {
  document.querySelectorAll('.f-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width  / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -10;
      const rotY = ((x - cx) / cx) *  10;
      const pctX = (x / rect.width)  * 100;
      const pctY = (y / rect.height) * 100;

      this.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(8px)`;
      this.style.setProperty('--mx', pctX + '%');
      this.style.setProperty('--my', pctY + '%');
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateZ(0)';
    });
  });
})();


/* ═══════════════════════════════════════════
   NAVBAR SCROLL
═══════════════════════════════════════════ */
(function initNavbar() {
  const nav  = document.querySelector('.navbar');
  const ham  = document.querySelector('.hamburger');
  const links= document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  ham?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    ham.setAttribute('aria-expanded', open);
    const s = ham.querySelectorAll('span');
    if (open) {
      s[0].style.transform = 'rotate(45deg) translate(5px,5px)';
      s[1].style.opacity   = '0';
      s[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
    } else {
      s.forEach(x => { x.style.transform = ''; x.style.opacity = ''; });
    }
  });

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      ham?.querySelectorAll('span').forEach(s => { s.style.transform=''; s.style.opacity=''; });
    });
  });
})();


/* ═══════════════════════════════════════════
   REVEAL ON SCROLL
═══════════════════════════════════════════ */
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
})();


/* ═══════════════════════════════════════════
   ANIMATED COUNTERS
═══════════════════════════════════════════ */
(function initCounters() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el  = e.target;
      const end = parseInt(el.dataset.count);
      const sfx = el.dataset.suffix || '';
      const dur = 2000;
      const t0  = performance.now();
      function tick(now) {
        const p = Math.min((now - t0) / dur, 1);
        const v = Math.floor((1 - Math.pow(1-p, 3)) * end);
        el.textContent = v.toLocaleString() + sfx;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = end.toLocaleString() + sfx;
      }
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  els.forEach(el => io.observe(el));
})();


/* ═══════════════════════════════════════════
   TYPING EFFECT
═══════════════════════════════════════════ */
(function initTyping() {
  const el = document.getElementById('typeTarget');
  if (!el) return;
  const lines = [
    'Latest Crypto Airdrops',
    'Verified Earning Bots',
    'High Potential Drops',
    'Trusted Earning Apps',
    'New Bot Launches',
    'DeFi Token Giveaways',
  ];
  let li = 0, ci = 0, del = false;

  function tick() {
    const phrase = lines[li];
    if (!del) {
      el.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) { del = true; setTimeout(tick, 2000); return; }
      setTimeout(tick, 65);
    } else {
      el.textContent = phrase.slice(0, --ci);
      if (ci === 0) { del = false; li = (li + 1) % lines.length; setTimeout(tick, 400); return; }
      setTimeout(tick, 35);
    }
  }
  setTimeout(tick, 1000);
})();


/* ═══════════════════════════════════════════
   HERO 3D LOGO — mouse parallax tilt
═══════════════════════════════════════════ */
(function initHeroTilt() {
  const stage = document.querySelector('.hero-3d-stage');
  if (!stage) return;
  document.addEventListener('mousemove', e => {
    const rx = ((e.clientY / window.innerHeight) - 0.5) * 20;
    const ry = ((e.clientX / window.innerWidth)  - 0.5) * 20;
    stage.style.transform = `rotateX(${-rx}deg) rotateY(${ry}deg)`;
  });
})();


/* ═══════════════════════════════════════════
   TOAST
═══════════════════════════════════════════ */
function showToast(msg, icon = '✅') {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
  t.innerHTML = `<span>${icon}</span><span>${msg}</span>`;
  t.classList.add('show');
  clearTimeout(t._tid);
  t._tid = setTimeout(() => t.classList.remove('show'), 3400);
}


/* ═══════════════════════════════════════════
   TELEGRAM JOIN BUTTONS
═══════════════════════════════════════════ */
const TG = 'https://t.me/primiumairdrop';
document.querySelectorAll('[data-tg]').forEach(el => {
  el.addEventListener('click', () => {
    window.open(TG, '_blank', 'noopener,noreferrer');
    showToast('Opening Telegram...', '✈️');
  });
});


/* ═══════════════════════════════════════════
   CONTACT FORM
═══════════════════════════════════════════ */
(function initForm() {
  const form = document.getElementById('cForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-gold');
    const orig = btn.innerHTML;
    btn.innerHTML = '<span>⏳</span> Sending...';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.disabled = false;
      form.reset();
      showToast('Message sent! We\'ll reply on Telegram soon.', '🚀');
    }, 1800);
  });
})();


/* ═══════════════════════════════════════════
   SMOOTH SCROLL
═══════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});


/* ═══════════════════════════════════════════
   ACTIVE NAV HIGHLIGHT
═══════════════════════════════════════════ */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a[href^="#"]');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
    links.forEach(l => {
      l.style.color = l.getAttribute('href') === `#${cur}` ? 'var(--gold)' : '';
    });
  });
})();


/* ═══════════════════════════════════════════
   FOOTER YEAR
═══════════════════════════════════════════ */
const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();


/* ═══════════════════════════════════════════
   GLOWING BORDER ANIMATION POLYFILL
   (For browsers that don't support @property)
═══════════════════════════════════════════ */
(function borderFallback() {
  const el = document.querySelector('.promo-panel');
  if (!el) return;
  let angle = 0;
  // Check if @property is supported
  const supported = CSS.supports && CSS.supports('(--angle: 0deg)');
  if (!supported) {
    // Fallback: static gold border
    el.style.borderColor = 'rgba(255,184,0,0.4)';
  }
})();