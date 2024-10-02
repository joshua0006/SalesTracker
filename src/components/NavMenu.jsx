import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useTheme();

  return (
    <nav className="relative border-b border-gray-200 dark:border-gray-700 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-500 hover:text-gray-600"
      >
        {isOpen ? "✕" : "☰"}
      </button>
      <ul
        className={`
        ${isOpen ? "block" : "hidden"} 
        md:block
        absolute md:relative
        top-full left-0 right-0
        md:top-auto md:left-auto md:right-auto
        ${isDarkMode ? "bg-gray-800" : "bg-white"}
        md:bg-transparent
        shadow-md md:shadow-none
        z-50
        ${isDarkMode ? "text-white" : "text-gray-800"}
        md:flex md:space-x-4
        p-4 md:p-0
      `}
      >
        <li>
          <Link
            to="/"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
