"use client";

import { forwardRef } from "react";
import { NAME, PICTURE_URL, BIO, SOCIALS } from "@/constants/myInfo";

const Hero = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-950 text-white border-b border-gray-800"
    >
      {/* Avatar */}
      <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-gray-700 shadow-xl">
        <img
          src={PICTURE_URL}
          alt="Developer photo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Título */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        Hola, soy <span className="text-indigo-400">{NAME}</span>
      </h1>

      {/* Subtítulo */}
      <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-300">
        {BIO}
      </p>

      {/* Botones */}
      <div className="mt-8 flex gap-4">
        <a
          href="projects"
          className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition font-medium"
        >
          Ver proyectos
        </a>

        <a
          href="#contact"
          className="px-6 py-3 rounded-xl border border-gray-600 hover:bg-gray-800 transition font-medium"
        >
          Contáctame
        </a>
      </div>

      {/* Redes */}
      <div className="mt-10 flex gap-6 text-gray-400">
        <a
          href={SOCIALS.github}
          target="_blank"
          className="hover:text-white transition"
        >
          <i className="fa-brands fa-github text-3xl"></i>
        </a>
        <a
          href={SOCIALS.linkedin}
          target="_blank"
          className="hover:text-white transition"
        >
          <i className="fa-brands fa-linkedin text-3xl"></i>
        </a>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
export default Hero;
