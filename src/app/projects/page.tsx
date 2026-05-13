"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function ProjectsPage() {
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

        <div id="projects" data-section="projects" className="pt-24">
            <FeatureCardMedia
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            title="Kõik projektid"
            description="Süvitsiminek minu erinevatesse tegemistesse, hobidesse ja saavutustesse."
            features={[
                { id: "p1", title: "Fc Mis Vennad ", description: "Rahvaliiga klubi loomine (Fc Mis Vennad). See projekt sündis soovist ühendada sõpruskond ja harrastussport, luues keskkonna, kus lisaks jalgpallile areneb meeskonnavaim ja ühtekuuluvustunne. Oleme osalenud mitmetes rahvaliiga kohtumistes ja hoidnud au sees Kiili kogukonna spordivaimu.", tag: "Jalgpall", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778530873115-vm1ju69k.png" },
                { id: "p2", title: "Võistlustants ", description: "Üle kümne aasta kestnud pühendumus võistlustantsule õpetas mulle distsipliini, mille sarnast on raske mujalt leida. Iga treening ja võistlus oli samm edasi, õppides kontrollima oma keha, emotsioone ja esinemisjulgust. See periood on andnud mulle sihikindluse, mida rakendan täna igas oma uues ettevõtmises.", tag: "Tants", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778531466534-7mwwuifz.jpg" },
                { id: "p3", title: "Klienditeenindus", description: "Töö Decathlonis on olnud hindamatu kogemus inimestega suhtlemisel ja probleemide lahendamisel. See arendab minu empaatiavõimet, kannatlikkust ja oskust leida parimad lahendused erinevatele olukordadele kiiresti ja professionaalselt. See on igapäevane õppetund sellest, kuidas luua väärtust ja tagada kvaliteetne teeninduskogemus.", tag: "Teenindus", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778671852101-8oq8hsvm.jpg" },
                { id: "p4", title: "Meedia ja Disaini suund ", description: "Kiili Gümnaasiumi jooksul osaletud meediaprojektid andsid mulle praktilise kogemuse loovsisu loomises. Alates visuaalsest disainist kuni sotsiaalmeedia ja meedia kajastamiseni — see teekond aitas mul mõista, kui oluline on loo jutustamine ja visuaalne kommunikatsioon digitaalses maailmas.", tag: "Elu", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778670506849-y65r1qaw.jpg?_wi=2" },
                { id: "p5", title: "Fotograafia ", description: "Fotograafia on minu viis maailma tajuda. See ei ole ainult nupu vajutamine, vaid hetkede jäädvustamine, emotsioonide tabamine ja valguse ning kompositsiooni kaudu loo jutustamine. See loominguline väljund aitab mul näha maailma teise nurga alt ning väärtustada detaile, mis muidu jääksid märkamata.", tag: "Innovatsioon", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778671911732-kjp1j0l4.jpg?_wi=1" },
                { id: "p6", title: "Reisimine ", description: "36 riiki ja loendamatu hulk kogemusi. Reisimine on minu jaoks parim haridus — see avardab silmaringi, õpetab kultuurilist empaatiat ja julgustab astuma välja mugavustsoonist. Iga uus sihtkoht on olnud võimalus kohtuda huvitavate inimestega ja õppida elama avatuma meelega.", tag: "Elu", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DXy63pHOXTf1wMgW8x6XNMvtik/uploaded-1778672237771-31zfv4kh.jpg" }
            ]}
            />
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
