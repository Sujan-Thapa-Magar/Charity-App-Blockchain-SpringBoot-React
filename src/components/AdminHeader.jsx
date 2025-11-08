// src/components/AdminLoginHeader.jsx (New component for the Admin LOGIN screen only)

import React from "react";
import { useTheme, ThemeSwitcher } from "../contexts/ThemeContext";
import { FaGlobe } from "react-icons/fa";

const AdminLoginHeader = () => {
  const { isDark } = useTheme();

  // Hard-coded to show a simple, public header without main navigation
  const headerBg = isDark
    ? "bg-zinc-800 border-zinc-700 shadow-lg"
    : "bg-white border-gray-200 shadow-lg";
  const brandingColor = "text-red-600"; // Admin color branding
  const textColor = isDark ? "text-white" : "text-zinc-800";

  return (
    <header
      className={`sticky top-0 z-20 transition-colors duration-300 ${headerBg}`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* 🌎 Logo/Brand Name */}
        <div className="flex items-center space-x-2">
          <FaGlobe className={`text-3xl ${brandingColor}`} />
          <span className={`text-2xl font-extrabold ${textColor}`}>
            Impact Ledger
          </span>
          <span className="ml-3 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
            LOGIN
          </span>
        </div>

        {/* Utility: Only Theme Switcher */}
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};
export default AdminLoginHeader;
