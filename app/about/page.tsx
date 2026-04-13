// app/about/page.tsx
// SERVER COMPONENT

import Link from "next/link";
import Image from "next/image";
import { profile, skills, skillCategories } from "@/data/skills";

export const metadata = {
  title: "About | Portfolio",
  description: "Tentang saya — latar belakang, pendidikan, dan skill.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-10"
        >
          ← Kembali ke Home
        </Link>

        {/* Profile header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
          <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-indigo-600 flex-shrink-0">
            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              {profile.name.charAt(0)}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
              {profile.name}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              {profile.jurusan} · {profile.universitas}
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
              📍 {profile.location}
            </p>
          </div>
        </div>

        {/* Bio */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Tentang Saya</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            {profile.bio}
          </p>
        </section>

        {/* Detail info */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Info</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "NIM", value: profile.nim },
              { label: "Jurusan", value: profile.jurusan },
              { label: "Universitas", value: profile.universitas },
              { label: "Angkatan", value: profile.angkatan },
              { label: "Email", value: profile.email },
              { label: "GitHub", value: "suastika805-hash" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <span className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                  {item.label}
                </span>
                <span className="text-gray-900 dark:text-white font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Skills</h2>
          <div className="space-y-10">
            {skillCategories.map((category) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                  {category}
                </h3>
                <div className="space-y-3">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-400 dark:text-gray-500">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
