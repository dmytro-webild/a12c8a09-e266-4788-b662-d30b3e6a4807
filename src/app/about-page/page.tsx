"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import TeamCardSix from '@/components/sections/team/TeamCardSix';

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
          <TeamCardSix
            title="Minu teekond ja areng"
            description="Biograafia"
            members={[
              {
                id: "1",                name: "Lazar Uleksin",                role: "Portree",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778674801513-jntq5j0h.jpg?_wi=2",                imageAlt: "Lazar Uleksin portree"
              }
            ]}
            gridVariant="uniform-all-items-equal"
            animationType="blur-reveal"
            textboxLayout="default"
            useInvertedBackground={false}
            textBoxClassName="flex-[1.5]"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
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