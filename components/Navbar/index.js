"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  // Menu visibility state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll state
  const [hasScrolled, setHasScrolled] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-transparent text-secondColor py-1 fixed inset-x-0 top-2 z-30 mx-auto w-full max-w-screen-md border-0 sm:border border-[#1b1b1b] py-2 shadow backdrop-blur-lg md:top-4 md:rounded-lg lg:max-w-screen-lg ${
        hasScrolled ? "bg-[#000000] bg-opacity-70" : "bg-transparent"
      }`}
    >
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="ModifAI"
              width={32}
              height={32}
              className="rounded-lg"
            />

            <h1
              className="text-lg md:text-xl font-black"
              style={{
                color: "#FFEDDC",
                backgroundImage:
                  "linear-gradient(90deg, #FFEDDC 49%, #3D9970 53%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ModifAI
            </h1>
          </div>
          <button className="bg-firstColor text-secondColor text-sm font-semibold px-4 py-1 rounded-lg md:hidden">
            Download
          </button>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <a
              aria-current="page"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-400 transition-all duration-200 hover:text-firstColor"
              href="#"
            >
              Features
            </a>
            <a
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-400 transition-all duration-200 hover:text-firstColor"
              href="#"
            >
              Examples
            </a>
            <button
              className="inline-flex items-center justify-center rounded-lg bg-firstColor px-5 py-1 text-sm font-semibold text-seconColor shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-firstColor"
              href="/login"
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
