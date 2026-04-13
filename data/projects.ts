export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string;
  year: string;
  github?: string;
  demo?: string;
  image: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "Website portofolio pribadi dibangun dengan Next.js 14 dan Tailwind CSS.",
    longDescription:
      "Website portofolio ini dibangun menggunakan Next.js 14 dengan App Router, di-styling sepenuhnya dengan Tailwind CSS. Menampilkan profil, skill, proyek, dan kontak. Dilengkapi dark mode toggle, responsive design, dan smooth scroll animations menggunakan Intersection Observer API.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Web Development",
    year: "2025",
    github: "https://github.com/suastika805-hash/portfolio",
    demo: "https://portfolio-puce-eight-71.vercel.app/",
    image: "/project-portfolio.png",
    featured: true,
  },
  {
    slug: "sistem-manajemen-perpustakaan",
    title: "Sistem Manajemen Perpustakaan",
    description: "Aplikasi manajemen buku dan peminjaman berbasis web menggunakan PHP dan MySQL.",
    longDescription:
      "Sistem manajemen perpustakaan sederhana yang memungkinkan pengelolaan data buku, anggota, dan transaksi peminjaman. Dibangun menggunakan PHP native dengan MySQL sebagai database. Fitur meliputi CRUD buku, manajemen anggota, pencatatan peminjaman dan pengembalian, serta laporan sederhana.",
    tech: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS"],
    category: "Web Development",
    year: "2024",
    github: "https://github.com/suastika805-hash",
    image: "/project-library.png",
    featured: true,
  },
  {
    slug: "aplikasi-kalkulator",
    title: "Aplikasi Kalkulator",
    description: "Kalkulator modern dengan tampilan bersih dan dukungan operasi dasar dan ilmiah.",
    longDescription:
      "Kalkulator web responsif yang mendukung operasi matematika dasar (penjumlahan, pengurangan, perkalian, pembagian) serta beberapa fungsi ilmiah. Dibangun murni dengan HTML, CSS, dan JavaScript vanilla tanpa library tambahan. Memiliki history perhitungan dan keyboard support.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    year: "2024",
    github: "https://github.com/suastika805-hash",
    image: "/project-calculator.png",
    featured: false,
  },
  {
    slug: "landing-page-cafe",
    title: "Landing Page Cafe",
    description: "Landing page modern untuk bisnis cafe lokal dengan menu dan galeri foto.",
    longDescription:
      "Landing page untuk usaha cafe lokal yang menampilkan hero section, menu makanan dan minuman, galeri foto, lokasi, dan form reservasi. Didesain dengan tampilan yang hangat dan mengundang, menggunakan color palette earthy tone. Fully responsive untuk semua ukuran layar.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    category: "Frontend",
    year: "2025",
    github: "https://github.com/suastika805-hash",
    image: "/project-cafe.png",
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
