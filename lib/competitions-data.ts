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
        startDate: '1 Juli 2027',
        endDate: '25 Juli 2027',
        status: 'active',
      },
      {
        wave: 2,
        name: 'Gelombang 2 (Reguler)',
        stageLabel: 'PENDAFTARAN REGULER',
        price: 'Rp 115.000',
        priceNumber: 115000,
        startDate: '26 Juli 2027',
        endDate: '20 Agustus 2027',
        status: 'upcoming',
      },
      {
        wave: 3,
        name: 'Gelombang 3 (Late)',
        stageLabel: 'PENDAFTARAN AKHIR',
        price: 'Rp 130.000',
        priceNumber: 130000,
        startDate: '21 Agustus 2027',
        endDate: '5 September 2027',
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
      { title: 'Pendaftaran Gelombang 1 (Early Bird)', date: '1 - 25 Juli 2027', description: 'Registrasi tim dengan biaya pendaftaran awal' },
      { title: 'Technical Meeting (Online Zoom)', date: '10 Agustus 2027', description: 'Pembahasan rulebook & sesi tanya jawab bersama panitia' },
      { title: 'Batas Pengumpulan Berkas Karya', date: '8 September 2027', description: 'Pengumpulan berkas Case Study PDF dan tautan prototype Figma' },
      { title: 'Pengumuman 5 Tim Finalis', date: '15 September 2027', description: 'Pengumuman finalis yang lolos ke babak presentasi' },
      { title: 'Grand Final & Awarding di Kampus UMN', date: '25 September 2027', description: 'Presentasi langsung di hadapan dewan juri ahli' },
    ],
    rules: [
      'Setiap tim terdiri dari 1 hingga 3 orang mahasiswa atau pelajar.',
      'Anggota tim diperbolehkan berasal dari instansi / universitas yang berbeda.',
      'Karya harus orisinal dan belum pernah menjuarai perlombaan tingkat nasional lainnya.',
      'Tautan prototype Figma wajib dalam mode publik yang dapat diakses panitia.',
    ],
    submissionRequirements: [
      'Dokumen Proposal / Case Study PDF (maksimal 15 halaman)',
      'Tautan prototype interaktif Figma',
      'Video demonstrasi fitur berdurasi 3 - 5 menit (YouTube Unlisted)',
    ],
    contacts: [
      { name: 'Kevin Sakia', role: 'Koordinator Lomba UI/UX', wa: '6282110683255', displayWa: '0821-1068-3255' },
      { name: 'Audrey Imanuella', role: 'Hubungan Peserta & Humas', wa: '6281293520532', displayWa: '0812-9352-0532' },
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
        startDate: '1 Juli 2027',
        endDate: '25 Juli 2027',
        status: 'active',
      },
      {
        wave: 2,
        name: 'Gelombang 2 (Reguler)',
        stageLabel: 'PENDAFTARAN REGULER',
        price: 'Rp 100.000',
        priceNumber: 100000,
        startDate: '26 Juli 2027',
        endDate: '20 Agustus 2027',
        status: 'upcoming',
      },
      {
        wave: 3,
        name: 'Gelombang 3 (Late)',
        stageLabel: 'PENDAFTARAN AKHIR',
        price: 'Rp 120.000',
        priceNumber: 120000,
        startDate: '21 Agustus 2027',
        endDate: '5 September 2027',
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
      { title: 'Pendaftaran Gelombang 1', date: '1 - 25 Juli 2027', description: 'Registrasi tim cabang data competition' },
      { title: 'Rilis Dataset Resmi Panitia', date: '12 Agustus 2027', description: 'Akses unduh train.csv dan test.csv dibuka' },
      { title: 'Batas Pengumpulan Prediksi', date: '10 September 2027', description: 'Penyerahan file CSV prediksi dan notebook kode' },
      { title: 'Pengumuman 5 Tim Terbaik', date: '17 September 2027', description: 'Top 5 skor evaluasi melaju ke babak presentasi' },
      { title: 'Grand Final Presentation di UMN', date: '25 September 2027', description: 'Pemaparan metodologi data di hadapan panel juri' },
    ],
    rules: [
      'Tim terdiri dari 1 sampai 3 mahasiswa aktif.',
      'Dataset resmi train dan test disediakan langsung oleh panitia.',
      'Dilarang melakukan manipulasi label atau praktik kecurangan data.',
      'File kode Jupyter Notebook (.ipynb) harus reproducible.',
    ],
    submissionRequirements: [
      'File CSV hasil prediksi model sesuai format',
      'Source code Notebook (.ipynb)',
      'Laporan analisis & metodologi PDF',
    ],
    contacts: [
      { name: 'Kevin Sakia', role: 'Koordinator Lomba Data', wa: '6282110683255', displayWa: '0821-1068-3255' },
      { name: 'Audrey Imanuella', role: 'Hubungan Peserta & Humas', wa: '6281293520532', displayWa: '0812-9352-0532' },
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
        startDate: '14 Juli 2027',
        endDate: '10 Agustus 2027',
        status: 'active',
      },
      {
        wave: 2,
        name: 'Gelombang 2 (Reguler)',
        stageLabel: 'HARGA REGULER',
        price: 'Rp 75.000',
        priceNumber: 75000,
        startDate: '11 Agustus 2027',
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
      { title: 'Pendaftaran Slot Tim (Maks 64 Tim)', date: '14 Juli - 31 Agustus 2027', description: 'Registrasi tim hingga slot penuh' },
      { title: 'Technical Meeting & Bracket Draw', date: '5 September 2027', description: 'Penjelasan bagan pertandingan dan aturan ban' },
      { title: 'Babak Penyisihan (BO3 Online)', date: '9 - 11 September 2027', description: 'Pertandingan sistem gugur daring' },
      { title: 'Grand Final & Live Streaming (BO5)', date: '12 September 2027', description: 'Siaran langsung pertandingan puncak di YouTube' },
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
      'Bukti transfer resmi pendaftaran',
    ],
    contacts: [
      { name: 'Richard Kane', role: 'Tournament Director MLBB', wa: '6281210416870', displayWa: '0812-1041-6870' },
      { name: 'Audrey Imanuella', role: 'Hubungan Peserta & Humas', wa: '6281293520532', displayWa: '0812-9352-0532' },
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
        startDate: '14 Juli 2027',
        endDate: '10 Agustus 2027',
        status: 'active',
      },
      {
        wave: 2,
        name: 'Gelombang 2 (Reguler)',
        stageLabel: 'HARGA REGULER',
        price: 'Rp 80.000',
        priceNumber: 80000,
        startDate: '11 Agustus 2027',
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
      { title: 'Pendaftaran Slot (Maks 32 Tim)', date: '14 Juli - 31 Agustus 2027', description: 'Registrasi slot turnamen' },
      { title: 'Technical Meeting & Server Rules', date: '6 September 2027', description: 'Briefing teknis dan sistem map veto' },
      { title: 'Babak Eliminasi Online', date: '14 - 17 September 2027', description: 'Pertandingan BO1 & BO3 daring' },
      { title: 'Grand Final & Live Broadcast', date: '19 September 2027', description: 'Live streaming pertandingan puncak' },
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
      'Bukti transfer resmi pendaftaran',
    ],
    contacts: [
      { name: 'Jonathan Sandjaja', role: 'Tournament Director Valorant', wa: '62881024556430', displayWa: '0881-0245-56430' },
      { name: 'Audrey Imanuella', role: 'Hubungan Peserta & Humas', wa: '6281293520532', displayWa: '0812-9352-0532' },
    ],
    guidebookUrl: 'https://drive.google.com/file/d/1icqM72iE_9A8jW8AhKLhidzKhlSZQ_MT/view?usp=sharing',
  },
];

export const FESTIVAL_TIMELINE = [
  {
    phase: '01',
    title: 'Pembukaan Pendaftaran Gelombang 1',
    date: '1 Juli – 25 Juli 2027',
    description: 'Pendaftaran dibuka dengan potongan harga khusus Early Bird untuk seluruh 4 cabang sayembara.',
    highlight: true,
  },
  {
    phase: '02',
    title: 'Pendaftaran Gelombang 2 & Penutupan Slot',
    date: '26 Juli – 31 Agustus 2027',
    description: 'Pendaftaran fase reguler dan penutupan kuota pendaftaran bagi seluruh kontingen tim.',
    highlight: false,
  },
  {
    phase: '03',
    title: 'Technical Meeting (Pertemuan Teknis)',
    date: '5 – 6 September 2027',
    description: 'Briefing daring bersama dewan wasit dan panitia untuk membahas bagan duel turnamen dan regulasi karya.',
    highlight: false,
  },
  {
    phase: '04',
    title: 'Babak Duel Eliminasi & Batas Submisi Karya',
    date: '9 – 17 September 2027',
    description: 'Penyisihan online turnamen MLBB & Valorant serta tenggat akhir submisi berkas UI/UX & Data Analytics.',
    highlight: false,
  },
  {
    phase: '05',
    title: 'Grand Final & Puncak Penganugerahan Juara',
    date: '25 September 2027',
    description: 'Presentasi finalis di hadapan dewan juri ahli bertempat di Universitas Multimedia Nusantara dan serah terima trofi resmi.',
    highlight: true,
  },
];

export const FAQS_DATA = [
  {
    q: 'Berapa banyak cabang lomba yang diadakan di ISFEST 2027?',
    a: 'ISFEST 2027 menyelenggarakan tepat 4 cabang lomba pilihan: 2 Cabang Akademik (UI/UX Design Competition & Data Competition AI Analytics) serta 2 Cabang Non-Akademik / E-Sport (Mobile Legends: Bang Bang Invitational & Valorant Tactical Championship).',
  },
  {
    q: 'Siapa saja yang berhak mendaftar di masing-masing kategori lomba?',
    a: 'Untuk kategori Akademik (UI/UX & Data Competition) terbuka bagi mahasiswa aktif D3/D4/S1 seluruh Indonesia dan siswa SMA/SMK sederajat. Untuk kategori E-Sport (MLBB & Valorant) terbuka untuk UMUM se-Indonesia.',
  },
  {
    q: 'Apakah anggota dalam satu tim boleh berasal dari kampus atau sekolah berbeda?',
    a: 'Tentu diperbolehkan! Anda dapat membentuk geng kolaborasi lintas universitas, sekolah, maupun lintas daerah se-Indonesia.',
  },
  {
    q: 'Bagaimana metode pembayaran upeti pendaftaran lomba?',
    a: 'Pembayaran dapat ditransfer melalui rekening resmi panitia (BCA & Mandiri) atau melalui QRIS (GoPay, OVO, Dana, ShopeePay, Mobile Banking). Bukti setor resmi langsung diunggah di formulir pendaftaran website ini.',
  },
  {
    q: 'Apakah seluruh peserta yang berpartisipasi akan memperoleh sertifikat?',
    a: 'Ya! Seluruh peserta yang terdaftar resmi dan mengikuti alur perlombaan hingga selesai akan mendapatkan E-Sertifikat Nasional resmi dari Universitas Multimedia Nusantara.',
  },
  {
    q: 'Apakah babak puncak Grand Final diselenggarakan secara daring atau tatap muka?',
    a: 'Grand Final diselenggarakan secara Hybrid: babak penyisihan berlangsung daring (online), dan puncak presentasi serta awarding bertempat di kampus Universitas Multimedia Nusantara (UMN), Gading Serpong, Tangerang.',
  },
];
