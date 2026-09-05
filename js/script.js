/**
 * PORTFOLIO SCRIPT — script.js
 * ============================
 * Handles: theme, language, typewriter, scroll effects,
 * nav active tracking, mobile menu, contact cards.
 * All content rendered from DATA (data.js).
 */

"use strict";

// ─── State ────────────────────────────────────────────────────────────────────
let currentLang = localStorage.getItem("lang") || "id";
let currentTheme = localStorage.getItem("theme") || "light";

// Shorthand
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(currentTheme);
  initPersonalData();
  renderAboutStats();
  renderExperience();
  renderEducation();
  renderCertifications();
  initCertificationCards();
  renderProjects();
  initProjectMedia();
  renderSkills();
  applyLanguage(currentLang);
  initTypewriter();
  initScrollProgress();
  initNavbar();
  initScrollAnimations();
  initScrollTopBtn();
  $("#footerYear").textContent = new Date().getFullYear();
});

// ─── 1. Personal Data ─────────────────────────────────────────────────────────
function initPersonalData() {
  const p = DATA.personal;

  // Hero social links
  const ghHero = $("#githubLink");
  const liHero = $("#linkedinLink");
  if (ghHero) ghHero.href = p.socials.github;
  if (liHero) liHero.href = p.socials.linkedin;

  // CV button
  const cvBtn = $("#cvBtn");
  if (cvBtn) cvBtn.href = p.cvUrl;

  // Hero subtitle bilingual
  const sub = $("#heroSubtitle");
  if (sub) {
    sub.dataset.en = p.heroSubtitle.en;
    sub.dataset.id = p.heroSubtitle.id;
  }

  // About text bilingual
  const abt = $("#aboutText");
  if (abt) {
    abt.dataset.en = DATA.about.en;
    abt.dataset.id = DATA.about.id;
  }

  // ── Contact section ──────────────────────────────────────────────────────
  const emailBtn = $("#contactEmailBtn");
  const emailText = $("#contactEmailText");
  if (emailBtn) {
    emailBtn.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(p.email)}`;
    emailBtn.target = "_blank";
    emailBtn.rel = "noopener noreferrer";
  }
  if (emailText) emailText.textContent = p.email;

  // WhatsApp card
  if (p.phone) {
    const waCard = $("#contactCardWa");
    const waNum = $("#contactCardWaNum");
    if (waCard) {
      waCard.href = `https://wa.me/${p.phone.replace(/\D/g, "")}`;
      waCard.style.display = "flex";
    }
    if (waNum) waNum.textContent = p.phone;
  }

  // LinkedIn card
  const liCard = $("#contactCardLinkedin");
  if (liCard) liCard.href = p.socials.linkedin;

  // GitHub card
  const ghCard = $("#contactCardGithub");
  if (ghCard) ghCard.href = p.socials.github;
}

// ─── 2. Render Experience ─────────────────────────────────────────────────────
function renderExperience() {
  const container = $("#experienceTimeline");
  if (!container) return;

  const groups = [
    {
      type: "professional",
      label: { en: "Professional Experience", id: "Pengalaman Profesional" },
    },
    {
      type: "organization",
      label: { en: "Organizational Experience", id: "Pengalaman Organisasi" },
    },
  ];

  const renderCard = (exp) => {
    const descEn = exp.desc.en.replace(/^\s+/gm, "");
    const descId = exp.desc.id.replace(/^\s+/gm, "");
    const description = currentLang === "en" ? descEn : descId;

    return `
    <article class="timeline-item fade-in">
      <div class="timeline-dot" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
      </div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div class="timeline-identity">
            ${exp.logo ? `<img class="timeline-logo" src="${exp.logo.src}" alt="${exp.logo.alt}" loading="lazy" />` : ""}
            <div class="timeline-identity-copy">
              <h3 class="timeline-role"
                data-en="${exp.role.en}"
                data-id="${exp.role.id}">
                ${exp.role[currentLang]}
              </h3>
              <p class="timeline-company">${exp.company}</p>
            </div>
          </div>
          <span class="timeline-period">${exp.period}</span>
        </div>
        <p class="timeline-desc"
            data-en="${descEn}"
            data-id="${descId}">
          ${description}
        </p>
        <div class="timeline-tags">
          ${exp.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
    </article>`;
  };

  container.innerHTML = groups
    .map((group) => {
      const experiences = DATA.experience.filter(
        (exp) => (exp.type || "professional") === group.type,
      );
      if (!experiences.length) return "";
      return `
      <div class="experience-group">
        <h3 class="experience-group-title" data-en="${group.label.en}" data-id="${group.label.id}">${group.label[currentLang]}</h3>
        <div class="experience-group-list">${experiences.map(renderCard).join("")}</div>
      </div>`;
    })
    .join("");
}

// ─── 3. Render Education ──────────────────────────────────────────────────────
function renderEducation() {
  const container = $("#educationBlock");
  if (!container || !DATA.education) return;

  container.innerHTML = DATA.education
    .map(
      (edu) => `
    <div class="edu-card">
      ${edu.logo ? `<img class="edu-logo" src="${edu.logo.src}" alt="${edu.logo.alt}" loading="lazy" />` : ""}
      <div class="edu-card-body">
        <div class="edu-card-header">
          <div>
            <h3 class="edu-degree"
              data-en="${edu.degree.en}"
              data-id="${edu.degree.id}">
              ${edu.degree[currentLang]}
            </h3>
            <p class="edu-school">${edu.school}</p>
          </div>
          <div class="edu-meta">
            <span class="edu-period">${edu.period}</span>
            <span class="edu-gpa">GPA ${edu.gpa}</span>
          </div>
        </div>
      </div>
      ${
        edu.thesis && Object.keys(edu.thesis).length > 0
          ? `
      <p class="edu-thesis"
        data-en="${edu.thesis.en}"
        data-id="${edu.thesis.id}">
        ${edu.thesis[currentLang]}
      </p>`
          : ""
      }
    </div>`,
    )
    .join("");
}

// ─── 4. Render Certifications (Verified Credential Cards) ────────────────────
function renderCertifications() {
  const container = $("#certGrid");
  if (!container || !DATA.certifications) return;

  const verifyLabelEn = DATA.i18n.en.certVerify || "Verify credential";
  const verifyLabelId = DATA.i18n.id.certVerify || "Verifikasi kredensial";
  const verifyLabel = currentLang === "en" ? verifyLabelEn : verifyLabelId;

  container.innerHTML = [...DATA.certifications]
    .sort((a, b) => (b.dateSort || "").localeCompare(a.dateSort || ""))
    .map((cert) => {
      const hasLink =
        cert.verifyUrl && cert.verifyUrl !== "#" && cert.verifyUrl !== "";
      const hasImage = cert.imageUrl && cert.imageUrl !== "";
      const skillsHtml =
        cert.skills && cert.skills.length > 0
          ? `<div class="cert-skills-wrap">${cert.skills.map((s) => `<span class="cert-skill-pill">${s}</span>`).join("")}</div>`
          : "";

      return `
    <article class="cert-card fade-in"${hasLink ? ` data-cert-url="${cert.verifyUrl}" role="link" tabindex="0"` : ""}>
      ${
        hasImage
          ? `
      <a href="${hasLink ? cert.verifyUrl : cert.imageUrl}" target="_blank" rel="noopener noreferrer" class="cert-preview" aria-label="${currentLang === "en" ? `Verify ${cert.name} certificate` : `Verifikasi sertifikat ${cert.name}`}" >
        <img src="${cert.imageUrl}" alt="${currentLang === "en" ? `Preview of ${cert.name} certificate` : `Preview sertifikat ${cert.name}`}" loading="lazy" />
        <span class="cert-preview-label" data-en="Verify certificate" data-id="Verifikasi sertifikat">${currentLang === "en" ? "Verify certificate" : "Verifikasi sertifikat"}</span>
      </a>`
          : `
      <div class="cert-preview cert-preview--empty" aria-hidden="true">
        <span data-en="Certificate preview will be added" data-id="Preview sertifikat akan ditambahkan">${currentLang === "en" ? "Certificate preview will be added" : "Preview sertifikat akan ditambahkan"}</span>
      </div>`
      }

      <div class="cert-card-header">
        <div class="cert-issuer-badge" style="--brand-color: ${cert.brandColor || "var(--accent)"}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
            <circle cx="12" cy="8" r="6"/>
            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
          </svg>
        </div>
        <div class="cert-header-meta">
          <span class="cert-issuer">${cert.issuer}</span>
          <span class="cert-year">${cert.year}</span>
        </div>
      </div>

      <div class="cert-card-body">
        <h4 class="cert-name">${cert.name}</h4>
        ${skillsHtml}
      </div>

      <div class="cert-card-footer">
        ${
          hasLink
            ? `
          <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="cert-action-btn cert-action-btn--verify">
            <span data-en="${verifyLabelEn}" data-id="${verifyLabelId}">${verifyLabel}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="13" height="13"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        `
            : `
          <span class="cert-pending-tag" data-en="Verification link not added" data-id="Link verifikasi belum ditambahkan">
            ${currentLang === "en" ? "Verification link not added" : "Link verifikasi belum ditambahkan"}
          </span>
        `
        }
      </div>
    </article>`;
    })
    .join("");
}

function initCertificationCards() {
  const container = $("#certGrid");
  if (!container) return;

  const openVerification = (card) => {
    if (!card?.dataset.certUrl) return;
    window.open(card.dataset.certUrl, "_blank", "noopener,noreferrer");
  };

  container.addEventListener("click", (event) => {
    const card = event.target.closest(".cert-card");
    if (!card || event.target.closest("a, button")) return;
    openVerification(card);
  });

  container.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest(".cert-card");
    if (!card) return;
    event.preventDefault();
    openVerification(card);
  });
}

// ─── 4b. Render About Stats ───────────────────────────────────────────────────
function renderAboutStats() {
  const container = $("#aboutStats");
  if (!container) return;
  const stats = [
    {
      value: "3.84",
      unit: "/ 4.00",
      label: { en: "Informatics GPA", id: "IPK Informatika" },
    },
    {
      value: "Bangkit",
      unit: "2024",
      label: { en: "ML Path Graduate", id: "Lulusan ML Path" },
    },
    {
      value: "6 Members",
      unit: "Capstone",
      label: {
        en: "Led as Project Manager",
        id: "Dipimpin sbg Project Manager",
      },
    },
    {
      value: "ML & Cloud",
      unit: "End-to-End",
      label: { en: "Model to Deployment", id: "Model ke Deployment" },
    },
  ];
  container.innerHTML = stats
    .map(
      (s) => `
    <div class="about-stat-card">
      <div class="about-stat-top">
        <span class="about-stat-val">${s.value}</span>
        ${s.unit ? `<span class="about-stat-unit">${s.unit}</span>` : ""}
      </div>
      <span class="about-stat-label"
        data-en="${s.label.en}"
        data-id="${s.label.id}">
        ${s.label[currentLang]}
      </span>
    </div>`,
    )
    .join("");
}

// ─── 5. Render Projects (2-group: ML/AI + Other) ──────────────────────────────
function renderProjects() {
  const container = $("#projectsGrid");
  if (!container) return;

  const githubIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;
  const extIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

  const mlProjects = DATA.projects.filter((p) => p.group === "ml");
  const otherProjects = DATA.projects.filter((p) => p.group === "other");

  const buildCard = (proj, featured = false) => `
    <article class="project-card${featured ? " project-card--featured" : " project-card--other"} fade-in">
      ${buildProjectMedia(proj)}
      <div class="project-card-header">
        ${
          proj.status
            ? `
          <span class="project-status project-status--${proj.status}">
            ${proj.status === "ongoing" ? '<span class="status-dot" aria-hidden="true"></span>' : ""}
            <span
              data-en="${DATA.i18n.en.projects.status[proj.status]}"
              data-id="${DATA.i18n.id.projects.status[proj.status]}">
              ${DATA.i18n[currentLang].projects.status[proj.status]}
            </span>
          </span>
        `
            : ""
        }
      </div>
      <div class="project-identity">
        ${proj.logo ? `<img class="project-logo" src="${proj.logo.src}" alt="${proj.logo.alt}" loading="lazy" />` : ""}
        <div class="project-identity-copy">
          <span class="project-category"
            data-en="${proj.category.en}"
            data-id="${proj.category.id}">
            ${proj.category[currentLang]}
          </span>
          <h3 class="project-name">${proj.name}</h3>
        </div>
      </div>
      <p class="project-desc"
        data-en="${proj.desc.en}"
        data-id="${proj.desc.id}">
        ${proj.desc[currentLang]}
      </p>
      <div class="project-tags">
        ${proj.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
      <div class="project-links">
        <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link"
           data-en="${DATA.i18n.en.projects.sourceCode}"
           data-id="${DATA.i18n.id.projects.sourceCode}">
          ${githubIcon} <span>${DATA.i18n[currentLang].projects.sourceCode}</span>
        </a>
        ${
          proj.demoUrl
            ? `<a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-link project-link-demo"
                data-en="${proj.demoLabel?.en || DATA.i18n.en.projects.liveDemo}"
                data-id="${proj.demoLabel?.id || DATA.i18n.id.projects.liveDemo}">
                ${extIcon} <span>${proj.demoLabel?.[currentLang] || DATA.i18n[currentLang].projects.liveDemo}</span>
             </a>`
            : ""
        }
      </div>
    </article>`;

  const mlTitle = DATA.i18n[currentLang].projects.mlTitle;
  const otherTitle = DATA.i18n[currentLang].projects.otherTitle;

  container.innerHTML = `
    ${
      mlProjects.length
        ? `
      <div class="projects-group">
        <h3 class="projects-group-title"
          data-en="${DATA.i18n.en.projects.mlTitle}"
          data-id="${DATA.i18n.id.projects.mlTitle}">
          <span class="projects-group-badge projects-group-badge--ml">ML &amp; AI</span>
          ${mlTitle}
        </h3>
        <div class="projects-group-grid projects-group-grid--featured">
          ${mlProjects.map((p) => buildCard(p, true)).join("")}
        </div>
      </div>`
        : ""
    }

    ${
      otherProjects.length
        ? `
      <div class="projects-group projects-group--secondary">
        <h3 class="projects-group-title projects-group-title--secondary"
          data-en="${DATA.i18n.en.projects.otherTitle}"
          data-id="${DATA.i18n.id.projects.otherTitle}">
          ${otherTitle}
        </h3>
        <div class="projects-group-grid projects-group-grid--other">
          ${otherProjects.map((p) => buildCard(p, false)).join("")}
        </div>
      </div>`
        : ""
    }
  `;
}

function buildProjectMedia(proj) {
  const media = proj.media;
  if (!media || !media.src) return "";

  const label =
    currentLang === "en" ? "Open project preview" : "Buka preview proyek";
  const typeLabel =
    media.type === "video"
      ? "Video"
      : media.type === "gif"
        ? "GIF"
        : "Screenshot";
  const poster = media.poster ? ` poster="${media.poster}"` : "";
  const mediaContent =
    media.type === "video"
      ? `<video src="${media.src}"${poster} muted loop playsinline preload="metadata" aria-label="${media.alt || proj.name}"></video>`
      : `<img src="${media.src}" alt="${media.alt || proj.name}" loading="lazy" />`;

  return `
    <button class="project-media" type="button" data-project-media="${encodeURIComponent(JSON.stringify(media))}"
      data-project-title="${proj.name.replace(/"/g, "&quot;")}" aria-label="${label}: ${proj.name}">
      ${mediaContent}
      <span class="project-media-overlay">
        <span class="project-media-type">${typeLabel}</span>
        <span class="project-media-action"><span aria-hidden="true">&gt;</span><span>${currentLang === "en" ? "View preview" : "Lihat preview"}</span></span>
      </span>
    </button>`;
}

function initProjectMedia() {
  const dialog = $("#mediaDialog");
  const content = $("#mediaDialogContent");
  const title = $("#mediaDialogTitle");
  const closeButton = $("#mediaDialogClose");
  if (!dialog || !content || !title) return;

  const closeDialog = () => {
    dialog.close();
    content.replaceChildren();
  };

  $("#projectsGrid")?.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-project-media]");
    if (!trigger) return;

    const media = JSON.parse(decodeURIComponent(trigger.dataset.projectMedia));
    title.textContent = trigger.dataset.projectTitle;
    content.innerHTML =
      media.type === "video"
        ? `<video src="${media.src}"${media.poster ? ` poster="${media.poster}"` : ""} controls autoplay playsinline></video>`
        : `<img src="${media.src}" alt="${media.alt || trigger.dataset.projectTitle}" />`;
    dialog.showModal();
  });

  closeButton?.addEventListener("click", closeDialog);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog();
  });
  dialog.addEventListener("close", () => content.replaceChildren());
}

// ─── 6. Render Skills (with category labels) ──────────────────────────────────
function renderSkills() {
  const container = $("#skillsGrid");
  if (!container) return;

  // Grouped skill categories
  const groups = [
    {
      label: { en: "Machine Learning & AI", id: "Machine Learning & AI" },
      start: 0,
      end: 3,
    },
    {
      label: {
        en: "Cloud, MLOps & Deployment",
        id: "Cloud, MLOps & Deployment",
      },
      start: 3,
      end: 8,
    },
    {
      label: {
        en: "Web & Backend Development",
        id: "Pengembangan Web & Backend",
      },
      start: 8,
      end: 15,
    },
    { label: { en: "Databases", id: "Basis Data" }, start: 15, end: 17 },
    {
      label: { en: "Developer Tools", id: "Tools & Workflow" },
      start: 17,
      end: DATA.skills.length,
    },
  ];

  container.innerHTML = groups
    .map((g) => {
      const groupSkills = DATA.skills.slice(g.start, g.end);
      return `
    <div class="skills-group">
      <h4 class="skills-group-label"
        data-en="${g.label.en}"
        data-id="${g.label.id}">
        ${g.label[currentLang]}
      </h4>
      <div class="skills-group-grid">
        ${groupSkills
          .map(
            (skill) => `
          <div class="skill-icon-card fade-in">
            <i class="${skill.icon} colored" aria-hidden="true"></i>
            <span class="skill-icon-name">${skill.name}</span>
          </div>`,
          )
          .join("")}
      </div>
    </div>`;
    })
    .join("");
}

// ─── 7. Language System ───────────────────────────────────────────────────────
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.setAttribute("lang", lang);

  // Update all [data-en] / [data-id] elements
  $$("[data-en], [data-id]").forEach((el) => {
    const val = el.dataset[lang];
    if (val === undefined) return;
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });

  // Language toggle button active state
  const enEl = $("#langEN");
  const idEl = $("#langID");
  if (enEl) enEl.classList.toggle("active", lang === "en");
  if (idEl) idEl.classList.toggle("active", lang === "id");

  const languageToggle = $("#langToggle");
  if (languageToggle) {
    languageToggle.setAttribute(
      "aria-pressed",
      lang === "en" ? "true" : "false",
    );
    languageToggle.setAttribute(
      "aria-label",
      lang === "en" ? "Switch to Indonesian" : "Ganti bahasa ke English",
    );
  }
}

$("#langToggle")?.addEventListener("click", () => {
  applyLanguage(currentLang === "en" ? "id" : "en");
});

// ─── 8. Theme System ──────────────────────────────────────────────────────────
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  const themeToggle = $("#themeToggle");
  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-pressed",
      theme === "dark" ? "true" : "false",
    );
    themeToggle.setAttribute(
      "aria-label",
      theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap",
    );
  }
}

$("#themeToggle")?.addEventListener("click", () => {
  applyTheme(currentTheme === "light" ? "dark" : "light");
});

// ─── 9. Typewriter ────────────────────────────────────────────────────────────
function initTypewriter() {
  const el = $("#roleText");
  if (!el) return;
  const words = DATA.personal.roles;
  let wIdx = 0,
    cIdx = 0,
    deleting = false;

  function tick() {
    const word = words[wIdx];
    if (!deleting) {
      el.textContent = word.slice(0, ++cIdx);
      if (cIdx === word.length) {
        deleting = true;
        return setTimeout(tick, 1800);
      }
    } else {
      el.textContent = word.slice(0, --cIdx);
      if (cIdx === 0) {
        deleting = false;
        wIdx = (wIdx + 1) % words.length;
      }
    }
    setTimeout(tick, deleting ? 40 : 80);
  }
  tick();
}

// ─── 10. Scroll Progress ──────────────────────────────────────────────────────
function initScrollProgress() {
  const bar = $("#scrollProgress");
  if (!bar) return;
  window.addEventListener(
    "scroll",
    () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = h > 0 ? `${(window.scrollY / h) * 100}%` : "0%";
    },
    { passive: true },
  );
}

// ─── 11. Navbar ───────────────────────────────────────────────────────────────
function initNavbar() {
  const navbar = $("#navbar");
  const menuBtn = $("#menuToggle");
  const navLinks = $("#navLinks");
  const links = $$(".nav-link");
  const sections = $$("section[id]");
  let manualActiveUntil = 0;

  const setActiveSection = (id) => {
    links.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("active", isActive);
      link.setAttribute("aria-current", isActive ? "location" : "false");
    });
  };

  // Scrolled shadow + scroll-to-top button
  window.addEventListener(
    "scroll",
    () => {
      navbar?.classList.toggle("scrolled", window.scrollY > 10);
      $("#scrollTopBtn")?.classList.toggle("visible", window.scrollY > 400);
    },
    { passive: true },
  );

  // Mobile menu
  menuBtn?.addEventListener("click", () => {
    const open = navLinks?.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.classList.toggle("menu-open", !!open);
  });

  // Smooth scroll + close menu on link click
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        manualActiveUntil = Date.now() + 900;
        setActiveSection(target.id);
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${target.id}`);
      }
      navLinks?.classList.remove("open");
      menuBtn?.classList.remove("menu-open");
      menuBtn?.setAttribute("aria-expanded", "false");
    });
  });

  // Active section tracking
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible && Date.now() >= manualActiveUntil) {
        setActiveSection(visible.target.id);
      }
    },
    { threshold: [0.15, 0.35, 0.6], rootMargin: "-80px 0px -45% 0px" },
  );
  sections.forEach((s) => observer.observe(s));
  setActiveSection(window.location.hash.slice(1) || "home");
}

// ─── 12. Scroll Animations ────────────────────────────────────────────────────
function initScrollAnimations() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );
  $$(".fade-in").forEach((el) => obs.observe(el));
}

// ─── 13. Scroll To Top Button ─────────────────────────────────────────────────
function initScrollTopBtn() {
  const btn = document.createElement("button");
  btn.id = "scrollTopBtn";
  btn.className = "scroll-top-btn";
  btn.setAttribute("aria-label", "Scroll to top");
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`;
  btn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
  document.body.appendChild(btn);
}
