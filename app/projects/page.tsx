"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/Card";

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online shop with cart, payment processing and order management.",
      image: "/api/placeholder/400/200",
      link: "/projects/project-1",
      tags: ["React", "Next.js", "Stripe"],
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for tracking social media engagement and performance.",
      image: "/api/placeholder/400/200",
      link: "/projects/project-2",
      tags: ["React", "Chart.js", "Firebase"],
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates.",
      image: "/api/placeholder/400/200",
      link: "/projects/project-3",
      tags: ["React", "Redux", "Node.js"],
    },
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
        My Projects
      </motion.h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", 0.2 * index)}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="card"
          >
            <div className="w-full h-48 overflow-hidden rounded-t-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded-full text-xs"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      color: "var(--color-muted)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-accent hover:underline mt-2 inline-flex items-center"
              >
                View Details
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </CardContent>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
