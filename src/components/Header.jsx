import React from "react";
import { useTheme, ThemeSwitcher } from "../contexts/ThemeContext";
import { FaGlobe, FaQrcode } from "react-icons/fa";



const Header = () => {
  const { isDark } = useTheme();

  // --- ENHANCED COLOR DEFINITIONS ---
  const primaryText = isDark ? "text-blue-400" : "text-blue-600";
  
  // Ensure donate button styling is bold and clear
  const secondaryBtn =
    "bg-green-600 hover:bg-green-500 text-white shadow-md hover:shadow-lg transition duration-200";

  const headerClasses = `sticky top-0 z-20 shadow-xl transition-colors duration-300 ${
    isDark
      ? "bg-zinc-800 border-b border-zinc-700"
      : "bg-white border-b border-gray-200"
  }`;
  
  const navTextColor = isDark
    ? "text-zinc-200 hover:text-blue-400"
    : "text-zinc-700 hover:text-blue-600";
  
  // Style for the discrete Sign In link
  const signInStyle = isDark ? 'text-zinc-200 hover:bg-zinc-700' : 'text-zinc-700 hover:bg-gray-100';
  // --- END ENHANCED COLOR DEFINITIONS ---

  return (
    <header className={headerClasses}>
     <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            
        {/* 🌎 Logo/Brand Name (Now a clickable link) */}       
        <a 
            href="/" // <-- CRITICAL CHANGE: Sets the link destination to the home page
            className="flex items-center space-x-2 cursor-pointer hover:opacity-90 transition" // Added hover effect
        >
          <FaGlobe className={`text-3xl ${primaryText}`} />
          <span
            className={`text-2xl font-extrabold ${
              isDark ? "text-white" : "text-zinc-800"
            }`}
          >
            Impact Ledger 
          </span>
        </a> {/* <-- CLOSING ANCHOR TAG */}
        
        
        {/* 🔗 Navigation Links (Desktop) */}       
        <div className="hidden md:flex space-x-6 items-center">
            
          <a href="/mission" className={`transition ${navTextColor}`}>
            Mission
          </a>
            
          <a href="/how-it-works" className={`transition ${navTextColor}`}>
            How it Works
          </a>
          
          <a
            href="/blockchain-tracker" // Use a clear route path for the tracker page
            className={`font-semibold ${primaryText} transition`}
          >
            Blockchain Tracker
          </a>
        </div>

        {/* 🌙 Utility & Action Buttons (Sign In, Donate, Theme Switcher) */}       
        <div className="flex items-center space-x-4">

            {/* NEW: Sign In Button (Discrete link) */}
            <a 
                href="/login" // Route to the User Login Page
                className={`py-2 px-4 rounded-full font-medium transition duration-200 ${signInStyle}`}
            >
                Sign In
            </a>

            {/* Donate Button (Primary CTA) - Changed to <a> for routing */}
            <a
              href="/donation" // Route to the DonatePage
              className={`py-2 px-4 rounded-full font-medium ${secondaryBtn}`}
            >
                Donate 
            </a>
            
            <ThemeSwitcher />

            {/* Mobile Menu Icon */}         
          <button
            className={`md:hidden p-2 rounded-md transition ${
              isDark ? "hover:bg-zinc-700" : "hover:bg-zinc-200"
            }`}
            aria-label="Toggle menu"
          >
            <FaQrcode className={`w-6 h-6 ${navTextColor}`} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;