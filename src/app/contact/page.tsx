"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterCard from '@/components/sections/footer/FooterCard';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import { Instagram } from 'lucide-react';

export default function ContactPage() {
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
              { name: "Projektid", id: "/projects" },
              { name: "Arhiiv", id: "https://canva.link/ioqz9m5udeiwbjz" },
              { name: "Kontakt", id: "/contact" },
            ]}
            brandName="Lazar Uleksin"
          />
        </div>

        <div id="contact" data-section="contact" className="pt-24">
          <ContactSplit
            useInvertedBackground={false}
            background={{ variant: "plain" }}
            tag="Kontakt"
            title="Võta ühendust"
            description="Olen avatud uutele väljakutsetele ja tööpakkumistele."
            mediaAnimation="slide-up"
            mediaPosition="right"
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778674542372-t8lrty8t.jpg?_wi=2"
            imageAlt="Klienditeenindus"
            termsText="By clicking Sign Up you are confirming that you agree with our Terms and Conditions."
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterCard
            logoText="Lazar Uleksin"
            socialLinks={[
                { icon: Instagram, href: "https://www.instagram.com/lazaruleksin?igsh=dzh6bDl4emVyN2dj&utm_source=qr", ariaLabel: "Instagram" }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}