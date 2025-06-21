"use client";

import React from "react";
import { X, ChevronDown } from "lucide-react";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  homeOptions: string[];
  dentistryOptions: string[];
  aboutOptions: string[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  homeOptions,
  dentistryOptions,
  aboutOptions,
}) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-[100] p-6 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-blue-900">Menu</h2>
        <X className="cursor-pointer text-blue-900 w-6 h-6" onClick={onClose} />
      </div>

      <div className="space-y-6 text-blue-900">
        <DropdownSection title="Home" items={homeOptions} />
        <DropdownSection title="Dentistry" items={dentistryOptions} />
        <DropdownSection title="About Us" items={aboutOptions} />
        <Link href="/contact" onClick={onClose} className="block font-medium mt-4">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

interface DropdownSectionProps {
  title: string;
  items: string[];
}

const DropdownSection: React.FC<DropdownSectionProps> = ({ title, items }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <button
        className="flex justify-between w-full items-center text-lg font-semibold"
        onClick={() => setOpen(!open)}
      >
        {title}
        <ChevronDown
          className={`text-blue-900 transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {open && (
        <ul className="mt-2 ml-4 space-y-2 text-base font-normal">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;
