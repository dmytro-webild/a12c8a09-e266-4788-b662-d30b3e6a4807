"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { User } from "lucide-react";

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
          <TestimonialAboutCard
            tag="Biograafia"
            title="Minu teekond ja areng"
            description="Olen 18-aastane noormees Tallinnast, kelle kirg elus on pidev liikumine ja enesearendamine. Olgu see tantsupõrandal, jalgpalliväljakul või uusi riike avastades — ma usun, et kõige väärtuslikumad õppetunnid tulevad väljaspool mugavustsooni. Olen pühendunud tipptasemel klienditeenindusele ja pidevale uute oskuste omandamisele, mis aitavad mul kasvada nii isiklikult kui professionaalselt.\n\nMinu eesmärk on ühendada loovus, distsipliin ja meeskonnatöö, et luua väärtust igas ettevõtmises, mida ette võtan. See teekond on alles algus ning ootan põnevusega uusi väljakutseid, mis aitavad mul rakendada kõike seda, mida olen siiani õppinud. Usun kindlalt, et pidev eneseareng ja avatud meel avavad uksi, millest ma poleks osanud undki näha. Iga kogemus, olgu see suur või väike, kujundab minu iseloomu ja valmistab mind ette tuleviku võimalusteks."
            icon={User}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778674801513-jntq5j0h.jpg?_wi=2"
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