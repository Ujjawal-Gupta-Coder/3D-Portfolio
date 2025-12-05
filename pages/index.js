import { useEffect, useState } from "react";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "@/components";
import HeroBackground from "@/components/HeroBackground";
import EarthContainer from "@/components/EarthContainer";
import PlayerContainer from "@/components/PlayerContainer";
import Services from "@/components/Services";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Coding from "@/components/Coding";

function App({ loading }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <main className="relative z-0 w-full h-full">
      <div className=" bg-cover bg-no-repeat bg-center">
        <Navbar />
        <HeroBackground />
        <Hero loading={loading} isMobile={isMobile} />
      </div>
      <section className="relative z-0 flex md:flex-row flex-col-reverse w-full h-full overflow-hidden">
        <About />
        {!isMobile && <PlayerContainer isMobile={isMobile} />}
      </section>
      <Services />
      <Experience />
      <Education />
      <Tech />
      <Works />
      <Coding />
      <section className="relative z-0 flex md:flex-row justify-between flex-col-reverse w-full h-full overflow-x-hidden sm:p-8 py-2 px-3 pb-8">
        <Contact /> 
        <EarthContainer isMobile={isMobile} />
        <StarsCanvas />
      </section>
      <Footer />

    </main>
  );
}

export default App;
