/**
 * PORTFOLIO DATA — Edit file ini untuk update semua konten portfolio.
 * ====================================================================
 * Semua data (nama, proyek, sertifikat, dll) dan teks UI (EN/ID) ada di sini.
 * Setelah edit, refresh browser — tidak perlu proses build apapun.
 */

const DATA = {
  // ─── Personal Info ────────────────────────────────────────────────────────
  personal: {
    name: "Vikri A. Haikal",
    nickname: "Vikri",
    email: "vikrianalda@gmail.com",
    phone: "+6282113745361", // Set null untuk sembunyikan tombol WA
    location: "Sukabumi, Jawa Barat, Indonesia",
    cvUrl: "public/cv/CV_Vikri_A_Haikal.pdf",
    socials: {
      github: "https://github.com/VikriAHaikal",
      linkedin: "https://www.linkedin.com/in/vikriahaikal",
    },
    roles: ["Machine Learning & AI Enthusiast", "Software Engineer"],
    heroSubtitle: {
      en: "Informatics Engineering graduate specializing in Machine Learning & AI. Bangkit Academy alumni (Google · GoTo · Traveloka). Passionate about building intelligent systems and deployable AI solutions.",
      id: "Lulusan Teknik Informatika dengan spesialisasi di Machine Learning & AI. Alumni Bangkit Academy (Google · GoTo · Traveloka). Bersemangat membangun sistem cerdas dan solusi AI yang dapat di-deploy.",
    },
  },

  // ─── i18n — Semua teks UI dalam dua bahasa ────────────────────────────────
  i18n: {
    en: {
      hero: {
        greeting: "Hi, I'm",
        downloadCV: "View CV",
        contactMe: "Contact Me",
      },
      about: { title: "About Me" },
      experience: { title: "Experience" },
      education: { title: "Education" },
      certifications: { title: "Certifications" },
      projects: {
        title: "Projects",
        mlTitle: "ML & AI Projects",
        otherTitle: "Other Projects",
        sourceCode: "GitHub",
        liveDemo: "Live Demo",
        private: "🔒 Private",
        status: { ongoing: "Ongoing", completed: "Completed" },
      },
      skills: { title: "Skills & Tech Stack" },
      contact: {
        title: "Let's Connect",
        subtitle:
          "Open for full-time roles, freelance projects, or just a good tech conversation.",
      },
      footer: { rights: "All rights reserved." },
      certVerify: "Verify",
    },
    id: {
      hero: {
        greeting: "Hai, Saya",
        downloadCV: "Lihat CV",
        contactMe: "Hubungi Saya",
      },
      about: { title: "Tentang Saya" },
      experience: { title: "Pengalaman" },
      education: { title: "Pendidikan" },
      certifications: { title: "Sertifikasi" },
      projects: {
        title: "Proyek",
        mlTitle: "Proyek ML & AI",
        otherTitle: "Proyek Lainnya",
        sourceCode: "GitHub",
        liveDemo: "Live Demo",
        private: "🔒 Privat",
        status: { ongoing: "Berlangsung", completed: "Selesai" },
      },
      skills: { title: "Keahlian & Tech Stack" },
      contact: {
        title: "Mari Terhubung",
        subtitle:
          "Terbuka untuk pekerjaan penuh waktu, proyek freelance, atau sekadar ngobrol seputar teknologi.",
      },
      footer: { rights: "Hak cipta dilindungi." },
      certVerify: "Verifikasi",
    },
  },

  // ─── About ────────────────────────────────────────────────────────────────
  about: {
    en: "I'm a fresh graduate in Informatics Engineering from Universitas Serang Raya, specializing in Machine Learning and Artificial Intelligence. As a Bangkit Academy alumnus (Machine Learning path, led by Google, GoTo & Traveloka), I've built end-to-end AI solutions — from model training to cloud deployment. Beyond the technical side, I bring experience in cross-functional tech project management, leading teams from planning through to production. I thrive on turning complex data into meaningful, real-world impact.",
    id: "Saya adalah fresh graduate Teknik Informatika dari Universitas Serang Raya dengan spesialisasi di Machine Learning dan Artificial Intelligence. Sebagai alumni Bangkit Academy jalur Machine Learning (Google, GoTo & Traveloka), saya telah membangun solusi AI end-to-end — dari pelatihan model hingga deployment di cloud. Di luar aspek teknis, saya memiliki pengalaman dalam manajemen proyek teknologi lintas fungsi, memimpin tim dari perencanaan hingga produksi. Saya antusias mengubah data kompleks menjadi dampak nyata.",
  },

  // ─── Education ────────────────────────────────────────────────────────────
  education: [
    {
      degree: {
        en: "Bachelor of Informatics Engineering",
        id: "S1 Teknik Informatika",
      },
      school: "Universitas Serang Raya",
      period: "2021 – 2025",
      gpa: "3.84 / 4.00",
      thesis: {
        en: "Thesis: Implementation of the Dijkstra Algorithm in a Geographic Information System for Mapping the Nearest Distance to Temporary Waste Disposal Sites",
        id: "Skripsi: Implementasi Algoritma Dijkstra dalam Sistem Informasi Geografis untuk Pemetaan Jarak Terdekat ke Tempat Pembuangan Sampah Sementara",
      },
      icon: "graduation",
    },
  ],

  // ─── Certifications ───────────────────────────────────────────────────────
  // verifyUrl: isi dengan link sertifikat saat sudah siap
  // issuer: nama platform/lembaga penerbit
  certifications: [
    {
      name: "Machine Learning Specialization",
      issuer: "DeepLearning.AI · Coursera",
      year: "2024",
      skills: [
        "Supervised ML",
        "Advanced Learning Algorithms",
        "Unsupervised ML",
      ],
      verifyUrl: "", // Isi dengan link verifikasi resmi Coursera
      imageUrl: null, // Isi dengan scan/screenshot sertifikat asli
      brandColor: "#0056D3", // Coursera blue
    },
    {
      name: "Bangkit Academy — Machine Learning Path",
      issuer: "Google · GoTo · Traveloka · Bangkit",
      year: "2024",
      skills: ["TensorFlow", "Cloud ML Deployment", "Data Engineering"],
      verifyUrl: "", // Isi dengan link verifikasi resmi Bangkit
      imageUrl: null,
      brandColor: "#34A853", // Google green
    },
    {
      name: "Machine Learning Developer",
      issuer: "Dicoding Indonesia",
      year: "2024",
      skills: ["Scikit-Learn", "Feature Engineering", "Model Evaluation"],
      verifyUrl: "", // Isi dengan link verifikasi resmi Dicoding
      imageUrl: null,
      brandColor: "#2D3E50", // Dicoding dark
    },
  ],

  // ─── Experience ───────────────────────────────────────────────────────────
  experience: [
    {
      type: "professional",
      role: {
        en: "Project Manager — Drink't App",
        id: "Project Manager — Aplikasi Drink't",
      },
      company: "Bangkit Academy, Kampus Merdeka · Google · GoTo · Traveloka",
      period: "2024",
      tags: [
        "Project Management",
        "Machine Learning",
        "TensorFlow Lite",
        "Google Cloud",
      ],
      desc: {
        en: "Led a cross-functional capstone team of 6 building a mobile app to scan packaged drink nutrition labels in real-time using TensorFlow Lite. Coordinated ML, Cloud, and Mobile Dev divisions; managed sprint planning, roadmap, and GCP backend deployment end-to-end.",
        id: "Memimpin tim lintas divisi beranggotakan 6 orang dalam membangun aplikasi mobile yang memindai label nutrisi minuman kemasan secara real-time menggunakan TensorFlow Lite. Mengkoordinasikan divisi ML, Cloud, dan Mobile Dev; mengelola sprint planning, roadmap, dan deployment backend di GCP secara end-to-end.",
      },
    },
    {
      type: "professional",
      role: { en: "Web Developer Intern", id: "Magang Web Developer" },
      company: "Koperasi Konsumen PT Adis Dimension Footwear",
      period: "2023",
      tags: [
        "Web Development",
        "Frontend",
        "Backend Integration",
        "Company Profile",
      ],
      desc: {
        en: "Built a dynamic company profile website from UI design through to production deployment using a modern web stack. Delivered a full end-to-end web project for an international footwear manufacturing company, gaining hands-on experience in client-facing product development.",
        id: "Membangun website company profile dinamis dari desain UI hingga deployment produksi menggunakan stack web modern. Menyelesaikan proyek web end-to-end untuk perusahaan manufaktur alas kaki internasional, mendapatkan pengalaman nyata dalam pengembangan produk berbasis klien.",
      },
    },
    {
      type: "organization",
      role: {
        en: "General Secretary",
        id: "Sekretaris Umum",
      },
      company: "Himpunan Mahasiswa Teknik Informatika (HIMATIF)",
      period: "2023 – 2024",
      tags: [
        "Administration",
        "Documentation",
        "Stakeholder Management",
        "Program Coordination",
      ],
      desc: {
        en: `• Managed administration and documentation for a 51-member organization, including letters, proposals, accountability reports, meeting minutes, and records.
• Reorganized the organization's unstructured document storage into Google Drive for easier management and access.
• Coordinated meetings from scheduling and agendas to minutes, decision follow-up, and action items.
• Coordinated with the executive board, division leads, and stakeholders to plan timelines, monitor progress, and deliver 5+ programs.
      • Worked with department heads, lecturers, campus offices, student organizations, schools, speakers, alumni, and external partners.`,
        id: `• Mengelola administrasi dan dokumentasi organisasi beranggotakan 51 orang, termasuk surat, proposal, LPJ, notulensi rapat, dan pengarsipan dokumen.
• Menata penyimpanan dokumen yang sebelumnya belum terstruktur ke dalam Google Drive agar lebih terorganisir dan mudah dikelola.
• Mengelola rapat mulai dari penjadwalan, agenda, koordinasi peserta, notulensi, hingga follow-up keputusan dan action items.
• Berkoordinasi dengan BPH, ketua, dan koordinator divisi dalam penyusunan timeline, monitoring progres, serta pelaksanaan dan evaluasi 5+ program kerja.
      • Berkomunikasi dengan Kaprodi, dosen, pihak kampus, organisasi mahasiswa, sekolah, pembicara seminar, alumni, dan pihak eksternal.`,
      },
    },
  ],

  // ─── Projects ─────────────────────────────────────────────────────────────
  // group: 'ml'    → tampil di bagian "ML & AI Projects" (featured, lebih besar)
  // group: 'other' → tampil di bagian "Other Projects" (compact, secondary)
  projects: [
    {
      name: "Alifin — Interactive Hijaiyah Learning App",
      group: "ml",
      category: {
        en: "Full-Stack Education & AI",
        id: "Edukasi Full-Stack & AI",
      },
      desc: {
        en: "An interactive web app for learning Iqra and Hijaiyah letters through gamification, audio-visual learning, and an AI virtual assistant. Built with a client-server architecture to keep AI API keys secure on the backend.",
        id: "Aplikasi web interaktif untuk belajar Iqra dan huruf Hijaiyah melalui gamifikasi, pembelajaran audio-visual, serta asisten virtual berbasis AI. Dibangun dengan arsitektur client-server agar API key AI tetap aman di sisi backend.",
      },
      tags: [
        "React",
        "TypeScript",
        "Vite",
        "Full-Stack",
        "Canvas Confetti",
        "Lucide React",
      ],
      githubUrl: "https://github.com/VikriAHaikal/Alifin",
      demoUrl: "https://ai.studio/apps/d639b909-a119-4340-9688-71b4454c5a5a",
      demoLabel: { en: "Google AI Studio", id: "Google AI Studio" },
      status: "completed",
      date: "May 2026",
    },
    {
      name: "Drink't App — Nutrition Scanner",
      group: "ml",
      category: {
        en: "Machine Learning & Mobile",
        id: "Machine Learning & Mobile",
      },
      desc: {
        en: "A mobile application that scans nutrition tables on packaged drinks to monitor sugar intake in real-time. Led a cross-functional team of 6, managing backend deployment on GCP and integrating a custom TensorFlow Lite model trained on a self-curated dataset.",
        id: "Aplikasi mobile untuk memindai tabel nutrisi minuman kemasan guna memantau asupan gula secara real-time. Memimpin tim 6 orang, mengelola backend di GCP, serta mengintegrasikan model TensorFlow Lite yang dilatih pada dataset yang dikurasi secara mandiri.",
      },
      tags: ["TensorFlow Lite", "Google Cloud", "Python", "Android Dev", "GCP"],
      githubUrl: "https://github.com/VikriAHaikal/Capstone",
      demoUrl: null,
      status: "completed",
    },
    {
      name: "KOPKAR ADIS — Company Profile Web",
      group: "other",
      category: {
        en: "Fullstack Web Development",
        id: "Pengembangan Web Fullstack",
      },
      desc: {
        en: "Production-ready fullstack web app for Koperasi Konsumen PT Adis Dimension Footwear. Features Admin CMS panel with rich text editor, dual-mode database (Supabase ↔ LocalStorage fallback), dynamic SEO per page, and PWA-ready service worker.",
        id: "Aplikasi web fullstack siap produksi untuk Koperasi Konsumen PT Adis Dimension Footwear. Dilengkapi panel Admin CMS dengan rich text editor, dual-mode database (Supabase ↔ LocalStorage fallback), SEO dinamis per halaman, dan service worker PWA-ready.",
      },
      tags: [
        "TypeScript",
        "React 19",
        "Vite",
        "Supabase",
        "React Router",
        "Vercel",
      ],
      githubUrl: "https://github.com/VikriAHaikal/koperasi-adis-profile",
      demoUrl: null,
      status: "ongoing",
    },
    {
      name: "Minimalist Developer Portfolio",
      group: "other",
      category: { en: "Frontend Web", id: "Frontend Web" },
      desc: {
        en: "A clean, fast personal developer portfolio built with semantic vanilla HTML5, custom CSS design tokens, and vanilla JS. Features dark/light mode and bilingual EN/ID support.",
        id: "Website portfolio personal yang bersih dan cepat, dibangun menggunakan HTML5 semantik, custom CSS design tokens, dan Vanilla JS. Dilengkapi mode gelap/terang dan dukungan dua bahasa EN/ID.",
      },
      tags: ["HTML5", "CSS3", "JavaScript", "i18n"],
      githubUrl: "https://github.com/VikriAHaikal/portfolio",
      demoUrl: null,
      status: "ongoing",
    },
  ],

  // ─── Skills ───────────────────────────────────────────────────────────────
  // Diurutkan: ML/AI dulu → Cloud → Web/Backend → DB → Tools
  skills: [
    // ML & AI
    { name: "Python", icon: "devicon-python-plain" },
    { name: "TensorFlow", icon: "devicon-tensorflow-original" },
    { name: "Keras", icon: "devicon-keras-plain" },
    // Cloud & Deployment
    { name: "Google Cloud", icon: "devicon-googlecloud-plain" },
    { name: "Firebase", icon: "devicon-firebase-plain" },
    { name: "Supabase", icon: "devicon-supabase-plain" },
    { name: "Docker", icon: "devicon-docker-plain" },
    { name: "Vercel", icon: "devicon-vercel-plain" },
    // Web & Frontend
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "React", icon: "devicon-react-original" },
    { name: "Next.js", icon: "devicon-nextjs-plain" },
    // Backend
    { name: "Node.js", icon: "devicon-nodejs-plain" },
    { name: "Express", icon: "devicon-express-original" },
    { name: "PHP", icon: "devicon-php-plain" },
    // Database
    { name: "MySQL", icon: "devicon-mysql-plain" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    // Tools
    { name: "Git", icon: "devicon-git-plain" },
    { name: "GitHub", icon: "devicon-github-plain" },
    { name: "Postman", icon: "devicon-postman-plain" },
    { name: "Figma", icon: "devicon-figma-plain" },
  ],
};
