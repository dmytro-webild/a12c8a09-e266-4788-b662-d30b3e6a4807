"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
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
      description="Discipline is doing it even when you don't feel like it."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778527447087-zxgb57ao.jpg"
      imageAlt="Lazar Uleksin headshot"
      mediaAnimation="slide-up"
      className="[&_.card]:bg-transparent [&_.card]:border-none [&_.card]:shadow-none"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      title="Minust ja minu teekonnast"
      textboxLayout="split-description"
      useInvertedBackground={false}
      description="Siia saate sisestada pikema teksti oma teekonna kohta. Olen 18-aastane Tallinnast ning läbi aastate olen kogunud mitmekülgseid kogemusi tantsu, spordi ja fotograafia vallas. See tekstikast on nüüd piisavalt lai, et mahutada kogu teie lugu, kirjeldusi ja mõtteid, ilma et peaksite muretsema ruumipuuduse pärast. See võimaldab paremini esile tuua teie arengut ja huvisid, muutes teie portfoolio sisukamaks ja personaalsemaks."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778674801513-jntq5j0h.jpg"
      mediaAnimation="slide-up"
      imageAlt="dance studio action shot"
      bulletPoints={[
        { title: "Tantsukunst", description: "Pikaajaline kogemus võistlustantsus ja esinemistegevuses." },
        { title: "Fotograafia", description: "Visuaalne maailmavaade ja projektide dokumenteerimine." }
      ]}
    />
  </div>

  <div id="projects" data-section="projects">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      title="Minu projektid"
      description="Iseseisvad tekstikastid minu erinevatele tegevusvaldkondadele."
      features={[
        { id: "p1", title: "Fc Mis Vennad", description: "Rahvaliiga klubi loomine (Fc Mis Vennad).", tag: "Jalgpall", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778530873115-vm1ju69k.png" },
        { id: "p2", title: "Võistlustants", description: "Meeskonnatöö arendamine läbi spordi.", tag: "Tants", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778531466534-7mwwuifz.jpg" },
        { id: "p3", title: "Meedia ja Disain", description: "Kiili Gümnaasiumi jooksul läbi viidud loovprojektid.", tag: "Meedia", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778670506849-y65r1qaw.jpg?_wi=2" },
        { id: "p4", title: "Reisimine", description: "Maailma avastamine ja uued kogemused erinevates riikides.", tag: "Reisimine", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778672237771-31zfv4kh.jpg" }
      ]}
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
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778674542372-t8lrty8t.jpg"
      imageAlt="Klienditeenindus"
      termsText="By clicking Sign Up you are confirming that you agree with our Terms and Conditions."
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