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
      nav: {
        about: 'About', education: 'Education', experience: 'Experience',
        projects: 'Projects', skills: 'Skills', certificates: 'Certificates', contact: 'Contact',
      },
      hero: {
        greeting: "Hi, I'm", available: 'Available for opportunities',
        downloadCV: 'Download CV', contactMe: 'Contact Me',
      },
      about:        { title: 'About Me' },
      education:    { title: 'Education', gpa: 'GPA', ongoing: 'Ongoing', graduated: 'Graduated' },
      experience:   { title: 'Experience' },
      projects:     { title: 'Projects', sourceCode: 'Source Code', liveDemo: 'Live Demo', private: '🔒 Private' },
      skills:       { title: 'Skills & Tech Stack' },
      certificates: { title: 'Certificates', viewCred: 'View Credential ↗' },
      contact: {
        title: 'Contact', subtitle: "Let's work together or just say hello!",
        emailLabel: 'Email', locationLabel: 'Location', waLabel: 'WhatsApp',
        waChat: 'Chat on WhatsApp', copy: 'Copy', copied: 'Copied!',
        nameLabel: 'Name', msgLabel: 'Message',
        namePh: 'Your name', emailPh: 'your@email.com', msgPh: 'How can I help you?',
        send: 'Send Message', sending: 'Sending...',
        successTitle: 'Message Sent!',
        successMsg: "Thank you! I'll get back to you soon.",
        errorMsg: 'Failed to send. Please email me directly.',
      },
      footer: { rights: 'All rights reserved.' },
    },
    id: {
      nav: {
        about: 'Tentang', education: 'Pendidikan', experience: 'Pengalaman',
        projects: 'Proyek', skills: 'Keahlian', certificates: 'Sertifikat', contact: 'Kontak',
      },
      hero: {
        greeting: 'Hai, Saya', available: 'Terbuka untuk peluang kerja',
        downloadCV: 'Unduh CV', contactMe: 'Hubungi Saya',
      },
      about:        { title: 'Tentang Saya' },
      education:    { title: 'Pendidikan', gpa: 'IPK', ongoing: 'Aktif', graduated: 'Lulus' },
      experience:   { title: 'Pengalaman' },
      projects:     { title: 'Proyek', sourceCode: 'Source Code', liveDemo: 'Live Demo', private: '🔒 Privat' },
      skills:       { title: 'Keahlian & Tech Stack' },
      certificates: { title: 'Sertifikat', viewCred: 'Lihat Kredensial ↗' },
      contact: {
        title: 'Kontak', subtitle: 'Ayo bekerja sama atau sekadar sapa!',
        emailLabel: 'Email', locationLabel: 'Lokasi', waLabel: 'WhatsApp',
        waChat: 'Chat via WhatsApp', copy: 'Salin', copied: 'Tersalin!',
        nameLabel: 'Nama', msgLabel: 'Pesan',
        namePh: 'Nama Anda', emailPh: 'email@anda.com', msgPh: 'Apa yang bisa saya bantu?',
        send: 'Kirim Pesan', sending: 'Mengirim...',
        successTitle: 'Pesan Terkirim!',
        successMsg: 'Terima kasih! Saya akan segera menghubungi.',
        errorMsg: 'Gagal mengirim. Silakan email saya langsung.',
      },
      footer: { rights: 'Hak cipta dilindungi.' },
    },
  },

  // ─── About ────────────────────────────────────────────────────────────────
  about: {
    en: "I'm a passionate Junior Fullstack Developer and Certified Associate Data Analyst from Sukabumi, Indonesia. I enjoy building functional web applications and extracting meaningful insights from data. With hands-on experience in frontend, backend, and machine learning, I'm eager to contribute to innovative teams and real-world projects.",
    id: 'Saya adalah Junior Fullstack Developer dan Certified Associate Data Analyst dari Sukabumi, Indonesia. Saya menyukai membangun aplikasi web yang fungsional dan mengekstrak wawasan bermakna dari data. Dengan pengalaman di frontend, backend, dan machine learning, saya siap berkontribusi dalam tim yang inovatif.',
  },

  // ─── Education ────────────────────────────────────────────────────────────
  // Tambah lebih: copy satu objek, isi datanya.
  education: [
    {
      institution: 'Universitas Serang Raya',
      degree:      'S1 Teknik Informatika',
      faculty:     'Fakultas Teknologi Informasi',     // null untuk sembunyikan
      period:      '2021 – 2025',
      gpa:         '3.84 / 4.00',        // null untuk sembunyikan
      status:      'graduated',             // 'ongoing' | 'graduated'
      description: 'Mendalami rekayasa perangkat lunak, kecerdasan buatan, dan analisis data. Aktif dalam organisasi kemahasiswaan dan berbagai kompetisi teknologi.',
    },
  ],

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

  // ─── Projects ─────────────────────────────────────────────────────────────
  // ⚠ Ganti dengan proyek nyata kamu dari GitHub!
  projects: [
    {
      name:     'Nama Proyek 1',
      category: { en: 'Fullstack Web App', id: 'Aplikasi Web Fullstack' },
      desc: {
        en: 'Describe your project here. What does it do, what problem does it solve, and what was your role?',
        id: 'Deskripsikan proyek Anda di sini. Apa yang dilakukan, masalah apa yang diselesaikan, dan apa peran Anda?',
      },
      tags:      ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
      githubUrl: 'https://github.com/VikriAHaikal',
      demoUrl:   null, // atau 'https://your-demo.vercel.app'
    },
    {
      name:     'Nama Proyek 2',
      category: { en: 'Data Analytics', id: 'Analisis Data' },
      desc: {
        en: 'Another project description. Focus on the impact, technology used, and what you learned.',
        id: 'Deskripsi proyek lainnya. Fokus pada dampak, teknologi yang digunakan, dan apa yang dipelajari.',
      },
      tags:      ['Python', 'Pandas', 'Looker Studio', 'SQL'],
      githubUrl: 'https://github.com/VikriAHaikal',
      demoUrl:   null,
    },
  ],

  // ─── Skills ───────────────────────────────────────────────────────────────
  skillGroups: [
    {
      title:  { en: 'Frontend', id: 'Frontend' },
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      title:  { en: 'Backend & Database', id: 'Backend & Database' },
      skills: ['Node.js', 'Express', 'PHP', 'MySQL', 'PostgreSQL', 'Supabase', 'Firebase'],
    },
    {
      title:  { en: 'Machine Learning & AI', id: 'Machine Learning & AI' },
      skills: ['Python', 'TensorFlow', 'Keras', 'Jupyter Notebook', 'Google Colab', 'Google AI Studio'],
    },
    {
      title:  { en: 'Tools & Platforms', id: 'Alat & Platform' },
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Vercel', 'Figma', 'VS Code', 'Notion', 'Looker Studio'],
    },
  ],

  // ─── Certificates ─────────────────────────────────────────────────────────
  certificatePlatforms: [
    {
      platform: 'Dicoding',
      certs: [
        { title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software', year: 'Mei 2024',  url: 'https://www.dicoding.com/certificates/JLX17D3OGX72' },
        { title: 'Pengenalan ke Logika Pemrograman (Programming Logic 101)',     year: 'Mei 2024',  url: 'https://www.dicoding.com/certificates/RVZKRR55QPD5' },
        { title: 'Belajar Dasar Git dengan GitHub',                             year: 'Mei 2024',  url: 'https://www.dicoding.com/certificates/L4PQ11KYOXO1' },
        { title: 'Belajar Fundamental Analisis Data',                           year: 'Jun 2024',  url: 'https://www.dicoding.com/certificates/1OP8W2NRVXQK' },
        { title: 'Belajar Dasar Visualisasi Data',                              year: 'Sep 2024',  url: 'https://www.dicoding.com/certificates/L4PQ1ORYQXO1' },
        { title: 'Belajar Dasar Structured Query Language (SQL)',                year: 'Sep 2024',  url: 'https://www.dicoding.com/certificates/98XWL3J79ZM3' },
        { title: 'Memulai Pemrograman dengan Python',                           year: 'Sep 2024',  url: 'https://www.dicoding.com/certificates/MRZME23JLPYQ' },
        { title: 'Belajar Machine Learning untuk Pemula',                       year: 'Feb 2025',  url: 'https://www.dicoding.com/certificates/L4PQEQQN7PO1' },
        { title: 'Belajar Dasar AI',                                            year: 'Okt 2025',  url: 'https://www.dicoding.com/certificates/NVP7J475OXR0' },
        { title: 'Prompt Engineering untuk Software Developer',                 year: 'Okt 2025',  url: 'https://www.dicoding.com/certificates/JLX1545MNZ72' },
        { title: 'Belajar Fundamental Deep Learning',                           year: 'Feb 2026',  url: 'https://www.dicoding.com/certificates/MEPJOR2KLZ3V' },
        { title: 'Belajar Dasar Cloud dan Gen AI di AWS',                       year: 'Feb 2026',  url: 'https://www.dicoding.com/certificates/KEXLQ4JE0PG2' },
        { title: 'Belajar Dasar Pemrograman JavaScript',                        year: 'Feb 2026',  url: 'https://www.dicoding.com/certificates/NVP7N148VZR0' },
        { title: 'Belajar Back-End Pemula dengan JavaScript',                   year: 'Feb 2026',  url: 'https://www.dicoding.com/certificates/2VX30OW43XYQ' },
        { title: 'Belajar Fundamental Generative AI',                           year: 'Apr 2026',  url: 'https://www.dicoding.com/certificates/KEXLQ72RWPG2' },
        { title: 'Belajar Dasar Pemrograman Web',                               year: 'Jun 2026',  url: 'https://www.dicoding.com/certificates/KEXLQ684YPG2' },
        { title: 'Belajar Membuat Front-End Web untuk Pemula',                  year: 'Jun 2026',  url: 'https://www.dicoding.com/certificates/72ZDJNY2JZYW' },
        { title: 'Belajar Membuat Aplikasi Web dengan React',                   year: 'Jun 2026',  url: 'https://www.dicoding.com/certificates/MEPJODVNJZ3V' },
      ],
    },
    {
      platform: 'Coursera',
      certs: [
        { title: 'Crash Course on Python',                                           year: 'Feb 2024', url: 'https://coursera.org/share/da9391722c27321d82452debc2d57697' },
        { title: 'Using Python to Interact with the Operating System',               year: 'Feb 2024', url: 'https://coursera.org/share/9e059e7dac7391ca1ee7c7656199094b' },
        { title: 'Introduction to Git and GitHub',                                   year: 'Feb 2024', url: 'https://coursera.org/share/155ab969261630f5018789645cfa96af' },
        { title: 'Process Data from Dirty to Clean',                                 year: 'Mar 2024', url: 'https://coursera.org/share/1fcf23a58faceec822b7da1e442c94d1' },
        { title: 'Share Data Through the Art of Visualization',                      year: 'Mar 2024', url: 'https://coursera.org/share/ffec33d21809d6f32373920de57f2fab' },
        { title: 'Analyze Data to Answer Questions',                                 year: 'Mar 2024', url: 'https://coursera.org/share/2df76c74cbd5162ffe4d963338af7315' },
        { title: 'Mathematics for Machine Learning and Data Science Specialization',  year: 'Apr 2024', url: 'https://coursera.org/share/fbfcfe293aad43eb00eb2ae4798adadf' },
        { title: 'Machine Learning Specialization',                                  year: 'Apr 2024', url: 'https://coursera.org/share/4e81cffc2fa2eb92c71288783fb3e384' },
        { title: 'DeepLearning.AI TensorFlow Developer Professional Certificate',    year: 'Mei 2024', url: 'https://coursera.org/share/a5d424c671c9ccac3effc4cfe99c8553' },
        { title: 'TensorFlow: Data and Deployment Specialization',                   year: 'Mei 2024', url: 'https://coursera.org/share/c9da23d3eda3996bea17716321747b8f' },
        { title: 'TensorFlow: Advanced Techniques Specialization',                   year: 'Mei 2024', url: 'https://coursera.org/share/eb8e9fc532bb3bd5d430f086c40a7f77' },
        { title: 'Introduction to HTML, CSS, & JavaScript',                          year: 'Jun 2025', url: 'https://coursera.org/share/04225b5ab52a3a4a1c666432fda6fce8' },
      ],
    },
    {
      platform: 'BNSP',
      certs: [
        { title: 'Sertifikat Kompetensi BNSP — Associate Data Analyst', year: '12 Mar 2025', url: '#' },
      ],
    },
  ],
};
