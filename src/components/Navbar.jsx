import React, { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setMenuOpen(false)}
      className="
        relative text-black transition
        hover:text-secondary
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-0 after:bg-secondary
        hover:after:w-full after:transition-all after:duration-300
      "
    >
      {children}
    </a>
  );

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Areas", href: "#areas" },
    { label: "Services", href: "#services" },
    { label: "Service Charge", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="bg-transparent/70 backdrop-blur-md fixed w-full z-40">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <img src={logo} alt="Becky Paws Logo" className="h-10 w-auto" />

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 font-normal font-fun">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl text-black"
            onClick={() => setMenuOpen((s) => !s)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (moved outside the nav to avoid stacking issues) */}
      <div
        className={`
          md:hidden fixed inset-0 z-50
          bg-primary/70 backdrop-blur-md flex flex-col items-center justify-center gap-8
          transform transition-transform duration-300
          ${menuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-6 opacity-0 pointer-events-none"}
        `}
        aria-hidden={!menuOpen}
      >
        {/* Close button */}
        <button
          className="absolute top-6 right-6 text-3xl text-black"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>

        {/* Menu Items */}
        {navItems.map((item) => (
          <NavLink key={item.href} href={item.href}>
            <span className="text-2xl font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Navbar;