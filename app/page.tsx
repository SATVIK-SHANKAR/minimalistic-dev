"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const [language, setLanguage] = useState("en");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const translations = {
    en: {
      name: "Satvik Shankar",
      description:
        "22 y/o Developer building the future. Currently exploring AI/ML and Quant Finance.",
      achievements: [
        "Created my first website at 17 y/o",
        "Into badminton - played professionally since 13",
        "Passionate about adventure sports and outdoor activities",
        "Capture moments through photography as a hobby",
        "Traveled alone to 7 states in India",
        "Freelance video editor and developer",
        "Working on a Micro Finance Startup",
        "Learning Spanish",
      ],
      experience: "Experience",
      projects: "Projects",
      liveProject: "Live Project",
      copyEmail: "Copy Email",
      copied: "Copied!",
      education: "Education",
      certificates: "Certificates",
      jobs: {
        softwareEngineerIntern: "Software Engineer Intern - ML",
        softwareDeveloper: "Software Developer",
        webDeveloper: "Web Developer",
        freelance: "Freelance Dev and Video Editor",
      },
      projectNames: {
        portfolio: "Portfolio Website",
        facerecognition: "Face Recognition App",
        investmentTracker: "Portfolio Optimization",
      },
      projectTypes: {
        personal: "Personal project",
        side: "Side project",
        startup: "Startup project",
        intern: "Internship project",
      },
      schools: {
        btech: "B.Tech in Computer Science",
        nus: "B.Tech in Computer Science, NUS",
      },
    },
    es: {
      name: "Satvik Shankar",
      description:
        "Desarrollador de 22 años, construyendo el futuro. Actualmente explora IA/ML y finanzas cuantitativas.",
      achievements: [
        "Creé mi primer sitio web a los 17 años",
        "Me gusta el bádminton - jugué profesionalmente desde los 13",
        "Apasionado por los deportes de aventura y actividades al aire libre",
        "Capturo momentos a través de la fotografía como pasatiempo",
        "Viajé solo a 7 estados en India",
        "Editor de video freelance y desarrollador",
        "Trabajando en una startup de microfinanzas",
        "Aprendiendo español",
      ],
      experience: "Experiencia",
      projects: "Proyectos",
      liveProject: "Proyecto en Vivo",
      copyEmail: "Copiar Email",
      copied: "¡Copiado!",
      education: "Educación",
      certificates: "Certificados",
      jobs: {
        softwareEngineerIntern: "Interno de Ingeniero de Software - ML",
        softwareDeveloper: "Desarrollador de Software",
        webDeveloper: "Desarrollador Web",
        freelance: "Desarrollador independiente y editor de vídeo",
      },
      projectNames: {
        portfolio: "Sitio Web de Portafolio",
      },
      projectTypes: {
        personal: "Proyecto personal",
        side: "Proyecto paralelo",
        startup: "Proyecto de startup",
      },
      schools: {
        btech: "Licenciatura en Ciencias de la Computación",
        nus: "Licenciatura en Ciencias de la Computación, NUS",
      },
    },
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const t = translations[language];

  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("satvik.shankar2003@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div
      className={`min-h-screen transition-colors ${
        isDarkMode ? "dark-bg-custom" : "bg-white"
      }`}
    >
      {/* Language and Theme Toggle */}
      <div className="flex justify-between items-center p-6">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-2 rounded-lg transition-colors ${
            isDarkMode
              ? "dark-button-custom hover:bg-opacity-80 text-gray-300"
              : "bg-gray-100 hover:bg-gray-200 text-gray-600"
          }`}
        >
          {isDarkMode ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
        <div
          className={`flex items-center gap-2 text-sm ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <button
            onClick={() => setLanguage("en")}
            className={`${
              language === "en"
                ? `font-medium ${isDarkMode ? "text-white" : "text-black"}`
                : ""
            }`}
          >
            EN
          </button>
          <span>|</span>
          <button
            onClick={() => setLanguage("es")}
            className={`${
              language === "es"
                ? `font-medium ${isDarkMode ? "text-white" : "text-black"}`
                : ""
            }`}
          >
            ES
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 pb-12">
        {/* Profile Section */}
        <div className="mb-12">
          <div className="w-20 h-20 rounded-lg overflow-hidden mb-6">
            <Image
              src="/profile_img.png"
              alt="Satvik Shankar"
              width={70}
              height={70}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1
              className={`text-4xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              {t.name}
            </h1>
            <p
              className={`mb-8 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {t.description}
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="https://github.com/SATVIK-SHANKAR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="link"
                  className={`p-0 h-auto ${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  GitHub
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/satvik-shankar-49b193226/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="link"
                  className={`p-0 h-auto ${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  LinkedIn
                </Button>
              </a>
              <a
                href="https://astro-mdx-gilt.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="link"
                  className={`p-0 h-auto ${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  Website
                </Button>
              </a>
              <a
                href="https://www.instagram.com/satvik.i.o/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="link"
                  className={`p-0 h-auto ${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  Instagram
                </Button>
              </a>
              <a
                href="https://drive.google.com/file/d/1uLhiX8uHTzRVn4StyT6P-fgbjbqP5plX/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="link"
                  className={`p-0 h-auto ${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  CV (EN)
                </Button>
              </a>
              <Button
                variant="link"
                className={`p-0 h-auto ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-black"
                }`}
                onClick={copyEmail}
              >
                {copiedEmail ? t.copied : t.copyEmail}
              </Button>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <ul
            className={`space-y-3 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t.achievements.map((achievement, index) => (
              <li className="flex items-start" key={index}>
                <span
                  className={`mr-3 ${
                    isDarkMode ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  •
                </span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Work Experience Section */}
        <div className="space-y-6 mb-16">
          <h2
            className={`text-2xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            {t.experience}
          </h2>

          {/* NIC */}
          <div
            className={`flex items-center justify-between transition-all duration-300 hover:translate-x-2 cursor-pointer p-3 rounded-lg ${
              isDarkMode ? "hover:bg-[#2A2A2A]" : "hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-4">
              <img
                src="/nic_logo.png"
                alt="Company Logo"
                className="w-10 h-10 rounded-lg object-cover"
              />

              <div>
                <h3
                  className={`font-semibold ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  {t.jobs.softwareEngineerIntern}
                </h3>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  National Informatics Centre (NIC)
                </p>
              </div>
            </div>
            <span
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              May 2024 - Jul 2024
            </span>
          </div>

          {/* Freelance */}
          <div
            className={`flex items-center justify-between transition-all duration-300 hover:translate-x-2 cursor-pointer p-3 rounded-lg ${
              isDarkMode ? "hover:bg-[#2A2A2A]" : "hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <div className="w-6 h-6 bg-yellow-400 rounded-sm"></div>
              </div>
              <div>
                <h3
                  className={`font-semibold ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  {t.jobs.freelance}
                </h3>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Freelance
                </p>
              </div>
            </div>
            <span
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              2022 - Present
            </span>
          </div>
        </div>
        {/* Projects Section */}
        <div className="space-y-6">
          <h2
            className={`text-2xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            {t.projects}
          </h2>

          {/* Project 2 */}
          <div
            className={`flex flex-col transition-all duration-300 hover:translate-x-2 cursor-pointer p-3 rounded-lg ${
              isDarkMode ? "hover:bg-[#2A2A2A]" : "hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P2</span>
                </div>
                <div>
                  <h3
                    className={`font-semibold ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {t.projectNames.aiChat}
                  </h3>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {t.projectTypes.side}
                  </p>
                </div>
              </div>
              <span
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                2024
              </span>
            </div>
            <a
              href="https://your-portfolio-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {t.liveProject}
            </a>
          </div>

          {/* Project 3 */}
          <div
            className={`flex flex-col transition-all duration-300 hover:translate-x-2 cursor-pointer p-3 rounded-lg ${
              isDarkMode ? "hover:bg-[#2A2A2A]" : "hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P3</span>
                </div>
                <div>
                  <h3
                    className={`font-semibold ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {t.projectNames.ecommerce}
                  </h3>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {t.projectTypes.startup}
                  </p>
                </div>
              </div>
              <span
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                2023
              </span>
            </div>
            <a
              href="https://your-portfolio-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {t.liveProject}
            </a>
          </div>
        </div>
        <br />
        <br />

        <div className="space-y-6 mb-16">
          <h2
            className={`text-2xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            {t.education}
          </h2>

          {/* NUS Education */}
          <div
            className={`flex items-center justify-between transition-all duration-300 hover:translate-x-2 cursor-pointer p-3 rounded-lg ${
              isDarkMode ? "hover:bg-[#2A2A2A]" : "hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-4">
              <img
                src="/nus_logo1.jpg"
                alt="NUS Logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                <h3
                  className={`font-semibold ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  {t.schools.nus}
                </h3>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  National University of Singapore
                </p>
                <p
                  className={`text-xs ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Major: Computer Science | Minor: Economics, Quant Finance
                </p>
              </div>
            </div>
            <span
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              2022 - 2024
            </span>
          </div>
          <div>
            <h2
              className={`text-2xl font-bold mb-6 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              {t.certificates}
            </h2>
            <div
              className={`flex items-center justify-between transition-all duration-300 hover:translate-x-2 cursor-pointer p-3 rounded-lg ${
                isDarkMode ? "hover:bg-[#2A2A2A]" : "hover:bg-gray-50"
              }`}
            >
              <img
                src="/nus_logo1.jpg"
                alt="NUS Logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  National University of Singapore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
