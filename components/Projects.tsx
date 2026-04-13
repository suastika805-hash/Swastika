"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    name: "QuickBrew — Aplikasi Pemesanan Kopi Cepat",
    description:
      "Aplikasi web untuk memesan kopi dengan cepat dan mudah. Pengguna dapat memilih menu, mengustomisasi pesanan (ukuran, susu, level gula), lalu checkout dalam hitungan detik. Dilengkapi fitur riwayat pesanan dan estimasi waktu pengambilan.",
    tech: ["Next.js", "Tailwind CSS", "MySQL", "TypeScript"],
    status: "In Progress",
    icon: "☕",
    highlights: [
      "Pemesanan instan tanpa antrian panjang",
      "Kustomisasi minuman sesuai selera",
      "Estimasi waktu siap diambil secara real-time",
    ],
  },
];

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--bg-secondary)]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Label */}
        <p
          className={`text-xs font-mono text-[var(--accent)] tracking-widest uppercase mb-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          03 / Projects
        </p>

        {/* Section Title */}
        <h2
          className={`font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--text-primary)] mb-4 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Proyek yang saya kerjakan
        </h2>

        {/* Section Subtitle */}
        <p
          className={`text-[var(--text-secondary)] text-base md:text-lg max-w-2xl mb-16 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Kumpulan proyek yang saya bangun untuk mengasah kemampuan dan
          menyelesaikan masalah nyata. Setiap proyek adalah pembelajaran baru.
        </p>

        {/* Project Cards */}
        <div className="grid gap-8">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl border border-[var(--border)] bg-[var(--bg-primary)] p-8 md:p-10 transition-all duration-700 hover:border-[var(--accent)] hover:shadow-lg ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              {/* Top Row */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{project.icon}</span>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* Status Badge */}
                <span className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full text-xs font-mono bg-[var(--accent)] bg-opacity-10 text-[var(--accent)] border border-[var(--accent)] border-opacity-30 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="mb-6 space-y-2">
                {project.highlights.map((h, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                  >
                    <span className="text-[var(--accent)] mt-0.5">→</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
