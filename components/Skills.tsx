"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  {
    name: "HTML",
    level: 85,
    description: "Semantic markup, struktur halaman web yang bersih dan accessible",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
      </svg>
    ),
    color: "#E44D26",
  },
  {
    name: "CSS",
    level: 80,
    description: "Styling responsif, animasi, Flexbox & Grid layout modern",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
      </svg>
    ),
    color: "#264DE4",
  },
  {
    name: "MySQL",
    level: 70,
    description: "Database relasional, query SQL, manajemen data dan tabel",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.274.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.207 1.123.33-1.036.561-2.16.693-3.483zm12.16 2.236h-2.137v1.844h2.384v.5h-3.796V14.615h3.65v.498h-2.238v1.609h2.137v.13zm-4.5 2.343c-.485.404-1.187.557-1.983.557-.76 0-1.44-.18-2.04-.54v-.603c.637.315 1.26.478 1.872.478.5 0 .895-.106 1.187-.32.292-.214.437-.488.437-.82 0-.36-.17-.667-.51-.916-.17-.12-.552-.3-1.148-.54-.75-.3-1.275-.624-1.573-.97-.298-.347-.447-.76-.447-1.24 0-.49.165-.88.495-1.175.33-.295.773-.44 1.33-.44.604 0 1.2.148 1.793.443v.57c-.553-.248-1.08-.372-1.58-.372-.428 0-.765.1-1.01.298-.244.2-.367.47-.367.812 0 .35.126.65.378.9.17.165.55.367 1.136.607.795.3 1.326.617 1.59.95.263.33.395.735.395 1.213 0 .5-.2.92-.536 1.243v.007z"/>
      </svg>
    ),
    color: "#00758F",
  },
  {
    name: "GitHub",
    level: 75,
    description: "Version control, kolaborasi proyek, branching & pull request",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
    color: "#333",
  },
];

function SkillBar({ skill, visible, delay }: { skill: typeof skills[0]; visible: boolean; delay: number }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setAnimated(true), delay + 300);
      return () => clearTimeout(timer);
    }
  }, [visible, delay]);

  return (
    <div
      className={`p-6 rounded-2xl border border-line bg-subtle hover:border-accent/30 transition-all duration-500 group ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon + Name */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center text-white"
          style={{ backgroundColor: skill.color + "20", color: skill.color }}
        >
          {skill.icon}
        </div>
        <div>
          <h3 className="font-semibold text-fg text-sm">{skill.name}</h3>
          <span className="text-xs text-muted font-mono">{skill.level}%</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-muted leading-relaxed mb-5">{skill.description}</p>

      {/* Progress bar */}
      <div className="h-1 rounded-full bg-border overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animated ? `${skill.level}%` : "0%",
            backgroundColor: skill.color,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-32 bg-subtle border-t border-line" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Section label */}
        <div
          className={`flex items-center gap-4 mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            02 / Skills
          </span>
          <span className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Heading */}
          <div
            className={`transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-display text-4xl sm:text-5xl text-fg leading-tight mb-6">
              Teknologi yang
              <br />
              <span className="italic text-accent">saya kuasai</span>
            </h2>
            <p className="text-muted leading-relaxed max-w-md">
              Sekumpulan tools dan teknologi yang saya gunakan dalam membangun proyek-proyek web. Saya terus belajar dan mengeksplorasi hal-hal baru.
            </p>
          </div>

          {/* Empty col for spacing on large */}
          <div className="hidden lg:block" />
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} visible={visible} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
