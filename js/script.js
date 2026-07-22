/**
 * PORTFOLIO SCRIPT — script.js
 * ============================
 * Handles: theme, language, typewriter, scroll effects,
 * nav active tracking, mobile menu, contact cards.
 * All content rendered from DATA (data.js).
 */

'use strict';

// ─── State ────────────────────────────────────────────────────────────────────
let currentLang  = localStorage.getItem('lang')  || 'id';
let currentTheme = localStorage.getItem('theme') || 'light';

// Shorthand
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  initPersonalData();
  renderExperience();
  renderProjects();
  renderSkills();
  applyLanguage(currentLang);
  initTypewriter();
  initScrollProgress();
  initNavbar();
  initScrollAnimations();
  initScrollTopBtn();
  $('#footerYear').textContent = new Date().getFullYear();
});

// ─── 1. Personal Data ─────────────────────────────────────────────────────────
function initPersonalData() {
  const p = DATA.personal;

  // Hero social links
  const ghHero = $('#githubLink');
  const liHero = $('#linkedinLink');
  if (ghHero) ghHero.href = p.socials.github;
  if (liHero) liHero.href = p.socials.linkedin;

  // CV button
  const cvBtn = $('#cvBtn');
  if (cvBtn) cvBtn.href = p.cvUrl;

  // Hero subtitle bilingual
  const sub = $('#heroSubtitle');
  if (sub) { sub.dataset.en = p.heroSubtitle.en; sub.dataset.id = p.heroSubtitle.id; }

  // About text bilingual
  const abt = $('#aboutText');
  if (abt) { abt.dataset.en = DATA.about.en; abt.dataset.id = DATA.about.id; }

  // ── Contact section ──────────────────────────────────────────────────────
  // Email button (mailto + display text)
  const emailBtn  = $('#contactEmailBtn');
  const emailText = $('#contactEmailText');
  if (emailBtn)  emailBtn.href = `mailto:${p.email}`;
  if (emailText) emailText.textContent = p.email;

  // WhatsApp card
  if (p.phone) {
    const waCard = $('#contactCardWa');
    const waNum  = $('#contactCardWaNum');
    if (waCard) {
      waCard.href = `https://wa.me/${p.phone.replace(/\D/g, '')}`;
      waCard.style.display = 'flex';
    }
    if (waNum) waNum.textContent = p.phone;
  }

  // LinkedIn card
  const liCard = $('#contactCardLinkedin');
  if (liCard) liCard.href = p.socials.linkedin;

  // GitHub card
  const ghCard = $('#contactCardGithub');
  if (ghCard) ghCard.href = p.socials.github;
}

// ─── 2. Render Experience ─────────────────────────────────────────────────────
function renderExperience() {
  const container = $('#experienceTimeline');
  if (!container) return;

  container.innerHTML = DATA.experience.map(exp => `
    <article class="timeline-item fade-in">
      <div class="timeline-dot" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
      </div>
      <div class="timeline-card">
        <div class="timeline-header">
          <h3 class="timeline-role"
            data-en="${exp.role.en}"
            data-id="${exp.role.id}">
            ${exp.role[currentLang]}
          </h3>
          <span class="timeline-period">${exp.period}</span>
        </div>
        <p class="timeline-company">${exp.company}</p>
        <p class="timeline-desc"
          data-en="${exp.desc.en}"
          data-id="${exp.desc.id}">
          ${exp.desc[currentLang]}
        </p>
        <div class="timeline-tags">
          ${exp.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    </article>`
  ).join('');
}

// ─── 3. Render Projects ───────────────────────────────────────────────────────
function renderProjects() {
  const container = $('#projectsGrid');
  if (!container) return;

  const githubIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;
  const extIcon   = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

  container.innerHTML = DATA.projects.map(proj => `
    <article class="project-card fade-in">
      <span class="project-category"
        data-en="${proj.category.en}"
        data-id="${proj.category.id}">
        ${proj.category[currentLang]}
      </span>
      <h3 class="project-name">${proj.name}</h3>
      <p class="project-desc"
        data-en="${proj.desc.en}"
        data-id="${proj.desc.id}">
        ${proj.desc[currentLang]}
      </p>
      <div class="project-tags">
        ${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <div class="project-links">
        <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link"
           data-en="${DATA.i18n.en.projects.sourceCode}"
           data-id="${DATA.i18n.id.projects.sourceCode}">
          ${githubIcon} <span>${DATA.i18n[currentLang].projects.sourceCode}</span>
        </a>
        ${proj.demoUrl
          ? `<a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-link project-link-demo"
                data-en="${DATA.i18n.en.projects.liveDemo}"
                data-id="${DATA.i18n.id.projects.liveDemo}">
              ${extIcon} <span>${DATA.i18n[currentLang].projects.liveDemo}</span>
             </a>`
          : `<span class="project-link"
                data-en="${DATA.i18n.en.projects.private}"
                data-id="${DATA.i18n.id.projects.private}">
              ${DATA.i18n[currentLang].projects.private}
             </span>`
        }
      </div>
    </article>`
  ).join('');
}

// ─── 4. Render Skills ─────────────────────────────────────────────────────────
function renderSkills() {
  const container = $('#skillsGrid');
  if (!container) return;

  container.innerHTML = DATA.skills.map(skill => `
    <div class="skill-icon-card fade-in">
      <i class="${skill.icon} colored" aria-hidden="true"></i>
      <span class="skill-icon-name">${skill.name}</span>
    </div>`
  ).join('');
}

// ─── 5. Language System ───────────────────────────────────────────────────────
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('lang', lang);

  // Update all [data-en] / [data-id] elements
  $$('[data-en], [data-id]').forEach(el => {
    const val = el.dataset[lang];
    if (val === undefined) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });

  // Language toggle button active state
  const enEl = $('#langEN');
  const idEl = $('#langID');
  if (enEl) enEl.classList.toggle('active', lang === 'en');
  if (idEl) idEl.classList.toggle('active', lang === 'id');
}

$('#langToggle')?.addEventListener('click', () => {
  applyLanguage(currentLang === 'en' ? 'id' : 'en');
});

// ─── 6. Theme System ──────────────────────────────────────────────────────────
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

$('#themeToggle')?.addEventListener('click', () => {
  applyTheme(currentTheme === 'light' ? 'dark' : 'light');
});

// ─── 7. Typewriter ────────────────────────────────────────────────────────────
function initTypewriter() {
  const el = $('#roleText');
  if (!el) return;
  const words = DATA.personal.roles;
  let wIdx = 0, cIdx = 0, deleting = false;

  function tick() {
    const word = words[wIdx];
    if (!deleting) {
      el.textContent = word.slice(0, ++cIdx);
      if (cIdx === word.length) { deleting = true; return setTimeout(tick, 1800); }
    } else {
      el.textContent = word.slice(0, --cIdx);
      if (cIdx === 0) { deleting = false; wIdx = (wIdx + 1) % words.length; }
    }
    setTimeout(tick, deleting ? 40 : 80);
  }
  tick();
}

// ─── 8. Scroll Progress ───────────────────────────────────────────────────────
function initScrollProgress() {
  const bar = $('#scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = h > 0 ? `${(window.scrollY / h) * 100}%` : '0%';
  }, { passive: true });
}

// ─── 9. Navbar ────────────────────────────────────────────────────────────────
function initNavbar() {
  const navbar   = $('#navbar');
  const menuBtn  = $('#menuToggle');
  const navLinks = $('#navLinks');
  const links    = $$('.nav-link');

  // Scrolled shadow + scroll-to-top button
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 10);
    $('#scrollTopBtn')?.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  // Mobile menu
  menuBtn?.addEventListener('click', () => {
    const open = navLinks?.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuBtn.classList.toggle('menu-open', !!open);
  });

  // Smooth scroll + close menu on link click
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      navLinks?.classList.remove('open');
      menuBtn?.classList.remove('menu-open');
      menuBtn?.setAttribute('aria-expanded', 'false');
    });
  });

  // Active section tracking
  const sections = $$('section[id]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        $$(`.nav-link[href="#${entry.target.id}"]`).forEach(l => l.classList.add('active'));
      }
    });
  }, { threshold: 0.4, rootMargin: '-70px 0px -40% 0px' });
  sections.forEach(s => observer.observe(s));
}

// ─── 10. Scroll Animations ────────────────────────────────────────────────────
function initScrollAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  $$('.fade-in').forEach(el => obs.observe(el));
}

// ─── 11. Scroll To Top Button ─────────────────────────────────────────────────
function initScrollTopBtn() {
  const btn = document.createElement('button');
  btn.id = 'scrollTopBtn';
  btn.className = 'scroll-top-btn';
  btn.setAttribute('aria-label', 'Scroll to top');
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`;
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(btn);
}

