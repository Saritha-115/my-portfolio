"use client"; // Mark this file as a client component

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { Button } from "../../components/ui/button";
import { useRouter } from "next/navigation"; // Correct import for app directory

export default function Home() {
  const router = useRouter(); // Correct usage of useRouter

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 text-gray-800">
        <div className="container mx-auto py-16 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg mb-8">
            Explore my projects, skills, and experience.
          </p>
          <Button onClick={() => router.push("/projects")}>
            View My Projects
          </Button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
