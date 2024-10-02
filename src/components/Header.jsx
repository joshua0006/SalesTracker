import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: "Overview", path: "/" },
    { name: "Analytics", path: "/analytics" },
    { name: "Reports", path: "/reports" },
    { name: "Notifications", path: "/notifications" },
  ];

  return (
    <header
      className={`py-4 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
      style={{ "--header-height": "64px" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-4">
          <Link
            to="/"
            className={`text-2xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            TradeTrack
          </Link>
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className={`mr-4 p-2 rounded-full ${
                isDarkMode
                  ? "bg-gray-700 text-yellow-300"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {isDarkMode ? "🌙" : "☀️"}
            </button>
            <div className="hidden sm:flex">
              <Link
                to="/login"
                className={`px-4 py-2 rounded-md text-sm font-medium mr-2 ${
                  isDarkMode
                    ? "bg-white text-gray-900"
                    : "bg-gray-900 text-white"
                } hover:opacity-90 transition-colors`}
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors"
              >
                Sign Up
              </Link>
            </div>
            <button
              className="sm:hidden ml-2 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
        <nav
          className={`flex flex-col sm:flex-row sm:space-x-1 ${
            isMenuOpen ? "block" : "hidden sm:flex"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-3 py-2 rounded-md text-sm ${
                isActive(item.path)
                  ? isDarkMode
                    ? "bg-gray-900 text-white"
                    : "bg-gray-200 text-gray-900"
                  : isDarkMode
                  ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="sm:hidden mt-2">
            <Link
              to="/login"
              className={`block px-4 py-2 rounded-md text-sm font-medium mb-2 ${
                isDarkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"
              } hover:opacity-90 transition-colors`}
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="block bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
