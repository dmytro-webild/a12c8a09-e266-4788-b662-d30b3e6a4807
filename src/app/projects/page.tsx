"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import Textarea from '@/components/form/Textarea';

export default function ProjectsPage() {
  const [reasonings, setReasonings] = useState<Record<string, string>>({});

  const handleReasoningChange = (id: string, value: string) => {
    setReasonings(prev => ({ ...prev, [id]: value }));
  };

  const projects = [
    { id: "p1", title: "Fc Mis Vennad", description: "Rahvaliiga klubi loomine (Fc Mis Vennad). See projekt oli esimene tõsisem samm meeskonnatöö ja spordikorralduse suunas, kus õppisime nullist üles ehitama toimivat tiimi ning korraldama treeninguid ja võistluseid.", images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778530873115-vm1ju69k.png?_wi=1", "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778530873115-vm1ju69k.png?_wi=1"] },
    { id: "p2", title: "Võistlustants", description: "Aastatepikkune teekond tantsumaailmas, mis õpetas distsipliini ja sihikindlust. Iga etendus oli kui projekt, kus tuli täiuslikult siduda koreograafia, muusika ja emotsioonid.", images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778531466534-7mwwuifz.jpg?_wi=1", "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778531466534-7mwwuifz.jpg?_wi=1"] },
    { id: "p3", title: "Klienditeenindus", description: "Töö Decathlonis on olnud väärtuslik kogemus, kus igapäevaselt lahendan erinevaid kliendi muresid. See on õpetanud mulle kannatlikkust, kiirete otsuste langetamist ja meeskonnatööd jaekaubanduse kiirenevas tempos.", images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778671852101-8oq8hsvm.jpg?_wi=1", "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778671852101-8oq8hsvm.jpg?_wi=1"] },
    { id: "p4", title: "Meedia ja Disaini suund", description: "Kiili Gümnaasiumi jooksul tehtud meediaprojektid, kus tegelesin sisuloome, graafilise disaini ja ürituste jäädvustamisega. See andis mulle hea visuaalse silma ja oskuse edastada sõnumeid läbi meedia.", images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778670506849-y65r1qaw.jpg?_wi=2", "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778670506849-y65r1qaw.jpg?_wi=2"] },
    { id: "p5", title: "Fotograafia", description: "Minu loominguline väljund, kus jäädvustan hetki ja emotsioone. Fotograafia on aidanud mul näha maailma teise nurga alt ning õppinud tehnilisi detaile valgustuse ja kompositsiooni osas.", images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778671911732-kjp1j0l4.jpg?_wi=1", "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778671911732-kjp1j0l4.jpg?_wi=1"] },
    { id: "p6", title: "Reisimine", description: "Maailma avastamine ja kultuurikogemused. See on olnud minu kõige suurem elukool, kus olen külastanud 36 riiki, õppinud kohanema uute keskkondadega ja arendanud avarat mõtlemist.", images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778672237771-31zfv4kh.jpg?_wi=1", "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778672237771-31zfv4kh.jpg?_wi=1"] }
  ];

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
                { name: "Projects", id: "/projects" },
                { name: "Contact", id: "/contact" },
            ]}
            brandName="Lazar Uleksin"
            />
        </div>

        <div id="projects" data-section="projects" className="pt-24 pb-24 px-[var(--vw-1_5)] max-w-[var(--width-content-width)] mx-auto">
          <h1 className="text-4xl font-bold mb-16 text-center">Projektide portfoolio</h1>
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div key={project.id} className="space-y-10">
                <h2 className="text-4xl font-bold">{index + 1}. {project.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.images.map((src, i) => (
                        <img key={i} src={src} alt={project.title} className="w-full aspect-video object-cover rounded-2xl shadow-xl border border-[var(--accent)]" />
                    ))}
                </div>
                <div className="bg-[var(--card)] p-12 rounded-3xl border border-[var(--accent)]">
                    <p className="text-xl mb-10 leading-relaxed opacity-90">{project.description}</p>
                    <Textarea
                      value={reasonings[project.id] || ""}
                      onChange={(val) => handleReasoningChange(project.id, val)}
                      placeholder="Lisa siia detailne kirjeldus sellest projektist..."
                      rows={8}
                    />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="footer" data-section="footer">
            <FooterBaseReveal
            logoText="Lazar Uleksin"
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