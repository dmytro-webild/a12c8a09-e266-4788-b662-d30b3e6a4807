"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import TimelineCardStack from '@/components/cardStack/layouts/timelines/TimelineCardStack';
import Textarea from '@/components/form/Textarea';
import { useState } from 'react';

export default function ProjectsPage() {
  const [reasonings, setReasonings] = useState<Record<string, string>>({});

  const handleReasoningChange = (id: string, value: string) => {
    setReasonings(prev => ({ ...prev, [id]: value }));
  };

  const projects = [
    { id: "p1", title: "Fc Mis Vennad", description: "Rahvaliiga klubi loomine.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778530873115-vm1ju69k.png?_wi=2" },
    { id: "p2", title: "Võistlustants", description: "Üle kümne aasta kestnud pühendumus võistlustantsule.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778531466534-7mwwuifz.jpg?_wi=2" },
    { id: "p3", title: "Klienditeenindus", description: "Töö Decathlonis on olnud hindamatu kogemus.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778671852101-8oq8hsvm.jpg?_wi=2" }
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

        <div id="projects" data-section="projects" className="pt-24 pb-24 px-[var(--vw-1_5)]">
          <h1 className="text-4xl font-bold mb-12">Projektide ülevaade</h1>
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={project.id} className="border-b pb-8">
                <h2 className="text-2xl font-bold mb-4">{index + 1}. {project.title}</h2>
                <div className="w-full h-64 bg-[var(--card)] rounded-xl mb-6 flex items-center justify-center border border-[var(--accent)]">
                    <span className="text-[var(--accent)]">Placeholder area</span>
                </div>
                <Textarea
                  value={reasonings[project.id] || ""}
                  onChange={(val) => handleReasoningChange(project.id, val)}
                  placeholder="Sisesta siia oma põhjendus projektile..."
                />
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