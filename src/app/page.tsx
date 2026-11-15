"use client";

import { useState } from "react";
import Navbar from "@/shared/components/Navbar";
import Hero from "@/features/hero/components/Hero";
import CaseStudies from "@/features/cases/components/CaseStudies";
import Fleet from "@/features/fleet/components/Fleet";
import HowItWorks from "@/features/howitworks/components/HowItWorks";
import OrderForm from "@/features/booking/components/OrderForm";
import FAQ from "@/features/faq/components/FAQ";
import Contact from "@/features/contact/components/Contact";
import Footer from "@/shared/components/Footer";
import FloatingWA from "@/shared/components/FloatingWA";

export default function Home() {
  const [calculatorCarId, setCalculatorCarId] = useState<string | undefined>(undefined);

  const handleSelectCarForCalculator = (carId: string) => {
    setCalculatorCarId(carId);
    const element = document.getElementById("kalkulator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero: Solusi Perjalanan Nyata */}
        <Hero />

        {/* 2. CASE STUDIES FIRST: Skenario & Bukti Nyata Pelanggan */}
        <CaseStudies onSelectCarForBooking={handleSelectCarForCalculator} />

        {/* 3. Pilihan Mobil Lengkap */}
        <Fleet onSelectCar={handleSelectCarForCalculator} />

        {/* 4. Cara Sewa Ringkas (Tanpa Deposit) */}
        <HowItWorks />

        {/* 5. Kalkulator & Booking Instan */}
        <OrderForm selectedCarId={calculatorCarId} />

        {/* 6. Tanya Jawab (FAQ) */}
        <FAQ />

        {/* 7. Hub Padalarang & Kontak */}
        <Contact />
      </main>
      <Footer />
      <FloatingWA />
    </>
  );
}
