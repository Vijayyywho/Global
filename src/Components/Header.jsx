import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Global Packaging Logo"
            style={{ width: "60px" }}
            className="sm:w-[90px]"
          />
          <span
            className="text-3xl font-bold text-green-500 hidden sm:block drop-shadow-lg"
            style={{
              fontFamily: "Outfit, Poppins, Raleway, Space Grotesk, sans-serif",
              background: "linear-gradient(to right, #32CD32, #228B22)", // Gradient for texture effect
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "3px 3px 5px rgba(0, 0, 0, 0.2)", // 3D shadow effect
            }}
          >
            Global Packaging
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden text-xl md:flex space-x-6">
          <NavLink
            to="/"
            className="text-gray-700 hover:text-blue-500 transition"
            activeClassName="text-blue-500 font-semibold"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-700 hover:text-blue-500 transition"
            activeClassName="text-blue-500 font-semibold"
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className="text-gray-700 hover:text-blue-500 transition"
            activeClassName="text-blue-500 font-semibold"
          >
            Products
          </NavLink>
          <NavLink
            to="/services"
            className="text-gray-700 hover:text-blue-500 transition"
            activeClassName="text-blue-500 font-semibold"
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-700 hover:text-blue-500 transition"
            activeClassName="text-blue-500 font-semibold"
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-white shadow-lg`}
      >
        <nav className="flex flex-col space-y-4 py-4 px-6">
          <NavLink
            to="/"
            className="text-gray-700 hover:text-blue-500 transition"
            activeClassName="text-blue-500 font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-700 hover:text-blue-500 transition"
            activeClassName="text-blue-500 font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className="text-gray-700 hover:text-blue-500 transition"
            activeClassName="text-blue-500 font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </NavLink>
          <NavLink
            to="/services"
            className="text-gray-700 hover:text-blue-500 transition"
            activeClassName="text-blue-500 font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-700 hover:text-blue-500 transition"
            activeClassName="text-blue-500 font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
