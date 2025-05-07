import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

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
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 text-gray-800">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-600 hover:underline"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
