export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Built with <span className="text-red-500">&hearts;</span> using
          Next.js
        </p>
      </div>
    </footer>
  );
}
