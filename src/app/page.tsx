"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import ContactText from '@/components/sections/contact/ContactText';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumLarge"
        background="noise"
        cardStyle="glass-depth"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Kodu", id: "hero" },
        { name: "Minust", id: "about" },
        { name: "Projektid", id: "projects" },
        { name: "Kontakt", id: "contact" },
      ]}
      brandName="Lazar Uleksin"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{ variant: "radial-gradient" }}
      title="Lazar Uleksin"
      description="\"Distsipliin on tegemine isegi siis, kui sa seda ei tunne.\""
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778527447087-zxgb57ao.jpg"
      imageAlt="Lazar Uleksin"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Minu lugu ja kirg"
      description="Olen pühendunud võistlustantsija (10 aastat) ja jalgpallur rahvaliigas. Minu elu on ehitatud distsipliinile, meeskonnatööle ja pidevale enesearengule."
      metrics={[
        { value: "10+", title: "Aastat tantsu" },
        { value: "Jalgpall", title: "Rahvaliiga" },
        { value: "Kirg", title: "Fotograafia & Reisimine" },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="stats" data-section="stats">
    <MetricCardFourteen
        title="Minu areng"
        tag="Statistika"
        metrics={[
            { id: "s1", value: "10", description: "Võistlusaastat" },
            { id: "s2", value: "50+", description: "Jalgpallimatši" },
            { id: "s3", value: "20+", description: "Külastatud riiki" }
        ]}
        useInvertedBackground={true}
    />
  </div>

  <div id="projects" data-section="projects">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      title="Isiklikud projektid"
      description="Siin on ruum minu isiklikele ettevõtmistele, spordiprojektidele ja loovatele algatustele."
      features={[
        { id: "p1", title: "Spordiklubi arendus", author: "Lazar Uleksin", description: "Uue kontseptsiooniga spordiklubi loomine, keskendudes meeskonnatööle.", tags: ["Sport", "Juhtimine"], imageSrc: "https://img.b2bpic.net/free-photo/soccer-ball-field-close-up-shot_23-2148816912.jpg" },
        { id: "p2", title: "Fotograafia portfoolio", author: "Lazar Uleksin", description: "Hetkede jäädvustamine minu reisidelt ja igapäevaelust.", tags: ["Foto", "Reisid"], imageSrc: "https://img.b2bpic.net/free-photo/landscape-mountains-sunset_23-2148119041.jpg" },
      ]}
    />
  </div>

  <div id="quote" data-section="quote">
    <ContactText 
        text="Edu ei ole juhus, see on valik."
        background={{ variant: "sparkles-gradient" }}
        useInvertedBackground={true}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{ variant: "gradient-bars" }}
      tag="Võta ühendust"
      title="Tee koostööd"
      description="Olen avatud uutele ideedele ja professionaalsetele väljakutsetele."
      imageSrc="https://img.b2bpic.net/free-photo/handsome-man-looking-away_23-2148130416.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Lazar Uleksin"
      columns={[
        { title: "Lingid", items: [{ label: "Kodu", href: "#hero" }, { label: "Minust", href: "#about" }] },
        { title: "Sotsiaal", items: [{ label: "LinkedIn", href: "#" }, { label: "Instagram", href: "#" }] },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}