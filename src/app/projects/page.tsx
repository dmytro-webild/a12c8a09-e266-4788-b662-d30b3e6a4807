"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterCard from '@/components/sections/footer/FooterCard';
import Textarea from '@/components/form/Textarea';
import { Linkedin, Instagram } from 'lucide-react';

export default function ProjectsPage() {
  const [reasonings, setReasonings] = useState<Record<string, string>>({ 
    "p1": "Idee luua oma jalgpalliklubi tuli juba 9. klassis. Mõtlesime teha tiimi, mis hakkaks osalema Rahvaliigas, sest paljud meist mängisid juba jalgpalli nii trennis kui ka koolis sõpradega.",    
    "p2": "Olen tantsinud juba 10 aastat tantsuklubis Esperanza, kus tegelesin võistlustantsuga. Olen osalenud rohkem kui 100 võistlusel ning saanud selle aja jooksul palju väärtuslikke kogemusi nii tantsus kui ka esinemises.",    
    "p3": "Töötan hetkel Decathlon Tallinna ainsas poes. Igapäevaselt töötan service-osakonnas, kus minu peamisteks ülesanneteks on töö kassades ja infolauas ning klientide probleemide lahendamine.",    
    "p4": "Õpin gümnaasiumis meedia- ja disainisuunal, mis ühendab omavahel erinevad meedialiigid, kunsti ning tehnoloogia. Selle suuna eesmärk on arendada õpilaste loovust ja meediapädevust.",    
    "p5": "Fotograafia on olnud minu jaoks alati meeldivaks tegevuseks, ent aastate jooksul on sellest saanud kirg. Fotograafia annab mulle võimaluse näha maailma erineva nurga alt.",    
    "p6": "Reisimine on olnud suur osa minu elust. Tänaseks olen külastanud juba 36 riiki. Reisimine inspireerib mind ka fotograafias, sest iga riik ja linn pakub erinevaid emotsioone."
  });

  const handleReasoningChange = (id: string, value: string) => {
    setReasonings(prev => ({ ...prev, [id]: value }));
  };

  const projects = [
    { id: "p1", title: "Fc Mis Vennad", image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778530873115-vm1ju69k.png?_wi=1" },
    { id: "p2", title: "Võistlustants", image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778531466534-7mwwuifz.jpg?_wi=1" },
    { id: "p3", title: "Klienditeenindus", image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778671852101-8oq8hsvm.jpg?_wi=1" },
    { id: "p4", title: "Meedia ja Disaini suund", image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778670506849-y65r1qaw.jpg?_wi=2" },
    { id: "p5", title: "Fotograafia", image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778671911732-kjp1j0l4.jpg?_wi=1" },
    { id: "p6", title: "Reisimine", image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778672237771-31zfv4kh.jpg?_wi=1" }
  ];

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
                { name: "Võta ühendust", id: "/contact" },
            ]}
            brandName="Lazar Uleksin"
            />
        </div>

        <div id="projects" data-section="projects" className="pt-24 pb-24 px-[var(--vw-1_5)] max-w-[var(--width-content-width)] mx-auto">
          <h1 className="text-5xl font-bold mb-16 text-center">Projektide portfoolio</h1>
          <div className="space-y-40">
            {projects.map((project, index) => (
              <div key={project.id} className="space-y-12">
                <h2 className="text-4xl font-bold border-b border-[var(--accent)] pb-6">{index + 1}. {project.title}</h2>
                <div className="relative">
                    <div className="relative overflow-hidden rounded-3xl group">
                        <img src={project.image} alt={project.title} className="w-full aspect-[16/9] object-cover" />
                    </div>
                </div>
                <div className="bg-[var(--card)] p-4 rounded-3xl border border-[var(--accent)] shadow-2xl">
                    <Textarea
                      value={reasonings[project.id] || ""}
                      onChange={(val) => handleReasoningChange(project.id, val)}
                      placeholder="Lisa siia detailne kirjeldus..."
                      rows={15}
                      className="w-full p-6 text-xl bg-transparent border-none focus:ring-0"
                    />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="footer" data-section="footer">
            <FooterCard
            logoText="Lazar Uleksin"
            socialLinks={[
                { icon: Linkedin, href: "#", ariaLabel: "LinkedIn" },
                { icon: Instagram, href: "#", ariaLabel: "Instagram" }
            ]}
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}