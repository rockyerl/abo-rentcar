"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Fleet from "@/components/Fleet";
import OrderForm from "@/components/OrderForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";

export default function Home() {
    useEffect(() => {
        // Scroll animations
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("anim-visible"); }),
            { threshold: 0.1 }
        );
        document.querySelectorAll(".anim-hidden").forEach((el) => observer.observe(el));

        // Custom cursor
        const cursor = document.querySelector(".cursor") as HTMLElement;
        const ring = document.querySelector(".cursor-ring") as HTMLElement;
        let rx = 0, ry = 0;

        const moveCursor = (e: MouseEvent) => {
            if (cursor) { cursor.style.left = e.clientX - 6 + "px"; cursor.style.top = e.clientY - 6 + "px"; }
            rx += (e.clientX - 18 - rx) * 0.15;
            ry += (e.clientY - 18 - ry) * 0.15;
            if (ring) { ring.style.left = rx + "px"; ring.style.top = ry + "px"; }
        };

        let rafId: number;
        const smoothRing = (e: MouseEvent) => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => moveCursor(e));
        };

        document.addEventListener("mousemove", smoothRing);

        document.querySelectorAll("a, button").forEach((el) => {
            el.addEventListener("mouseenter", () => { if (cursor) cursor.style.transform = "scale(2.5)"; if (ring) ring.style.transform = "scale(1.5)"; });
            el.addEventListener("mouseleave", () => { if (cursor) cursor.style.transform = "scale(1)"; if (ring) ring.style.transform = "scale(1)"; });
        });

        return () => {
            observer.disconnect();
            document.removeEventListener("mousemove", smoothRing);
        };
    }, []);

    return (
        <>
            <div className="cursor" />
            <div className="cursor-ring" />
            <Navbar />
            <main>
                <Hero />
                <Benefits />
                <Fleet />
                <OrderForm />
                <Contact />
            </main>
            <Footer />
            <FloatingWA />
        </>
    );
}