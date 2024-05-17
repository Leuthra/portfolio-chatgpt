"use client"

import { useState } from "react";
import Link from "next/link";
import AIChatButton from "./AIChatButton";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="z-50 sticky top-0 bg-background">
      <div className="mx-auto flex max-w-3xl flex-wrap justify-between gap-3 px-3 py-4">
        <div className="hidden md:block">
          <nav className="space-x-4 font-medium">
            <Link href="/" className="hover:underline hover:underline-offset-2">home</Link>
            <Link href="/about" className="hover:underline hover:underline-offset-2">about me</Link>
            <Link href="/social" className="hover:underline hover:underline-offset-2">social media</Link>
          </nav>
        </div>
        <div className="block md:hidden">
          <nav className="space-x-4 font-medium">
            <Link href="/">Romi Muharom</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <AIChatButton />
          <ThemeToggle />
          <button
            aria-label="button burger"
            className="block lg:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="flex flex-col space-y-4 font-medium lg:hidden w-full mt-4"
              initial={{ opacity: 0, height: 0, zIndex: 0 }}
              animate={{ opacity: 1, height: "auto", zIndex: 1 }} // Mengatur z-index selama animasi masuk
              exit={{ opacity: 0, height: 0, zIndex: 0 }} // Mengatur z-index kembali ke nilai semula saat animasi exit
              transition={{ duration: 0.3 }}
            >
              <Link href="/" onClick={closeMenu} className="hover:underline hover:underline-offset-2">homepage</Link>
              <Link href="/about" onClick={closeMenu} className="hover:underline hover:underline-offset-2">about me</Link>
              <Link href="/social" onClick={closeMenu} className="hover:underline hover:underline-offset-2">social media</Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}