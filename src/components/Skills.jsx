"use client";

import { title } from "process";
import {
  SiPython,
  SiJava,
  SiKotlin,
  SiC,
  SiCplusplus,
  SiDotnet,
  SiJavascript,
  SiTypescript,
  SiDart,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiAndroid,
  SiFastapi,
  SiSpringboot,
  SiNodedotjs,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiTunnelbear,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiUnity,
  SiArduino,
  SiEspressif,
  SiScikitlearn,
} from "react-icons/si";


export default function SkillsGrid() {
  const skillGroups = [
    {
      title: "Lenguajes",
      skills: [
        { name: "Python", icon: <SiPython size={45} color="#3776AB" /> },
        { name: "Java", icon: <SiSpringboot size={45} color="#ED8B00" /> },
        { name: "Kotlin", icon: <SiKotlin size={45} color="#7F52FF" /> },
        { name: "C", icon: <SiC size={45} color="#A8B9CC" /> },
        { name: "C++", icon: <SiCplusplus size={45} color="#00599C" /> },
        { name: "C#", icon: <SiDotnet size={45} color="#512BD4" /> },
        { name: "JavaScript", icon: <SiJavascript size={45} color="#F7DF1E" /> },
        { name: "TypeScript", icon: <SiTypescript size={45} color="#3178C6" /> },
        { name: "Dart", icon: <SiDart size={45} color="#0175C2" /> },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <SiReact size={45} color="#61DAFB" /> },
        { name: "Next.js", icon: <SiNextdotjs size={45} color="#FFFFFF" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss size={45} color="#38BDF8" /> },
        { name: "Tkinter", icon: <SiPython size={45} color="#3776AB" /> },
        { name: "Flutter", icon: <SiFlutter size={45} color="#02569B" /> },
        { name: "Android", icon: <SiAndroid size={45} color="#3DDC84" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "FastAPI", icon: <SiFastapi size={45} color="#009688" /> },
        { name: "Spring Boot", icon: <SiSpringboot size={45} color="#6DB33F" /> },
        { name: "Elysia", icon: <SiNodedotjs size={45} color="#339933" /> },
      ],
    },
    {
      title: "DevOps",
      skills: [
        { name: "Docker", icon: <SiDocker size={45} color="#2496ED" /> },
        { name: "Docker Compose", icon: <SiDocker size={45} color="#0DB7ED" /> },
        { name: "Git", icon: <SiGit size={45} color="#F05032" /> },
        { name: "GitHub Actions", icon: <SiGit size={45} color="#2088FF" /> },
      ],
    },
    {
      title: "Bases de Datos",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql size={45} color="#336791" /> },
        { name: "MongoDB", icon: <SiMongodb size={45} color="#47A248" /> },
        { name: "MySQL", icon: <SiMysql size={45} color="#4479A1" /> },
      ],
    },
    {
      title: "Otros",
      skills: [
        { name: "Pandas", icon: <SiPandas size={45} color="#150458" /> },
        { name: "NumPy", icon: <SiNumpy size={45} color="#013243" /> },
        { name: "Matplotlib", icon: <SiPython size={45} color="#3776AB" /> },
        { name: "Scikit-learn", icon: <SiScikitlearn size={45} color="#F7931E" /> },
        { name: "TensorFlow", icon: <SiTensorflow size={45} color="#FF6F00" /> },
        { name: "Keras", icon: <SiKeras size={45} color="#D00000" /> },
        { name: "Pygame", icon: <SiPython size={45} color="#4B8BBE" /> },
        { name: "Unity", icon: <SiUnity size={45} color="#FFFFFF" /> },
        { name: "Arduino", icon: <SiArduino size={45} color="#00979D" /> },
        { name: "Esp32", icon: <SiEspressif size={45} color="#E7352C" /> },
      ],
    },
  ];


  return (
    <section className="w-full py-16 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Habilidades
        </h2>

        {skillGroups.map((group, index) => (
          <div key={index} className="mb-14">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-200">
              {group.title}
            </h3>

            <div
              className="
                grid
                grid-cols-[repeat(auto-fit,minmax(260px,1fr))]
                gap-6
                justify-center
              "
            >
              {group.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="
                    bg-gray-900
                    rounded-xl
                    p-6
                    shadow-lg
                    flex flex-col
                    items-center
                    justify-center
                    border border-gray-800
                    hover:scale-105
                    transition
                  "
                >
                  <div className="mb-4">{skill.icon}</div>
                  <h4 className="text-lg font-bold">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
