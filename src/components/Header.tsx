"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-blue-50 text-blue-800 shadow-sm">
      {/* Inner wrapper for content */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={160}
          height={60}
          className="cursor-pointer"
          priority
        />

        {/* Phone & CTA */}
        <div className="hidden sm:flex items-center gap-x-4">
          <p className="text-lg font-semibold">(610) 649-0313</p>
          <Button className="bg-blue-900 text-white hover:bg-blue-800 transition">
            Online Scheduling
          </Button>
        </div>
      </div>

      {/* Full-width animated gold bar */}
      <div className="w-full h-5 bg-animated-gold shine-overlay" />
    </header>
  );
};

export default Header;
