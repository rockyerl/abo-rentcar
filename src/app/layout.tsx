import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#033269",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Abo Rent Car — Pilih mobil. Siap jalan.",
  description:
    "Abo Rent Car: rental mobil Bandung Raya dengan komunikasi yang praktis, ramah, dan jelas. Pilihan armada lengkap mulai Rp 275.000/hari, lepas kunci atau dengan supir.",
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ name: "Abo Rent Car" }],
  openGraph: {
    title: "Abo Rent Car — Pilih mobil. Siap jalan.",
    description:
      "Abo Rent Car adalah merek rental mobil dengan komunikasi yang praktis, ramah, dan jelas di Bandung Raya. Cek ketersediaan mobil sekarang.",
    url: "https://abo-rentcar.com",
    siteName: "Abo Rent Car",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: "Abo Rent Car",
    description: "Rental Mobil Praktis, Ramah, dan Jelas di Bandung Raya",
    url: "https://abo-rentcar.com",
    telephone: "+6282130554260",
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    priceRange: "Rp 275.000 - Rp 749.000",
  };

  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#02162e] text-slate-100 min-h-screen">{children}</body>
    </html>
  );
}
