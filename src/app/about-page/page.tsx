"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Instagram, Zap } from 'lucide-react';

export default function AboutPage() {
  const [bio] = useState("Minu elu on olnud täis sporti, arengut, loomingulisust ja uusi kogemusi. Sündisin 14. juunil Tallinnas ning olen terve oma elu elanud ja õppinud Kiilis. Minu lapsepõlv möödus Kiili Gümnaasium seinte vahel ning enne kooliteed käisin ka Kiili lasteaias. Kiili on olnud koht, kus olen kasvanud, õppinud ja kujunenud inimeseks, kes ma täna olen.\n\nJuba noorest east alates mängis sport minu elus väga olulist rolli. Kõige suuremaks kireks kujunes võistlustants, millega tegelesin üle kümne aasta. See ala õpetas mulle distsipliini, kannatlikkust ja sihikindlust. Pikkade treeningute ja raske töö tulemusena õnnestus mul mitmel korral jõuda Eesti meistrivõistlustel poodiumile.\n\nLisaks tantsule on mulle alati meeldinud ka meeskonnasport. Koos sõpradega lõime jalgpalliklubi FC Mis Vennad, kus mängisime koos Kiili poistega. See ei olnud ainult sportlik tegevus, vaid ka võimalus tugevdada sõprussuhteid ja õppida meeskonnatöö tähtsust. Jalgpall õpetas mulle, kui oluline on üksteise toetamine ja ühise eesmärgi nimel töötamine.\n\nPraegu töötan Decathlonis, kus tegelen klienditeenindusega. See töö on andnud mulle palju uusi kogemusi ning õpannud suhtlema erinevate inimestega. Töö kõrvalt mõtlen palju ka oma tulevikule. Soovin saada inimeseks, kes on loov, ettevõtlik ja majanduslikult tark. Usun, et edu saavutamiseks on vaja pidevalt õppida, areneda ja julgeda proovida uusi asju.\n\nÜheks minu suurimaks huviks on reisimine. Olen käinud juba 36 riigis ning iga reis on andnud mulle uusi teadmisi ja kogemusi. Reisimine on õpetanud mulle erinevaid kultuure mõistma ning maailma avarama pilguga vaatama. Mulle meeldib avastada uusi kohti, kohtuda erinevate inimestega ja kogeda midagi täiesti uut.\n\nMinu lemmik kooliväline hobi on fotograafia. Mulle meeldib jäädvustada hetki, emotsioone ja erilisi vaateid. Fotograafia annab mulle võimaluse väljendada oma loomingulisust ning näha maailma teise nurga alt. Samuti huvitab mind mood ja erinevad riidebrändid. Minu jaoks ei ole mood ainult riided, vaid viis ennast väljendada ja oma isikupära näidata.");

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
              { name: "Projektide detailne kirjeldus", id: "/projects" },
              { name: "Tööde arhiiv", id: "/toode-arhiiv" },
              { name: "Võta ühendust", id: "/contact" },
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
          <FooterCard
            logoText="Lazar Uleksin"
            socialLinks={[
                { icon: Zap, href: "#", ariaLabel: "TikTok" },
                { icon: Instagram, href: "https://www.instagram.com/lazaruleksin?igsh=dzh6bDl4emVyN2dj&utm_source=qr", ariaLabel: "Instagram" }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}