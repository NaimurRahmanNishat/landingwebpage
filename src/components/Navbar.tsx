"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';

const navlinks: NavLink[] = [
  {
    label: "Home",
    url: "#home",
  },
  {
    label: "About",
    url: "#about",
  },
  {
    label: "Blog",
    url: "#blog",
  },
  {
    label: "Contact",
    url: "#contact",
  },
];

interface NavLink {
  label: string;
  url: string;
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-slate-400 z-50 shadow-lg">
      {/* Logo */}
      <Link href="/" onClick={() => setOpen(false)}>
        <h1 className="font-bold text-3xl text-purple-600 cursor-pointer">Logo</h1>
      </Link>

      {/* Desktop Menu */}
      <nav className={`hidden md:flex gap-8 ${open ? "hidden" : "flex"}`}>
        {navlinks.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className={`hover:text-orange-400 ${
              pathname === link.url ? "text-orange-600" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Navbar button */}
      <div className="md:hidden flex justify-end w-full">
        <button onClick={handleClick}>
          {open ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Overlay */}
      {open && (
  <>
    {/* Full screen background overlay */}
    <div
      className="absolute inset-0 opacity-50 z-40"
      onClick={handleClick}
    />
    {/* Mobile Menu */}
    <nav className="absolute top-20 right-0 w-1/2 bg-gray-500 h-screen flex flex-col items-center space-y-4 md:hidden z-50 pt-5">
      {navlinks.map((link) => (
        <Link
          key={link.url}
          href={link.url}
          className={`hover:text-orange-400 ${
            pathname === link.url ? "text-orange-600" : ""
          }`}
          onClick={() => setOpen(false)}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  </>
)}

    </header>
  );
};

export default Navbar;
