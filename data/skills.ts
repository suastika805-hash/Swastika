export type Skill = {
  name: string;
  level: number; // 0-100
  category: string;
};

export type Profile = {
  name: string;
  nim: string;
  jurusan: string;
  universitas: string;
  angkatan: string;
  bio: string;
  email: string;
  github: string;
  location: string;
};

export const profile: Profile = {
  name: "I Komang Swastika Adnyana",
  nim: "NIM Anda",
  jurusan: "Informatika",
  universitas: "Universitas Anda",
  angkatan: "2022",
  bio: "Mahasiswa Informatika yang antusias dalam pengembangan web. Suka membangun antarmuka yang bersih, cepat, dan mudah digunakan. Sedang belajar Next.js, TypeScript, dan ekosistem modern web.",
  email: "email@student.ac.id",
  github: "https://github.com/suastika805-hash",
  location: "Bali, Indonesia",
};

export const skills: Skill[] = [
  // Frontend
  { name: "HTML & CSS", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 75, category: "Frontend" },
  { name: "TypeScript", level: 60, category: "Frontend" },
  { name: "React.js", level: 70, category: "Frontend" },
  { name: "Next.js", level: 65, category: "Frontend" },
  { name: "Tailwind CSS", level: 80, category: "Frontend" },
  // Backend
  { name: "PHP", level: 70, category: "Backend" },
  { name: "MySQL", level: 65, category: "Backend" },
  { name: "Node.js", level: 50, category: "Backend" },
  // Tools
  { name: "Git & GitHub", level: 75, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
  { name: "Figma", level: 55, category: "Tools" },
];

export const skillCategories = ["Frontend", "Backend", "Tools"];
