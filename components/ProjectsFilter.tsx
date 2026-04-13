"use client";
// CLIENT COMPONENT — uses useState for category filter

import { useState } from "react";
import Link from "next/link";
import { Project } from "@/data/projects";

type Props = {
  projects: Project[];
};

const categories = ["Semua", "Frontend", "Web Development"];

export default function ProjectsFilter({ projects }: Props) {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered =
    activeCategory === "Semua"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-200"
          >
            {/* Image placeholder */}
            <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 mb-5 flex items-center justify-center overflow-hidden">
              <span className="text-4xl opacity-30">🖥️</span>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                {project.category}
              </span>
              <span className="text-xs text-gray-400">{project.year}</span>
            </div>

            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-mono"
                >
                  {t}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="text-xs px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-500">
                  +{project.tech.length - 3}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400 dark:text-gray-600">
          Tidak ada proyek di kategori ini.
        </div>
      )}
    </div>
  );
}
