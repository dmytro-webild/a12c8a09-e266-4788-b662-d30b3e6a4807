"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function AboutPage() {
  const [bio, setBio] = useState("");

  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumLarge"
        background="noiseDiagonalGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            navItems={[
              { name: "Home", id: "/" },
              { name: "Minu kohta", id: "/about-page" },
              { name: "Projects", id: "/projects" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Lazar Uleksin"
          />
        </div>

        <div id="about-content" data-section="about-content" className="pt-24">
          <div className="px-[var(--vw-1_5)] py-12 max-w-[var(--width-content-width)] mx-auto">
            <h1 className="text-5xl font-bold mb-8">Minu kohta</h1>
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="w-full">
                  <img 
                      src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778691500081-h2hs8ikv.jpg" 
                      alt="Lazar Uleksin portree" 
                      className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full">
                    <div className="bg-[var(--card)] p-6 rounded-lg shadow-sm border border-[var(--accent)]">
                        <label className="block text-lg font-semibold mb-4">Minu elulugu</label>
                        <textarea 
                            value={bio} 
                            onChange={(e) => setBio(e.target.value)} 
                            placeholder="Kirjuta siia oma biograafia..."
                            className="w-full p-4 rounded-lg border bg-[var(--background)] min-h-[300px] resize-none overflow-hidden"
                        />
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            logoText="Lazar Uleksin"
            videoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/assets/default-footer-video.mp4"
            columns={[
              { title: "Sotsiaalmeedia", items: [{ label: "LinkedIn", href: "#" }, { label: "Instagram", href: "#" }] },
              { title: "Navigatsioon", items: [{ label: "Kodu", href: "/" }, { label: "Minu kohta", href: "/about-page" }, { label: "Kontakt", href: "/contact" }] },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}