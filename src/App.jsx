// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from "react";
import ThreeDModel from "./ThreeDModel";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white font-['Poppins',sans-serif]">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/60 backdrop-blur-lg" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent"
          >
            Santhosam Mohan
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              Projects
            </a>
            <a
              href="#blog"
              className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              Blog
            </a>
            <a
              href="#education"
              className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              Education
            </a>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              Contact
            </a>
          </div>

          <button className="md:hidden text-xl cursor-pointer">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 z-0">
          
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
              Santhosam Mohan
            </h1>
            <div className="inline-block bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent text-2xl md:text-4xl font-bold mb-6">
              Full Stack Developer
            </div>
            <div className="backdrop-blur-md bg-black/30 p-6 rounded-xl max-w-2xl mx-auto mb-10 border border-slate-700/50">
              <p className="text-lg md:text-xl">
                Creating interactive, modern, and scalable web solutions.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 whitespace-nowrap !rounded-button cursor-pointer"
              >
                View Projects
              </a>
              <a
                href="#"
                className="px-8 py-3 bg-transparent border border-blue-400 rounded-full font-medium hover:bg-blue-400/10 transition-all duration-300 whitespace-nowrap !rounded-button cursor-pointer"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-transparent border border-teal-400 rounded-full font-medium hover:bg-teal-400/10 transition-all duration-300 whitespace-nowrap !rounded-button cursor-pointer"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
            <ThreeDModel />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-white/70 hover:text-white cursor-pointer"
          >
            <i className="fas fa-chevron-down text-2xl"></i>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/5 relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 blur-xl opacity-30 animate-pulse"></div>
                <img
                  src="mohan.png"
                  alt="Santhosam Mohan"
                  className="rounded-full w-full h-full object-cover relative z-10 border-4 border-blue-500/30"
                />
              </div>
            </div>

            <div className="md:w-3/5">
              <div className="backdrop-blur-md bg-white/5 p-8 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-bold mb-4 text-blue-300">
                  Hello, I'm Santhosam
                </h3>
                <p className="text-lg mb-6 text-slate-300">
                  I'm a passionate Full Stack Developer with a keen interest in
                  creating elegant, efficient, and user-friendly web
                  applications. My journey in coding began with curiosity and
                  has evolved into a professional pursuit of excellence in web
                  development.
                </p>
                <p className="text-lg mb-8 text-slate-300">
                  I specialize in building responsive, modern web applications
                  using cutting-edge technologies. My approach combines
                  technical expertise with creative problem-solving to deliver
                  solutions that not only meet but exceed expectations.
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React",
                    "C",
                    "C++",
                    "Responsive Design",
                    "API Integration",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-blue-900/40 rounded-full text-sm border border-blue-500/30 backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {[
              { name: "HTML", icon: "html" },
              { name: "CSS", icon: "css" },
              { name: "JavaScript", icon: "js" },
              { name: "React", icon: "react" },
              { name: "Node.js", icon: "node" },
              { name: "Git", icon: "git" },
            ].map((skill) => (
              <div
                key={skill.name}
                className="relative bg-[#232526]/70 backdrop-blur-md border border-[#4CAF50]/30 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden"
              >
                <div className="mb-4 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-[#222] to-[#333] shadow-inner border border-[#4CAF50]/20">
                  {skill.icon === "html" && (
                    <svg width="40" height="40" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#E44D26" d="M19.5 114.5L8.1 0h111.8l-11.4 114.5-44.5 12.5z"/>
                      <path fill="#F16529" d="M64 117.2l35.9-10.1 9.8-109.7H64z"/>
                      <path fill="#EBEBEB" d="M64 66.6H44.2l-1.4-15.7H64V36.1H28.7l.4 4.7 4.1 45.7H64v-19.9zm0 32.7l-.1.1-15.1-4.1-.9-10.2H36.2l1.7 19.2 26 7.2.1-.1v-12.1z"/>
                      <path fill="#FFF" d="M63.9 66.6V50.9h17.6l1.4-15.7H63.9V36.1h35.3l-.4 4.7-4.1 45.7H63.9v-19.9zm0 32.7v12.1l15.1-4.1.2-2.2 1.3-14.5H63.9v8.7z"/>
                    </svg>
                  )}
                  {skill.icon === "css" && (
                    <svg width="40" height="40" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#1572B6" d="M19.5 114.5L8.1 0h111.8l-11.4 114.5-44.5 12.5z"/>
                      <path fill="#33A9DC" d="M64 117.2l35.9-10.1 9.8-109.7H64z"/>
                      <path fill="#fff" d="M64 66.6H44.2l-1.4-15.7H64V36.1H28.7l.4 4.7 4.1 45.7H64v-19.9zm0 32.7l-.1.1-15.1-4.1-.9-10.2H36.2l1.7 19.2 26 7.2.1-.1v-12.1z"/>
                      <path fill="#EBEBEB" d="M63.9 66.6V50.9h17.6l1.4-15.7H63.9V36.1h35.3l-.4 4.7-4.1 45.7H63.9v-19.9zm0 32.7v12.1l15.1-4.1.2-2.2 1.3-14.5H63.9v8.7z"/>
                    </svg>
                  )}
                  {skill.icon === "js" && (
                    <svg width="40" height="40" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#F7DF1E" d="M1.408 1.408h125.184v125.185H1.408z"/>
                      <path d="M116.407 116.407H11.593V11.593h104.814z" fill="#F7DF1E"/>
                      <path d="M67.02 104.6c0 7.2-4.2 10.5-10.3 10.5-5.5 0-8.7-2.8-10.3-6.2l5.6-3.4c1 1.8 1.9 3.3 4.1 3.3 2.1 0 3.5-.8 3.5-4.1V74.6h7.4v30zm18.6 10.5c-6.4 0-10.5-3-12.5-7l5.6-3.2c1.5 2.4 3.5 4.2 7 4.2 2.9 0 4.7-1.4 4.7-3.3 0-2.3-1.8-3.1-5-4.4l-1.7-.7c-4.9-2.1-8.1-4.7-8.1-10.2 0-5.1 3.9-9 10-9 4.3 0 7.4 1.5 9.6 5.4l-5.3 3.4c-1.2-2.1-2.5-2.9-4.3-2.9-2 0-3.2 1.2-3.2 2.9 0 2 1.2 2.8 4.1 4l1.7.7c5.7 2.4 8.9 4.9 8.9 10.5 0 6-4.7 9.3-11 9.3z" fill="#000"/>
                    </svg>
                  )}
                  {skill.icon === "react" && (
                    <svg width="40" height="40" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="64" cy="64" r="11.4" fill="#61DAFB"/>
                      <g stroke="#61DAFB" strokeWidth="5" fill="none">
                        <ellipse rx="56" ry="22" cx="64" cy="64" transform="rotate(0 64 64)"/>
                        <ellipse rx="56" ry="22" cx="64" cy="64" transform="rotate(60 64 64)"/>
                        <ellipse rx="56" ry="22" cx="64" cy="64" transform="rotate(120 64 64)"/>
                      </g>
                    </svg>
                  )}
                  {skill.icon === "node" && (
                    <svg width="40" height="40" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#8CC84B" d="M64 8.5l54.6 31.5v48L64 119.5 9.4 88V40z"/>
                      <path fill="#fff" d="M64 16.7l47.1 27.2v40.2L64 111.3 16.9 84.1V43.9z"/>
                      <path fill="#8CC84B" d="M64 24.9l39.6 22.9v32.4L64 103.1 24.4 80.2V47.8z"/>
                      <path fill="#fff" d="M64 33.1l32.1 18.6v24.6L64 94.9 31.9 76.3V51.7z"/>
                    </svg>
                  )}
                  {skill.icon === "git" && (
                    <svg width="40" height="40" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#F34F29" d="M124.8 58.6L69.4 3.2c-4.3-4.3-11.3-4.3-15.6 0l-13.1 13.1 15.6 15.6c4.2-1.4 9.1-.5 12.5 2.9 3.4 3.4 4.3 8.3 2.9 12.5l15.6 15.6c4.2-1.4 9.1-.5 12.5 2.9 3.4 3.4 4.3 8.3 2.9 12.5l15.6 15.6c4.2-1.4 9.1-.5 12.5 2.9 3.4 3.4 4.3 8.3 2.9 12.5l-15.6 15.6c-4.2 1.4-9.1.5-12.5-2.9-3.4-3.4-4.3-8.3-2.9-12.5l-15.6-15.6c-4.2 1.4-9.1.5-12.5-2.9-3.4-3.4-4.3-8.3-2.9-12.5l15.6-15.6c4.2-1.4 9.1-.5 12.5 2.9 3.4 3.4 4.3 8.3 2.9 12.5l15.6 15.6c4.2-1.4 9.1-.5 12.5 2.9 3.4 3.4 4.3 8.3 2.9 12.5z"/>
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 mt-2 text-center tracking-wide">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="backdrop-blur-md bg-white/5 rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=modern%20e-commerce%20website%20interface%20with%20dark%20theme%2C%20product%20showcase%2C%20shopping%20cart%2C%20clean%20UI%20design%2C%20professional%20web%20application%20screenshot%20on%20laptop%20screen&width=600&height=400&seq=project1&orientation=landscape"
                  alt="E-Commerce Platform"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-300">
                  E-Commerce Platform
                </h3>
                <p className="text-slate-300 mb-4">
                  A full-featured online shopping platform with cart
                  functionality, user authentication, and payment processing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-900/40 rounded-full text-xs">
                    React
                  </span>
                  <span className="px-2 py-1 bg-blue-900/40 rounded-full text-xs">
                    Node.js
                  </span>
                  <span className="px-2 py-1 bg-blue-900/40 rounded-full text-xs">
                    MongoDB
                  </span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                  >
                    <i className="fab fa-github mr-2"></i>GitHub
                  </a>
                  <a
                    href="#"
                    className="text-teal-400 hover:text-teal-300 transition-colors duration-300 cursor-pointer"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="backdrop-blur-md bg-white/5 rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=task%20management%20application%20interface%20with%20dark%20theme%2C%20kanban%20board%2C%20task%20cards%2C%20progress%20tracking%2C%20modern%20UI%20design%2C%20professional%20web%20application%20screenshot&width=600&height=400&seq=project2&orientation=landscape"
                  alt="Task Manager"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-300">
                  Task Manager
                </h3>
                <p className="text-slate-300 mb-4">
                  A collaborative task management application with drag-and-drop
                  interface, notifications, and team collaboration features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-900/40 rounded-full text-xs">
                    React
                  </span>
                  <span className="px-2 py-1 bg-blue-900/40 rounded-full text-xs">
                    Redux
                  </span>
                  <span className="px-2 py-1 bg-blue-900/40 rounded-full text-xs">
                    Firebase
                  </span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                  >
                    <i className="fab fa-github mr-2"></i>GitHub
                  </a>
                  <a
                    href="#"
                    className="text-teal-400 hover:text-teal-300 transition-colors duration-300 cursor-pointer"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="backdrop-blur-md bg-white/5 rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=weather%20forecast%20application%20interface%20with%20dark%20theme%2C%20weather%20data%20visualization%2C%20city%20search%2C%20temperature%20charts%2C%20modern%20UI%20design%2C%20professional%20web%20application%20screenshot&width=600&height=400&seq=project3&orientation=landscape"
                  alt="Weather App"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-300">
                  Weather Dashboard
                </h3>
                <p className="text-slate-300 mb-4">
                  A weather forecasting application with location detection,
                  7-day forecast, and interactive weather maps.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-900/40 rounded-full text-xs">
                    React
                  </span>
                  <span className="px-2 py-1 bg-blue-900/40 rounded-full text-xs">
                    API
                  </span>
                  <span className="px-2 py-1 bg-blue-900/40 rounded-full text-xs">
                    Charts.js
                  </span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                  >
                    <i className="fab fa-github mr-2"></i>GitHub
                  </a>
                  <a
                    href="#"
                    className="text-teal-400 hover:text-teal-300 transition-colors duration-300 cursor-pointer"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">
              Latest Articles
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="backdrop-blur-md bg-white/5 rounded-xl overflow-hidden border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=modern%20web%20development%20concept%20with%20code%20editor%2C%20programming%20languages%20logos%2C%20clean%20design%2C%20professional%20coding%20environment%2C%20dark%20theme%2C%20tech%20related&width=600&height=400&seq=blog1&orientation=landscape"
                  alt="Modern Web Development"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3 text-sm text-slate-400">
                  <span className="mr-3">
                    <i className="far fa-calendar mr-1"></i> July 1, 2025
                  </span>
                  <span>
                    <i className="far fa-clock mr-1"></i> 5 min read
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-teal-300">
                  Modern Web Development Practices
                </h3>
                <p className="text-slate-300 mb-4">
                  Exploring the latest trends and best practices in modern web
                  development, focusing on performance optimization and user
                  experience.
                </p>
                <a
                  href="#"
                  className="text-teal-400 hover:text-teal-300 transition-colors duration-300 inline-flex items-center cursor-pointer"
                >
                  Read More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="backdrop-blur-md bg-white/5 rounded-xl overflow-hidden border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=React%20framework%20logo%20with%20component%20architecture%20visualization%2C%20modern%20UI%20components%2C%20code%20snippets%2C%20professional%20development%20environment%2C%20dark%20theme%2C%20tech%20related&width=600&height=400&seq=blog2&orientation=landscape"
                  alt="React Performance"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3 text-sm text-slate-400">
                  <span className="mr-3">
                    <i className="far fa-calendar mr-1"></i> June 15, 2025
                  </span>
                  <span>
                    <i className="far fa-clock mr-1"></i> 7 min read
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-teal-300">
                  Optimizing React Applications
                </h3>
                <p className="text-slate-300 mb-4">
                  A deep dive into techniques for improving the performance of
                  React applications, including code splitting and memoization.
                </p>
                <a
                  href="#"
                  className="text-teal-400 hover:text-teal-300 transition-colors duration-300 inline-flex items-center cursor-pointer"
                >
                  Read More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="backdrop-blur-md bg-white/5 rounded-xl overflow-hidden border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=C%20%20%20programming%20language%20logo%20with%20algorithm%20visualization%2C%20data%20structures%2C%20performance%20graphs%2C%20professional%20development%20environment%2C%20dark%20theme%2C%20tech%20related&width=600&height=400&seq=blog3&orientation=landscape"
                  alt="C++ Performance"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3 text-sm text-slate-400">
                  <span className="mr-3">
                    <i className="far fa-calendar mr-1"></i> May 28, 2025
                  </span>
                  <span>
                    <i className="far fa-clock mr-1"></i> 10 min read
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-teal-300">
                  Advanced C++ Optimization Techniques
                </h3>
                <p className="text-slate-300 mb-4">
                  Exploring advanced optimization strategies for C++
                  applications, focusing on memory management and algorithm
                  efficiency.
                </p>
                <a
                  href="#"
                  className="text-teal-400 hover:text-teal-300 transition-colors duration-300 inline-flex items-center cursor-pointer"
                >
                  Read More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-block px-8 py-3 bg-transparent border border-teal-400 rounded-full font-medium hover:bg-teal-400/10 transition-all duration-300 whitespace-nowrap !rounded-button cursor-pointer"
            >
              View All Articles <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-teal-500"></div>

            {/* B.Tech */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 border-4 border-slate-900 z-10"></div>
              <div className="ml-auto mr-auto md:ml-auto md:mr-0 md:pr-12 w-full md:w-1/2 backdrop-blur-md bg-white/5 p-6 rounded-xl border border-slate-700/50 relative">
                <div className="absolute top-6 -left-3 md:left-auto md:-right-3 w-6 h-6 bg-blue-500 transform rotate-45 hidden md:block"></div>
                <h3 className="text-xl font-bold mb-2 text-blue-300">
                  Bachelor of Technology
                </h3>
                <p className="text-slate-300 mb-1">MREC</p>
                <p className="text-slate-400 mb-2">2023- 2027</p>
                <div className="inline-block px-3 py-1 bg-blue-900/40 rounded-full text-sm mb-3">
                  8.1 CGPA
                </div>
                <p className="text-slate-300">
                  Specialized in Information Technology with focus on software
                  development and algorithm design.
                </p>
              </div>
            </div>

            {/* Intermediate */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 border-4 border-slate-900 z-10"></div>
              <div className="ml-auto mr-auto md:mr-auto md:ml-0 md:pl-12 w-full md:w-1/2 backdrop-blur-md bg-white/5 p-6 rounded-xl border border-slate-700/50 relative">
                <div className="absolute top-6 -right-3 md:right-auto md:-left-3 w-6 h-6 bg-teal-500 transform rotate-45 hidden md:block"></div>
                <h3 className="text-xl font-bold mb-2 text-teal-300">
                  Intermediate
                </h3>
                <p className="text-slate-300 mb-1">Narayana Jr College</p>
                <p className="text-slate-400 mb-2">2021- 2023</p>
                <div className="inline-block px-3 py-1 bg-teal-900/40 rounded-full text-sm mb-3">
                  98.1%
                </div>
                <p className="text-slate-300">
                  Focused on Mathematics, Physics, and Computer Science with
                  excellent academic performance.
                </p>
              </div>
            </div>

            {/* SSC */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 border-4 border-slate-900 z-10"></div>
              <div className="ml-auto mr-auto md:ml-auto md:mr-0 md:pr-12 w-full md:w-1/2 backdrop-blur-md bg-white/5 p-6 rounded-xl border border-slate-700/50 relative">
                <div className="absolute top-6 -left-3 md:left-auto md:-right-3 w-6 h-6 bg-blue-500 transform rotate-45 hidden md:block"></div>
                <h3 className="text-xl font-bold mb-2 text-blue-300">SSC</h3>
                <p className="text-slate-300 mb-1">Ekashila High School</p>
                <p className="text-slate-400 mb-2">2020 - 2021</p>
                <div className="inline-block px-3 py-1 bg-blue-900/40 rounded-full text-sm mb-3">
                  10 CGPA
                </div>
                <p className="text-slate-300">
                  Completed secondary education with perfect academic record and
                  active participation in extracurricular activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <div className="backdrop-blur-md bg-white/5 p-8 rounded-xl border border-slate-700/50 h-full">
                <h3 className="text-2xl font-bold mb-6 text-blue-300">
                  Contact Information
                </h3>
                <div className="flex flex-col gap-4 text-white text-base">
                  <div className="flex items-center gap-3">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path stroke="#4CAF50" strokeWidth="2" d="M6.5 4.5h11A2.5 2.5 0 0 1 20 7v10a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17V7A2.5 2.5 0 0 1 6.5 4.5Z"/><path stroke="#4CAF50" strokeWidth="2" d="M20 7l-8 6-8-6"/></svg>
                    <span className="break-all">mohanreddysanthosam6@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path stroke="#4CAF50" strokeWidth="2" d="M3 5.5A2.5 2.5 0 0 1 5.5 3h2A2.5 2.5 0 0 1 10 5.5v1A2.5 2.5 0 0 1 7.5 9h-.25c.2 2.2 1.1 4.3 2.6 5.8s3.6 2.4 5.8 2.6V16.5A2.5 2.5 0 0 1 18.5 19h1A2.5 2.5 0 0 1 22 21.5v2A2.5 2.5 0 0 1 19.5 26h-2A2.5 2.5 0 0 1 15 23.5v-1Z"/></svg>
                    <span>+91 8978674316</span>
                  </div>
                </div>
                {/* Social Media Icons inside Contact Info */}
                <div className="flex justify-center space-x-6 mt-8">
                  {/* GitHub */}
                  <a href="https://github.com/mohanreddy06" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full bg-[#232526] hover:bg-[#4CAF50]/10 transition-colors p-2 shadow-md">
                    <svg width="28" height="28" viewBox="0 0 32 32" fill="#181717" xmlns="http://www.w3.org/2000/svg"><path d="M16 2.396c-7.732 0-14 6.268-14 14 0 6.184 4.008 11.426 9.572 13.283.7.128.956-.304.956-.676 0-.334-.012-1.217-.019-2.39-3.893.846-4.713-1.877-4.713-1.877-.636-1.617-1.552-2.048-1.552-2.048-1.269-.868.096-.851.096-.851 1.404.099 2.144 1.442 2.144 1.442 1.247 2.139 3.272 1.522 4.07 1.164.127-.904.488-1.522.888-1.872-3.108-.354-6.377-1.554-6.377-6.917 0-1.528.547-2.777 1.443-3.757-.145-.355-.626-1.785.137-3.723 0 0 1.178-.378 3.86 1.434a13.44 13.44 0 013.513-.473c1.192.006 2.393.162 3.513.473 2.681-1.812 3.857-1.434 3.857-1.434.765 1.938.284 3.368.14 3.723.899.98 1.442 2.229 1.442 3.757 0 5.377-3.273 6.56-6.389 6.908.5.43.943 1.282.943 2.584 0 1.865-.017 3.37-.017 3.829 0 .375.252.81.963.673C25.997 27.818 30 22.579 30 16.396c0-7.732-6.268-14-14-14z"/></svg>
                  </a>
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/santhosam-mohan-a9bab2372" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full bg-[#232526] hover:bg-[#4CAF50]/10 transition-colors p-2 shadow-md">
                    <svg width="28" height="28" viewBox="0 0 32 32" fill="#0077B5" xmlns="http://www.w3.org/2000/svg"><path d="M27 3H5C3.346 3 2 4.346 2 6v20c0 1.654 1.346 3 3 3h22c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3zM12 25H8V13h4v12zm-2-13.268c-1.281 0-2.318-1.037-2.318-2.318 0-1.281 1.037-2.318 2.318-2.318s2.318 1.037 2.318 2.318c0 1.281-1.037 2.318-2.318 2.318zM26 25h-4v-5.604c0-1.336-.025-3.057-1.865-3.057-1.867 0-2.153 1.459-2.153 2.967V25z"/></svg>
                  </a>
                  {/* Twitter */}
                  <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="rounded-full bg-[#232526] hover:bg-[#4CAF50]/10 transition-colors p-2 shadow-md">
                    <svg width="28" height="28" viewBox="0 0 32 32" fill="#1DA1F2" xmlns="http://www.w3.org/2000/svg"><path d="M32 6.076a13.14 13.14 0 01-3.769 1.031A6.601 6.601 0 0031.115 4.1a13.195 13.195 0 01-4.169 1.594A6.563 6.563 0 0022.155 2c-3.626 0-6.563 2.938-6.563 6.563 0 .514.058 1.016.17 1.496C10.274 9.797 5.444 7.13 2.228 3.149c-.564.969-.888 2.096-.888 3.301 0 2.277 1.159 4.287 2.924 5.463A6.533 6.533 0 01.64 10.15v.083c0 3.181 2.263 5.834 5.266 6.437-.551.15-1.131.23-1.729.23-.423 0-.834-.041-1.235-.117.835 2.606 3.26 4.504 6.134 4.557A13.18 13.18 0 010 28.292a18.616 18.616 0 0010.063 2.949c12.072 0 18.681-10.003 18.681-18.682 0-.285-.006-.568-.019-.85A13.354 13.354 0 0032 6.076z"/></svg>
                  </a>
                  {/* Email */}
                  <a href="mailto:mohanreddysanthosam6@gmail.com" aria-label="Email" className="rounded-full bg-[#232526] hover:bg-[#4CAF50]/10 transition-colors p-2 shadow-md">
                    <svg width="28" height="28" viewBox="0 0 32 32" fill="#EA4335" xmlns="http://www.w3.org/2000/svg"><path d="M27 6H5c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h22c1.104 0 2-.896 2-2V8c0-1.104-.896-2-2-2zm0 2v.511l-11 7.334-11-7.334V8h22zm-22 16V9.489l10.553 7.029a1 1 0 001.106 0L27 9.489V24H5z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="backdrop-blur-md bg-white/5 p-8 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-bold mb-6 text-blue-300">
                  Send Message
                </h3>
                <form>
                  <div className="mb-6 relative">
                    <input
                      type="text"
                      className="w-full bg-black/30 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-white"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="mb-6 relative">
                    <input
                      type="email"
                      className="w-full bg-black/30 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-white"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="mb-6 relative">
                    <textarea
                      className="w-full bg-black/30 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-white h-32"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg font-medium hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 whitespace-nowrap !rounded-button cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Download */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-6 text-center">
          <div className="backdrop-blur-md bg-white/5 p-10 rounded-xl border border-slate-700/50 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Want to know more about my experience?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Download my resume to get a detailed overview of my skills,
              experience, and qualifications.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full font-medium text-lg hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 whitespace-nowrap !rounded-button cursor-pointer"
            >
              <i className="fas fa-download mr-2"></i> Download Resume (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 backdrop-blur-md border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">
                Santhosam Mohan
              </h3>
              <p className="text-slate-400 mb-6">
                Full Stack Developer specializing in creating modern,
                responsive, and user-friendly web applications.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-xl cursor-pointer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-xl cursor-pointer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-xl cursor-pointer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-xl cursor-pointer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#about"
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Newsletter</h3>
              <p className="text-slate-400 mb-4">
                Subscribe to receive updates on new projects and articles.
              </p>
              <form className="flex">
                <input
                  type="email"
                  className="flex-1 bg-black/30 border border-slate-700 rounded-l-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-white"
                  placeholder="Your Email"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-r-lg px-4 py-2 whitespace-nowrap !rounded-button cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
            <p>© 2025 Santhosam Mohan. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <a
        href="#"
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-teal-500 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-teal-500/20 transition-all duration-300 cursor-pointer"
      >
        <i className="fas fa-arrow-up"></i>
      </a>
    </div>
  );
};

export default App;