"use client"; // Mark this file as a client component
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container mx-auto py-16 flex flex-col lg:flex-row items-center lg:items-center text-left lg:text-left space-y-8 lg:space-y-0 lg:space-x-16">
      {/* Left Side: Introduction */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4 sm:text-5xl lg:text-6xl">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg mb-8 sm:text-xl lg:text-2xl">
          Explore my projects, skills, and experience.
        </p>
        <a
          href="/projects"
          className="btn transition sm:px-8 sm:py-4 lg:text-xl"
        >
          View My Projects
        </a>
      </div>

      {/* Right Side: Image */}
      <div className="relative w-150 h-150 flex justify-center items-center">
        <img
          src="/Saritha.png"
          alt="Your Name"
          className="w-141 h-141 rounded-full shadow-lg object-cover object-top z-10"
        />
        <motion.svg
          className="absolute w-full h-full z-0 stroke-animation"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id="patternStroke" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="var(--color-accent)" />
              <stop offset="100%" stopColor="var(--color-accent)" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="url(#patternStroke)"
            strokeWidth="1"
            strokeDasharray="30 10 5 15"
            strokeLinecap="round"
          />
        </motion.svg>
      </div>
    </div>
  );
}
