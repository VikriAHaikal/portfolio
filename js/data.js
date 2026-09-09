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
    roles: ["Fullstack Developer", "AI Enthusiast"],
    heroSubtitle: {
      en: "Informatics Engineering graduate building end-to-end web applications and practical AI solutions. Bangkit Academy alumni (Google · GoTo · Traveloka) with experience across frontend, backend, cloud, and machine learning.",
      id: "Lulusan Teknik Informatika yang membangun aplikasi web end-to-end dan solusi AI yang relevan. Alumni Bangkit Academy (Google · GoTo · Traveloka) dengan pengalaman di frontend, backend, cloud, dan machine learning.",
    },
  },

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
        fullstackTitle: "Fullstack Web Projects",
        mlTitle: "ML & AI Projects",
        filterAll: "All projects",
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
        fullstackTitle: "Proyek Web Fullstack",
        mlTitle: "Proyek ML & AI",
        filterAll: "Semua proyek",
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

  about: {
    en: "I'm a fresh graduate in Informatics Engineering from Universitas Serang Raya who builds end-to-end web applications and practical AI solutions. As a Bangkit Academy alumnus (Machine Learning path, led by Google, GoTo & Traveloka), I've worked across frontend, backend, cloud deployment, and machine learning. I enjoy turning product requirements into reliable software with useful intelligence behind it.",
    id: "Saya adalah fresh graduate Teknik Informatika dari Universitas Serang Raya yang membangun aplikasi web end-to-end dan solusi AI yang relevan. Sebagai alumni Bangkit Academy jalur Machine Learning (Google, GoTo & Traveloka), saya memiliki pengalaman di frontend, backend, cloud deployment, dan machine learning. Saya senang menerjemahkan kebutuhan produk menjadi software yang andal dengan kecerdasan yang bermanfaat.",
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
      logo: {
        src: "public/media/brands/unsera.png",
        alt: "Logo Universitas Serang Raya",
      },
      icon: "graduation",
    },
  ],

  // ─── Certifications ───────────────────────────────────────────────────────
  // verifyUrl: isi dengan link sertifikat saat sudah siap
  // issuer: nama platform/lembaga penerbit
  certifications: [
    {
      name: "Belajar Membuat Aplikasi Web dengan React",
      issuer: "Dicoding Indonesia",
      year: "23 Juni 2026",
      dateSort: "2026-06-23",
      skills: ["React", "Frontend Development", "Web Application"],
      verifyUrl: "https://www.dicoding.com/certificates/MEPJODVNJZ3V",
      imageUrl: "public/certs/dicoding_membuat_aplikasi_web_react.jpg",
      brandColor: "#2D3E50",
      category: "fullstack",
    },
    {
      name: "Belajar Membuat Front-End Web untuk Pemula",
      issuer: "Dicoding Indonesia",
      year: "09 Juni 2026",
      dateSort: "2026-06-09",
      skills: ["HTML", "CSS", "JavaScript", "Frontend Development"],
      verifyUrl: "https://www.dicoding.com/certificates/72ZDJNY2JZYW",
      imageUrl: "public/certs/dicoding_front-end_pemula.jpg",
      brandColor: "#2D3E50",
      category: "fullstack",
    },
    {
      name: "Belajar Back-End Pemula dengan JavaScript",
      issuer: "Dicoding Indonesia",
      year: "21 Februari 2026",
      dateSort: "2026-02-21",
      skills: ["JavaScript", "Backend Development", "Web Server"],
      verifyUrl: "https://www.dicoding.com/certificates/2VX30OW43XY",
      imageUrl: "public/certs/dicoding_back-end_pemula.jpg",
      brandColor: "#2D3E50",
      category: "fullstack",
    },
    {
      name: "Introduction to HTML, CSS, & JavaScript",
      issuer: "Coursera",
      year: "16 Juni 2025",
      dateSort: "2025-06-16",
      skills: ["HTML", "CSS", "JavaScript", "Web Development"],
      verifyUrl: "https://coursera.org/share/04225b5ab52a3a4a1c666432fda6fce8",
      imageUrl: "public/certs/coursera_introduction.jpg",
      brandColor: "#0056D3",
      category: "fullstack",
    },
    {
      name: "Machine Learning Specialization",
      issuer: "DeepLearning.AI · Coursera",
      year: "17 April 2024",
      dateSort: "2024-04-17",
      skills: [
        "Supervised ML",
        "Advanced Learning Algorithms",
        "Unsupervised ML",
      ],
      verifyUrl: "https://coursera.org/share/4e81cffc2fa2eb92c71288783fb3e384",
      imageUrl: "public/certs/machine_learning.jpeg",
      brandColor: "#0056D3",
      category: "ml",
    },
    {
      name: "Generative AI — Tingkat Mahir",
      issuer: "Dicoding Indonesia",
      year: "20 Agustus 2026",
      dateSort: "2026-08-20",
      skills: ["Generative AI", "Prompt Engineering", "AI Applications"],
      verifyUrl:
        "https://drive.google.com/file/d/1DY3E5KfrGV9YbQytwsKPZ6kyEzGdK8-1/view?usp=sharing",
      imageUrl: "public/certs/gen_ai_mahir.jpeg",
      brandColor: "#2D3E50",
      category: "ml",
    },
    {
      name: "Generative AI — Tingkat Menengah",
      issuer: "Dicoding Indonesia",
      year: "30 Maret 2026",
      dateSort: "2026-03-30",
      skills: ["Generative AI", "Prompt Engineering", "AI Fundamentals"],
      verifyUrl:
        "https://drive.google.com/file/d/1Y_lNHK_ypCGdGQMEqAR1PcM-bS8AaPhC/view?usp=drive_link",
      imageUrl: "public/certs/gen_ai_menengah.jpeg",
      brandColor: "#2D3E50",
      category: "ml",
    },
    {
      name: "Associate Data Analyst",
      issuer: "BNSP",
      year: "12 Maret 2025",
      dateSort: "2025-03-12",
      skills: ["Data Analysis", "Data Interpretation", "Analytics"],
      verifyUrl:
        "https://drive.google.com/file/d/1i74NfvWYFRohZ4D1bD36xZVrqnRXSHH_/view?usp=sharing",
      imageUrl: "public/certs/associate_data_analyst_bnsp.jpg",
      brandColor: "#0F766E",
      category: "other",
    },
    {
      name: "Certificate of Completion — Bangkit Academy",
      issuer: "Bangkit Academy · Google · GoTo · Traveloka",
      year: "16 Februari – 30 Juni 2024",
      dateSort: "2024-06-30",
      skills: ["Machine Learning", "TensorFlow", "Cloud Computing"],
      verifyUrl:
        "https://drive.google.com/file/d/1fs8Re1Yf_2sqTHLVvGKlN-4JMnLlPCbv/view?usp=sharing",
      imageUrl: "public/certs/sertifikat_kelulusan_bangkit.jpg",
      brandColor: "#34A853",
      category: "ml",
    },
    {
      name: "Certificate of Participation — MSIB",
      issuer: "Kampus Merdeka · MSIB",
      year: "16 Februari – 30 Juni 2024",
      dateSort: "2024-06-30",
      skills: [
        "Professional Development",
        "Career Readiness",
        "Industry Learning",
      ],
      verifyUrl:
        "https://drive.google.com/file/d/1hNzjZM227GiwuP6HOW_ZaaPg4LQ9cyCd/view?usp=sharing",
      imageUrl: "public/certs/sertifikat_peserta_msib.jpg",
      brandColor: "#2563EB",
      category: "other",
    },
    {
      name: "Peserta Training of Trainer (ToT)",
      issuer: "Training of Trainer",
      year: "18 – 19 November 2023",
      dateSort: "2023-11-19",
      skills: ["Training Delivery", "Facilitation", "Presentation Skills"],
      verifyUrl:
        "https://drive.google.com/file/d/1Sa8DZ9vtmyf9NAInw2JjzE4jsKq0LKnh/view?usp=sharing",
      imageUrl: "public/certs/sertifikat_tot.jpg",
      brandColor: "#7C3AED",
      category: "other",
    },
    {
      name: "Certificate of Appreciation — Monitor",
      issuer: "Monitor Program",
      year: "18 – 19 Desember 2021",
      dateSort: "2021-12-19",
      skills: ["Event Support", "Coordination", "Communication"],
      verifyUrl:
        "https://drive.google.com/file/d/1pV8NvxIW0RO1o3lZAY2cChxpz7fXhkFO/view?usp=sharing",
      imageUrl: "public/certs/sertifikat_monitor.png",
      brandColor: "#EA580C",
      category: "other",
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
      role: {
        en: "Work Practice Program (KKP)",
        id: "Kuliah Kerja Praktek (KKP)",
      },
      company: "Koperasi Konsumen Karyawan PT Adis Dimension Footwear",
      period: "07 Agustus – 08 September 2023",
      logo: {
        src: "public/media/brands/kopkar-adis.png",
        alt: "Logo KOPKAR ADIS",
      },
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
      logo: {
        src: "public/media/brands/himatif.png",
        alt: "Logo HIMATIF",
      },
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
  // group: 'fullstack' → tampil sebagai proyek utama
  // group: 'ml'        → tampil sebagai proyek spesialisasi AI
  projects: [
    {
      name: "Legal Assistance AI",
      group: "ml",
      category: {
        en: "LLM Fine-Tuning & RAG",
        id: "Fine-Tuning LLM & RAG",
      },
      desc: {
        en: "An Indonesian legal consultation assistant focused on employment regulations. Fine-tuned Llama 3 with Unsloth and QLoRA, then combined the model with a LangChain and ChromaDB RAG pipeline over 3,200+ chunks from four Indonesian labor-law documents to reduce hallucinations.",
        id: "Asisten konsultasi hukum Indonesia yang berfokus pada regulasi ketenagakerjaan. Melakukan fine-tuning Llama 3 dengan Unsloth dan QLoRA, lalu menggabungkannya dengan pipeline RAG LangChain dan ChromaDB dari 3.200+ chunks empat dokumen hukum ketenagakerjaan untuk mengurangi halusinasi.",
      },
      tags: [
        "Llama 3",
        "Unsloth",
        "QLoRA",
        "LangChain",
        "ChromaDB",
        "Hugging Face",
      ],
      sourceUrl:
        "https://huggingface.co/vikriahaikal/llama3-legal-bot/tree/main",
      sourceLabel: { en: "Hugging Face", id: "Hugging Face" },
      demoUrl: null,
      media: {
        type: "gif",
        src: "public/media/projects/rag_ai.gif",
        alt: "Preview Legal Assistance AI dengan pipeline RAG",
      },
      status: "completed",
    },
    {
      name: "Alifin — Interactive Hijaiyah Learning App",
      group: "fullstack",
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
      media: {
        type: "gif",
        src: "public/media/projects/alifin.gif",
        alt: "Preview aplikasi pembelajaran Alifin",
      },
      status: "completed",
      date: "May 2026",
    },
    {
      name: "Drinkn't",
      group: "ml",
      category: {
        en: "Capstone Project",
        id: "Capstone Project",
      },
      desc: {
        en: "A mobile application that scans nutrition tables on packaged drinks to monitor sugar intake in real-time. Led a cross-functional team of 6, managing backend deployment on GCP and integrating a custom TensorFlow Lite model trained on a self-curated dataset.",
        id: "Aplikasi mobile untuk memindai tabel nutrisi minuman kemasan guna memantau asupan gula secara real-time. Memimpin tim 6 orang, mengelola backend di GCP, serta mengintegrasikan model TensorFlow Lite yang dilatih pada dataset yang dikurasi secara mandiri.",
      },
      tags: ["TensorFlow Lite", "Google Cloud", "Python", "Android Dev", "GCP"],
      githubUrl: "https://github.com/VikriAHaikal/Capstone",
      demoUrl: null,
      logo: {
        src: "public/media/brands/drinkt.png",
        alt: "Logo Drink't",
      },
      media: {
        type: "gif",
        src: "public/media/projects/drinknt.gif",
        alt: "Preview aplikasi Drink't Nutrition Scanner",
      },
      status: "completed",
    },
    {
      name: "Company Profile Kopkar Adis",
      group: "fullstack",
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
      logo: {
        src: "public/media/brands/kopkar-adis.png",
        alt: "Logo KOPKAR ADIS",
      },
      media: {
        type: "gif",
        src: "public/media/projects/compro-adis.gif",
        alt: "Preview website KOPKAR ADIS",
      },
      status: "ongoing",
    },
  ],

  // ─── Skills ───────────────────────────────────────────────────────────────
  // Diurutkan untuk positioning Fullstack terlebih dahulu, lalu AI dan deployment.
  skills: [
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
    { name: "Supabase", icon: "devicon-supabase-plain" },
    // Cloud & Deployment
    { name: "Google Cloud", icon: "devicon-googlecloud-plain" },
    { name: "Firebase", icon: "devicon-firebase-plain" },
    { name: "Docker", icon: "devicon-docker-plain" },
    { name: "Vercel", icon: "devicon-vercel-plain" },
    // ML & AI
    { name: "Python", icon: "devicon-python-plain" },
    { name: "TensorFlow", icon: "devicon-tensorflow-original" },
    { name: "Keras", icon: "devicon-keras-plain" },
    // Tools
    { name: "Git", icon: "devicon-git-plain" },
    { name: "GitHub", icon: "devicon-github-plain" },
    { name: "Postman", icon: "devicon-postman-plain" },
    { name: "Figma", icon: "devicon-figma-plain" },
    {
      name: "Draw.io",
      iconUrl: "https://cdn.simpleicons.org/diagramsdotnet/94a3b8",
    },
  ],
};
