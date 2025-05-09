"use client"; // Mark this file as a client component

export default function Home() {
  return (
    <div className="container mx-auto py-16 text-center">
      <h1 className="text-4xl font-bold mb-4 sm:text-5xl lg:text-6xl">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg mb-8 sm:text-xl lg:text-2xl">
        Explore my projects, skills, and experience.
      </p>
      <a
        href="/projects"
        className="btn inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition sm:px-8 sm:py-4 lg:text-xl"
      >
        View My Projects
      </a>
    </div>
  );
}
