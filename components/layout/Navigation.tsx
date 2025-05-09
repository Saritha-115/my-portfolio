"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const getLinkClass = (href: string) =>
    `relative pb-1 transition-all duration-100 ${
      pathname === href
        ? "text-accent font-semibold border-b-2 border-accent"
        : "text-primary font-semibold hover:text-accent hover:border-b-2 hover:border-accent"
    }`;

  return (
    <nav className="relative">
      {/* Drawer for Small Screens */}
      <div className="md:hidden">
        <Button variant="ghost" onClick={() => setIsOpen(true)}>
          <Menu className="w-6 h-6" />
        </Button>

        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerContent direction="right" className="bg-gray-800 text-white">
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
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={getLinkClass(link.href)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Button
                  variant="default"
                  className="bg-accent hover:bg-accent-dark"
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
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={getLinkClass(link.href)}
          >
            {link.name}
          </Link>
        ))}
        <Button variant="default" className="bg-accent hover:bg-accent-dark">
          Hire Me
        </Button>
      </div>
    </nav>
  );
}
