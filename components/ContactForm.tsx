"use client";
// CLIENT COMPONENT — uses useState for form validation

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = "Nama tidak boleh kosong.";
    if (!formData.email.trim()) {
      errs.email = "Email tidak boleh kosong.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Format email tidak valid.";
    }
    if (!formData.subject.trim()) errs.subject = "Subjek tidak boleh kosong.";
    if (!formData.message.trim()) {
      errs.message = "Pesan tidak boleh kosong.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Pesan terlalu singkat (min. 10 karakter).";
    }
    return errs;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // Simulate successful submission (no backend)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">
          Pesan Terkirim!
        </h3>
        <p className="text-green-700 dark:text-green-400 text-sm">
          Terima kasih, {formData.name}! Pesan Anda telah diterima.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
          }}
          className="mt-5 text-sm text-green-700 dark:text-green-400 underline hover:no-underline"
        >
          Kirim pesan lain
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
        >
          Nama
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nama lengkap"
          className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border ${
            errors.name
              ? "border-red-400 dark:border-red-500"
              : "border-gray-200 dark:border-gray-700"
          } text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors`}
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="nama@email.com"
          className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border ${
            errors.email
              ? "border-red-400 dark:border-red-500"
              : "border-gray-200 dark:border-gray-700"
          } text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors`}
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
        >
          Subjek
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Topik pesan"
          className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border ${
            errors.subject
              ? "border-red-400 dark:border-red-500"
              : "border-gray-200 dark:border-gray-700"
          } text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors`}
        />
        {errors.subject && (
          <p className="mt-1.5 text-xs text-red-500">{errors.subject}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
        >
          Pesan
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tuliskan pesan Anda di sini..."
          className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border ${
            errors.message
              ? "border-red-400 dark:border-red-500"
              : "border-gray-200 dark:border-gray-700"
          } text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-none`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-3.5 px-6 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 active:scale-[0.99] transition-all duration-150"
      >
        Kirim Pesan
      </button>
    </form>
  );
}
