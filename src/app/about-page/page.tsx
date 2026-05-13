"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { User } from "lucide-react";
import TeamCardTen from '@/components/sections/team/TeamCardTen';

export default function AboutPage() {
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
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "/" },
            { name: "Minu kohta", id: "/about-page" },
            { name: "Projects", id: "/projects" },
            { name: "Contact", id: "/contact" },
          ]}
          brandName="Lazar Uleksin"
        />

        <div id="about-content" data-section="about-content" className="pt-24">
          <TeamCardTen
            title="Minu teekond ja areng"
            tag="Biograafia"
            memberVariant="card"
            membersAnimation="blur-reveal"
            members={[
              {
                id: "1",                name: "Lazar Uleksin",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778674801513-jntq5j0h.jpg?_wi=2",                imageAlt: "Lazar Uleksin portree"
              }
            ]}
            useInvertedBackground={false}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            logoText="Lazar Uleksin"
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