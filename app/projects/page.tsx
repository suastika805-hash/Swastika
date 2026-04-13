// app/projects/page.tsx
// SERVER COMPONENT — no "use client" needed

import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectsFilter from "@/components/ProjectsFilter";

export const metadata = {
  title: "Projects | Portfolio",
  description: "Daftar proyek yang telah saya kerjakan.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-6"
          >
            ← Kembali ke Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Proyek Saya
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Kumpulan proyek yang telah saya kerjakan — dari tugas kuliah hingga proyek mandiri.
          </p>
        </div>

        {/* Client component for filter interactivity */}
        <ProjectsFilter projects={projects} />
      </div>
    </main>
  );
}
