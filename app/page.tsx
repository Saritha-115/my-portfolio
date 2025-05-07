import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Home() {
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
          <a
            href="/projects"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            View My Projects
          </a>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
