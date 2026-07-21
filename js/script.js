/**
 * PORTFOLIO SCRIPT — script.js
 * ============================
 * Handles: theme, language, typewriter, scroll effects,
 * nav active tracking, mobile menu, cert tabs, contact form.
 * All content rendered from DATA (data.js).
 */

'use strict';

// ─── State ────────────────────────────────────────────────────────────────────
let currentLang  = localStorage.getItem('lang')  || 'id';
let currentTheme = localStorage.getItem('theme') || 'light';
let currentCertTab = 0;

// Shorthand
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const t = () => DATA.i18n[currentLang];

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  initPersonalData();
  renderEducation();
  renderExperience();
  renderProjects();
  renderSkills();
  renderCertificates();
  applyLanguage(currentLang);   // after rendering, apply lang text
  initTypewriter();
  initScrollProgress();
  initNavbar();
  initScrollAnimations();
  initContactForm();
  initCopyEmail();
  initScrollTopBtn();
  $('#footerYear').textContent = new Date().getFullYear();
});

// ─── 1. Personal Data ─────────────────────────────────────────────────────────
function initPersonalData() {
  const p = DATA.personal;

  // CV button
  const cvBtn = $('#cvBtn');
  if (cvBtn) cvBtn.href = p.cvUrl;

  // Social links
  const ghLinks = ['#githubLink','#contactGithub'];
  const liLinks  = ['#linkedinLink','#contactLinkedin'];
  ghLinks.forEach(sel => { const el = $(sel); if (el) el.href = p.socials.github; });
  liLinks.forEach(sel => { const el = $(sel); if (el) el.href = p.socials.linkedin; });

  // Email
  const emailLink = $('#contactEmailLink');
  if (emailLink) { emailLink.href = `mailto:${p.email}`; emailLink.textContent = p.email; }

  // Location
  const loc = $('#contactLocation');
  if (loc) loc.textContent = p.location;

  // WhatsApp
  if (p.phone) {
    const waItem = $('#waItem');
    const waLink = $('#waLink');
    if (waItem) waItem.style.display = 'flex';
    if (waLink) waLink.href = `https://wa.me/${p.phone.replace(/\D/g,'')}`;
  }

  // Hero subtitle (bilingual)
  const sub = $('#heroSubtitle');
  if (sub) {
    sub.dataset.en = p.heroSubtitle.en;
    sub.dataset.id = p.heroSubtitle.id;
  }

  // About text
  const abt = $('#aboutText');
  if (abt) {
    abt.dataset.en = DATA.about.en;
    abt.dataset.id = DATA.about.id;
  }
}

// ─── 2. Render Education ──────────────────────────────────────────────────────
function renderEducation() {
  const container = $('#educationTimeline');
  if (!container) return;

  container.innerHTML = DATA.education.map(edu => {
    const statusClass = edu.status === 'ongoing' ? 'status-ongoing' : 'status-graduated';
    const statusKey   = edu.status === 'ongoing' ? 'ongoing' : 'graduated';

    return `
      <article class="timeline-item fade-in">
        <div class="timeline-dot" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        </div>
        <div class="timeline-card">
          <div class="timeline-header">
            <h3 class="timeline-role">${edu.degree}</h3>
            <span class="status-badge ${statusClass}"
              data-en="${DATA.i18n.en.education[statusKey]}"
              data-id="${DATA.i18n.id.education[statusKey]}">
              ${DATA.i18n[currentLang].education[statusKey]}
            </span>
          </div>
          <p class="timeline-company">${edu.institution}${edu.faculty ? ` · ${edu.faculty}` : ''}</p>
          <div class="edu-meta">
            <span class="edu-meta-item">📅 ${edu.period}</span>
            ${edu.gpa ? `<span class="edu-meta-item edu-gpa">
              <span data-en="${DATA.i18n.en.education.gpa}" data-id="${DATA.i18n.id.education.gpa}">${DATA.i18n[currentLang].education.gpa}</span>:
              ${edu.gpa}
            </span>` : ''}
          </div>
          ${edu.description ? `<p class="timeline-desc">${edu.description}</p>` : ''}
        </div>
      </article>`;
  }).join('');
}

// ─── 3. Render Experience ────────────────────────────────────────────────────
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

// ─── 4. Render Projects ──────────────────────────────────────────────────────
function renderProjects() {
  const container = $('#projectsGrid');
  if (!container) return;

  container.innerHTML = DATA.projects.map(proj => {
    const githubIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;
    const extIcon   = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

    return `
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
      </article>`;
  }).join('');
}

// ─── 5. Render Skills ────────────────────────────────────────────────────────
function renderSkills() {
  const container = $('#skillsGroups');
  if (!container) return;

  container.innerHTML = DATA.skillGroups.map(group => `
    <div class="skill-group fade-in">
      <h3 class="skill-group-title"
        data-en="${group.title.en}"
        data-id="${group.title.id}">
        ${group.title[currentLang]}
      </h3>
      <div class="skill-tags">
        ${group.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
      </div>
    </div>`
  ).join('');
}

// ─── 6. Render Certificates ──────────────────────────────────────────────────
function renderCertificates() {
  const tabContainer  = $('#certTabs');
  const listContainer = $('#certList');
  if (!tabContainer || !listContainer) return;

  // Render tabs
  tabContainer.innerHTML = DATA.certificatePlatforms.map((plat, i) => `
    <button
      class="cert-tab ${i === currentCertTab ? 'active' : ''}"
      role="tab"
      aria-selected="${i === currentCertTab}"
      data-tab="${i}"
      id="cert-tab-${i}"
      aria-controls="cert-panel-${i}">
      ${plat.platform}
      <span class="cert-tab-count">${plat.certs.length}</span>
    </button>`
  ).join('');

  // Render certs for active tab
  renderCertList(currentCertTab);

  // Tab click
  tabContainer.addEventListener('click', e => {
    const btn = e.target.closest('.cert-tab');
    if (!btn) return;
    currentCertTab = parseInt(btn.dataset.tab);
    $$('.cert-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    renderCertList(currentCertTab);
  });
}

function renderCertList(tabIdx) {
  const listContainer = $('#certList');
  if (!listContainer) return;
  const plat = DATA.certificatePlatforms[tabIdx];
  const viewLabel = DATA.i18n[currentLang].certificates.viewCred;

  listContainer.innerHTML = plat.certs.map(cert => `
    <article class="cert-card">
      <h4 class="cert-title">${cert.title}</h4>
      <div class="cert-footer">
        <span class="cert-year">${cert.year}</span>
        <a href="${cert.url}" target="_blank" rel="noopener noreferrer"
           class="cert-link"
           data-en="${DATA.i18n.en.certificates.viewCred}"
           data-id="${DATA.i18n.id.certificates.viewCred}"
           ${cert.url === '#' ? 'aria-disabled="true"' : ''}>
          ${viewLabel}
        </a>
      </div>
    </article>`
  ).join('');
}

// ─── 7. Language System ──────────────────────────────────────────────────────
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('lang', lang);

  // Update all [data-en] / [data-id] elements
  $$('[data-en], [data-id]').forEach(el => {
    const val = el.dataset[lang];
    if (val === undefined) return;

    // Handle placeholder for inputs/textareas
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });

  // Handle placeholder attrs separately (data-ph-en / data-ph-id)
  $$('[data-ph-en], [data-ph-id]').forEach(el => {
    const ph = el.dataset[`ph${lang.charAt(0).toUpperCase() + lang.slice(1)}`];
    if (ph) el.placeholder = ph;
  });

  // Language toggle button active state
  const enEl = $('#langEN');
  const idEl = $('#langID');
  if (enEl) enEl.classList.toggle('active', lang === 'en');
  if (idEl) idEl.classList.toggle('active', lang === 'id');

  // Re-render cert list (to update view credential text)
  renderCertList(currentCertTab);
}

$('#langToggle')?.addEventListener('click', () => {
  applyLanguage(currentLang === 'en' ? 'id' : 'en');
});

// ─── 8. Theme System ─────────────────────────────────────────────────────────
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

$('#themeToggle')?.addEventListener('click', () => {
  applyTheme(currentTheme === 'light' ? 'dark' : 'light');
});

// ─── 9. Typewriter ───────────────────────────────────────────────────────────
function initTypewriter() {
  const el    = $('#roleText');
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

// ─── 10. Scroll Progress ─────────────────────────────────────────────────────
function initScrollProgress() {
  const bar = $('#scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = h > 0 ? `${(window.scrollY / h) * 100}%` : '0%';
  }, { passive: true });
}

// ─── 11. Navbar ──────────────────────────────────────────────────────────────
function initNavbar() {
  const navbar    = $('#navbar');
  const menuBtn   = $('#menuToggle');
  const navLinks  = $('#navLinks');
  const links     = $$('.nav-link');

  // Scrolled shadow
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 10);
    // Scroll-to-top button
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
        const active = $$(`.nav-link[href="#${entry.target.id}"]`);
        active.forEach(l => l.classList.add('active'));
      }
    });
  }, { threshold: 0.4, rootMargin: '-70px 0px -40% 0px' });
  sections.forEach(s => observer.observe(s));
}

// ─── 12. Scroll Animations (IntersectionObserver) ────────────────────────────
function initScrollAnimations() {
  const els = $$('.fade-in');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}

// ─── 13. Contact Form (Formspree) ────────────────────────────────────────────
function initContactForm() {
  const form    = $('#contactForm');
  const success = $('#formSuccess');
  const errMsg  = $('#formErrorMsg');
  const btn     = $('#formSubmitBtn');
  const btnText = $('#formBtnText');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const lang = DATA.i18n[currentLang].contact;

    // Show sending state
    btn.disabled = true;
    if (btnText) { btnText.dataset.en = DATA.i18n.en.contact.sending; btnText.dataset.id = DATA.i18n.id.contact.sending; btnText.textContent = lang.sending; }

    try {
      const res = await fetch(DATA.personal.formspreeEndpoint, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body:    JSON.stringify({
          name:    $('#formName')?.value,
          email:   $('#formEmail')?.value,
          message: $('#formMsg')?.value,
        }),
      });

      if (res.ok) {
        form.style.display   = 'none';
        success.hidden = false;
        // Apply language to success message
        applyLanguage(currentLang);
      } else {
        throw new Error('Server error');
      }
    } catch {
      if (errMsg) { errMsg.textContent = DATA.i18n[currentLang].contact.errorMsg; errMsg.classList.add('show'); }
      btn.disabled = false;
      if (btnText) { btnText.textContent = lang.send; }
      setTimeout(() => errMsg?.classList.remove('show'), 5000);
    }
  });
}

// ─── 14. Copy Email Button ───────────────────────────────────────────────────
function initCopyEmail() {
  const btn = $('#copyEmailBtn');
  if (!btn) return;
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(DATA.personal.email);
      const span = btn.querySelector('span');
      if (span) {
        const prev = { en: span.dataset.en, id: span.dataset.id, text: span.textContent };
        span.dataset.en = DATA.i18n.en.contact.copied;
        span.dataset.id = DATA.i18n.id.contact.copied;
        span.textContent = DATA.i18n[currentLang].contact.copied;
        setTimeout(() => {
          span.dataset.en = prev.en; span.dataset.id = prev.id; span.textContent = prev.text;
        }, 2000);
      }
    } catch { /* fallback: ignore */ }
  });
}

// ─── 15. Scroll To Top Button ────────────────────────────────────────────────
function initScrollTopBtn() {
  // Create button
  const btn = document.createElement('button');
  btn.id = 'scrollTopBtn';
  btn.className = 'scroll-top-btn';
  btn.setAttribute('aria-label', 'Scroll to top');
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`;
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(btn);
}

// ─── Avatar Fallback ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const img = $('#heroAvatarImg');
  if (!img) return;
  img.addEventListener('error', () => {
    img.style.display = 'none';
    const fallback = document.createElement('div');
    fallback.className = 'hero-avatar-fallback';
    // Get initials from name
    const initials = DATA.personal.name.split(' ').map(n => n[0]).slice(0,2).join('');
    fallback.textContent = initials;
    img.parentElement.appendChild(fallback);
  });
});
