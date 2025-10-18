"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../tracing-beam";

import { Inter } from "next/font/google";

export const calsans = Inter({
  subsets: ["latin"],
  variable: "--font-calsans",
});

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge(calsans.className, "text-xl mb-4")}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover w-full max-h-150"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p className="text-xl font-semibold">
          My programming journey started with a strong interest in learning how computers work and how software is built. Over time, I explored different technologies and problem-solving techniques, which shaped me into the programmer I am today.
        </p> <br />
        <h1 className="font-bold text-xl text-blue-800">🔹 Java & GUI Development</h1>
        <p>
          I began by learning Java Swing to build GUI-based applications. This gave me a solid understanding of Object-Oriented Programming (OOP) principles like inheritance, polymorphism, and encapsulation. Working with Swing helped me connect theory with practical applications by creating interactive programs.
        </p> <br />
        <h1 className="font-bold text-blue-800">🔹 Python for Problem Solving</h1>
        <p>
          Alongside Java, I also explored Python, which strengthened my problem-solving mindset. Python’s simplicity allowed me to quickly implement algorithms and focus more on logic rather than syntax.
        </p> <br />
        <h1 className="font-bold text-blue-800">Competitive Programming</h1>
        <p>
          To sharpen my skills, I joined competitive programming platforms. I have:
        </p>
        <ul>
          <li>🌍 Attended 20+ contests on Codeforces</li>
          <li>✅ Solved 250+ problems on Codeforces</li>
          <li>📊 Currently hold a contest rating of 729 on Codeforces</li>
          <li>🔎 Continue practicing regularly on LeetCode to improve my problem-solving ability and algorithmic thinking.</li>
        </ul>
      </>
    ),
    badge: "React",
    image:
      "/image/tushar_02.jpg",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
