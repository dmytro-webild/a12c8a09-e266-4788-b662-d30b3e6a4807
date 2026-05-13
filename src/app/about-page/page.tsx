"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function AboutPage() {
  const [bio, setBio] = useState("Minu elu on olnud täis sporti, pühendumist ja pidevat enesearengut. Olen 18-aastane noor Tallinnast, kes leiab inspiratsiooni liikumisest — olgu selleks siis tantsusaal, jalgpalliväljak või kaamera taga maailma avastamine. Minu jaoks on sport midagi palju enamat kui lihtsalt füüsiline tegevus; see on distsipliini kool, mis on õpetanud mind olema kannatlik, meeskonnale orienteeritud ja eesmärgikindel. Reisimine on lisanud sellele kõigele perspektiivi, näidates, et maailm on piirideta ja ootab avastamist. Usun siiralt, et parim versioon endast sünnib siis, kui sa ei jää paigale, vaid otsid pidevalt uusi väljakutseid. Olen alati püüdnud hoida fookust oma eesmärkidel, olgu nendeks siis treeningute intensiivsus või loomingulised projektid. Minu tööeetika on kujunenud aastatepikkuse järjepideva töö tulemusena, kus ma olen õppinud hindama nii väikeseid võite kui ka õppetunde, mis tulevad läbi ebaõnnestumiste. Inimeste ümber olemine ja nendega suhtlemine on andnud mulle väärtusliku pagasi oskusi, mida saan kasutada igas eluvaldkonnas. Tulevikku vaadates soovin ma jätkuvalt areneda ja jätta endast maha midagi positiivset, olgu see siis läbi spordi, meedia või lihtsa inimliku kontakti. Olen avatud igale uuele võimalusele ja valmis endast andma 100 protsenti, et saavutada oma potentsiaali. Mu kirg on alati olnud seotud uudishimuga — tahan teada, kuidas asjad töötavad, ja proovida uusi meetodeid, et muuta oma igapäevaelu efektiivsemaks ja inspireerivamaks.");

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
          <NavbarLayoutFloatingOverlay
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
            <h1 className="text-5xl font-bold mb-8">Minu kohta</h1>
            <div className="grid md:grid-cols-1 gap-12 items-start">
                <div className="w-full">
                  <img 
                      src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778691500081-h2hs8ikv.jpg" 
                      alt="Lazar Uleksin portree" 
                      className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full">
                    <div className="bg-[var(--card)] p-12 rounded-2xl shadow-md border border-[var(--accent)]">
                        <h2 className="text-2xl font-semibold mb-6">Biograafia</h2>
                        <p className="text-lg leading-relaxed text-[var(--foreground)] opacity-90">
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
              { title: "Navigatsioon", items: [{ label: "Kodu", href: "/" }, { label: "Minu kohta", href: "/about-page" }, { label: "Kontakt", href: "/contact" }] },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}