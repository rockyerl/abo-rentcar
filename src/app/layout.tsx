import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ABO Rent Car – Sewa Mobil Bandung Raya",
  description:
    "Sewa mobil terpercaya di Bandung Raya, Kota Cimahi, dan Kabupaten Bandung Barat. Lepas kunci atau plus driver. Tanpa deposit, bisa COD.",
  openGraph: {
    title: "ABO Rent Car – Sewa Mobil Bandung Raya",
    description: "Sewa mobil terpercaya, mobil fresh dan terawat, tanpa deposit.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
