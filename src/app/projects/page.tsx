"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import Textarea from '@/components/form/Textarea';

export default function ProjectsPage() {
  const [reasonings, setReasonings] = useState<Record<string, string>>({ 
    "p1": "Idee luua oma jalgpalliklubi tuli juba 9. klassis. Mõtlesime teha tiimi, mis hakkaks osalema Rahvaliigas, sest paljud meist mängisid juba jalgpalli nii trennis kui ka koolis sõpradega. Oskused ja huvi olid olemas ning vaja oli ainult idee päriselt ellu viia.\n\nPärast ettevalmistusi ja treeningutele toimus meie esimene ametlik mäng 2024. aasta suvel. See oli meie jaoks väga oluline hetk, sest nägime, et väikesest mõttest oli saanud päris jalgpalliklubi. Hiljem osalesime mitmetel turniiridel ning mängisime ka Rahvaliiga B-grupis, kus saime palju uusi kogemusi ja arenesime meeskonnana edasi.\n\nLisaks mängimisele panustasin ka klubi kujunduse ja sotsiaalmeedia poole pealt. Kujundasin ise meie meeskonna särgi ning tegin mõned sotsiaalmeedia postitused, et jagada klubi tegemisi ja tulemusi. Meeskonnas mängin ründajana, kus minu ülesanne on aidata tiimi väravate löömise ja rünnakute loomisega.\n\nSee projekt õpetas mulle palju meeskonnatööst, vastutuse võitmise ja loovusest. Samuti sain kogemuse, kuidas ühest lihtsast ideest võib koos sõpradega kasvada päris toimiv jalgpalliklubi.",    
    "p2": "Olen tantsinud juba 10 aastat tantsuklubis Esperanza, kus tegelesin võistlustantsuga. Kogu selle aja tantsisin ühe kindla tantsupartneriga, Alisa Milvoa, kellega arenesime koos väga tugevaks tantsupaariks.\n\nOlen osalenud rohkem kui 100 võistlusel ning saanud selle aja jooksul palju väärtuslikke kogemusi nii tantsus kui ka esinemises. Oleme mitmel korral jõudnud Eesti meistrivõistlustel poodiumile, mis on olnud üks meie suurimaid saavutusi.\n\nLisaks Eestis toimunud võistlustele oleme osalenud ka välismaa võistlustel ja laagrites, kus saime õppida uutelt treeneritelt, arendada oma oskusi ning kogeda erinevaid tantsustiile ja võistluskultuure.\n\nTantsimine on õpetanud mulle distsipliini, pühendumist ja meeskonnatööd. Pikaajaline kogemus võistlustantsus on aidanud mul arendada enesekindlust, vastupidavust ja oskust töötada eesmärkide nimel järjepidevalt.",    
    "p3": "Töötan hetkel Decathlon Tallinna ainsas poes, mis asub Kurna pargis ning on ühtlasi suurim Decathloni pood Baltikumis. Igapäevaselt töötan service-osakonnas, kus minu peamisteks ülesanneteks on töö kassades ja infolauas ning klientide probleemide lahendamine.\n\nSee töö sobib mulle väga hästi, sest naudin suhtlemist ja inimestega töötamist. Mulle meeldib aidata klientidel leida neile sobivaid tooteid ning tutvustada erinevaid lahendusi vastavalt nende vajadustele. Tänu sellele olen arendanud oma suhtlemisoskust, kiiret probleemilahendusvõimet ja oskust töötada pingelistes olukordades.\n\nHindan oma töö juures ka häid töötingimusi ja tugevat kollektiivi. Positiivne meeskond ning igapäevane suhtlus erinevate inimestega muudavad töö mitmekesiseks ja motiveerivaks.",    
    "p4": "Õpin gümnaasiumis meedia- ja disainisuunal, mis ühendab omavahel erinevad meedialiigid, kunsti ning tehnoloogia. Selle suuna eesmärk on arendada õpilaste loovust, meediapädevust, meeskonnatööoskust ning huvi disaini, kunsti ja tehnoloogia vastu. Õppe jooksul oleme saanud proovida väga erinevaid valdkondi, alates fotograafiast ja animatsioonist kuni programmeerimise, arhitektuuri ja tootearenduseni.\n\nMeedia- ja disainisuund on andnud mulle võimaluse arendada oma loomingulist mõtlemist ning õppida nägema visuaalset maailma palju detailsemalt. 10. klassis keskendusime rohkem disainile ja kunstile ning külastasime ka Eesti Tarbekunsti- ja Disainimuuseum, kus saime lähemalt tutvuda disaini ajaloo ja erinevate kunstivormidega. 11.klassis osalesin ristmeedia kursusel, mis õpetas, kuidas erinevad meediakanalid ja visuaalsed lahendused omavahel töötavad. See kursus arendas minu oskust mõelda loominguliselt ning luua sisu erinevatele platvormidele.\n\n12.klassis toimus koostöö Balti filmi, meedia ja kunstide instituut-iga, kus läbisime filmi- ja meediakursuseid. Selle käigus saime praktilise kogemuse filmimaailmast ning lõime ka oma lühifilmi. Se oli väga arendav kogemus, mis õpetas meeskonnatööd, planeerimist ja loomingulist eneseväljendust. Lisaks toimus koolis ka loomelaager Padisel, kus osalesime erinevates töötubades ja workshop’ides. Seal tegelesime maalitehnikate, fotograafia ning arhitektuuri algteadmistega.\n\nLoomelaager andis võimaluse katsetada uusi ideid ning õppida väljaspool tavapärast koolikeskkonda. Isiklikult soovitan meedia- ja disainisuunda kõigile, kellele pakuvad huvi loomingulisus, fotograafia, disain või meedia. See suund annab palju praktilisi kogemusi ning võimaluse ennast erinevates valdkondades proovile panna. Suur tänu Janika Lainemäe-le, kes selle suuna eest vastutab ja on loonud õpilastele nii palju huvitavaid võimalusi õppimiseks ja enesearenguks.",    
    "p5": "Fotograafia on olnud minu jaoks alati meeldivaks tegevuseks, ent aastate jooksul on sellest saanud kirg. Kuna reisin palju, satun tihti kohtadesse ja hetkedesse, mis inspireerivad neid jäädvustama. Mulle meeldib pildistada arhitektuuri, kunsti ning ka igapäevaelu detaile, mis võivad esmapilgul tunduda lihtsad, kuid peidavad endas erilist emotsiooni või lugu.\n\nFotograafia annab mulle võimaluse näha maailma erineva nurga alt ning märgata detaile, mida muidu võib-olla tähele ei paneks. Lisaks meeldib mulle jagada oma kogemusi ja hetki sotsiaalmeedias, luues postitusi erinevatest paikadest ja elamustest. See aitab mul ühendada loomingulisuse, reisimise ja visuaalse eneseväljenduse.\n\nPraegu on enamus minu fotodest tehtud iPhone 13 telefoniga, millega alustasin rohkem fotograafiaga tegelemist ja oma stiili arendamist. Umbes aasta tagasi vahetasin selle välja iPhone 14 Pro vastu, mille parem kaamerasüsteem andis mulle võimaluse teha detailsemaid ja kvaliteetsemaid pilte ning katsetada rohkem erinevate nurkade ja valgusega.\n\nFotograafia on minu jaoks viis emotsioonide ja hetkede edasiandmiseks. Tulevikus soovin liikuda juba professionaalsema tehnika poole ning osta päris kaamera, et viia oma looming järgmisele tasemele. Soovin õppida veel paremini tabama atmosfääri, emotsioone ja detaile, mis muudavad iga pildi elavaks ja eriliseks.",    
    "p6": "Reisimine on olnud suur osa minu elust ning selle kaudu olen saanud kogeda erinevaid kultuure, inimesi ja eluviise. Tänaseks olen külastanud juba 36 riiki, mis moodustab umbes 18% kogu maailmast. Mitmes riigis olen käinud ka korduvalt — näiteks Küprosel olen käinud üle viie korra. Reisimine annab mulle võimaluse avastada uusi kohti, õppida tundma erinevaid traditsioone ning näha maailma palju avarama pilguga.\n\nMinu külastatud riikide hulka kuuluvad näiteks Egiptus, Bahrein, Gruusia, Iisrael, Palestiina, Venemaa, Türgi, Araabia Ühendemiraadid, Andorra, Austria, Valgevene, Belgia, Bulgaaria, Horvaatia, Küpros, Tšehhi, Soome, Prantsusmaa, Saksamaa, Kreeka, Ungari, Itaalia, Läti, Leedu, Luksemburg, Malta, Montenegro, Holland, Poola, Rumeenia, San Marino, Hispaania, Rootsi, Šveits ja Inglismaa.\n\nReisimine inspireerib mind ka fotograafias, sest iga riik ja linn pakub erinevaid emotsioone, arhitektuuri ja hetki, mida soovin jäädvustada. Tänu reisidele olen muutunud avatumaks, kohanemisvõimelisemaks ning õppinud hindama erinevaid kultuure ja vaatenurki."
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