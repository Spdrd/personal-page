"use client";
import { useState } from "react";

const projects = [
  {
    title: "Ecommerce Full-Stack",
    description: "Next.js + Stripe + PostgreSQL",
    img: "/projects/ecommerce.png",
  },
  {
    title: "Dashboard Admin",
    description: "React + Tailwind + Charts",
    img: "/projects/dashboard.png",
  },
  {
    title: "App Móvil Delivery",
    description: "Flutter + Firebase",
    img: "/projects/delivery.png",
  },
];

export default function ProjectsCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((current - 1 + projects.length) % projects.length);
  };

  const next = () => {
    setCurrent((current + 1) % projects.length);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white p-6">
      <h2 className="text-4xl font-bold mb-10">Mis Proyectos</h2>

      <div className="relative w-full max-w-3xl overflow-hidden">
        {/* Carrusel */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="min-w-full p-6 flex flex-col items-center">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <h3 className="text-2xl font-semibold mt-6">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Botón anterior */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800/60 hover:bg-gray-800 text-white p-3 rounded-full"
        >
          ‹
        </button>

        {/* Botón siguiente */}
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800/60 hover:bg-gray-800 text-white p-3 rounded-full"
        >
          ›
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex gap-2 mt-6">
        {projects.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition ${
              current === i ? "bg-indigo-500" : "bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
