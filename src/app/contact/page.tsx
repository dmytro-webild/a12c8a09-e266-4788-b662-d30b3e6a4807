"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterCard from '@/components/sections/footer/FooterCard';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import { Linkedin, Instagram, Mail } from 'lucide-react';

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
              { name: "Kodu", id: "/" },
              { name: "Minu taust ja huvid", id: "/about-page" },
              { name: "Projektide detailne kirjeldus", id: "/projects" },
              { name: "Võta ühendust", id: "/contact" },
              { name: "uleksinlazar@gmail.com", id: "mailto:uleksinlazar@gmail.com" },
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
                { icon: Linkedin, href: "#", ariaLabel: "LinkedIn" },
                { icon: Instagram, href: "#", ariaLabel: "Instagram" },
                { icon: Mail, href: "mailto:uleksinlazar@gmail.com", ariaLabel: "Email" }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}