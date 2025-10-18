// "use client";
// import { motion } from "framer-motion";

// export function HeroSectionOne() {
//   const heroText = "Turning ideas into interactive web experiences".split(" ");

//   return (
//     <section className="relative mx-auto flex max-w-7xl flex-col items-center justify-center pt-24 px-4 md:px-6">
//       {/* Background gradient shapes */}
//       <div className="absolute -top-32 -left-32 w-72 h-72 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-20 rounded-full animate-blob filter blur-3xl -z-10"></div>
//       <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-gradient-to-tr from-pink-400 via-purple-400 to-blue-400 opacity-20 rounded-full animate-blob animation-delay-2000 filter blur-3xl -z-10"></div>

//       {/* Hero Text */}
//       <h1 className="relative z-10 mx-auto max-w-full text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-6xl dark:text-slate-300">
//         {heroText.map((word, index) => (
//           <motion.span
//             key={index}
//             initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
//             whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
//             viewport={{ once: false, amount: 0.5 }}
//             transition={{ duration: 0.3, delay: index * 0.12, ease: "easeInOut" }}
//             className="mr-2 inline-block"
//           >
//             {word}
//           </motion.span>
//         ))}
//       </h1>

//       {/* Animated underline */}
//       <motion.div
//         className="h-1 w-32 bg-blue-500 mx-auto mt-4 rounded"
//         initial={{ width: 0 }}
//         whileInView={{ width: "8rem" }}
//         viewport={{ once: false, amount: 0.5 }}
//         transition={{ duration: 1 }}
//       />

//       {/* Subtitle */}
//       <motion.p
//         initial={{ opacity: 0, y: 10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: false, amount: 0.5 }}
//         transition={{ duration: 0.5, delay: 0.8 }}
//         className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
//       >
//         Full-Stack Developer & Problem Solver | React, Next.js, Tailwind CSS | Transforming concepts into interactive web applications.
//       </motion.p>

//       {/* Buttons */}
//       <motion.div
//         className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: false, amount: 0.5 }}
//         transition={{ duration: 0.5, delay: 1 }}
//       >
//         <motion.a
//           whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
//           whileTap={{ scale: 0.95 }}
//           href="#project"
//           className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-center"
//         >
//           View Projects
//         </motion.a>
//         <motion.a
//           whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
//           whileTap={{ scale: 0.95 }}
//           href="/Tushar Barua.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           download
//           className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 text-center"
//         >
//           Download Resume
//         </motion.a>
//       </motion.div>
//     </section>
//   );
// }



// "use client";
// import { motion, useReducedMotion } from "framer-motion";
// import { useState, useEffect, useMemo } from "react";
// import { ArrowRight, Download } from "lucide-react"; // icons for buttons

// export function HeroSectionOne() {
//   const [isVisible, setIsVisible] = useState(false);
//   const heroText = "Turning ideas into interactive web experiences".split(" ");
//   const prefersReducedMotion = useReducedMotion();

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   // Generate particles once
//   const particles = useMemo(
//     () =>
//       !prefersReducedMotion
//         ? [...Array(10)].map(() => ({
//             x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
//             y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
//             duration: Math.random() * 18 + 18,
//           }))
//         : [],
//     [prefersReducedMotion]
//   );

//   const ParticlesBackground = () => {
//     if (prefersReducedMotion) return null;
//     return (
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         {particles.map((p, i) => {
//           const direction = Math.random() > 0.5 ? 1 : -1;
//           return (
//             <motion.div
//               key={i}
//               className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
//               initial={{ x: p.x, y: p.y }}
//               animate={{
//                 x: p.x + direction * 180,
//                 y: p.y + (Math.random() * 100 - 50),
//               }}
//               transition={{
//                 duration: p.duration,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//                 ease: "easeInOut",
//               }}
//             />
//           );
//         })}
//       </div>
//     );
//   };

//   return (
//     <section className="relative mx-auto flex max-w-7xl flex-col items-center justify-center pt-24 px-4 md:px-6">
//       {/* Gradient Blobs */}
//       <div className="absolute -top-32 -left-32 w-72 h-72 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-20 rounded-full animate-blob filter blur-3xl -z-10"></div>
//       <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-gradient-to-tr from-pink-400 via-purple-400 to-blue-400 opacity-20 rounded-full animate-blob animation-delay-2000 filter blur-3xl -z-10"></div>
//       <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-green-400 to-blue-400 opacity-15 rounded-full animate-blob animation-delay-4000 filter blur-3xl -z-10"></div>

//       <ParticlesBackground />

//       {/* Hero Text */}
//       <h1
//         className="relative z-10 mx-auto max-w-full text-center text-3xl font-extrabold text-slate-700 md:text-5xl lg:text-6xl dark:text-slate-300"
//         aria-label="Turning ideas into interactive web experiences"
//       >
//         {heroText.map((word, index) => (
//           <motion.span
//             key={index}
//             initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
//             whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
//             viewport={{ once: false, amount: 0.5 }}
//             transition={{ type: "spring", stiffness: 80, damping: 12, delay: index * 0.1 }}
//             className={`mr-2 inline-block ${
//               word === "interactive"
//                 ? "bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
//                 : ""
//             }`}
//           >
//             {word}
//           </motion.span>
//         ))}
//       </h1>

//       {/* Animated underline */}
//       <motion.div
//         className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded"
//         initial={{ width: 0 }}
//         whileInView={{ width: "8rem" }}
//         viewport={{ once: false, amount: 0.5 }}
//         transition={{ duration: 1 }}
//       />

//       {/* Subtitle */}
//       <motion.p
//         initial={{ opacity: 0, y: 10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: false, amount: 0.5 }}
//         transition={{ duration: 0.6, delay: 0.8 }}
//         className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
//       >
//         Full-Stack Developer & Problem Solver | React, Next.js, Tailwind CSS | Transforming concepts into interactive web applications.
//       </motion.p>

//       {/* Buttons */}
//       <motion.div
//         className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: false, amount: 0.5 }}
//         transition={{ duration: 0.5, delay: 1 }}
//       >
//         {/* Primary CTA */}
//         <motion.a
//           aria-label="View my projects"
//           whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0,0,0,0.15)" }}
//           whileTap={{ scale: 0.97 }}
//           href="#project"
//           className="sm:w-44 md:w-52 lg:w-60 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 text-center"
//         >
//           View Projects <ArrowRight size={18} />
//         </motion.a>

//         {/* Secondary CTA */}
//         <motion.a
//           aria-label="Download my resume"
//           whileHover={{ scale: 1.05, boxShadow: "0 6px 14px rgba(0,0,0,0.1)" }}
//           whileTap={{ scale: 0.97 }}
//           href="/Tushar Barua.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           download
//           className="sm:w-44 md:w-52 lg:w-60 flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-black shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 text-center"
//         >
//           Download Resume <Download size={18} />
//         </motion.a>
//       </motion.div>
//     </section>
//   );
// }



// "use client";
// import { motion, useReducedMotion } from "framer-motion";
// import { useState, useEffect, useMemo } from "react";
// import { ArrowRight, Download } from "lucide-react"; // icons for buttons

// export function HeroSectionOne() {
//   const [isVisible, setIsVisible] = useState(false);
//   const heroText = "Turning ideas into interactive web experiences".split(" ");
//   const prefersReducedMotion = useReducedMotion();

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   // Generate particles once
//   const particles = useMemo(
//     () =>
//       !prefersReducedMotion
//         ? [...Array(10)].map(() => ({
//             x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
//             y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
//             duration: Math.random() * 18 + 18,
//           }))
//         : [],
//     [prefersReducedMotion]
//   );

//   const ParticlesBackground = () => {
//     if (prefersReducedMotion) return null;
//     return (
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         {particles.map((p, i) => {
//           const direction = Math.random() > 0.5 ? 1 : -1;
//           return (
//             <motion.div
//               key={i}
//               className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
//               initial={{ x: p.x, y: p.y }}
//               animate={{
//                 x: p.x + direction * 180,
//                 y: p.y + (Math.random() * 100 - 50),
//               }}
//               transition={{
//                 duration: p.duration,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//                 ease: "easeInOut",
//               }}
//             />
//           );
//         })}
//       </div>
//     );
//   };

//   return (
//     <section className="relative mx-auto flex max-w-7xl flex-col items-center justify-center pt-24 px-4 md:px-6">
//       {/* Gradient Blobs */}
//       <div className="absolute -top-32 -left-32 w-72 h-72 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-20 rounded-full animate-blob filter blur-3xl -z-10"></div>
//       <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-gradient-to-tr from-pink-400 via-purple-400 to-blue-400 opacity-20 rounded-full animate-blob animation-delay-2000 filter blur-3xl -z-10"></div>

//       <ParticlesBackground />

//       {/* Hero Text */}
//       <h1
//         className="relative z-10 mx-auto max-w-full text-center text-3xl font-extrabold text-slate-700 md:text-5xl lg:text-6xl dark:text-slate-300"
//         aria-label="Turning ideas into interactive web experiences"
//       >
//         {heroText.map((word, index) => (
//           <motion.span
//             key={index}
//             initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
//             whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
//             viewport={{ once: false, amount: 0.5 }}
//             transition={{ type: "spring", stiffness: 80, damping: 12, delay: index * 0.1 }}
//             className={`mr-2 inline-block ${
//               word === "interactive"
//                 ? "bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
//                 : ""
//             }`}
//           >
//             {word}
//           </motion.span>
//         ))}
//       </h1>

//       {/* Animated underline */}
//       <motion.div
//         className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded"
//         initial={{ width: 0 }}
//         whileInView={{ width: "8rem" }}
//         viewport={{ once: false, amount: 0.5 }}
//         transition={{ duration: 1 }}
//       />

//       {/* Subtitle */}
//       <motion.p
//         initial={{ opacity: 0, y: 10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: false, amount: 0.5 }}
//         transition={{ duration: 0.6, delay: 0.8 }}
//         className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
//       >
//         Full-Stack Developer & Problem Solver | React, Next.js, Tailwind CSS | Transforming concepts into interactive web applications.
//       </motion.p>

//       {/* Buttons */}
//       <motion.div
//         className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: false, amount: 0.5 }}
//         transition={{ duration: 0.5, delay: 1 }}
//       >
//         {/* Primary CTA */}
//         <motion.a
//           aria-label="View my projects"
//           whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0,0,0,0.15)" }}
//           whileTap={{ scale: 0.97 }}
//           href="#project"
//           className="sm:w-44 md:w-52 lg:w-60 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 text-center"
//         >
//           View Projects <ArrowRight size={18} />
//         </motion.a>

//         {/* Secondary CTA */}
//         <motion.a
//           aria-label="Download my resume"
//           whileHover={{ scale: 1.05, boxShadow: "0 6px 14px rgba(0,0,0,0.1)" }}
//           whileTap={{ scale: 0.97 }}
//           href="/Tushar Barua.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           download
//           className="sm:w-44 md:w-52 lg:w-60 flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-black shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 text-center"
//         >
//           Download Resume <Download size={18} />
//         </motion.a>
//       </motion.div>
//     </section>
//   );
// }



"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Download } from "lucide-react"; // icons for buttons

export function HeroSectionOne() {
  const heroText = "Turning ideas into interactive web experiences".split(" ");
  const prefersReducedMotion = useReducedMotion();

  // State for particles
  const [particles, setParticles] = useState<
    { x: number; y: number; duration: number; direction: number }[]
  >([]);

  useEffect(() => {
    if (!prefersReducedMotion) {
      const generated = [...Array(10)].map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        duration: Math.random() * 18 + 18,
        direction: Math.random() > 0.5 ? 1 : -1,
      }));
      setParticles(generated);
    }
  }, [prefersReducedMotion]);

  const ParticlesBackground = () => {
    if (prefersReducedMotion) return null;
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
            initial={{ x: p.x, y: p.y }}
            animate={{
              x: p.x + p.direction * 180,
              y: p.y + (Math.random() * 100 - 50),
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="relative mx-auto flex max-w-7xl flex-col items-center justify-center pt-24 px-4 md:px-6">
      {/* Gradient Blobs (kept, but removed middle glow) */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-20 rounded-full animate-blob filter blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-gradient-to-tr from-pink-400 via-purple-400 to-blue-400 opacity-20 rounded-full animate-blob animation-delay-2000 filter blur-3xl -z-10"></div>

      {/* Particles Background */}
      <ParticlesBackground />

      {/* Hero Text */}
      <h1
        className="relative z-10 mx-auto max-w-full text-center text-3xl font-extrabold text-slate-700 md:text-5xl lg:text-6xl dark:text-slate-300"
        aria-label="Turning ideas into interactive web experiences"
      >
        {heroText.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 80, damping: 12, delay: index * 0.1 }}
            className={`mr-2 inline-block ${
              word === "interactive"
                ? "bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                : ""
            }`}
          >
            {word}
          </motion.span>
        ))}
      </h1>

      {/* Animated underline */}
      <motion.div
        className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded"
        initial={{ width: 0 }}
        whileInView={{ width: "8rem" }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
      />

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
      >
        Full-Stack Developer & Problem Solver | React, Next.js, Tailwind CSS | Transforming
        concepts into interactive web applications.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {/* Primary CTA */}
        <motion.a
          aria-label="View my projects"
          whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0,0,0,0.15)" }}
          whileTap={{ scale: 0.97 }}
          href="#project"
          className="sm:w-44 md:w-52 lg:w-60 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 text-center"
        >
          View Projects <ArrowRight size={18} />
        </motion.a>

        {/* Secondary CTA */}
        <motion.a
          aria-label="Download my resume"
          whileHover={{ scale: 1.05, boxShadow: "0 6px 14px rgba(0,0,0,0.1)" }}
          whileTap={{ scale: 0.97 }}
          href="/Tushar Barua.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="sm:w-44 md:w-52 lg:w-60 flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-black shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 text-center"
        >
          Download Resume <Download size={18} />
        </motion.a>
      </motion.div>
    </section>
  );
}
