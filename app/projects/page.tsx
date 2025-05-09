"use client"; // Mark this file as a client component

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of Project 1.",
      link: "/projects/project-1",
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2.",
      link: "/projects/project-2",
    },
    {
      title: "Project 3",
      description: "A brief description of Project 3.",
      link: "/projects/project-3",
    },
  ];

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8 text-center sm:text-5xl lg:text-6xl">
        My Projects
      </h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="bg-gray-800 text-white">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <a href={project.link} className="text-blue-400 hover:underline">
                View Details
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
