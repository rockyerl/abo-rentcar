import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ADDRESS, COMPANY_NAME, WA_DISPLAY, WA_NUMBER, CARS } from "@/lib/constants";

const BASE_URL = "https://abo-rentcar.com";

export const viewport: Viewport = {
  themeColor: "#033269",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Abo Rent Car — Rental Mobil Bandung Raya | Pilih Mobil, Siap Jalan",
    template: "%s | Abo Rent Car",
  },
  description:
    "Abo Rent Car: rental mobil Bandung Raya, Padalarang, dan Cimahi dengan komunikasi praktis, ramah, dan jelas. Pilihan armada Innova Zenix Hybrid, Reborn Diesel, Raize, Stargazer, Xpander, Brio mulai Rp 275.000/hari. Lepas kunci tanpa deposit tunai atau plus supir ramah.",
  applicationName: "Abo Rent Car",
  authors: [{ name: "Abo Rent Car Indonesia", url: BASE_URL }],
  generator: "Next.js",
  keywords: [
    "rental mobil bandung",
    "sewa mobil bandung",
    "rental mobil padalarang whoosh",
    "sewa mobil lepas kunci bandung",
    "rental mobil cimahi",
    "sewa innova zenix hybrid bandung",
    "sewa innova reborn bandung",
    "sewa brio bandung",
    "sewa xpander bandung",
    "rental mobil stasiun padalarang",
    "sewa mobil tanpa deposit bandung",
    "rental mobil murah bandung",
    "sewa mobil wisata lembang ciwidey",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Abo Rent Car",
  publisher: "Abo Rent Car",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/abo-rent-car-logo.png", type: "image/png" },
    ],
    apple: [{ url: "/abo-rent-car-logo.png" }],
  },
  openGraph: {
    title: "Abo Rent Car — Rental Mobil Bandung Raya | Pilih Mobil, Siap Jalan",
    description:
      "Rental mobil Bandung Raya praktis, ramah, dan jelas. Armada tahun muda 2023-2024 terawat prima mulai Rp 275.000/hari. Antar gratis Stasiun Whoosh Padalarang.",
    url: BASE_URL,
    siteName: COMPANY_NAME,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/abo-rent-car-logo.png`,
        width: 742,
        height: 514,
        alt: "Logo Resmi Abo Rent Car Bandung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abo Rent Car — Rental Mobil Bandung Raya",
    description:
      "Pilih mobil. Siap jalan. Rental mobil praktis, ramah, dan jelas di Bandung Raya & Stasiun Whoosh Padalarang.",
    images: [`${BASE_URL}/abo-rent-car-logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google5af37c72f9949e81",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Comprehensive Structured Data (Schema.org JSON-LD)
  const schemaAutoRental = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "@id": `${BASE_URL}/#autorental`,
    name: COMPANY_NAME,
    legalName: "Abo Rent Car Indonesia",
    url: BASE_URL,
    logo: `${BASE_URL}/abo-rent-car-logo.png`,
    image: `${BASE_URL}/abo-rent-car-logo.png`,
    description:
      "Penyedia jasa rental mobil terpercaya di Bandung Raya, Cimahi, dan Stasiun Whoosh Padalarang. Menawarkan sewa lepas kunci tanpa deposit tunai dan layanan supir berpengalaman.",
    telephone: `+${WA_NUMBER}`,
    priceRange: "Rp 275.000 - Rp 749.000",
    currenciesAccepted: "IDR",
    paymentAccepted: "Cash, Transfer Bank, QRIS",
    address: {
      "@type": "PostalAddress",
      streetAddress: "G-land Valley Cluster Gladis No.10, Jayamekar",
      addressLocality: "Padalarang",
      addressRegion: "Jawa Barat",
      postalCode: "40553",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.8378,
      longitude: 107.4789,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Bandung" },
      { "@type": "AdministrativeArea", name: "Bandung Barat" },
      { "@type": "AdministrativeArea", name: "Cimahi" },
      { "@type": "Place", name: "Stasiun Kereta Cepat Whoosh Padalarang" },
      { "@type": "Place", name: "Bandara Internasional Kertajati" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Katalog Rental Mobil Abo Rent Car",
      itemListElement: CARS.map((car, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: `${car.name} (${car.modelType})`,
          category: car.category,
          image: `${BASE_URL}${car.image}`,
          description: `${car.name} tahun ${car.year}, transmisi ${car.transmission}, bahan bakar ${car.fuel}, kapasitas ${car.seats} penumpang.`,
        },
        price: car.priceSelfDrive,
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.95",
      reviewCount: "1280",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Apakah benar bisa sewa lepas kunci tanpa perlu simpan uang deposit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Benar sekali! Abo Rent Car tidak menahan uang deposit tunai Anda. Cukup lampirkan foto KTP asli, SIM A aktif, dan dokumen pendukung sederhana untuk verifikasi cepat.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana jika kereta Whoosh atau pesawat saya delay saat tiba di Bandung?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tidak ada biaya tambahan untuk waktu tunggu! Tim kami secara proaktif memantau status kedatangan kereta Whoosh Padalarang atau penerbangan Anda.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah mobil bisa diantar langsung ke hotel atau alamat saya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sangat bisa. Kami menyediakan layanan antar-jemput mobil langsung ke hotel bintang 5, villa di Lembang / Ciwidey, stasiun kereta, maupun alamat rumah di seluruh Bandung Raya.",
        },
      },
      {
        "@type": "Question",
        name: "Berapa harga sewa mobil di Abo Rent Car?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Harga sewa mulai dari Rp 275.000/hari untuk Calya hingga Rp 699.000/hari untuk Innova Zenix Hybrid, dengan pilihan tarif weekday dan weekend transparan.",
        },
      },
    ],
  };

  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaAutoRental) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
        />
      </head>
      <body className="antialiased bg-[#02162e] text-slate-100 min-h-screen">{children}</body>
    </html>
  );
}
