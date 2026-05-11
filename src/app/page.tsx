"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';

export default function LandingPage() {
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
      <NavbarStyleFullscreen
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Projects", id: "projects" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Lazar Uleksin"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{ variant: "gradient-bars" }}
      title="Lazar Uleksin"
      description="&quot;Discipline is doing it even when you don't feel like it.&quot;"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778527447087-zxgb57ao.jpg"
      imageAlt="Lazar Uleksin headshot"
      mediaAnimation="slide-up"
      className="[&_.card]:border-none"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Minust ja minu teekonnast"
      description="Olen olnud aktiivne võistlustantsija 10 aastat ja mängin jalgpalli rahvaliigas. Need kogemused on õpetanud mulle väärtuslikke oskusi: distsipliini, meeskonnatööd ja sihikindlust, mida rakendan igas oma ettevõtmises."
      metrics={[
        { value: "10+", title: "Aastat tantsukogemust" },
        { value: "Lõputu", title: "Sihikindlus" },
        { value: "Suurepärane", title: "Suhtlemisoskus" },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778528265220-38u8sw9b.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
      imageAlt="dance studio action shot"
    />
  </div>

  <div id="projects" data-section="projects">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { id: "p1", title: "Võistlustantsu projekt", author: "Lazar Uleksin", description: "10-aastane teekond professionaalsel tasemel.", tags: ["Tants", "Distsipliin"], imageSrc: "http://img.b2bpic.net/free-photo/representations-user-experience-interface-design_23-2150038913.jpg?_wi=2" },
        { id: "p2", title: "Rahvaliiga Jalgpall", author: "Lazar Uleksin", description: "Meeskonnatöö arendamine läbi spordi.", tags: ["Jalgpall", "Meeskond"], imageSrc: "http://img.b2bpic.net/free-photo/using-device-corporate-touchpad-network-multimedia_1421-248.jpg?_wi=2" },
        { id: "p3", title: "Klienditeenindus", author: "Lazar Uleksin", description: "Suhtlemisoskuse lihvimine.", tags: ["Teenindus", "Kommunikatsioon"], imageSrc: "http://img.b2bpic.net/free-photo/hispanic-woman-using-digital-tablet_53876-95581.jpg?_wi=2" },
      ]}
      title="Minu projektid"
      description="Siin on ülevaade minu varasematest projektidest ja tegevustest."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Kontakt"
      title="Võta minuga ühendust"
      description="Olen avatud uutele väljakutsetele ja tööpakkumistele."
      mediaAnimation="slide-up"
      mediaPosition="right"
      imageSrc="http://img.b2bpic.net/free-photo/portrait-stylish-handsome-young-man-looking-camera-leaning-grey-wall_23-2148130416.jpg?_wi=3"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Lazar Uleksin"
      columns={[
        { title: "Sotsiaalmeedia", items: [{ label: "LinkedIn", href: "#" }, { label: "Instagram", href: "#" }] },
        { title: "Navigatsioon", items: [{ label: "Kodu", href: "#hero" }, { label: "About", href: "#about" }, { label: "Kontakt", href: "#contact" }] },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
