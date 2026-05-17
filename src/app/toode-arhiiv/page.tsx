"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterCard from '@/components/sections/footer/FooterCard';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import { Instagram, Zap } from 'lucide-react';

export default function ToodeArhiivPage() {
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
                { name: "Projektide detailne kirjeldus", id: "/projects" },
                { name: "Tööde arhiiv", id: "https://canva.link/ioqz9m5udeiwbjz" },
                { name: "Võta ühendust", id: "/contact" },
            ]}
            brandName="Lazar Uleksin"
            />
        </div>

        <div id="features" data-section="features" className="pt-24 pb-24">
            <FeatureCardMedia
              animationType="slide-up"
              textboxLayout="split"
              title="Tööde arhiiv"
              description="Kõik varasemad tööd ja projektid ühes kohas."
              features={[]}
              useInvertedBackground={false}
            />
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