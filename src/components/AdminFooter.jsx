import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const AdminFooter = ({ isAdminDashboard = false }) => {
  const { isDark } = useTheme(); // Use darker background and simple text for Admin

  const footerBg = isAdminDashboard
    ? "bg-red-900 border-t border-red-700" // Distinct red background for Admin
    : isDark
    ? "bg-zinc-900 shadow-inner"
    : "bg-gray-100 shadow-inner"; // Link colors are customized based on the role

  const linkColor = isAdminDashboard
    ? "text-red-300 hover:text-white" // Lighter text on red background
    : isDark
    ? "text-zinc-400 hover:text-white"
    : "text-zinc-600 hover:text-blue-600";

  const blockchainHighlightColor = isAdminDashboard
    ? "text-red-300"
    : isDark
    ? "text-blue-400"
    : "text-blue-700";
  const copyrightColor = isAdminDashboard
    ? "text-red-400"
    : isDark
    ? "text-zinc-500"
    : "text-zinc-400";
  return (
    <footer
      className={`py-8 mt-auto transition-colors duration-300 ${footerBg}`}
    >
           {" "}
      <div className="max-w-7xl mx-auto px-6 text-center">
               
        {isAdminDashboard ? (
          <>
            {/* --- ADMIN FOOTER CONTENT --- */}
            <p
              className={`font-extrabold text-xl mb-3 ${blockchainHighlightColor}`}
            >
              ADMIN CONSOLE: RESTRICTED ACCESS
            </p>
            <div className="flex justify-center space-x-6 text-sm mb-4">
              <a href="/admin/settings" className={`transition ${linkColor}`}>
                Settings
              </a>
              <a href="/admin/audit-log" className={`transition ${linkColor}`}>
                Audit Log
              </a>
              <a href="/logout" className={`transition ${linkColor}`}>
                Logout
              </a>
            </div>
            {/* --- END ADMIN FOOTER CONTENT --- */}
          </>
        ) : (
          <>
            {/* --- PUBLIC FOOTER CONTENT (Enhanced Version) --- */}
            <h3
              className={`font-extrabold text-xl mb-6 ${blockchainHighlightColor}`}
            >
              BLOCKCHAIN POWERED TRANSPARENCY
            </h3>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-8 mb-6">
              <a
                href="#"
                className={`text-2xl transition hover:scale-110 ${linkColor}`}
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className={`text-2xl transition hover:scale-110 ${linkColor}`}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className={`text-2xl transition hover:scale-110 ${linkColor}`}
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>

            {/* Main Navigation Links (Structured with gaps) */}
            <div
              className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-sm mb-6 pb-6 border-b border-solid"
              style={{ borderColor: isDark ? "#3f3f46" : "#d4d4d8" }}
            >
              <a
                href="/faq"
                className={`whitespace-nowrap transition ${linkColor}`}
              >
                FAQ & Technical Details
              </a>
              <a
                href="/privacy"
                className={`whitespace-nowrap transition ${linkColor}`}
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className={`whitespace-nowrap transition ${linkColor}`}
              >
                Terms of Service
              </a>
              <a
                href="/contact"
                className={`whitespace-nowrap transition ${linkColor}`}
              >
                Contact Us
              </a>
            </div>
            {/* --- END PUBLIC FOOTER CONTENT --- */}
          </>
        )}
                        {/* Copyright (Always shown) */}       {" "}
        <p className={`mt-4 ${copyrightColor} text-xs`}>
                    &copy; {new Date().getFullYear()} Impact Ledger. All rights
          reserved.        {" "}
        </p>
             {" "}
      </div>
         {" "}
    </footer>
  );
};

export default AdminFooter;
