import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex flex-wrap space-x-4">
        <li>
          <Link href="/">
            <Button variant="link" className="hover:underline">
              Home
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <Button variant="link" className="hover:underline">
              About
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <Button variant="link" className="hover:underline">
              Projects
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <Button variant="link" className="hover:underline">
              Contact
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}