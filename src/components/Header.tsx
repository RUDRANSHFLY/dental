"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { Button } from "./ui/button";
import NavDropDown from "./NavDropDown";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const homeOptions = [
    "Best Invisalign Deals",
    "See The Results",
    "Ask The Expert",
    "Payment Plan Options"
  ];

  const dentistryOptions = [
    "Teeth Cleanings",
    "Fillings & Crowns",
    "Cosmetic Dentistry",
    "Laser Gingivectomy",
    "Other Procedures"
  ];

  const aboutOptions = [
    "Meet Our Team",
    "News",
    "Insurance Accepted",
    "Directions",
    "Reviews"
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-blue-50 text-blue-900 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Logo (always on the left) */}
        <div className="flex-shrink-0">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={140}
            height={50}
            className="object-contain"
            priority
          />
        </div>

        {/* Right Section: Desktop Top Area */}
        <div className="hidden md:flex flex-col items-end space-y-1">
          {/* Phone and CTA */}
          <div className="flex items-center gap-4">
            <p className="text-lg font-semibold">(610) 649-0313</p>
            <Button className="bg-blue-900 text-white hover:bg-blue-800 transition">
              Online Scheduling
            </Button>
          </div>

          {/* Desktop Nav */}
          <div className="flex items-center gap-6 mt-2">
            <NavDropDown title="Home" items={homeOptions} />
            <NavDropDown title="Dentistry" items={dentistryOptions} />
            <NavDropDown title="About Us" items={aboutOptions} />
            <Link href="/ai" className="font-medium">
              Ask Ai
            </Link>
            <Link href="/tooth-shade" className="font-medium">
              Check Teeth Shade
            </Link>
            <Link href="/contact-us" className="font-medium">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile View: Phone + Hamburger on Right */}
        <div className="flex md:hidden items-center gap-4 ml-auto">
          <Phone className="text-blue-900 w-5 h-5" />
          <Menu
            className="text-blue-900 w-6 h-6 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(true)}
          />
        </div>
      </div>

      {/* Gold Bar */}
      <div className="w-full h-5 bg-animated-gold shine-overlay" />

      {/* Mobile Menu Sidebar */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        homeOptions={homeOptions}
        dentistryOptions={dentistryOptions}
        aboutOptions={aboutOptions}
      />
    </header>
  );
};

export default Header;
