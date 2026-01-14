"use client";

import Hero from "./Hero";
import Skills from "./Skills";
import { useInView } from "@/hooks/useInView";
import SidePanel from "./SidePanel";

export default function Home() {
  const [heroRef, heroVisible] = useInView<HTMLDivElement>({
    threshold: 0.2,
  });

  const showPanel = !heroVisible;

  return (
    <div className="relative flex">
      {/* Panel lateral */}
      <SidePanel show={showPanel} />

      {/* CONTENIDO PRINCIPAL */}
      <main
        className={`
          flex-1
          transition-all
          duration-700
          ease-out
          ${showPanel ? "ml-72" : "ml-0"}
        `}
      >
        <section id="home">
          <Hero ref={heroRef} />
        </section>
        <section id="skills">
          <Skills />
        </section>
      </main>
    </div>
  );
}
