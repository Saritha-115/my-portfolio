"use client"; // Mark this file as a client component

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import { Sun, Moon } from "lucide-react"; // Icons for light and dark mode
import { Button } from "../ui/button";

export default function Header() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // For SSR
  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync light mode state with the <html> element
  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    if (isLightMode) {
      root.classList.add("light");
      console.log("Light mode enabled");
    } else {
      root.classList.remove("light");
      console.log("Dark mode enabled");
    }
  }, [isLightMode, mounted]);

  if (!mounted) return null;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-8 xl:py-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <motion.h1 whileHover={{ scale: 1.05 }} className="text-2xl font-bold">
          <Link href="/">
            Saritha
            <motion.span
              animate={{
                color: [
                  "var(--color-accent)",
                  "#ff7eee",
                  "var(--color-accent)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-accent"
            >
              .
            </motion.span>
          </Link>
        </motion.h1>
        <div className="flex items-center space-x-4">
          {/* Navigation */}
          <Navigation />

          {/* Light Mode Toggle */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              onClick={() => setIsLightMode(!isLightMode)}
              className="circle"
              aria-label="Toggle Light Mode"
            >
              {isLightMode ? (
                <Moon className="w-6 h-6 text-gray-800" />
              ) : (
                <Sun className="w-6 h-6 text-yellow-500" />
              )}
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
