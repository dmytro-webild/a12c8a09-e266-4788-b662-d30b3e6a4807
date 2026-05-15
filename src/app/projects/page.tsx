"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function ProjectsPage() {
  const [reasonings, setReasonings] = useState<Record<string, string>>({ 
    "p1": "Idee luua oma jalgpalliklubi tuli juba 9. klassis. Mõtlesime teha tiimi, mis hakkaks osalema Rahvaliigas, sest paljud meist mängisid juba jalgpalli nii trennis kui ka koolis sõpradega.\n\nOskused ja huvi olid olemas ning vaja oli ainult idee päriselt ellu viia. Pärast ettevalmistusi ja treeninguid toimus meie esimene ametlik mäng 2024. aasta suvel. See oli meie jaoks väga oluline hetk, sest nägime, et väikesest mõttest oli saanud päris jalgpalliklubi.\n\nHiljem osalesime mitmetel turniiridel ning mängisime ka Rahvaliiga B-grupis, kus saime palju uusi kogemusi ja arenesime meeskonnana edasi. Lisaks mängimisele panustasin ka klubi kujunduse ja sotsiaalmeedia poole pealt. Kujundasin ise meie meeskonna särgi ning tegin mõned sotsiaalmeedia postitused, et jagada klubi tegemisi ja tulemusi.\n\nMeeskonnas mängin ründajana, kus minu ülesanne on aidata tiimi väravate löömise ja rünnakute loomisega. See projekt õpetas mulle palju meeskonnatööst, vastutuse võtmisest ja loovusest. Samuti sain kogemuse, kuidas ühest lihtsast ideest võib koos sõpradega kasvada päris toimiv jalgpalliklubi.",    
    "p5": "Fotograafia on olnud minu jaoks alati midagi enamat kui lihtsalt hobina piltide tegemine. Kuna reisin palju, satun tihti kohtadesse ja hetkedesse, mis inspireerivad neid jäädvustama. Mulle meeldib pildistada arhitektuuri, kunsti ning ka igapäevaelu detaile, mis võivad esmapilgul tunduda lihtsad, kuid peidavad endas erilist emotsiooni või lugu.\n\nFotograafia annab mulle võimaluse näha maailma erineva nurga alt ning märgata detaile, mida muidu võib-olla tähele ei ponneks. Lisaks meeldib mulle jagada oma kogemusi ja hetki sotsiaalmeedias, luues postitusi erinevatest paikadest ja elamustest. See aitab mul ühendada loomingulisuse, reisimise ja visuaalse eneseväljenduse.\n\nPraegu on enamus minu fotodest tehtud iPhone 13 telefoniga, millega alustasin rohkem fotograafiaga tegelemist ja oma stiili arendamist. Umbes aasta tagasi vahetasin selle välja iPhone 14 Pro vastu, mille parem kaamerasüsteem andis mulle võimaluse teha detailsemaid ja kvaliteetseid pilte ning katsetada rohkem erinevate nurkade ja valgusega.\n\nFotograafia on minu jaoks viis emotsioonide ja hetkede edasiandmiseks. Tulevikus soovin liikuda juba professionaalsema tehnika poole ning osta päris kaamera, et viia oma looming järgmisele tasemele. Soovin õppida veel paremini tabama atmosfääri, emotsioone ja detaile, mis muudavad iga pildi elavaks ja eriliseks.",    
    "p6": "Reisimine on olnud suur osa minu elust ning selle kaudu olen saanud kogeda erinevaid kultuure, inimesi ja eluviise. \n\nTänaseks olen külastanud juba 36 riiki, mis moodustab umbes 18% kogu maailmast. Mitmes riigis olen käinud ka korduvalt — näiteks Küprosel olen käinud üle viie korra. Reisimine annab mulle võimaluse avastada uusi kohti, õppida tundma erinevaid traditsioone ning näha maailma palju avarama pilguga.\n\nMinu külastatud riikide hulka kuuluvad näiteks Egiptus, Bahrein, Gruusia, Iisrael, Palestiina, Venemaa, Türgi, Araabia Ühendemiraadid, Andorra, Austria, Valgevene, Belgia, Bulgaaria, Horvaatia, Küpros, Tšehhi, Soome, Prantsusmaa, Saksamaa, Kreeka, Ungari, Itaalia, Läti, Leedu, Luksemburg, Malta, Montenegro, Holland, Poola, Rumeenia, San Marino, Hispaania, Rootsi, Šveits ja Inglismaa.\n\nReisimine inspireerib mind ka fotograafias, sest iga riik ja linn pakub erinevaid emotsioone, arhitektuuri ja hetki, mida soovin jäädvustada. Tänu reisidele olen muutunud avatumaks, kohanemisvõimelisemaks ning õppinud hindama erinevaid kultuure ja vaatenurki."
  });
  const [activeIndices, setActiveIndices] = useState<Record<string, number>>({});

  const nextSlide = (id: string, length: number) => {
    setActiveIndices(prev => ({ ...prev, [id]: ((prev[id] || 0) + 1) % length }));
  };

  const prevSlide = (id: string, length: number) => {
    setActiveIndices(prev => ({ ...prev, [id]: ((prev[id] || 0) - 1 + length) % length }));
  };

  const projects = [
    { id: "p1", title: "Fc Mis Vennad", images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778530873115-vm1ju69k.png?_wi=1", "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778531466534-7mwwuifz.jpg?_wi=1", "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778671852101-8oq8hsvm.jpg?_wi=1"] },
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
                    <div className="p-6 text-xl leading-relaxed whitespace-pre-wrap">
                      {reasonings[project.id]}
                    </div>
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