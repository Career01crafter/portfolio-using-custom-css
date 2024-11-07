"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="flex justify-between container mx-auto">
        <Link href="/">
          <h1>Narmeen <span className="text-cyan-400">!</span></h1>
        </Link>

        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? "" : "hidden"}`}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? "Close" : "Menu"}
        </button>

        <div className="desktop-nav">
          <nav className="flex gap-4">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/projects" className="nav-link">Projects</Link>
          </nav>

          <Link href="/contact">
            <Button className="contact-btn">
              Contact Me
            </Button>
          </Link>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="mobile-link">Home</Link>
              <Link href="/about" className="mobile-link">About</Link>
              <Link href="/projects" className="mobile-link">Projects</Link>
              <Link href="/contact">
                <Button className="contact-btn">
                  Contact Me
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
