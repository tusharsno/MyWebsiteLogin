"use client";
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";


const content = [
  {
    title: "Problem Solving & Competitive Programming",
    description:
      "I enjoy tackling complex problems and finding efficient solutions. With 250+ solved problems on Codeforces and experience in 20+ contests, I have sharpened my logical thinking, algorithmic skills, and ability to work under time pressure.",
    // content: (
    //   <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white max-w-60">
    //     Problem Solving & Competitive Programming
    //   </div>
    // ),
  },
  {
    title: "Programming & Development",
    description:
      "Skilled in Java (OOP, Swing for GUI applications) and Python, I can build both practical applications and problem-driven solutions. I’m also expanding into modern web development with Next.js, React, and Tailwind CSS.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Continuous Learning & Adaptability",
    description:
      "I consistently explore new technologies and frameworks to grow as a developer. From competitive programming to full-stack development, I adapt quickly and apply new concepts to real-world projects.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Collaboration & Communication",
    description:
      "I value teamwork and knowledge sharing. Whether solving problems, working on group projects, or building applications, I focus on clear communication and effective collaboration to achieve shared goals.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <section id="skills">
      <h1 className="text-6xl font-semibold text-center py-10 mt-10">Skills Section</h1>
      {/* <h1 className="px-10 py-5 pt-15 flex text-center items-center justify-center text-6xl md:text-5xl sm:text-4xl font-bold sm:font-semibold">My Skills Section</h1> */}
      <div className="w-full py-4 max-w-[100%]">
        <StickyScroll content={content} />
      </div>
    </section>
  );
}
