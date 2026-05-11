"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="largeSizeMediumTitles"
        background="noise"
        cardStyle="glass-elevated"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
            <NavbarStyleFullscreen
              navItems={[
                { name: "Avaleht", id: "hero" },
                { name: "Minust", id: "about" },
                { name: "Statistika", id: "stats" },
                { name: "Oskused", id: "skills" },
                { name: "Projektid", id: "gallery" },
                { name: "Kontakt", id: "contact" },
              ]}
              brandName="Lazar Uleksin"
            />
        </div>

        <div id="hero" data-section="hero">
            <HeroBillboardCarousel
              title="Lazar Uleksin"
              description="&quot;Distsipliin on see, kui teed asju ka siis, kui sa tegelikult ei taha.&quot;"
              background={{ variant: "sparkles-gradient" }}
              mediaItems={[
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778527447087-zxgb57ao.jpg" }
              ]}
            />
        </div>

        <div id="about" data-section="about">
            <TextSplitAbout
              title="Minu teekond"
              description={[
                "Tantsija, kes väärtustab rütmi ja graatsiat.",                "Jalgpallur, kes usub meeskonnatöösse.",                "Fotograaf, kes jäädvustab maailma ilu.",                "Reisija, kes avastab uusi horisonte."
              ]}
            />
        </div>

        <div id="stats" data-section="stats">
            <MetricCardFourteen
              title="Minu saavutused"
              tag="Statistika"
              metrics={[
                { id: "s1", value: "10+", description: "Aastat tantsukogemust" },
                { id: "s2", value: "50+", description: "Külastatud paika" },
                { id: "s3", value: "100+", description: "Professionaalset fotot" }
              ]}
            />
        </div>

        <div id="skills" data-section="skills">
            <FeatureCardThree
              title="Oskused"
              gridVariant="four-items-2x2-equal-grid"
              animationType="blur-reveal"
              textboxLayout="default"
              features={[
                { title: "Distsipliin", description: "Raske töö ja järjepidevus", imageSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800" },
                { title: "Meeskonnatöö", description: "Koostöö jalgpalliväljakul", imageSrc: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800" },
                { title: "Loovus", description: "Fotograafia ja reisimine", imageSrc: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800" },
                { title: "Suhtlemine", description: "Inimeste ja kultuuride mõistmine", imageSrc: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800" }
              ]}
            />
        </div>

        <div id="gallery" data-section="gallery">
            <FeatureCardThree
              title="Fotogalerii"
              gridVariant="bento-grid"
              animationType="scale-rotate"
              textboxLayout="default"
              features={[
                { title: "Reisid", description: "Maailma avastamine", imageSrc: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800" },
                { title: "Tants", description: "Liikumise ilu", imageSrc: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800" },
                { title: "Sport", description: "Energia ja kirg", imageSrc: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800" }
              ]}
            />
        </div>

        <div id="contact" data-section="contact">
            <ContactText
              text="Kõik, mida vajad, on siin."
              background={{ variant: "radial-gradient" }}
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterSimple
              columns={[
                { title: "Lingid", items: [{ label: "LinkedIn" }, { label: "Instagram" }] },
                { title: "Eesti", items: [{ label: "Motivatsioon" }] }
              ]}
              bottomLeftText="© 2024 Lazar Uleksin"
              bottomRightText="Valmistatud Eestis"
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
