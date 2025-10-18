"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects_Demo = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
      tech: ["React", "Node.js", "MongoDB"],
      icon: "🛒",
      liveLink: "https://your-ecommerce-demo.netlify.app",
      codeLink: "https://github.com/tusharsno/ecommerce-platform"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app built with React Native and Firebase.",
      tech: ["React Native", "Firebase", "Redux"],
      icon: "✅",
      liveLink: "https://your-taskapp-demo.netlify.app",
      codeLink: "https://github.com/tusharsno/task-management-app"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Real-time data visualization dashboard with Vue.js and D3.js.",
      tech: ["Vue.js", "D3.js", "Express"],
      icon: "📊",
      liveLink: "https://your-analytics-demo.netlify.app",
      codeLink: "https://github.com/tusharsno/analytics-dashboard"
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A modern blogging platform with Next.js and Strapi CMS.",
      tech: ["Next.js", "Strapi", "GraphQL"],
      icon: "✍️",
      liveLink: "https://your-blog-demo.vercel.app",
      codeLink: "https://github.com/tusharsno/blog-platform"
    },
    {
      id: 5,
      title: "Game Portal",
      description: "Interactive gaming platform with WebGL and Three.js.",
      tech: ["Three.js", "WebGL", "Socket.io"],
      icon: "🎮",
      liveLink: "https://your-gameportal-demo.netlify.app",
      codeLink: "https://github.com/tusharsno/game-portal"
    },
    {
      id: 6,
      title: "Restaurant App",
      description: "Food ordering app with React and payment integration.",
      tech: ["React", "Stripe", "Node.js"],
      icon: "🍔",
      liveLink: "https://your-restaurant-demo.netlify.app",
      codeLink: "https://github.com/tusharsno/restaurant-app"
    },
    {
      id: 7,
      title: "Portfolio Website",
      description: "Personal portfolio site built with Next.js and Tailwind CSS.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      icon: "💻",
      liveLink: "https://your-portfolio.vercel.app",
      codeLink: "https://github.com/tusharsno/portfolio-website"
    },
    {
      id: 8,
      title: "Chat Application",
      description: "Real-time chat app with WebSocket and Node.js backend.",
      tech: ["React", "WebSocket", "Node.js"],
      icon: "💬",
      liveLink: "https://your-chatapp-demo.netlify.app",
      codeLink: "https://github.com/tusharsno/chat-application"
    },
    {
      id: 9,
      title: "Travel Booking App",
      description: "A booking application with search, filters, and payment support.",
      tech: ["React", "Node.js", "Stripe"],
      icon: "✈️",
      liveLink: "https://your-travelapp-demo.netlify.app",
      codeLink: "https://github.com/tusharsno/travel-booking-app"
    },
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="project">
      <div className="min-h-screen px-6 lg:px-20 py-16">
        
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-center text-gray-700 dark:text-gray-400 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Here are some of my recent projects that showcase my skills and expertise.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{
                transform: hovered === index ? "rotateX(5deg) rotateY(5deg) scale(1.03)" : "none",
                transition: "transform 0.3s ease",
              }}
              className="bg-gray-100 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-gray-900 dark:text-gray-400 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="text-3xl mb-3">{project.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="leading-relaxed mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-gray-300 dark:bg-[#1e1f22] text-gray-900 dark:text-white px-3 py-1 rounded-full text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-gray-300 dark:bg-[#1e1f22] hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500 dark:hover:from-blue-700 dark:hover:to-blue-600 text-gray-900 dark:text-white px-3 py-1 rounded transition transform cursor-pointer"
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.span whileHover={{ rotate: 15 }} transition={{ duration: 0.3 }}>🔗</motion.span>
                  Live
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-gray-300 dark:bg-[#1e1f22] hover:bg-gradient-to-r hover:from-green-400 hover:to-green-500 dark:hover:from-green-700 dark:hover:to-green-600 text-gray-900 dark:text-white px-3 py-1 rounded transition transform cursor-pointer"
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.span whileHover={{ rotate: 15 }} transition={{ duration: 0.3 }}>💻</motion.span>
                  Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects_Demo;
