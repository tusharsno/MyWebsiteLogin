"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  SiNextdotjs, SiMongodb, SiLeetcode, SiCodeforces, SiJavascript, SiTypescript, SiTailwindcss 
} from "react-icons/si";
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase, FaCode } from "react-icons/fa";

const Skills_Demo = () => {
  const skillCategories = [
    {
      title: "Competitive Programming",
      desc: "Problem solving and algorithmic thinking.",
      skills: [
        { id: 1, name: "Codeforces", icon: <SiCodeforces className="text-blue-500" />, url: "https://codeforces.com", level: 50 },
        { id: 2, name: "LeetCode", icon: <SiLeetcode className="text-orange-400" />, url: "https://leetcode.com", level: 20 },
        { id: 3, name: "Problem Solving", icon: <FaCode className="text-purple-500" />, url: "https://www.geeksforgeeks.org/problem-solving/", level: 60 },
      ],
    },
    {
      title: "Full Stack Development",
      desc: "Building scalable web applications.",
      skills: [
        { id: 4, name: "Next.js", icon: <SiNextdotjs className="text-gray-900 dark:text-white" />, url: "https://nextjs.org", level: 70 },
        { id: 5, name: "React", icon: <FaReact className="text-blue-400" />, url: "https://reactjs.org", level: 95 },
        { id: 6, name: "Node.js", icon: <FaNodeJs className="text-green-500" />, url: "https://nodejs.org", level: 85 },
        { id: 7, name: "MongoDB", icon: <SiMongodb className="text-green-400" />, url: "https://www.mongodb.com", level: 80 },
        { id: 8, name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, url: "https://tailwindcss.com", level: 90 },
      ],
    },
    {
      title: "Programming Languages",
      desc: "Core languages I use for CP and development.",
      skills: [
        { id: 9, name: "C++", icon: <FaCode className="text-indigo-500" />, url: "https://cplusplus.com", level: 85 },
        { id: 10, name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", level: 90 },
        { id: 11, name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, url: "https://www.typescriptlang.org", level: 85 },
        { id: 12, name: "Python", icon: <FaPython className="text-blue-400" />, url: "https://www.python.org", level: 80 },
      ],
    },
    {
      title: "Tools & Collaboration",
      desc: "Tools I use for version control & teamwork.",
      skills: [
        { id: 13, name: "Git", icon: <FaGitAlt className="text-orange-500" />, url: "https://git-scm.com", level: 90 },
        { id: 14, name: "Databases", icon: <FaDatabase className="text-green-600" />, url: "https://www.mongodb.com/atlas", level: 85 },
        { id: 15, name: "VS Code", icon: <FaCode className="text-blue-600" />, url: "https://code.visualstudio.com", level: 95 },
      ],
    },
  ];

  return (
    <section id="skills">
      <div className="min-h-screen px-6 lg:px-20 py-16 transition-colors duration-500">
        
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4"
          variants={{ hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}   // ✅ repeat on scroll
          transition={{ duration: 0.8 }}
        >
          Skills & Expertise
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-center text-gray-700 dark:text-gray-400 mb-16"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}   // ✅ repeat on scroll
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A blend of problem-solving abilities and full-stack development experience.
        </motion.p>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-100 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-md cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}   // ✅ repeat animation
              transition={{ delay: idx * 0.2, duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {category.title}
              </h2>
              <p className="text-sm mb-4 text-gray-700 dark:text-gray-400">
                {category.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <motion.a
                    key={skill.id}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex flex-col p-4 bg-gray-200 dark:bg-[#1e1f22] rounded-lg shadow-sm cursor-pointer overflow-hidden"
                  >
                    {/* Skill Header */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl">{skill.icon}</div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </h3>
                    </div>

                    {/* Skill Progress Bar */}
                    <div className="w-full h-3 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden relative">
                      <motion.div
                        className="h-3 rounded-full absolute top-0 left-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 dark:from-blue-500 dark:via-blue-400 dark:to-blue-500 shadow-lg"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: false }}   // ✅ animate every time in view
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                      {/* Percentage */}
                      <span className="absolute right-2 top-0 text-xs font-semibold text-gray-900 dark:text-white">
                        {skill.level}%
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills_Demo;
