"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { FileText } from "lucide-react";

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
            { name: "Projects", id: "/#projects" },
            { name: "Contact", id: "/#contact" },
          ]}
          brandName="Lazar Uleksin"
        />

        <div id="about-content" data-section="about-content" className="pt-24">
          <MediaAbout
            title="Minu kohta"
            description="Tere! Olen 18-aastane noormees Tallinnast, kelle kirg elus on pidev liikumine ja enesearendamine. Olgu see tantsupõrandal, jalgpalliväljakul või uusi riike avastades — ma usun, et kõige väärtuslikumad õppetunnid tulevad väljaspool mugavustsooni. Siin lehel jagan oma eluteed, kogemusi ja väärtusi, mis mind edasi viivad."
            tag="Biograafia"
            buttons={[
              { text: "Laadi alla minu CV", href: "/cv.pdf" }
            ]}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778674801513-jntq5j0h.jpg?_wi=2"
            useInvertedBackground={false}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            logoText="Lazar Uleksin"
            columns={[
              { title: "Sotsiaalmeedia", items: [{ label: "LinkedIn", href: "#" }, { label: "Instagram", href: "#" }] },
              { title: "Navigatsioon", items: [{ label: "Kodu", href: "/" }, { label: "Minu kohta", href: "/about-page" }, { label: "Kontakt", href: "/#contact" }] },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
