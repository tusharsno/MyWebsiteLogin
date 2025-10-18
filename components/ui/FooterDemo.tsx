"use client";

import React from "react";
import Link from "next/link";

const FooterDemo = () => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com", icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.932 0-1.31.469-2.382 1.236-3.222-.124-.304-.536-1.528.117-3.184 0 0 1.008-.323 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.656.243 2.88.12 3.184.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.625-5.479 5.922.43.372.823 1.102.823 2.222v3.293c0 .319.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ) },
    { name: "LinkedIn", url: "https://linkedin.com", icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452H16.89v-5.568c0-1.327-.025-3.037-1.852-3.037-1.854 0-2.138 1.448-2.138 2.944v5.661H9.337V9h3.409v1.561h.048c.476-.9 1.637-1.852 3.37-1.852 3.601 0 4.27 2.37 4.27 5.455v6.288zM5.337 7.433a1.987 1.987 0 110-3.974 1.987 1.987 0 010 3.974zM7.119 20.452H3.554V9h3.565v11.452z"/>
      </svg>
    ) },
    { name: "Gmail", url: "mailto:example@gmail.com", icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 13.065L.015 6h23.97L12 13.065zm0 2.28L.015 8.28V18h23.97V8.28L12 15.345z"/>
      </svg>
    ) },
    { name: "YouTube", url: "https://youtube.com/@tusharbarua5074", icon: (
      <svg className="w-7 h-7" viewBox="0 0 576 512" fill="currentColor">
        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
      </svg>
    ) },
    { name: "Facebook", url: "https://www.facebook.com/elgooG269", icon: (
      <svg className="w-7 h-7" viewBox="0 0 320 512" fill="currentColor">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 
        12.42-50.06 52.24-50.06h40.42V6.26S293.3 0 
        269.5 0c-73.1 0-121.1 44.38-121.1 
        124.72v70.62H86.41V288h62v224h92.66V288z"/>
      </svg>
    ) },
  ];

  return (
    <footer className="bg-white dark:bg-black text-gray-900 dark:text-white px-6 py-10 border-t border-gray-200 dark:border-gray-800 relative z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* About */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold">Tushar</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Computer Science & Engineering student, problem solver, and aspiring full-stack developer.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="text-gray-600 dark:text-gray-400 space-y-2">
            <li><Link href="#about" className="hover:text-blue-500 dark:hover:text-blue-400 transition">About</Link></li>
            <li><Link href="#project" className="hover:text-blue-500 dark:hover:text-blue-400 transition">Projects</Link></li>
            <li><Link href="#skills" className="hover:text-blue-500 dark:hover:text-blue-400 transition">Skills</Link></li>
            <li><Link href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Connect</h2>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110 hover:text-blue-500 dark:hover:text-blue-400"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
            © 2025 Tushar. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default FooterDemo;
