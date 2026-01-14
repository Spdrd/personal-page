"use client";

import { NAME, PICTURE_URL } from "@/constants/myInfo";
import { SECTIONS } from "@/constants/sectionsInfo";

interface SidePanelProps {
  show: boolean;
}

export default function SidePanel({ show }: SidePanelProps) {
  return (
    <aside
      className={`
        fixed
        top-0
        left-0
        h-screen
        w-72
        z-50
        bg-gray-950
        border-r border-gray-800
        text-white
        px-6
        py-10
        transition-transform
        duration-700
        ease-out
        ${show ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      {/* Avatar */}
      <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-gray-700 shadow-xl">
        <img
          src={PICTURE_URL}
          alt="Developer photo"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold mb-6">
        {NAME}
      </h3>

      <nav className="flex flex-col gap-4 mt-4">
        {SECTIONS.map((link) => (
          <a
            key={link.target}
            href={`#${link.target}`}
            className="
            inline-block
            text-gray-300 text-sm
            transition-all duration-200 ease-out
            hover:text-indigo-400 hover:scale-105
            active:text-indigo-500 active:scale-95
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-indigo-400
          "
          >
            {link.text}
          </a>
        ))}
      </nav>
    </aside>
  );
}
