"use client"; // Mark this file as a client component

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  slideIn,
  textVariant,
} from "@/lib/animation";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center lg:items-center justify-between text-left lg:text-left space-y-8 lg:space-y-0 lg:space-x-16"
    >
      {/* Left Side: Introduction */}
      <div className="flex-1">
        <motion.h1
          variants={textVariant(0.3)}
          className="text-4xl font-bold mb-4 sm:text-5xl lg:text-6xl"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          variants={textVariant(0.5)}
          className="text-lg mb-8 sm:text-xl lg:text-2xl"
        >
          Explore my projects, skills, and experience.
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.7)}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a
            href="/projects"
            className="btn transition sm:px-8 sm:py-4 lg:text-xl"
          >
            View My Projects
          </a>
        </motion.div>
      </div>

      {/* Right Side: Circular Image with Rotating Ring */}
      <motion.div
        variants={slideIn("right", "tween", 0.4, 1)}
        className="relative flex justify-center items-center"
      >
        {/* Rotating SVG Ring */}
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-150 h-150 z-0"
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

        {/* Circular Image */}
        <img
          src="/Saritha1.png"
          alt="Saritha"
          className="w-142.5 h-142.5 rounded-full object-cover object-top z-10"
        />
      </motion.div>
    </motion.div>
  );
}
