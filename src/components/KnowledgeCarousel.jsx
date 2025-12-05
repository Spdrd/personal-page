"use client";
import { useRef, useState } from "react";

import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiPython, 
  SiPostgresql 
} from "react-icons/si";

export default function KnowledgeCarousel() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const skills = [
    { name: "JavaScript", level: "Avanzado", icon: <SiJavascript size={45} color="#facc15" /> },
    { name: "TypeScript", level: "Intermedio", icon: <SiTypescript size={45} color="#3178c6" /> },
    { name: "React.js", level: "Avanzado", icon: <SiReact size={45} color="#61dafb" /> },
    { name: "Next.js", level: "Avanzado", icon: <SiNextdotjs size={45} color="white" /> },
    { name: "TailwindCSS", level: "Avanzado", icon: <SiTailwindcss size={45} color="#38bdf8" /> },
    { name: "Node.js", level: "Intermedio", icon: <SiNodedotjs size={45} color="#68A063" /> },
    { name: "Python", level: "Intermedio", icon: <SiPython size={45} color="#facc15" /> },
    { name: "PostgreSQL", level: "Intermedio", icon: <SiPostgresql size={45} color="#316192" /> },
  ];

  // --- Eventos de arrastre ---
  const handleMouseDown = (e) => {
    setIsDragging(true);
    scrollRef.current.classList.add("cursor-grabbing");
    scrollRef.current.classList.remove("cursor-grab");

    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.3;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    scrollRef.current.classList.add("cursor-grab");
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  return (
    <section className="w-full py-16 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Habilidades</h2>

        {/* Carrusel arrastrable */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="
            flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar px-10
            cursor-grab select-none active:cursor-grabbing
          "
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                my-1
                overflow-y-hidden  
                scrollbar-hide
                min-h flex-1
                min-w-[230px]
                bg-gray-900
                rounded-xl
                p-6
                shadow-lg
                flex flex-col
                items-center
                justify-center
                hover:scale-105
                transition
                border border-gray-800
              "
            >
              {/* Ícono */}
              <div className="mb-4">
                {skill.icon}
              </div>

              {/* Nombre */}
              <h3 className="text-xl font-bold">{skill.name}</h3>

              {/* Nivel */}
              <p className="text-gray-400 mt-2">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
