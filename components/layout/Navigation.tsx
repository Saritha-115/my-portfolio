"use client"; // Mark this file as a client component

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for the hamburger menu
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"; // shadcn/ui Drawer component
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Drawer for Small Screens */}
      <div className="md:hidden">
        {/* Hamburger Menu Button */}
        <Button variant="ghost" onClick={() => setIsOpen(true)}>
          <Menu className="w-6 h-6" />
        </Button>

        {/* Drawer */}
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerContent direction="right" className="bg-gray-800 text-white">
            {/* Add DrawerTitle for accessibility */}
            <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
            <DrawerHeader>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">
                  Saritha<span className="text-accent">.</span>
                </h2>
                <Button variant="ghost" onClick={() => setIsOpen(false)}>
                  <X className="w-6 h-6" />
                </Button>
              </div>
            </DrawerHeader>
            <ul className="p-4 space-y-4">
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" onClick={() => setIsOpen(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>
              {/* Hire Me Button */}
              <li>
                <Button
                  variant="default"
                  className="bg-accent text-white hover:bg-accent-dark"
                  onClick={() => setIsOpen(false)}
                >
                  Hire Me
                </Button>
              </li>
            </ul>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Horizontal Navigation for Larger Screens */}
      <div className="hidden md:flex md:items-center md:space-x-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        {/* Hire Me Button */}
        <Button
          variant="default"
          className="bg-accent text-white hover:bg-accent-dark"
        >
          Hire Me
        </Button>
      </div>
    </nav>
  );
}