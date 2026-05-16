"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import { Linkedin, Instagram } from 'lucide-react';

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
        { name: "Home", id: "/" },
        { name: "Minu kohta", id: "/about-page" },
        { name: "Projektide detailne kirjeldus", id: "/projects" },
        { name: "Võta ühendust", id: "/contact" },
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
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Minust ja minu teekonnast"
      description="18-aastane Tallinnast, kes ei suuda paigal istuda. Leian end kas tantsusaalist, jalgpalliväljakult või kuskil maailma teises otsas kaamera käes. Tants on andnud mulle distsipliini, jalgpall meeskonnavaimu ja reisimine perspektiivi — et maailm on palju suurem kui see, mida me ette kujutame. Usun, et parim versioon sinust sünnib siis, kui sa ei lõpeta liikumast."
      metrics={[
        { value: "18", title: "Minu vanus" },
        { value: "Tallinn", title: "Asukoht" },
        { value: "Suurepärane", title: "Suhtlemisoskus" },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778674801513-jntq5j0h.jpg?_wi=1"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
      imageAlt="dance studio action shot"
    />
  </div>

  <div id="projects" data-section="projects">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      title="Minu projektid"
      description="Siin on ülevaade minu varasematest projektidest ja tegevustest."
      features={[
        { id: "p1", title: "Fc Mis Vennad", description: "Rahvaliiga klubi loomine (Fc Mis Vennad).", tag: "Jalgpall", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778530873115-vm1ju69k.png?_wi=1" },
        { id: "p2", title: "Võistlustants", description: "Meeskonnatöö arendamine läbi spordi.", tag: "Tants", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778531466534-7mwwuifz.jpg?_wi=1" },
        { id: "p3", title: "Klienditeenindus", description: "Töötan hetkel Decathlon Tallinna ainsas poes. Arendanud suhtlemisoskust, kiiret probleemilahendusvõimet ja oskust töötada pingelistes olukordades.", tag: "Teenindus", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778671852101-8oq8hsvm.jpg?_wi=1" },
        { id: "p4", title: "Meedia ja Disaini suund", description: "Kiili Gümnaasiumi jooksul projektid", tag: "Elu", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778670506849-y65r1qaw.jpg?_wi=2" },
        { id: "p5", title: "Fotograafia", description: "...", tag: "Innovatsioon", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778671911732-kjp1j0l4.jpg?_wi=1" },
        { id: "p6", title: "Reisimine", description: "Tutvu koos minuga veidike riikidest", tag: "Elu", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778672237771-31zfv4kh.jpg?_wi=1" }
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
    <FaqDouble
      title="Korduma kippuvad küsimused"
      description="Siin on vastused levinumatele küsimustele minu tegemiste ja tausta kohta."
      faqsAnimation="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "Kuidas sa oma aega planeerid?", content: "Tasakaalustamine spordi, töö ja õppimise vahel nõuab head ajaplaneerimist ja distsipliini." },
        { id: "f2", title: "Millised on sinu tulevikuplaanid?", content: "Soovin edasi areneda loovuse, ettevõtlikkuse ja majandusliku tarkuse vallas." },
        { id: "f3", title: "Kuidas alustada reisimisega?", content: "Alusta väikestest sihtkohtadest ja pane paika eelarve – reisimine avardab silmaringi." },
        { id: "f4", title: "Kas sa teed koostööd?", content: "Olen avatud huvitavatele projektidele ja koostööpakkumistele. Kirjuta mulle kontaktivormi kaudu!" }
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
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778674542372-t8lrty8t.jpg?_wi=1"
      imageAlt="Klienditeenindus"
      termsText="By clicking Sign Up you are confirming that you agree with our Terms and Conditions."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
        logoText="Lazar Uleksin"
        socialLinks={[
            { icon: Linkedin, href: "#", ariaLabel: "LinkedIn" },
            { icon: Instagram, href: "https://www.instagram.com/lazaruleksin?igsh=dzh6bDl4emVyN2dj&utm_source=qr", ariaLabel: "Instagram" }
        ]}
      />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}