"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function AboutPage() {
  const [bio] = useState("Reisimine on olnud suur osa minu elust ning selle kaudu olen saanud kogeda erinevaid kultuure, inimesi ja eluviise. Tänaseks olen külastanud juba 36 riiki, mis moodustab umbes 18% kogu maailmast. Mitmes riigis olen käinud ka korduvalt — näiteks Küprosel olen käinud üle viie korra. Reisimine annab mulle võimaluse avastada uusi kohti, õppida tundma erinevaid traditsioone ning näha maailma palju avarama pilguga. Minu külastatud riikide hulka kuuluvad näiteks Egiptus, Bahrein, Gruusia, Iisrael, Palestiina, Venemaa, Türgi, Araabia Ühendemiraadid, Andorra, Austria, Valgevene, Belgia, Bulgaaria, Horvaatia, Küpros, Tšehhi, Soome, Prantsusmaa, Saksamaa, Kreeka, Ungari, Itaalia, Läti, Leedu, Luksemburg, Malta, Montenegro, Holland, Poola, Rumeenia, San Marino, Hispaania, Rootsi, Šveits ja Inglismaa. Reisimine inspireerib mind ka fotograafias, sest iga riik ja linn pakub erinevaid emotsioone, arhitektuuri ja hetki, mida soovin jäädvustada. Tänu reisidele olen muutunud avatumaks, kohanemisvõimelisemaks ning õppinud hindama erinevaid kultuure ja vaatenurki.");

  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumLarge"
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
              { name: "Projects", id: "/projects" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Lazar Uleksin"
          />
        </div>

        <div id="about-content" data-section="about-content" className="pt-24">
          <div className="px-[var(--vw-1_5)] py-12 max-w-[var(--width-content-width)] mx-auto">
            <h1 className="text-5xl font-bold mb-12 text-center">Minu kohta</h1>
            <div className="grid gap-12 items-start">
                <div className="w-full max-w-xl mx-auto">
                  <img 
                      src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778691500081-h2hs8ikv.jpg" 
                      alt="Lazar Uleksin portree" 
                      className="w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>
                <div className="w-full">
                    <div className="bg-[var(--card)] p-12 md:p-16 rounded-3xl shadow-lg border border-[var(--accent)]">
                        <p className="text-xl md:text-2xl leading-relaxed text-[var(--foreground)] opacity-95 whitespace-pre-wrap">
                            {bio}
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            logoText="Lazar Uleksin"
            videoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/assets/default-footer-video.mp4"
            columns={[
              { title: "Sotsiaalmeedia", items: [{ label: "LinkedIn", href: "#" }, { label: "Instagram", href: "#" }] },
              { title: "Navigatsioon", items: [{ label: "Kodu", href: "/" }, { label: "Minu kohta", href: "/about-page" }, { label: "Projects", href: "/projects" }, { label: "Kontakt", href: "/contact" }] },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}