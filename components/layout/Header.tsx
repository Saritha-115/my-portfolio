"use client"; // Mark this file as a client component

import { useState, useEffect } from "react";
import Link from "next/link";
import Navigation from "./Navigation";
import { Sun, Moon } from "lucide-react"; // Icons for light and dark mode

export default function Header() {
  const [isLightMode, setIsLightMode] = useState(false);

  // Sync light mode state with the <html> element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isLightMode) {
      root.classList.add("light");
      console.log("Light mode enabled");
    } else {
      root.classList.remove("light");
      console.log("Dark mode enabled");
    }
  }, [isLightMode]);

  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">
            Saritha<span className="text-accent">.</span>
          </Link>
        </h1>
        <div className="flex items-center space-x-4">
          {/* Navigation */}
          <Navigation />

          {/* Light Mode Toggle */}
          <button
            onClick={() => setIsLightMode(!isLightMode)}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-700"
            aria-label="Toggle Light Mode"
          >
            {isLightMode ? (
              <Moon className="w-5 h-5 text-gray-800" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-500" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
