"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import Textarea from '@/components/form/Textarea';

export default function ProjectsPage() {
  const [reasonings, setReasonings] = useState<Record<string, string>>({ 
    "p1": "Idee luua oma jalgpalliklubi tuli juba 9. klassis. Mõtlesime teha tiimi, mis hakkaks osalema Rahvaliigas, sest paljud meist mängisid juba jalgpalli nii trennis kui ka koolis sõpradega. Oskused ja huvi olid olemas ning vaja oli ainult idee päriselt ellu viia.\nPärast ettevalmistusi ja treeninguid toimus meie esimene ametlik mäng 2024. aasta suvel. See oli meie jaoks väga oluline hetk, sest nägime, et väikesest mõttest oli saanud päris jalgpalliklubi. Hiljem osalesime mitmetel turniiridel ning mängisime ka Rahvaliiga B-grupis, kus saime palju uusi kogemusi ja arenesime meeskonnana edasi.\nLisaks mängimisele panustasin ka klubi kujunduse ja sotsiaalmeedia poole pealt. Kujundasin ise meie meeskonna särgi ning tegin mõned sotsiaalmeedia postitused, et jagada klubi tegemisi ja tulemusi. Meeskonnas mängin ründajana, kus minu ülesanne on aidata tiimi väravate löömise ja rünnakute loomisega.\nSee projekt õpetas mulle palju meeskonnatööst, vastutuse võtmisest ja loovusest. Samuti sain kogemuse, kuidas ühest lihtsast ideest võib koos sõpradega kasvada päris toimiv jalgpalliklubi."
  });
  const [activeIndices, setActiveIndices] = useState<Record<string, number>>({});

  const handleReasoningChange = (id: string, value: string) => {
    setReasonings(prev => ({ ...prev, [id]: value }));
  };

  const nextSlide = (id: string, length: number) => {
    setActiveIndices(prev => ({ ...prev, [id]: ((prev[id] || 0) + 1) % length }));
  };

  const prevSlide = (id: string, length: number) => {
    setActiveIndices(prev => ({ ...prev, [id]: ((prev[id] || 0) - 1 + length) % length }));
  };

  const projects = [
    { 
      id: "p1", 
      title: "Fc Mis Vennad", 
      images: [
        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778530873115-vm1ju69k.png?_wi=1", 
        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778531466534-7mwwuifz.jpg?_wi=1", 
        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778671852101-8oq8hsvm.jpg?_wi=1"
      ] 
    },
    { id: "p2", title: "Võistlustants", images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778531466534-7mwwuifz.jpg?_wi=1", "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778531466534-7mwwuifz.jpg?_wi=1"] },
    { id: "p3", title: "Klienditeenindus", images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778671852101-8oq8hsvm.jpg?_wi=1", "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778671852101-8oq8hsvm.jpg?_wi=1"] },
    { id: "p4", title: "Meedia ja Disaini suund", images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778670506849-y65r1qaw.jpg?_wi=2", "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778670506849-y65r1qaw.jpg?_wi=2"] },
    { id: "p5", title: "Fotograafia", images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778671911732-kjp1j0l4.jpg?_wi=1", "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778671911732-kjp1j0l4.jpg?_wi=1"] },
    { id: "p6", title: "Reisimine", images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778672237771-31zfv4kh.jpg?_wi=1", "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778672237771-31zfv4kh.jpg?_wi=1"] }
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
                { name: "Projects", id: "/projects" },
                { name: "Contact", id: "/contact" },
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
                        <img src={project.images[activeIndices[project.id] || 0]} alt={project.title} className="w-full aspect-[16/9] object-cover transition-transform duration-500" />
                        <button onClick={() => prevSlide(project.id, project.images.length)} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70"><ChevronLeft /></button>
                        <button onClick={() => nextSlide(project.id, project.images.length)} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70"><ChevronRight /></button>
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