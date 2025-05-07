import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 text-gray-800">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
          <p className="text-lg text-center mb-4">
            Hi, I'm [Your Name], a passionate developer with experience in
            building modern web applications.
          </p>
          <p className="text-lg text-center">
            I specialize in [your skills, e.g., React, Next.js, and Tailwind
            CSS] and love creating user-friendly, responsive, and accessible
            websites.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
