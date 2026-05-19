"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Instagram, Music } from 'lucide-react';

export default function CVPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="medium"
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
              { name: "Projektid", id: "/projects" },
              { name: "CV", id: "/cv" },
              { name: "Arhiiv", id: "https://canva.link/ioqz9m5udeiwbjz" },
              { name: "Kontakt", id: "/contact" },
            ]}
            brandName="Lazar Uleksin"
          />
        </div>

        <main className="py-24 px-6 md:px-12 flex flex-col items-center gap-12">
          <h1 className="text-4xl font-bold mb-8">Minu CV</h1>
          <div className="flex flex-col gap-8 w-full max-w-4xl">
            <img 
              src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1779193437413-m0aa4yuu.png" 
              alt="CV Page 1" 
              className="w-full rounded-lg shadow-lg"
            />
            <img 
              src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1779193437413-nlztll9e.png" 
              alt="CV Page 2" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </main>

        <div id="footer" data-section="footer">
          <FooterCard
            logoText="Lazar Uleksin"
            socialLinks={[
                { icon: Instagram, href: "https://www.instagram.com/lazaruleksin?igsh=dzh6bDl4emVyN2dj&utm_source=qr", ariaLabel: "Instagram" },
                { icon: Music, href: "https://www.tiktok.com/@lassu51", ariaLabel: "TikTok" }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}