"use client";

import React from 'react'
import Image from "next/image";
// import { Meteors } from "@/components/ui/meteors";
// import { section } from 'motion/react-client';

const AboutMe = () => {
  return (
    <section id='about'>
      <div className="mt-20 mb-10">
      <div className="relative w-full flex items-center justify-center">
        <div className="relative flex h-100 w-full flex-col items-start justify-end overflow-hidden rounded-2xl bg-neutral-300 dark:bg-neutral-950 px-4 py-8 m-20">
          {/* <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-950 dark:border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-950 dark:text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div> */}
 
        <div className='flex flex-col md:flex-row w-full h-100 bg-neutral-300 dark:bg-neutral-950 mt-10 rounded-lg'>

          <div className='flex flex-col items-center  justify-center px-6 md:px-20 pt-10'>
            <h2 className='text-center right-0 text-4xl md:text-3xl sm:text-2xl font-semibold text-gray-950 dark:text-[#dac8c8] pt-2'>About Me</h2> <br />
            <Image 
              src="/image/tushar_01.jpg" 
              alt="tushar"
              width={220}
              height={220}
              className="mt-0 text-gray-950 dark:text-white bg-amber-950 dark:bg-amber-50 ring-0 ring-gray-950 dark:ring-[#dac8c8] rounded-lg"
            />
          </div>

          <div className="flex py-20 px-6 items-center justify-center mt-20">
            <p className="max-w-4xl mx-auto text-gray-950 dark:text-gray-300 
              sm:text-base md:text-sm lg:text-lg 
              leading-relaxed text-center md:text-left 
              border-t md:border-t-0 md:border-l border-gray-950 
            dark:border-gray-500 pl-0 md:pl-10 pt-8    md:pt-0">
              I am a passionate Problem Solver 🧠 and an aspiring Full-Stack Developer 💻 
              with a keen interest in Artificial Intelligence 🤖. With over 250+ successful 
              solves on Codeforces (Max Rating 1500) and participation in more than 20 contests, 
              I continuously challenge myself to improve and learn new skills.
              <br /><br />
              I have hands-on experience working with Java Swing and GUI development, 
              having built a Scientific Calculator and a Hotel Management System. 
              These projects helped me strengthen my programming skills and gain practical 
              knowledge in software design and user interface development.
            </p>
          </div>
        </div>
 
          {/* Meaty part - Meteor effect */}
          {/* <Meteors number={20} /> */}
        </div>
      </div>
    </div>
    </section>
  )
}

export default AboutMe