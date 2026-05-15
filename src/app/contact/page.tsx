"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import ContactSplit from '@/components/sections/contact/ContactSplit';

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
              { name: "Projektide detailne kirjeldus", id: "/projects" },
              { name: "Võta ühendust", id: "/contact" },
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
              { title: "Navigatsioon", items: [{ label: "Kodu", href: "/" }, { label: "Minu kohta", href: "/about-page" }, { label: "Projektide detailne kirjeldus", href: "/projects" }, { label: "Võta ühendust", href: "/contact" }] },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}