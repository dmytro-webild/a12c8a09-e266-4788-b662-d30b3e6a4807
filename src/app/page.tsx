"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
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
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Projects",
          id: "projects",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Lazar Uleksin"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      title="Lazar Uleksin"
      description="Active, hardworking, and dedicated. Passionate about dance, sports, and delivering exceptional customer service."
      testimonials={[
        {
          name: "Coach",
          handle: "@danceclub",
          testimonial: "Lazar has been incredibly disciplined for over a decade.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-stylish-handsome-young-man-looking-camera-leaning-grey-wall_23-2148130416.jpg?_wi=1",
          imageAlt: "professional headshot man suit",
        },
        {
          name: "Teammate",
          handle: "@footballclub",
          testimonial: "Excellent team player and always hardworking on the field.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/american-football-american-football-player-professional-sport-stadium_654080-243.jpg?_wi=1",
          imageAlt: "professional headshot man suit",
        },
        {
          name: "Manager",
          handle: "@office",
          testimonial: "Great attitude and focus on personal growth.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/representations-user-experience-interface-design_23-2150038913.jpg?_wi=1",
          imageAlt: "professional headshot man suit",
        },
        {
          name: "Partner",
          handle: "@dance",
          testimonial: "Reliable and focused on collective success.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/using-device-corporate-touchpad-network-multimedia_1421-248.jpg?_wi=1",
          imageAlt: "professional headshot man suit",
        },
        {
          name: "Colleague",
          handle: "@service",
          testimonial: "Always helpful and communicates clearly.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/hispanic-woman-using-digital-tablet_53876-95581.jpg?_wi=1",
          imageAlt: "professional headshot man suit",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-stylish-handsome-young-man-looking-camera-leaning-grey-wall_23-2148130416.jpg?_wi=2"
      imageAlt="Lazar Uleksin headshot"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-handsome-young-man-against-blur-backdrop_23-2148130407.jpg",
          alt: "Portrait of a handsome young man against blur backdrop",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-handsome-young-man-denim-shirt-with-his-arm-crossed-looking-camera_23-2148130396.jpg",
          alt: "Portrait of a handsome young man in denim shirt with his arm crossed looking at camera",
        },
        {
          src: "http://img.b2bpic.net/free-photo/serious-young-man-looking_74855-3108.jpg",
          alt: "Serious young man looking",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-hipster-black-man-posing-isolated-white-studio-wall-background-stylish-outfit-funny-afro-hairstyle-confident-arms-crossed-chest-serious_285396-2953.jpg",
          alt: "Portrait of young hipster black man",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-stylish-handsome-young-man-looking-camera-leaning-grey-wall_23-2148130416.jpg",
          alt: "professional headshot man suit",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Distsipliin",
        },
        {
          type: "text",
          text: "Meeskonnatöö",
        },
        {
          type: "text",
          text: "Sihikindlus",
        },
        {
          type: "text",
          text: "Kliendikesksus",
        },
        {
          type: "text",
          text: "Professionaalsus",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Minust ja minu teekonnast"
      description="Olen olnud aktiivne võistlustantsija 10 aastat ja mängin jalgpalli rahvaliigas. Need kogemused on õpetanud mulle väärtuslikke oskusi: distsipliini, meeskonnatööd ja sihikindlust, mida rakendan igas oma ettevõtmises."
      metrics={[
        {
          value: "10+",
          title: "Aastat tantsukogemust",
        },
        {
          value: "Lõputu",
          title: "Sihikindlus",
        },
        {
          value: "Suurepärane",
          title: "Suhtlemisoskus",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/american-football-american-football-player-professional-sport-stadium_654080-243.jpg?_wi=2"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
      imageAlt="dance studio action shot"
    />
  </div>

  <div id="projects" data-section="projects">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "p1",
          title: "Võistlustantsu projekt",
          author: "Lazar Uleksin",
          description: "10-aastane teekond professionaalsel tasemel.",
          tags: [
            "Tants",
            "Distsipliin",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/representations-user-experience-interface-design_23-2150038913.jpg?_wi=2",
        },
        {
          id: "p2",
          title: "Rahvaliiga Jalgpall",
          author: "Lazar Uleksin",
          description: "Meeskonnatöö arendamine läbi spordi.",
          tags: [
            "Jalgpall",
            "Meeskond",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/using-device-corporate-touchpad-network-multimedia_1421-248.jpg?_wi=2",
        },
        {
          id: "p3",
          title: "Klienditeenindus teekond",
          author: "Lazar Uleksin",
          description: "Suhtlemisoskuse lihvimine.",
          tags: [
            "Teenindus",
            "Kommunikatsioon",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/hispanic-woman-using-digital-tablet_53876-95581.jpg?_wi=2",
        },
      ]}
      title="Minu projektid"
      description="Siin on ülevaade minu varasematest projektidest ja tegevustest."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "s1",
          title: "Suhtlemisoskus",
          author: "Lazar Uleksin",
          description: "Suudan luua meeldiva teeninduskogemuse ja leida iga kliendiga kontakti.",
          tags: [
            "Suhtlus",
            "Kliendid",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-hand-holding-paper-piece_23-2149930956.jpg",
        },
        {
          id: "s2",
          title: "Töökus",
          author: "Lazar Uleksin",
          description: "Annan endast alati 100%, et tagada kvaliteet.",
          tags: [
            "Distsipliin",
            "Töö",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-young-successful-businessman-white-shirt-working-wooden-table_171337-10020.jpg",
        },
        {
          id: "s3",
          title: "Meeskonnatöö",
          author: "Lazar Uleksin",
          description: "Võistlustants ja jalgpall on õpetanud minuga arvestama teistega.",
          tags: [
            "Tiimitöö",
            "Koostöö",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/cloud-computing-storage-data-network_53876-120163.jpg",
        },
      ]}
      title="Miks valida mind?"
      description="Minu tugevused, mis aitavad pakkuda parimat teeninduskogemust."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Minu saavutused"
      tag="Statistika"
      metrics={[
        {
          id: "m1",
          value: "10a",
          description: "Võistlustantsu treeningud",
        },
        {
          id: "m2",
          value: "5a+",
          description: "Jalgpalli kogemust",
        },
        {
          id: "m3",
          value: "100%",
          description: "Sihikindlus",
        },
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          role: "Treener",
          company: "Tantsukool",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-smiling-beautiful-adult-businesswoman_1262-1760.jpg",
        },
        {
          id: "2",
          name: "Mark K.",
          role: "Tiimikaaslane",
          company: "Jalgpalliklubi",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-african-american-man-posing-library_74855-1619.jpg",
        },
        {
          id: "3",
          name: "Elena R.",
          role: "Klient",
          company: "Teenindus",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/mature-business-manager-office_1098-21368.jpg",
        },
        {
          id: "4",
          name: "David M.",
          role: "Juhendaja",
          company: "Spordikool",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-groom-classy-black-suit-stands-dark-room_8353-7083.jpg",
        },
        {
          id: "5",
          name: "Anna P.",
          role: "Tööandja",
          company: "Eesti Ettevõte",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-business-caucasian-man-black-suit-office-background_609648-1007.jpg",
        },
      ]}
      title="Mida arvatakse minust"
      description="Tagasiside minu pühendumuse ja tööeetika kohta."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Kontakt"
      title="Võta minuga ühendust"
      description="Olen avatud uutele väljakutsetele ja tööpakkumistele."
      mediaAnimation="slide-up"
      mediaPosition="right"
      imageSrc="http://img.b2bpic.net/free-photo/portrait-stylish-handsome-young-man-looking-camera-leaning-grey-wall_23-2148130416.jpg?_wi=3"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Lazar Uleksin"
      columns={[
        {
          title: "Sotsiaalmeedia",
          items: [
            {
              label: "LinkedIn",
              href: "#",
            },
            {
              label: "Instagram",
              href: "#",
            },
          ],
        },
        {
          title: "Navigatsioon",
          items: [
            {
              label: "Kodu",
              href: "#hero",
            },
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Kontakt",
              href: "#contact",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
