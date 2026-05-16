"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Instagram, Zap } from 'lucide-react';

export default function ArchivePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="mediumLarge"
      background="noiseDiagonalGradient"
      cardStyle="subtle-shadow"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      headingFontWeight="bold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleFullscreen
            navItems={[
              { name: "Home", id: "/" },
              { name: "Minu kohta", id: "/about-page" },
              { name: "Tööde arhiiv", id: "/tööde-arhiiv" },
              { name: "Projektide detailne kirjeldus", id: "/projects" },
              { name: "Võta ühendust", id: "/contact" },
            ]}
            brandName="Lazar Uleksin"
          />
        </div>
        <div id="archive" data-section="archive" className="pt-24 pb-24 px-[var(--vw-1_5)] max-w-[var(--width-content-width)] mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-center">Tööde arhiiv</h1>
          <p className="text-xl text-center">Siin on ülevaade varasematest arhiveeritud töödest ja projektidest.</p>
        </div>
        <div id="footer" data-section="footer">
          <FooterCard
            logoText="Lazar Uleksin"
            socialLinks={[
                { icon: Zap, href: "#", ariaLabel: "TikTok" },
                { icon: Instagram, href: "https://www.instagram.com/lazaruleksin?igsh=dzh6bDl4emVyN2dj&utm_source=qr", ariaLabel: "Instagram" }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}