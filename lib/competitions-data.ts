export interface Competition {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  themeBadge: string;
  category: 'Akademik' | 'Non-Akademik / E-Sport';
  categoryType: 'academic' | 'esport';
  themeTag: string;
  tagline: string;
  iconName: 'compass' | 'database' | 'swords' | 'crosshair';
  members: string;
  maxMembers: number;
  minMembers: number;
  eligibility: string;
  prizepool: string;
  prizepoolNumber: number;
  prizes: { rank: string; amount: string; perks: string[] }[];
  waves: {
    wave: number;
    name: string;
    stageLabel: string;
    price: string;
    priceNumber: number;
    startDate: string;
    endDate: string;
    status: 'ended' | 'active' | 'upcoming';
  }[];
  overview: string;
  objectives: string[];
  timeline: { title: string; date: string; description: string }[];
  rules: string[];
  submissionRequirements: string[];
  contacts: { name: string; role: string; wa: string; displayWa: string }[];
  guidebookUrl: string;
}

export const COMPETITIONS_DATA: Competition[] = [
  {
    id: 'uiux',
    slug: 'ui-ux-design',
    title: 'UI/UX DESIGN COMPETITION',
    subtitle: 'The Frontier Interface & Digital Cartography',
    themeBadge: 'Akademik • Desain Antarmuka',
    category: 'Akademik',
    categoryType: 'academic',
    themeTag: 'Frontier Navigation & User Experience',
    tagline: 'Rancang arsitektur antarmuka digital yang intuitif dan berdampak nyata bagi penggunanya.',
    iconName: 'compass',
    members: '1 - 3 Orang / Tim',
    minMembers: 1,
    maxMembers: 3,
    eligibility: 'Mahasiswa aktif D3/D4/S1 seluruh Indonesia & Siswa SMA/SMK sederajat',
    prizepool: 'Rp 6.000.000',
    prizepoolNumber: 6000000,
    prizes: [
      { rank: 'Juara 1', amount: 'Rp 3.000.000', perks: ['Trofi Penghargaan ISFEST 2027', 'Sertifikat Nasional Berpredikat', 'Merchandise Eksklusif UMN'] },
      { rank: 'Juara 2', amount: 'Rp 1.800.000', perks: ['Trofi Penghargaan ISFEST 2027', 'Sertifikat Nasional Berpredikat', 'Merchandise Eksklusif UMN'] },
      { rank: 'Juara 3', amount: 'Rp 1.200.000', perks: ['Trofi Penghargaan ISFEST 2027', 'Sertifikat Nasional Berpredikat', 'Merchandise Eksklusif UMN'] },
    ],
    waves: [
      {
        wave: 1,
        name: 'Gelombang 1 (Early Bird)',
        stageLabel: 'POTONGAN HARGA KHUSUS',
        price: 'Rp 95.000',
        priceNumber: 95000,
        startDate: '22 Juni 2027',
        endDate: '12 Juli 2027',
        status: 'active',
      },
      {
        wave: 2,
        name: 'Gelombang 2 (Reguler)',
        stageLabel: 'PENDAFTARAN REGULER',
        price: 'Rp 115.000',
        priceNumber: 115000,
        startDate: '13 Juli 2027',
        endDate: '9 Agustus 2027',
        status: 'upcoming',
      },
      {
        wave: 3,
        name: 'Gelombang 3 (Late)',
        stageLabel: 'PENDAFTARAN AKHIR',
        price: 'Rp 130.000',
        priceNumber: 130000,
        startDate: '10 Agustus 2027',
        endDate: '31 Agustus 2027',
        status: 'upcoming',
      },
    ],
    overview:
      'UI/UX Design Competition ISFEST 2027 menantang para calon desainer produk digital untuk memecahkan permasalahan nyata masyarakat melalui riset pengguna, perancangan interaksi, wireframe, dan prototype Figma interaktif yang berpusat pada kenyamanan pengguna.',
    objectives: [
      'Menyusun User Research, Journey Map, dan Problem Statement yang tervalidasi.',
      'Merancang High-Fidelity Prototype di Figma dengan Design System yang konsisten.',
      'Melakukan Usability Testing dasar dan mempresentasikan solusi kepada dewan juri praktisi.',
    ],
    timeline: [
      { title: 'Pendaftaran Peserta (Gelombang 1 - 3)', date: '22 Juni – 31 Agustus 2027', description: 'Registrasi tim melalui website resmi ISFEST' },
      { title: 'Technical Meeting (1x Online)', date: '1 September 2027', description: 'Pembahasan rulebook & sesi tanya jawab bersama dewan juri' },
      { title: 'Batas Pengumpulan Berkas Karya', date: '25 September 2027', description: 'Tenggat akhir pengumpulan proposal case study & tautan prototype Figma (23.59 WIB)' },
      { title: 'Pengumuman Finalis Akademik', date: '28 September 2027', description: 'Pengumuman top 5 tim finalis yang melaju ke babak presentasi' },
      { title: 'Grand Final Akademik di UMN', date: '1 Oktober 2027', description: 'Presentasi langsung di hadapan juri ahli & awarding juara' },
    ],
    rules: [
      'Setiap tim terdiri dari 1 hingga 3 orang mahasiswa atau pelajar.',
      'Anggota tim diperbolehkan berasal dari instansi / universitas yang berbeda.',
      'Karya harus orisinal dan belum pernah menjuarai perlombaan tingkat nasional lainnya.',
      'Tautan prototype Figma wajib dalam mode publik yang dapat diakses panitia.',
    ],
    submissionRequirements: [
      'Dokumen Proposal / Case Study PDF (maksimal 15 halaman)',
      'Tautan prototype interaktif Figma publik',
      'Video demonstrasi fitur berdurasi 3 - 5 menit (YouTube Unlisted)',
    ],
    contacts: [
      { name: 'Coming Soon', role: 'Contact Person UI/UX', wa: '', displayWa: 'Coming Soon' },
    ],
    guidebookUrl: 'https://drive.google.com/file/d/15ejrJCpwhuBi4YqNlADwmva7A06kcnCF/view?usp=sharing',
  },
  {
    id: 'data',
    slug: 'data-competition',
    title: 'DATA COMPETITION & AI ANALYTICS',
    subtitle: 'The Frontier Data Prospector & Intelligence',
    themeBadge: 'Akademik • Data Science & ML',
    category: 'Akademik',
    categoryType: 'academic',
    themeTag: 'Insight Mining & Predictive Modeling',
    tagline: 'Eksplorasi dataset riil, temukan insight tersembunyi, dan bangun model prediktif berperforma tinggi.',
    iconName: 'database',
    members: '1 - 3 Orang / Tim',
    minMembers: 1,
    maxMembers: 3,
    eligibility: 'Mahasiswa aktif D3/D4/S1 seluruh perguruan tinggi di Indonesia',
    prizepool: 'Rp 6.500.000',
    prizepoolNumber: 6500000,
    prizes: [
      { rank: 'Juara 1', amount: 'Rp 3.250.000', perks: ['Trofi Penghargaan ISFEST 2027', 'Sertifikat Nasional Berpredikat', 'Merchandise Eksklusif UMN'] },
      { rank: 'Juara 2', amount: 'Rp 2.000.000', perks: ['Trofi Penghargaan ISFEST 2027', 'Sertifikat Nasional Berpredikat', 'Merchandise Eksklusif UMN'] },
      { rank: 'Juara 3', amount: 'Rp 1.250.000', perks: ['Trofi Penghargaan ISFEST 2027', 'Sertifikat Nasional Berpredikat', 'Merchandise Eksklusif UMN'] },
    ],
    waves: [
      {
        wave: 1,
        name: 'Gelombang 1 (Early Bird)',
        stageLabel: 'POTONGAN HARGA KHUSUS',
        price: 'Rp 85.000',
        priceNumber: 85000,
        startDate: '22 Juni 2027',
        endDate: '12 Juli 2027',
        status: 'active',
      },
      {
        wave: 2,
        name: 'Gelombang 2 (Reguler)',
        stageLabel: 'PENDAFTARAN REGULER',
        price: 'Rp 100.000',
        priceNumber: 100000,
        startDate: '13 Juli 2027',
        endDate: '9 Agustus 2027',
        status: 'upcoming',
      },
      {
        wave: 3,
        name: 'Gelombang 3 (Late)',
        stageLabel: 'PENDAFTARAN AKHIR',
        price: 'Rp 120.000',
        priceNumber: 120000,
        startDate: '10 Agustus 2027',
        endDate: '31 Agustus 2027',
        status: 'upcoming',
      },
    ],
    overview:
      'Data Competition ISFEST 2027 menantang para penggiat data untuk membersihkan data, melakukan feature engineering, dan membangun model machine learning teruji guna memecahkan tantangan bisnis masa depan.',
    objectives: [
      'Pembersihan data dan Exploratory Data Analysis (EDA) tanpa data leakage.',
      'Pengembangan model Machine Learning / Deep Learning dengan metrik evaluasi tertinggi.',
      'Perumusan rekomendasi bisnis strategis berdasarkan hasil prediksi model.',
    ],
    timeline: [
      { title: 'Pendaftaran Peserta (Gelombang 1 - 3)', date: '22 Juni – 31 Agustus 2027', description: 'Registrasi tim cabang Data Competition' },
      { title: 'Technical Meeting (1x Online)', date: '1 September 2027', description: 'Rilis dataset train & test serta pengarahan teknis' },
      { title: 'Batas Pengumpulan Prediksi & Kode', date: '25 September 2027', description: 'Penyerahan file CSV prediksi dan notebook kode (23.59 WIB)' },
      { title: 'Pengumuman Finalis Akademik', date: '28 September 2027', description: 'Top 5 skor evaluasi melaju ke babak grand final' },
      { title: 'Grand Final Akademik di UMN', date: '1 Oktober 2027', description: 'Pemaparan metodologi data di hadapan panel juri & awarding' },
    ],
    rules: [
      'Tim terdiri dari 1 sampai 3 mahasiswa aktif.',
      'Dataset resmi train dan test disediakan langsung oleh panitia.',
      'Dilarang melakukan manipulasi label atau praktik kecurangan data.',
      'File kode Jupyter Notebook (.ipynb) harus reproducible.',
    ],
    submissionRequirements: [
      'File CSV hasil prediksi model sesuai format evaluasi',
      'Source code Notebook (.ipynb)',
      'Laporan analisis metodologi PDF',
    ],
    contacts: [
      { name: 'Coming Soon', role: 'Contact Person Data Competition', wa: '', displayWa: 'Coming Soon' },
    ],
    guidebookUrl: 'https://drive.google.com/file/d/1rQW-xzGxofanI9p189mg69QtHLgWZN_W/view?usp=sharing',
  },
  {
    id: 'mlbb',
    slug: 'mobile-legends',
    title: 'MOBILE LEGENDS: BANG BANG INVITATIONAL',
    subtitle: 'Tactical Team Esports Championship',
    themeBadge: 'Non-Akademik • Mobile MOBA',
    category: 'Non-Akademik / E-Sport',
    categoryType: 'esport',
    themeTag: 'Team Synergy & Tactical Decision',
    tagline: 'Adu strategi, mekanik tinggi, dan koordinasi tim terbaik di Land of Dawn.',
    iconName: 'swords',
    members: '5 Pemain Inti (+ 1 Cadangan)',
    minMembers: 5,
    maxMembers: 6,
    eligibility: 'Terbuka untuk UMUM se-Indonesia (Mahasiswa, Pelajar, Umum)',
    prizepool: 'Rp 4.500.000',
    prizepoolNumber: 4500000,
    prizes: [
      { rank: 'Juara 1', amount: 'Rp 2.500.000', perks: ['Trofi Kejuaraan ISFEST', 'Sertifikat Pemenang Resmi', 'E-Certificate'] },
      { rank: 'Juara 2', amount: 'Rp 1.300.000', perks: ['Trofi Kejuaraan ISFEST', 'Sertifikat Pemenang Resmi', 'E-Certificate'] },
      { rank: 'Juara 3', amount: 'Rp 700.000', perks: ['Trofi Kejuaraan ISFEST', 'Sertifikat Pemenang Resmi', 'E-Certificate'] },
    ],
    waves: [
      {
        wave: 1,
        name: 'Gelombang 1 (Early Bird)',
        stageLabel: 'HARGA KHUSUS AWAL',
        price: 'Rp 60.000',
        priceNumber: 60000,
        startDate: '13 Juli 2027',
        endDate: '3 Agustus 2027',
        status: 'active',
      },
      {
        wave: 2,
        name: 'Gelombang 2 (Reguler)',
        stageLabel: 'HARGA REGULER',
        price: 'Rp 75.000',
        priceNumber: 75000,
        startDate: '4 Agustus 2027',
        endDate: '31 Agustus 2027',
        status: 'upcoming',
      },
    ],
    overview:
      'Turnamen kompetitif Mobile Legends: Bang Bang ISFEST 2027 mempertemukan tim-tim terbaik dalam format turnamen resmi. Buktikan kedisiplinan rotasi, pemahaman draft pick, dan sinergi tim di panggung final.',
    objectives: [
      'Menjunjung tinggi nilai sportivitas dan fair play dalam esports.',
      'Mengasah koordinasi tim, ketenangan, dan kepemimpinan dalam pertandingan.',
    ],
    timeline: [
      { title: 'Pendaftaran Slot Tim (Maks 64 Tim)', date: '13 Juli – 31 Agustus 2027', description: 'Registrasi tim hingga slot terpenuhi' },
      { title: 'Technical Meeting (1x Online)', date: '1 September 2027', description: 'Penjelasan bagan pertandingan dan aturan draft pick' },
      { title: 'Babak Penyisihan (BO3 Online)', date: '9 – 11 September 2027', description: 'Pertandingan sistem gugur daring' },
      { title: 'Bronze Match & Grand Final MLBB', date: '12 September 2027', description: 'Siaran langsung pertandingan puncak di YouTube' },
    ],
    rules: [
      'Setiap tim terdiri dari 5 pemain inti dan maksimal 1 cadangan.',
      'Dilarang menggunakan cheat, map hack, atau plug-in ilegal (diskualifikasi langsung).',
      'Hadir di lobby tepat waktu toleransi maksimal 10 menit.',
      'Perangkat dan koneksi internet menjadi tanggung jawab masing-masing peserta.',
    ],
    submissionRequirements: [
      'Screenshot profil in-game (ID + Server) seluruh pemain',
      'Kartu Identitas (KTP / KTM / Kartu Pelajar)',
      'Bukti transfer resmi pendaftaran blu by BCA',
    ],
    contacts: [
      { name: 'Coming Soon', role: 'Contact Person MLBB', wa: '', displayWa: 'Coming Soon' },
    ],
    guidebookUrl: 'https://drive.google.com/file/d/1ieFdHxuOURbFeWZg4MdUXVghu8HtoYlW/view?usp=sharing',
  },
  {
    id: 'valo',
    slug: 'valorant',
    title: 'VALORANT TACTICAL CHAMPIONSHIP',
    subtitle: 'Competitive Tactical FPS Tournament',
    themeBadge: 'Non-Akademik • Tactical FPS',
    category: 'Non-Akademik / E-Sport',
    categoryType: 'esport',
    themeTag: 'High Noon Precision & Strategic Execution',
    tagline: 'Ketenangan bidikan, penempatan utilitas, dan komunikasi taktis penentu kemenangan.',
    iconName: 'crosshair',
    members: '5 Pemain Inti (+ 1 Cadangan)',
    minMembers: 5,
    maxMembers: 6,
    eligibility: 'Terbuka untuk UMUM se-Indonesia (Server APAC / Indonesia)',
    prizepool: 'Rp 4.000.000',
    prizepoolNumber: 4000000,
    prizes: [
      { rank: 'Juara 1', amount: 'Rp 2.200.000', perks: ['Trofi Kejuaraan ISFEST', 'Sertifikat Pemenang Resmi', 'E-Certificate'] },
      { rank: 'Juara 2', amount: 'Rp 1.200.000', perks: ['Trofi Kejuaraan ISFEST', 'Sertifikat Pemenang Resmi', 'E-Certificate'] },
      { rank: 'Juara 3', amount: 'Rp 600.000', perks: ['Trofi Kejuaraan ISFEST', 'Sertifikat Pemenang Resmi', 'E-Certificate'] },
    ],
    waves: [
      {
        wave: 1,
        name: 'Gelombang 1 (Early Bird)',
        stageLabel: 'HARGA KHUSUS AWAL',
        price: 'Rp 65.000',
        priceNumber: 65000,
        startDate: '13 Juli 2027',
        endDate: '3 Agustus 2027',
        status: 'active',
      },
      {
        wave: 2,
        name: 'Gelombang 2 (Reguler)',
        stageLabel: 'HARGA REGULER',
        price: 'Rp 80.000',
        priceNumber: 80000,
        startDate: '4 Agustus 2027',
        endDate: '31 Agustus 2027',
        status: 'upcoming',
      },
    ],
    overview:
      'Turnamen kompetitif Valorant dengan format double elimination. Tunjukkan crosshair placement tajam, eksekusi skill agen yang disiplin, dan koordinasi clutch bersama tim.',
    objectives: [
      'Menampilkan standar kompetisi FPS fair play yang kompetitif.',
      'Menguji ketahanan mental dan komunikasi taktis di bawah tekanan turnamen.',
    ],
    timeline: [
      { title: 'Pendaftaran Slot (Maks 32 Tim)', date: '13 Juli – 31 Agustus 2027', description: 'Registrasi slot turnamen hingga kuota penuh' },
      { title: 'Technical Meeting (1x Online)', date: '1 September 2027', description: 'Briefing teknis dan sistem map veto' },
      { title: 'Babak Eliminasi Online', date: '16 – 18 September 2027', description: 'Pertandingan BO1 & BO3 daring' },
      { title: 'Semifinal & Grand Final Valorant', date: '19 September 2027', description: 'Live streaming pertandingan puncak' },
    ],
    rules: [
      'Wajib menggunakan akun Riot Games pribadi dengan Riot Vanguard bersih.',
      'Dilarang melakukan perilaku provokatif berlebihan atau toxic chat.',
      'Wajib hadir di Discord resmi 20 menit sebelum jadwal pertandingan.',
      'Sistem map veto dilakukan via mapban.gg dengan wasit panitia.',
    ],
    submissionRequirements: [
      'Riot ID & Tagline seluruh pemain (misal: Player#IDN)',
      'Kartu Identitas resmi (KTP / KTM / Kartu Pelajar)',
      'Bukti transfer resmi pendaftaran blu by BCA',
    ],
    contacts: [
      { name: 'Coming Soon', role: 'Contact Person Valorant', wa: '', displayWa: 'Coming Soon' },
    ],
    guidebookUrl: 'https://drive.google.com/file/d/1icqM72iE_9A8jW8AhKLhidzKhlSZQ_MT/view?usp=sharing',
  },
];

// Timeline resmi festival terpadu sesuai ketentuan deadline tahun ini
export const FESTIVAL_TIMELINE = [
  {
    phase: '01',
    title: 'Pembukaan Pendaftaran Sayembara',
    date: '22 Juni – 31 Agustus 2027',
    description: 'Pendaftaran dibuka bertahap (Gelombang 1 Early Bird s.d. Gelombang 3) untuk seluruh 4 cabang lomba pilihan.',
    highlight: true,
  },
  {
    phase: '02',
    title: 'Technical Meeting (Pertemuan Teknis Serentak)',
    date: '1 September 2027',
    description: 'Pertemuan teknis daring serentak 1x bagi seluruh tim lomba akademik dan turnamen esports bersama dewan juri.',
    highlight: false,
  },
  {
    phase: '03',
    title: 'Babak Pertandingan E-Sport (MLBB & Valorant)',
    date: '9 – 19 September 2027',
    description: 'Pelaksanaan duel penyisihan daring hingga babak final Mobile Legends dan Valorant Tactical Championship.',
    highlight: false,
  },
  {
    phase: '04',
    title: 'Deadline Pengumpulan Karya Akademik',
    date: '25 September 2027',
    description: 'Batas akhir submisi berkas karya Case Study UI/UX dan notebook/prediksi Data Analytics (pukul 23.59 WIB).',
    highlight: false,
  },
  {
    phase: '05',
    title: 'Pengumuman Finalis Akademik',
    date: '28 September 2027',
    description: 'Pengumuman resmi 5 tim finalis terbaik cabang UI/UX Design dan Data Competition yang lolos ke babak grand final.',
    highlight: false,
  },
  {
    phase: '06',
    title: 'Grand Final Akademik & Awarding di UMN',
    date: '1 Oktober 2027',
    description: 'Puncak presentasi finalis di hadapan dewan juri ahli bertempat di Universitas Multimedia Nusantara dan penganugerahan juara resmi.',
    highlight: true,
  },
];

export const FAQS_DATA = [
  {
    q: 'Berapa banyak cabang lomba yang diadakan di ISFEST 2027?',
    a: 'ISFEST 2027 menyelenggarakan tepat 4 cabang lomba pilihan: 2 Cabang Akademik (UI/UX Design Competition & Data Competition AI Analytics) serta 2 Cabang Non-Akademik / E-Sport (Mobile Legends: Bang Bang Invitational & Valorant Tactical Championship).',
  },
  {
    q: 'Kapan jadwal penting babak akademik ISFEST 2027?',
    a: 'Technical Meeting serentak diadakan pada 1 September 2027. Batas pengumpulan karya akademik adalah 25 September 2027, pengumuman finalis pada 28 September 2027, dan Grand Final pada 1 Oktober 2027 bertempat di Universitas Multimedia Nusantara.',
  },
  {
    q: 'Bagaimana metode pembayaran upeti pendaftaran lomba?',
    a: 'Pembayaran resmi dilakukan melalui transfer bank digital blu by BCA (No. Rekening: 008620636951 a.n. FELICIA JESSLYN GUNAWAN). Bukti transfer resmi diunggah langsung melalui formulir pendaftaran di situs ini.',
  },
  {
    q: 'Siapa yang dapat dihubungi untuk pertanyaan teknis lomba?',
    a: 'Informasi narahubung resmi panitia (Contact Person) akan segera diumumkan (Coming Soon). Pantau terus balai telegraf dan akun Instagram resmi @isfest_umn.',
  },
  {
    q: 'Apakah seluruh peserta yang berpartisipasi akan memperoleh sertifikat?',
    a: 'Ya! Seluruh peserta yang terdaftar resmi dan mengikuti alur perlombaan hingga selesai akan mendapatkan E-Sertifikat Nasional resmi dari Universitas Multimedia Nusantara.',
  },
  {
    q: 'Apakah anggota dalam satu tim boleh berasal dari kampus atau sekolah berbeda?',
    a: 'Tentu diperbolehkan! Anda dapat membentuk geng kolaborasi lintas universitas, sekolah, maupun lintas daerah se-Indonesia.',
  },
];
