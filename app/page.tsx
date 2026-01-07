import TopBar from "@/components/topbar/TopBar";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import Services from "@/components/sections/Services";
import ProjectsCarousel from "@/components/sections/ProjectsCarousel";
import HowIWork from "@/components/sections/HowIWork";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { getContent } from "@/lib/content";

export default function Home() {
  const t = getContent("en");

  return (
    <main dir="ltr">
      <TopBar />
      <Hero t={t} locale="en" />
      <Trust t={t} locale="en" />
      <Services t={t} />
      <ProjectsCarousel t={t} locale="en" />
      <HowIWork t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </main>
  );
}
