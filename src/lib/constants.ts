export const WA_NUMBER = "6282130554260";
export const WA_DISPLAY = "+62 821-3055-4260";
export const COMPANY_NAME = "Abo Rent Car";
export const BRAND_TAGLINE = "Pilih mobil. Siap jalan.";
export const ADDRESS =
  "G-land Valley Cluster Gladis No.10, Jayamekar, Kec. Padalarang, Kab. Bandung Barat, Jawa Barat 40553";

export interface CarFleetItem {
  id: string;
  name: string;
  brand: string;
  modelType: string;
  year: string;
  category: "MPV Keluarga" | "Compact SUV" | "City Car & Hatchback";
  seats: number;
  transmission: "Automatic" | "Manual" | "Automatic CVT";
  fuel: "Hybrid Electric" | "Diesel" | "Bensin";

  // Official Pricing Breakdown from Catalog
  weekday1Day: number;
  weekdayMultiDay: number;
  weekend1Day: number;
  weekendMultiDay: number;

  // Base display prices
  priceSelfDrive: number;
  priceWithDriver: number;
  formattedPriceSelfDrive: string;
  formattedPriceWithDriver: string;

  highlightTag?: string;
  features: string[];
  image: string;
  ratingScore: number;
  tripsCount: number;
}

export const FLEET_CATEGORIES = [
  "Semua Armada",
  "MPV Keluarga",
  "Compact SUV",
  "City Car & Hatchback",
] as const;

export const CARS: CarFleetItem[] = [
  {
    id: "innova-zenix-hybrid",
    name: "Innova Zenix Hybrid",
    brand: "Toyota",
    modelType: "Type G Automatic",
    year: "2024",
    category: "MPV Keluarga",
    seats: 7,
    transmission: "Automatic",
    fuel: "Hybrid Electric",
    weekday1Day: 699000,
    weekdayMultiDay: 649000,
    weekend1Day: 749000,
    weekendMultiDay: 699000,
    priceSelfDrive: 649000,
    priceWithDriver: 849000,
    formattedPriceSelfDrive: "Rp 649.000",
    formattedPriceWithDriver: "Rp 849.000",
    highlightTag: "Paling Diminati & Irit",
    features: [
      "Mesin Hybrid 2.0L Super Irit & Bertenaga",
      "Kabin Luas 7 Kursi & AC Digital Double Blower",
      "Head Unit Touchscreen Apple CarPlay & Android Auto",
      "Suspensi Halus TNGA Nyaman Perjalanan Luar Kota",
    ],
    image: "/cars/catalog/innova-zenix-hybrid-matic.jpg",
    ratingScore: 5.0,
    tripsCount: 198,
  },
  {
    id: "innova-reborn-diesel",
    name: "Innova Reborn Diesel",
    brand: "Toyota",
    modelType: "Type G Automatic",
    year: "2023",
    category: "MPV Keluarga",
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    weekday1Day: 549000,
    weekdayMultiDay: 499000,
    weekend1Day: 599000,
    weekendMultiDay: 549000,
    priceSelfDrive: 499000,
    priceWithDriver: 699000,
    formattedPriceSelfDrive: "Rp 499.000",
    formattedPriceWithDriver: "Rp 699.000",
    highlightTag: "Tangguh & Nyaman",
    features: [
      "Mesin 2.4L 2GD-FTV Turbo Diesel Perkasa di Tanjakan",
      "Transmisi Matic Responsif & Nyaman",
      "Interior Lapang & Bagasi Sangat Lega",
      "Pilihan Utama Wisata Lembang, Ciwidey & Luar Kota",
    ],
    image: "/cars/catalog/innova-reborn-diesel-matic.jpg",
    ratingScore: 4.9,
    tripsCount: 230,
  },
  {
    id: "all-new-raize",
    name: "All New Raize",
    brand: "Toyota",
    modelType: "Type G Automatic",
    year: "2024",
    category: "Compact SUV",
    seats: 5,
    transmission: "Automatic",
    fuel: "Bensin",
    weekday1Day: 449000,
    weekdayMultiDay: 399000,
    weekend1Day: 499000,
    weekendMultiDay: 449000,
    priceSelfDrive: 399000,
    priceWithDriver: 599000,
    formattedPriceSelfDrive: "Rp 399.000",
    formattedPriceWithDriver: "Rp 599.000",
    highlightTag: "Stylish & Lincah",
    features: [
      "Desain Sporty Modern & Ground Clearance Tinggi",
      "Transmisi Matic Lincah Selap-Selip Perkotaan",
      "Digital Speedometer TFT & Layar Audio Modern",
      "Hemat Bahan Bakar Cocok Buat Pasangan / Teman",
    ],
    image: "/cars/catalog/raize-g-matic.jpg",
    ratingScore: 4.9,
    tripsCount: 174,
  },
  {
    id: "all-new-stargazer",
    name: "All New Stargazer",
    brand: "Hyundai",
    modelType: "Type Prime Automatic",
    year: "2024",
    category: "MPV Keluarga",
    seats: 7,
    transmission: "Automatic",
    fuel: "Bensin",
    weekday1Day: 449000,
    weekdayMultiDay: 399000,
    weekend1Day: 499000,
    weekendMultiDay: 449000,
    priceSelfDrive: 399000,
    priceWithDriver: 599000,
    formattedPriceSelfDrive: "Rp 399.000",
    formattedPriceWithDriver: "Rp 599.000",
    highlightTag: "Futuristik & Lega",
    features: [
      "Desain Horizon LED Futuristik Khas Hyundai",
      "Kabin Luas dengan Bantal Headrest Empuk",
      "Wireless Smartphone Charger & Ambient Light",
      "Kenyamanan Suspensi Maksimal untuk Keluarga",
    ],
    image: "/cars/catalog/stargazer-prime-matic.jpg",
    ratingScore: 4.9,
    tripsCount: 165,
  },
  {
    id: "all-new-xpander",
    name: "All New Xpander",
    brand: "Mitsubishi",
    modelType: "Type Exceed Automatic",
    year: "2024",
    category: "MPV Keluarga",
    seats: 7,
    transmission: "Automatic",
    fuel: "Bensin",
    weekday1Day: 449000,
    weekdayMultiDay: 399000,
    weekend1Day: 499000,
    weekendMultiDay: 449000,
    priceSelfDrive: 399000,
    priceWithDriver: 599000,
    formattedPriceSelfDrive: "Rp 399.000",
    formattedPriceWithDriver: "Rp 599.000",
    highlightTag: "Suspensi Paling Lembut",
    features: [
      "Ground Clearance 220mm Aman Segala Medan",
      "Suspensi Kelas Atas Sangat Lembut Tanpa Limbung",
      "Kekedapan Suara Terbaik di Kelasnya",
      "AC Dingin Merata Sampai Baris Belakang",
    ],
    image: "/cars/catalog/xpander-exceed-matic.jpg",
    ratingScore: 5.0,
    tripsCount: 215,
  },
  {
    id: "all-new-brv",
    name: "All New BR-V",
    brand: "Honda",
    modelType: "Type E Automatic",
    year: "2024",
    category: "Compact SUV",
    seats: 7,
    transmission: "Automatic",
    fuel: "Bensin",
    weekday1Day: 449000,
    weekdayMultiDay: 399000,
    weekend1Day: 499000,
    weekendMultiDay: 449000,
    priceSelfDrive: 399000,
    priceWithDriver: 599000,
    formattedPriceSelfDrive: "Rp 399.000",
    formattedPriceWithDriver: "Rp 599.000",
    highlightTag: "Tenaga 121 PS Terbesar",
    features: [
      "Mesin 1.5L i-VTEC Tenaga Terbesar 121 PS",
      "Bodi Kokoh SUV dengan Kapasitas 7 Penumpang",
      "Handling Presisi Khas Honda",
      "Interior Rapi & Bagasi Fleksibel",
    ],
    image: "/cars/catalog/brv-e-matic.jpg",
    ratingScore: 4.8,
    tripsCount: 142,
  },
  {
    id: "all-new-xl7-hybrid",
    name: "All New XL7 Hybrid",
    brand: "Suzuki",
    modelType: "Type Beta Automatic",
    year: "2024",
    category: "Compact SUV",
    seats: 7,
    transmission: "Automatic",
    fuel: "Hybrid Electric",
    weekday1Day: 449000,
    weekdayMultiDay: 399000,
    weekend1Day: 499000,
    weekendMultiDay: 449000,
    priceSelfDrive: 399000,
    priceWithDriver: 599000,
    formattedPriceSelfDrive: "Rp 399.000",
    formattedPriceWithDriver: "Rp 599.000",
    highlightTag: "Smart Hybrid Irit",
    features: [
      "Teknologi Smart Hybrid Suzuki Irit Bensin",
      "Karakter SUV Tangguh & Maskulin",
      "Kabin 7-Seater Nyaman dengan AC Digital Auto Climate",
      "Pilihan Populer Jelajah Bandung Raya",
    ],
    image: "/cars/catalog/xl7-beta-hybrid-matic.jpg",
    ratingScore: 4.9,
    tripsCount: 153,
  },
  {
    id: "all-new-xenia",
    name: "All New Xenia",
    brand: "Daihatsu",
    modelType: "Type G Automatic",
    year: "2024",
    category: "MPV Keluarga",
    seats: 7,
    transmission: "Automatic",
    fuel: "Bensin",
    weekday1Day: 449000,
    weekdayMultiDay: 399000,
    weekend1Day: 499000,
    weekendMultiDay: 449000,
    priceSelfDrive: 399000,
    priceWithDriver: 599000,
    formattedPriceSelfDrive: "Rp 399.000",
    formattedPriceWithDriver: "Rp 599.000",
    highlightTag: "Sofa Mode Fleksibel",
    features: [
      "Fitur Sofa Mode untuk Istirahat Nyaman di Perjalanan",
      "Transmisi D-CVT Halus & Irit BBM",
      "Radius Putar Kecil Mudah Parkir di Mana Saja",
      "Kapasitas 7 Penumpang Siap Jalan",
    ],
    image: "/cars/catalog/xenia-g-matic.jpg",
    ratingScore: 4.8,
    tripsCount: 160,
  },
  {
    id: "all-new-avanza",
    name: "All New Avanza",
    brand: "Toyota",
    modelType: "Type G Manual",
    year: "2024",
    category: "MPV Keluarga",
    seats: 7,
    transmission: "Manual",
    fuel: "Bensin",
    weekday1Day: 449000,
    weekdayMultiDay: 399000,
    weekend1Day: 499000,
    weekendMultiDay: 449000,
    priceSelfDrive: 399000,
    priceWithDriver: 599000,
    formattedPriceSelfDrive: "Rp 399.000",
    formattedPriceWithDriver: "Rp 599.000",
    highlightTag: "Favorit Keluarga Indonesia",
    features: [
      "Pilihan Favorit Perjalanan Keluarga & Rombongan",
      "Transmisi Manual Bertenaga & Responsif di Tanjakan",
      "Kabin Luas 7 Penumpang dengan Kursi Nyaman",
      "Sangat Irit & Handal Menjelajah Kota",
    ],
    image: "/cars/catalog/avanza-g-manual.jpg",
    ratingScore: 4.9,
    tripsCount: 280,
  },
  {
    id: "all-new-agya-2024",
    name: "All New Agya 2024",
    brand: "Toyota",
    modelType: "Type E Automatic",
    year: "2024",
    category: "City Car & Hatchback",
    seats: 5,
    transmission: "Automatic",
    fuel: "Bensin",
    weekday1Day: 375000,
    weekdayMultiDay: 349000,
    weekend1Day: 399000,
    weekendMultiDay: 375000,
    priceSelfDrive: 349000,
    priceWithDriver: 549000,
    formattedPriceSelfDrive: "Rp 349.000",
    formattedPriceWithDriver: "Rp 549.000",
    highlightTag: "Tahun Muda & Super Irit",
    features: [
      "Platform Baru Lebih Lega & Mantap Dikendarai",
      "Mesin 1.2L WA-VE Bertenaga & Super Hemat Bensin",
      "Transmisi CVT Halus Tanpa Hentakan",
      "Sangat Pas untuk Mobilitas Santai di Bandung",
    ],
    image: "/cars/catalog/agya-e-matic.jpg",
    ratingScore: 4.9,
    tripsCount: 190,
  },
  {
    id: "all-new-brio-2024",
    name: "All New Brio 2024",
    brand: "Honda",
    modelType: "Type E Automatic CVT",
    year: "2024",
    category: "City Car & Hatchback",
    seats: 5,
    transmission: "Automatic CVT",
    fuel: "Bensin",
    weekday1Day: 375000,
    weekdayMultiDay: 349000,
    weekend1Day: 399000,
    weekendMultiDay: 375000,
    priceSelfDrive: 349000,
    priceWithDriver: 549000,
    formattedPriceSelfDrive: "Rp 349.000",
    formattedPriceWithDriver: "Rp 549.000",
    highlightTag: "Paling Laris Anak Muda",
    features: [
      "Facelift 2024 Terbaru Tampil Modis & Menawan",
      "Mesin 1.2L i-VTEC 90 PS Paling Gesit di Kelasnya",
      "Kenyamanan Kabin Honda yang Ergonomis",
      "Parkir Super Mudah di Kafe & Spot Wisata Hits",
    ],
    image: "/cars/catalog/brio-2024-e-matic.jpg",
    ratingScore: 5.0,
    tripsCount: 245,
  },
  {
    id: "all-new-brio-2022",
    name: "All New Brio 2022",
    brand: "Honda",
    modelType: "Type E Automatic CVT",
    year: "2022",
    category: "City Car & Hatchback",
    seats: 5,
    transmission: "Automatic CVT",
    fuel: "Bensin",
    weekday1Day: 349000,
    weekdayMultiDay: 325000,
    weekend1Day: 375000,
    weekendMultiDay: 349000,
    priceSelfDrive: 325000,
    priceWithDriver: 525000,
    formattedPriceSelfDrive: "Rp 325.000",
    formattedPriceWithDriver: "Rp 525.000",
    highlightTag: "Hemat & Berkualitas",
    features: [
      "Transmisi Otomatis CVT Halus & Bebas Pegal",
      "Kondisi Terawat Prima Standar Servis Honda Resmi",
      "AC Menggigil Dingin & Interior Bersih Wangi",
      "Tarif Sangat Terjangkau untuk Harian / Mingguan",
    ],
    image: "/cars/catalog/brio-2022-e-matic.jpg",
    ratingScore: 4.8,
    tripsCount: 310,
  },
  {
    id: "all-new-sigra",
    name: "All New Sigra",
    brand: "Daihatsu",
    modelType: "Type R Automatic",
    year: "2024",
    category: "MPV Keluarga",
    seats: 7,
    transmission: "Automatic",
    fuel: "Bensin",
    weekday1Day: 349000,
    weekdayMultiDay: 299000,
    weekend1Day: 375000,
    weekendMultiDay: 349000,
    priceSelfDrive: 299000,
    priceWithDriver: 499000,
    formattedPriceSelfDrive: "Rp 299.000",
    formattedPriceWithDriver: "Rp 499.000",
    highlightTag: "7-Seater Super Ekonomis",
    features: [
      "Tipe Tertinggi R Automatic dengan Grille Modern",
      "Muat 7 Penumpang dengan Biaya Super Terjangkau",
      "Sangat Hemat BBM Ramah di Kantong",
      "Rear Air Circulator Dingin Sampai Belakang",
    ],
    image: "/cars/catalog/sigra-r-matic.jpg",
    ratingScore: 4.8,
    tripsCount: 220,
  },
  {
    id: "all-new-calya-2024",
    name: "All New Calya 2024",
    brand: "Toyota",
    modelType: "Type G Manual",
    year: "2024",
    category: "MPV Keluarga",
    seats: 7,
    transmission: "Manual",
    fuel: "Bensin",
    weekday1Day: 299000,
    weekdayMultiDay: 275000,
    weekend1Day: 325000,
    weekendMultiDay: 299000,
    priceSelfDrive: 275000,
    priceWithDriver: 475000,
    formattedPriceSelfDrive: "Rp 275.000",
    formattedPriceWithDriver: "Rp 475.000",
    highlightTag: "Mulai Rp 275 Ribu",
    features: [
      "Harga Termurah 7 Penumpang Mulai Rp 275.000/hari",
      "Unit Baru Tahun 2024 Kondisi Mulus & Bersih",
      "Transmisi Manual Tangguh & Efisien",
      "Pilihan Tepat Perjalanan Hemat Seluruh Keluarga",
    ],
    image: "/cars/catalog/calya-g-manual.jpg",
    ratingScore: 4.9,
    tripsCount: 350,
  },
];

export const STRATEGIC_LOCATIONS = [
  "Kantor Abo Rent Car Padalarang (G-land Valley)",
  "Stasiun Kereta Cepat Whoosh Padalarang (Antar-Jemput Gratis)",
  "Stasiun Kereta Cepat Whoosh Tegalluar",
  "Stasiun Bandung (Pintu Kebon Kawung)",
  "Stasiun Bandung (Pintu Selatan Stasiun Timur)",
  "Bandara Internasional Kertajati (BIJB)",
  "Gerbang Tol Padalarang Timur",
  "Area Kota Baru Parahyangan (KBP)",
  "Hotel / Villa Area Bandung Kota (Dago, Riau, Braga, Pasteur)",
  "Area Wisata Lembang / Ciwidey",
  "Lainnya (Isi Alamat Manual)",
];

export const TRUST_PILLARS = [
  {
    title: "Praktis",
    desc: "Proses cepat tanpa birokrasi berbelit. Pesan unit, pilih tanggal, dan mobil siap digunakan.",
  },
  {
    title: "Ramah",
    desc: "Komunikasi santun dan bersahabat. Tim kami selalu siap membantu dan mendampingi kebutuhan Anda.",
  },
  {
    title: "Jelas",
    desc: "Harga transparan tanpa biaya tersembunyi. Syarat mudah dan detail pemesanan terkonfirmasi rapi.",
  },
];

export interface CaseStudy {
  id: string;
  clientCategory: string;
  title: string;
  clientName: string;
  location: string;
  duration: string;
  challenge: string;
  solution: string;
  vehicleUsed: string;
  quote: string;
  rating: number;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-whoosh-padalarang",
    clientCategory: "Kedatangan Whoosh Padalarang",
    title: "Tiba di Stasiun Whoosh Jam 08.00, Mobil Langsung Siap di Lobi",
    clientName: "Bpk. Hendra & Keluarga",
    location: "Stasiun Whoosh Padalarang ke Lembang",
    duration: "Sewa 3 Hari (Lepas Kunci)",
    challenge:
      "Perjalanan keluarga dari Jakarta naik kereta cepat Whoosh membawa 2 koper besar dan anak kecil. Membutuhkan mobil keluarga yang sudah standby di stasiun tanpa harus menunggu atau naik taksi online lagi.",
    solution:
      "Abo Rent Car mengantarkan unit All New Innova Zenix Hybrid langsung ke titik penjemputan Stasiun Padalarang 15 menit sebelum kereta tiba. Serah terima unit cepat hanya 5 menit dengan verifikasi KTP & SIM.",
    vehicleUsed: "Toyota Innova Zenix Hybrid 2024",
    quote:
      "Luar biasa praktis! Kereta baru sampai, mobil sudah nunggu di lobi Padalarang. Kondisi mobil wangi, bensin penuh, dan anak-anak nyaman sepanjang jalan ke villa.",
    rating: 5,
  },
  {
    id: "cs-liburan-ciwidey",
    clientCategory: "Wisata Keluarga Ciwidey & Pangalengan",
    title: "Liburan Nyaman Melibas Tanjakan Ciwidey Tanpa Kendala",
    clientName: "Ibu Ratna & Rombongan",
    location: "Bandung Kota - Kawah Putih - Nimo Highland",
    duration: "Sewa 2 Hari (Plus Supir Ramah)",
    challenge:
      "Rombongan 6 orang yang belum hafal jalur curam dan berkabut di Ciwidey. Ingin supir yang santun, paham tempat kuliner enak, dan mobil bertorsi kuat.",
    solution:
      "Menyediakan Toyota Innova Reborn Diesel bertorsi melimpah dengan supir berpengalaman yang ramah dan hafal rute alternatif anti macet di akhir pekan.",
    vehicleUsed: "Toyota Innova Reborn Diesel 2023",
    quote:
      "Supirnya sopan banget, bawanya halus tapi lincah di tanjakan. Rekomendasi kulinernya juga top! Benar-benar sesuai mottonya: praktis, ramah, dan jelas.",
    rating: 5,
  },
  {
    id: "cs-keliling-kafe-bandung",
    clientCategory: "Wisata Kuliner & Kafe Hits",
    title: "Eksplorasi Kafe Dago & Riau Super Hemat dan Lincah",
    clientName: "Dimas & Sahabat",
    location: "Dago Atas, Riau, Braga, Punclut",
    duration: "Sewa 2 Hari (Lepas Kunci)",
    challenge:
      "Mencari mobil kompak yang lincah di jalanan sempit Bandung, mudah parkir di kafe hits yang ramai, dan irit bensin tanpa menguras budget liburan.",
    solution:
      "Menyediakan Honda All New Brio 2024 CVT dengan tarif ekonomis mulai Rp 349.000/hari. Proses serah terima unit diantar langsung ke penginapan di area Braga.",
    vehicleUsed: "Honda All New Brio 2024 CVT",
    quote:
      "Mobilnya modis dan super irit! Buat nongkrong ke Dago Pakar dan kafe-kafe hits gak pusing mikirin parkiran. Proses sewanya juga gak ribet sama sekali.",
    rating: 5,
  },
  {
    id: "cs-acara-keluarga",
    clientCategory: "Acara Silaturahmi & Hajatan",
    title: "Mobil 7 Penumpang Luas untuk Mobilitas Seluruh Keluarga",
    clientName: "Bpk. Suryadi",
    location: "Kota Baru Parahyangan - Cimahi - Bandung",
    duration: "Sewa 4 Hari (Lepas Kunci)",
    challenge:
      "Kebutuhan mendesak mengangkut keluarga besar saat acara hajatan keluarga di Bandung Barat selama 4 hari penuh dengan biaya yang hemat.",
    solution:
      "Memberikan unit All New Avanza 2024 dengan diskon sewa >2 hari sehingga biaya jauh lebih hemat, kabin lega muat 7 orang dengan AC dingin merata.",
    vehicleUsed: "Toyota All New Avanza 2024",
    quote:
      "Unitnya fresh, interior bersih tidak bau rokok, dan tarifnya transparan sesuai yang ada di katalog. Sangat terbantu untuk acara keluarga kami.",
    rating: 5,
  },
];

export interface ExperienceStep {
  step: string;
  title: string;
  desc: string;
  tip: string;
}

export const B2C_EXPERIENCE_STEPS: ExperienceStep[] = [
  {
    step: "01",
    title: "Pilih Mobil & Tanggal",
    desc: "Buka katalog resmi kami dan tentukan unit mobil yang sesuai kebutuhan perjalanan Anda (lepas kunci atau dengan supir).",
    tip: "Lihat tabel harga weekday / weekend transparan",
  },
  {
    step: "02",
    title: "Kirim Detail Pemesanan",
    desc: "Sebutkan unit, tanggal sewa, dan lokasi penjemputan (stasiun Whoosh, hotel, bandara, atau alamat pribadi Anda).",
    tip: "Bisa ketik alamat manual sesuai keinginan",
  },
  {
    step: "03",
    title: "Konfirmasi & Serah Terima",
    desc: "Tim kami menghubungi dengan ramah dan mengonfirmasi ketersediaan. Verifikasi cepat tanpa deposit uang tunai rumit.",
    tip: "Cukup foto KTP & SIM yang sah",
  },
  {
    step: "04",
    title: "Mobil Siap Jalan",
    desc: "Unit diantar tepat waktu dalam kondisi bersih, wangi, AC dingin, dan bensin cukup. Selamat menikmati perjalanan Anda!",
    tip: "Pilih mobil. Siap jalan.",
  },
];

export interface TourPackageCar {
  name: string;
  price: number;
  formattedPrice: string;
}

export interface DriverTourPackage {
  id: string;
  destination: string;
  tagline: string;
  badge: string;
  image: string;
  destinationsCovered: string[];
  cars: TourPackageCar[];
}

export const DRIVER_TOUR_PACKAGES: DriverTourPackage[] = [
  {
    id: "bandung-kota",
    destination: "Bandung Kota",
    tagline: "Eksplorasi heritage, museum, pusat kuliner & belanja dalam kota Bandung.",
    badge: "Wisata Kota & Bisnis",
    image: "/packages/gedung-sate.jpg", // fallback or destination highlight
    destinationsCovered: [
      "Gedung Sate & Museum Pos",
      "Kawasan Braga & Asia Afrika",
      "Pusat Oleh-oleh & Factory Outlet",
      "Dago, Riau & Kuliner Bandung",
    ],
    cars: [
      { name: "Innova Reborn", price: 850000, formattedPrice: "Rp 850.000" },
      { name: "BRV / Stargazer / XL7", price: 800000, formattedPrice: "Rp 800.000" },
      { name: "All New Xenia / Raize", price: 750000, formattedPrice: "Rp 750.000" },
      { name: "Honda Brio", price: 650000, formattedPrice: "Rp 650.000" },
    ],
  },
  {
    id: "lembang",
    destination: "Lembang (Bandung Utara)",
    tagline: "Pesona alam sejuk perbukitan, kawah vulkanik & destinasi keluarga favorit.",
    badge: "Paling Populer",
    image: "/packages/tangkuban-parahu.jpg",
    destinationsCovered: [
      "Tangkuban Parahu",
      "Floating Market & Farmhouse Lembang",
      "The Great Asia Africa",
      "Kebun Teh & Orchid Forest Cikole",
    ],
    cars: [
      { name: "Innova Zenix", price: 1000000, formattedPrice: "Rp 1.000.000" },
      { name: "Innova Reborn", price: 900000, formattedPrice: "Rp 900.000" },
      { name: "BRV / Stargazer / XL7", price: 850000, formattedPrice: "Rp 850.000" },
      { name: "All New Xenia / Raize", price: 780000, formattedPrice: "Rp 780.000" },
      { name: "Honda Brio", price: 700000, formattedPrice: "Rp 700.000" },
    ],
  },
  {
    id: "ciwidey-pangalengan",
    destination: "Ciwidey / Pangalengan (Bandung Selatan)",
    tagline: "Pemandangan kebun teh legendaris, danau kawah eksotis & petualangan alam terbuka.",
    badge: "Panorama Alam Terbaik",
    image: "/packages/kawah-putih.jpg",
    destinationsCovered: [
      "Kawah Putih & Ranca Upas",
      "Nimo Highland & Jembatan Kaca",
      "Situ Cileunca & Rafting",
      "Kebun Teh Malabar & Wayang Windu",
    ],
    cars: [
      { name: "Innova Zenix", price: 1050000, formattedPrice: "Rp 1.050.000" },
      { name: "Innova Reborn", price: 950000, formattedPrice: "Rp 950.000" },
      { name: "BRV / Stargazer / XL7", price: 900000, formattedPrice: "Rp 900.000" },
      { name: "All New Xenia / Raize", price: 870000, formattedPrice: "Rp 870.000" },
      { name: "Honda Brio", price: 800000, formattedPrice: "Rp 800.000" },
    ],
  },
];

export const TOUR_PACKAGE_INCLUSIONS = [
  "Unit Mobil Tahun Muda (Bersih & AC Dingin)",
  "Driver Berpengalaman, Sopan & Ramah",
  "Bahan Bakar Minyak (BBM)",
  "Uang Makan Supir",
  "Tarif Tol Selama Rute Wisata",
];

export const TOUR_PACKAGE_EXCLUSIONS = [
  "Tiket masuk lokasi objek wisata",
  "Biaya parkir kendaraan di lokasi wisata",
];
