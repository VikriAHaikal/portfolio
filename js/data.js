/**
 * PORTFOLIO DATA — Edit file ini untuk update semua konten portfolio.
 * ====================================================================
 * Semua data (nama, proyek, sertifikat, dll) dan teks UI (EN/ID) ada di sini.
 * Setelah edit, refresh browser — tidak perlu proses build apapun.
 */

const DATA = {

  // ─── Personal Info ────────────────────────────────────────────────────────
  personal: {
    name:     'Vikri A. Haikal',
    nickname: 'Vikri',
    email:    'vikrianalda@gmail.com',
    phone:    '+6282113745361',           // Set null untuk sembunyikan tombol WA
    location: 'Sukabumi, Jawa Barat, Indonesia',
    cvUrl:    'public/cv/Vikri_Resume.pdf', // Taruh file PDF di public/cv/
    formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID', // Ganti dengan endpoint kamu
    socials: {
      github:   'https://github.com/VikriAHaikal',
      linkedin: 'https://www.linkedin.com/in/vikriahaikal',
    },
    roles: [ // Teks yang berputar di hero
      'Junior Fullstack Developer',
      'Associate Data Analyst',
      'Machine Learning Enthusiast',
      'Project Manager',
    ],
    heroSubtitle: {
      en: 'Building functional digital solutions — from web development to data analytics. Certified Associate Data Analyst.',
      id: 'Membangun solusi digital yang fungsional — dari web development hingga data analytics. Certified Associate Data Analyst.',
    },
  },

  // ─── i18n — Semua teks UI dalam dua bahasa ────────────────────────────────
  i18n: {
    en: {
      hero: {
        greeting: "Hi, I'm",
        downloadCV: 'Download CV', contactMe: 'Contact Me',
      },
      about:      { title: 'About Me' },
      experience: { title: 'Experience' },
      projects:   { title: 'Projects', sourceCode: 'Source Code', liveDemo: 'Live Demo', private: '🔒 Private' },
      skills:     { title: 'Skills & Tech Stack' },
      contact:    { title: "Let's Connect", subtitle: 'Open for full-time roles, freelance projects, or just a good tech conversation.' },
      footer:     { rights: 'All rights reserved.' },
    },
    id: {
      hero: {
        greeting: 'Hai, Saya',
        downloadCV: 'Unduh CV', contactMe: 'Hubungi Saya',
      },
      about:      { title: 'Tentang Saya' },
      experience: { title: 'Pengalaman' },
      projects:   { title: 'Proyek', sourceCode: 'Source Code', liveDemo: 'Live Demo', private: '🔒 Privat' },
      skills:     { title: 'Keahlian & Tech Stack' },
      contact:    { title: 'Mari Terhubung', subtitle: 'Terbuka untuk pekerjaan penuh waktu, proyek freelance, atau sekadar ngobrol seputar teknologi.' },
      footer:     { rights: 'Hak cipta dilindungi.' },
    },
  },

  // ─── About ────────────────────────────────────────────────────────────────
  about: {
    en: "I'm a passionate Junior Fullstack Developer and Certified Associate Data Analyst from Sukabumi, Indonesia. I enjoy building functional web applications and extracting meaningful insights from data. With hands-on experience in frontend, backend, and machine learning, I'm eager to contribute to innovative teams and real-world projects.",
    id: 'Saya adalah Junior Fullstack Developer dan Certified Associate Data Analyst dari Sukabumi, Indonesia. Saya menyukai membangun aplikasi web yang fungsional dan mengekstrak wawasan bermakna dari data. Dengan pengalaman di frontend, backend, dan machine learning, saya siap berkontribusi dalam tim yang inovatif.',
  },

  // ─── Experience ───────────────────────────────────────────────────────────
  experience: [
    {
      role:    { en: 'Web Developer Intern', id: 'Magang Web Developer' },
      company: 'Koperasi Konsumen PT Adis Dimension Footwear',
      period:  '2023',
      tags:    ['Web Development', 'Frontend', 'Backend Integration', 'Company Profile'],
      desc: {
        en: 'Built a dynamic company profile website from UI design to deployment using a modern web stack. Gained real-world experience in end-to-end web project management at an international footwear manufacturing company.',
        id: 'Membangun website company profile dinamis dari desain UI hingga deployment menggunakan stack web modern. Mendapat pengalaman nyata dalam manajemen proyek web end-to-end di perusahaan manufaktur alas kaki internasional.',
      },
    },
    {
      role:    { en: "Project Manager — Drink't App", id: "Project Manager — Aplikasi Drink't" },
      company: 'Bangkit Academy, Kampus Merdeka · Google · GoTo · Traveloka',
      period:  '2024',
      tags:    ['Project Management', 'Machine Learning', 'TensorFlow Lite', 'Google Cloud'],
      desc: {
        en: 'Led a cross-functional capstone team building a mobile app to scan packaged drinks and monitor sugar/nutrition content in real-time. Coordinated ML, Cloud, and Mobile Dev divisions; managed roadmap and sprint planning.',
        id: 'Memimpin tim lintas divisi membangun aplikasi mobile untuk memindai minuman kemasan dan memantau kadar gula/nutrisi secara real-time. Mengkoordinasikan divisi ML, Cloud, dan Mobile Dev; mengelola roadmap dan sprint.',
      },
    },
    {
      role:    { en: 'Secretary General', id: 'Sekretaris Umum' },
      company: 'HIMATIF — Himpunan Mahasiswa Teknik Informatika',
      period:  '2023 – Sekarang',
      tags:    ['Leadership', 'Administration', 'Communication', 'Coordination'],
      desc: {
        en: 'Managed organizational administration, meeting documentation, official correspondence, inter-division coordination, and served as liaison between management and members.',
        id: 'Mengelola administrasi organisasi, notulensi rapat, surat-menyurat resmi, koordinasi antar divisi, dan menjadi penghubung antara pengurus dan anggota.',
      },
    },
  ],

  projects: [
    {
      name:     "Drink't App — Nutrition Scanner",
      category: { en: 'Machine Learning & IoT', id: 'Machine Learning & IoT' },
      desc: {
        en: 'A mobile application that scans nutrition tables on packaged drinks to monitor sugar intake in real-time. Led a team of 6, managing backend deployment on GCP and integrating TensorFlow Lite model.',
        id: 'Aplikasi mobile untuk memindai tabel nutrisi minuman kemasan guna memantau asupan gula secara real-time. Memimpin tim beranggotakan 6 orang, mengelola backend di GCP, serta integrasi model TensorFlow Lite.',
      },
      tags:      ['TensorFlow Lite', 'Google Cloud Platform', 'Python', 'Android Dev'],
      githubUrl: 'https://github.com/VikriAHaikal',
      demoUrl:   null,
    },
    {
      name:     'Company Profile Web — Koperasi PT Adis',
      category: { en: 'Web Development', id: 'Pengembangan Web' },
      desc: {
        en: 'Developed a dynamic and responsive company profile website for Koperasi Konsumen PT Adis Dimension Footwear, facilitating online presence and information dissemination for cooperative members.',
        id: 'Mengembangkan website profil koperasi konsumen PT Adis Dimension Footwear yang dinamis dan responsif untuk mendukung kehadiran online dan penyebaran informasi kepada anggota koperasi.',
      },
      tags:      ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
      githubUrl: 'https://github.com/VikriAHaikal',
      demoUrl:   null,
    },
    {
      name:     'Minimalist Developer Portfolio',
      category: { en: 'Frontend Web', id: 'Frontend Web' },
      desc: {
        en: 'A clean, lightweight, and fast personal developer portfolio. Built using semantic vanilla HTML5, custom CSS design tokens, and clean vanilla JS. Features dark/light mode and bilingual support.',
        id: 'Website portfolio personal developer yang bersih, ringan, dan cepat. Dibangun menggunakan HTML5 semantik, custom CSS design tokens, dan JS vanilla. Dilengkapi dengan mode terang/gelap serta dukungan dua bahasa.',
      },
      tags:      ['HTML5', 'CSS3', 'JavaScript', 'Vanilla CSS', 'i18n'],
      githubUrl: 'https://github.com/VikriAHaikal',
      demoUrl:   'https://github.com/VikriAHaikal/portfolio',
    },
  ],

  // ─── Skills ───────────────────────────────────────────────────────────────
  // icon: class dari devicons (https://devicon.dev) — cari nama teknologi, copy class-nya
  // Contoh: 'devicon-python-plain' atau 'devicon-react-original'
  skills: [
    // Frontend
    { name: 'JavaScript',  icon: 'devicon-javascript-plain'     },
    { name: 'React',       icon: 'devicon-react-original'       },
    { name: 'Next.js',     icon: 'devicon-nextjs-plain'         },
    // Backend & DB
    { name: 'Node.js',     icon: 'devicon-nodejs-plain'         },
    { name: 'Express',     icon: 'devicon-express-original'     },
    { name: 'PHP',         icon: 'devicon-php-plain'            },
    { name: 'MySQL',       icon: 'devicon-mysql-plain'          },
    { name: 'PostgreSQL',  icon: 'devicon-postgresql-plain'     },
    { name: 'Firebase',    icon: 'devicon-firebase-plain'       },
    { name: 'Supabase',    icon: 'devicon-supabase-plain'       },
    { name: 'Google Cloud Platform', icon: 'devicon-googlecloudplatform-plain' },
    
    // ML & AI
    { name: 'Python',      icon: 'devicon-python-plain'         },
    { name: 'TensorFlow',  icon: 'devicon-tensorflow-original'  },
    { name: 'Keras',       icon: 'devicon-keras-plain'          },
    // Tools
    { name: 'Git',         icon: 'devicon-git-plain'            },
    { name: 'GitHub',      icon: 'devicon-github-plain'         },
    { name: 'Docker',      icon: 'devicon-docker-plain'         },
    { name: 'Postman',     icon: 'devicon-postman-plain'        },
    { name: 'Vercel',      icon: 'devicon-vercel-plain'         },
    { name: 'Figma',       icon: 'devicon-figma-plain'          },
  ],
};
