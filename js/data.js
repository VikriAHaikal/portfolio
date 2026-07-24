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
    cvUrl:    'public/cv/CV_Vikri_A_Haikal.pdf', // Taruh file PDF di public/cv/
    socials: {
      github:   'https://github.com/VikriAHaikal',
      linkedin: 'https://www.linkedin.com/in/vikriahaikal',
    },
    roles: [ // Teks yang berputar di hero
      'Machine Learning Engineer',
      'Fullstack Web Developer',
      'Tech Project Manager',
      'AI Enthusiast',
    ],
    heroSubtitle: {
      en: 'Informatics Engineering graduate with a passion for Machine Learning, AI, and tech project management — building impactful solutions through innovation and continuous learning.',
      id: 'Lulusan Teknik Informatika dengan passion di Machine Learning, AI, dan manajemen proyek teknologi — membangun solusi berdampak melalui inovasi dan pembelajaran berkelanjutan.',
    },
  },

  // ─── i18n — Semua teks UI dalam dua bahasa ────────────────────────────────
  i18n: {
    en: {
      hero: {
        greeting: "Hi, I'm",
        downloadCV: 'View CV', contactMe: 'Contact Me',
      },
      about:      { title: 'About Me' },
      experience: { title: 'Experience' },
      projects:   { title: 'Projects', sourceCode: 'GitHub', liveDemo: 'Live Demo', private: '🔒 Private', status: { ongoing: 'Ongoing', completed: 'Completed' } },
      skills:     { title: 'Skills & Tech Stack' },
      contact:    { title: "Let's Connect", subtitle: 'Open for full-time roles, freelance projects, or just a good tech conversation.' },
      footer:     { rights: 'All rights reserved.' },
    },
    id: {
      hero: {
        greeting: 'Hai, Saya',
        downloadCV: 'Lihat CV', contactMe: 'Hubungi Saya',
      },
      about:      { title: 'Tentang Saya' },
      experience: { title: 'Pengalaman' },
      projects:   { title: 'Proyek', sourceCode: 'GitHub', liveDemo: 'Live Demo', private: '🔒 Privat', status: { ongoing: 'Berlangsung', completed: 'Selesai' } },
      skills:     { title: 'Keahlian & Tech Stack' },
      contact:    { title: 'Mari Terhubung', subtitle: 'Terbuka untuk pekerjaan penuh waktu, proyek freelance, atau sekadar ngobrol seputar teknologi.' },
      footer:     { rights: 'Hak cipta dilindungi.' },
    },
  },

  about: {
    en: "I'm a fresh graduate in Informatics Engineering from Universitas Serang Raya with a strong passion for technology, innovation, and problem-solving. My journey into tech is built on a diverse foundation — after graduating in Mechanical Engineering from SMK Negeri 1 Kota Sukabumi and gaining hands-on discipline as an operator at Mitsubishi Motors Krama Yudha Indonesia, I transitioned into IT to pursue my deep interest in Machine Learning, Artificial Intelligence, and system development. In 2024, I completed the Machine Learning path at Bangkit Academy led by Google, GoTo, Tokopedia & Traveloka, which sharpened my expertise in building deployable AI models. Beyond technical coding, I have practical experience in technology project management — leading cross-functional teams and delivering projects efficiently from planning to deployment. For me, continuous learning, staying healthy, and delivering impactful results are core values.",
    id: "Saya adalah fresh graduate Teknik Informatika dari Universitas Serang Raya dengan passion kuat di bidang teknologi, inovasi, dan problem-solving. Perjalanan saya ke dunia IT dibangun dari fondasi yang beragam — setelah lulus dari jurusan Teknik Mesin SMK Negeri 1 Kota Sukabumi dan mendapatkan pengalaman kerja sebagai operator di Mitsubishi Motors Krama Yudha Indonesia, saya beralih ke IT untuk mengejar minat mendalam di bidang Machine Learning, Artificial Intelligence, dan pengembangan sistem. Pada 2024, saya menyelesaikan jalur Machine Learning di Bangkit Academy yang dipimpin Google, GoTo, Tokopedia & Traveloka, yang mengasah keahlian saya dalam membangun model AI yang dapat di-deploy. Selain kemampuan teknis, saya memiliki pengalaman praktis dalam manajemen proyek teknologi — memimpin tim lintas fungsi dan memastikan proyek terselesaikan secara efisien dari perencanaan hingga deployment. Bagi saya, belajar berkelanjutan, menjaga kesehatan, dan menghasilkan dampak nyata adalah nilai inti dalam berkarya.",
  },

  // ─── Experience ───────────────────────────────────────────────────────────
  experience: [
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
      period:  '2023 – 2024',
      tags:    ['Leadership', 'Administration', 'Communication', 'Coordination'],
      desc: {
        en: 'Managed organizational administration, meeting documentation, official correspondence, inter-division coordination, and served as liaison between management and members.',
        id: 'Mengelola administrasi organisasi, notulensi rapat, surat-menyurat resmi, koordinasi antar divisi, dan menjadi penghubung antara pengurus dan anggota.',
      },
    },
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
  ],


  projects: [
    {
      name:     'KOPKAR ADIS — Company Profile Web',
      category: { en: 'Fullstack Web Development', id: 'Pengembangan Web Fullstack' },
      desc: {
        en: 'A major rebuild of the KKP internship project into a production-ready fullstack web app for Koperasi Konsumen PT Adis Dimension Footwear. Features an Admin CMS panel with rich text editor, dual-mode database (Supabase ↔ LocalStorage fallback), dynamic SEO per page, and PWA-ready service worker.',
        id: 'Pembaruan besar dari proyek KKP menjadi aplikasi web fullstack siap produksi untuk Koperasi Konsumen PT Adis Dimension Footwear. Dilengkapi panel Admin CMS dengan rich text editor, dual-mode database (Supabase ↔ LocalStorage fallback), SEO dinamis per halaman, dan service worker PWA-ready.',
      },
      tags:      ['TypeScript', 'React 19', 'Vite', 'Supabase', 'React Router', 'Vanilla CSS', 'Vercel'],
      githubUrl: 'https://github.com/VikriAHaikal/koperasi-adis-profile',
      demoUrl:   null,
      status:    'ongoing',
    },
    {
      name:     'Minimalist Developer Portfolio',
      category: { en: 'Frontend Web', id: 'Frontend Web' },
      desc: {
        en: 'A clean, lightweight, and fast personal developer portfolio. Built using semantic vanilla HTML5, custom CSS design tokens, and clean vanilla JS. Features dark/light mode and bilingual EN/ID support.',
        id: 'Website portfolio personal developer yang bersih, ringan, dan cepat. Dibangun menggunakan HTML5 semantik, custom CSS design tokens, dan JS vanilla. Dilengkapi mode gelap/terang serta dukungan dua bahasa EN/ID.',
      },
      tags:      ['HTML5', 'CSS3', 'JavaScript', 'Vanilla CSS', 'i18n'],
      githubUrl: 'https://github.com/VikriAHaikal/portfolio',
      demoUrl:   null,
      status:    'ongoing',
    },
    {
      name:     "Drink't App — Nutrition Scanner",
      category: { en: 'Machine Learning & Mobile', id: 'Machine Learning & Mobile' },
      desc: {
        en: 'A mobile application that scans nutrition tables on packaged drinks to monitor sugar intake in real-time. Led a cross-functional team of 6, managing backend deployment on GCP and integrating TensorFlow Lite model.',
        id: 'Aplikasi mobile untuk memindai tabel nutrisi minuman kemasan guna memantau asupan gula secara real-time. Memimpin tim lintas divisi beranggotakan 6 orang, mengelola backend di GCP, serta integrasi model TensorFlow Lite.',
      },
      tags:      ['TensorFlow Lite', 'Google Cloud', 'Python', 'Android Dev'],
      githubUrl: 'https://github.com/VikriAHaikal/Capstone',
      demoUrl:   null,
      status:    'completed',
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
    { name: 'Google Cloud', icon: 'devicon-googlecloud-plain' },
    
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
