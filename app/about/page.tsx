"use client"; // Mark this file as a client component

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animation";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
  ];

  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <motion.h1
        variants={textVariant(0.2)}
        className="text-4xl font-bold mb-8 text-center sm:text-5xl lg:text-6xl"
      >
        About Me
      </motion.h1>

      <motion.div
        variants={fadeIn("up", 0.3)}
        className="max-w-3xl mx-auto mb-16"
      >
        <p className="text-lg text-center mb-6 sm:text-xl lg:text-2xl">
          Hi, I'm Saritha, a passionate developer with experience in building
          modern web applications.
        </p>
        <p className="text-lg text-center mb-8 sm:text-xl lg:text-2xl">
          I specialize in React, Next.js, and Tailwind CSS and love creating
          user-friendly, responsive, and accessible websites.
        </p>
      </motion.div>

      <motion.div variants={fadeIn("up", 0.5)} className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center sm:text-3xl">
          My Skills
        </h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeIn("up", 0.1 * index)}
              className="mb-4"
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="bg-accent h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
