import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">
          <Link href="/">My Portfolio</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
