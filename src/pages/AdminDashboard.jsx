import React from "react";
// Ensure these imports point to the dedicated admin components
import AdminHeader from "../components/AdminHeader";
import AdminFooter from "../components/AdminFooter";
import { useTheme } from "../contexts/ThemeContext";
import {
  FaChartBar,
  FaUsers,
  FaCheckDouble,
  FaExclamationTriangle,
  FaEthereum,
  FaLock,
  FaGasPump,
} from "react-icons/fa";

const AdminDashboard = () => {
  const { isDark } = useTheme();

  // Theme colors for the main dashboard content
  const themeClasses = isDark
    ? "bg-zinc-900 text-zinc-100"
    : "bg-gray-50 text-zinc-900";
  const cardBg = isDark ? "bg-zinc-800" : "bg-white";
  const highlightColor = "text-red-500"; // Admin Primary Color

  const blockchainStats = [
    {
      icon: FaEthereum,
      value: "1,450 ETH",
      label: "Total Funds Tokenized",
      color: "text-blue-500",
    },
    {
      icon: FaLock,
      value: "42,012",
      label: "Confirmed Transactions",
      color: "text-green-500",
    },
    {
      icon: FaGasPump,
      value: "Low",
      label: "Network Gas Fee Status",
      color: "text-yellow-500",
    },
    {
      icon: FaExclamationTriangle,
      value: "7",
      label: "Pending Milestone Approvals",
      color: "text-red-500",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${themeClasses} flex flex-col`}
    >
      {/* Header is hardcoded for Admin view (shows management links and red branding) */}
      <AdminHeader />

      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className={`text-4xl font-extrabold mb-6 ${highlightColor}`}>
            Blockchain Operations Center
          </h1>

          <p className={`mb-8 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
            Real-time metrics on tokenized funds, contract states, and network
            health.
          </p>

          {/* 1. Blockchain Statistics Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {blockchainStats.map((stat, index) => (
              <div key={index} className={`p-6 rounded-xl shadow-lg ${cardBg}`}>
                <stat.icon className={`w-8 h-8 mb-3 ${stat.color}`} />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div
                  className={`text-sm ${
                    isDark ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* 2. Quick Action Tiles (Blockchain Focus) */}
          <h2 className="text-2xl font-bold mb-4">Contract and Verification</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/admin/milestone-verify"
              className={`p-6 rounded-xl shadow-md ${cardBg} hover:shadow-xl transition border border-red-500/50`}
            >
              <h3 className="font-semibold text-xl mb-1 text-green-500">
                Milestone Verification
              </h3>
              <p className="text-sm">
                Review evidence and approve smart contract fund releases.
              </p>
            </a>

            <a
              href="/admin/ledger-audit"
              className={`p-6 rounded-xl shadow-md ${cardBg} hover:shadow-xl transition border border-red-500/50`}
            >
              <h3 className="font-semibold text-xl mb-1">
                Audit Blockchain Ledger
              </h3>
              <p className="text-sm">
                Run internal checks on token totals and immutability status.
              </p>
            </a>

            <a
              href="/admin/network-config"
              className={`p-6 rounded-xl shadow-md ${cardBg} hover:shadow-xl transition border border-red-500/50`}
            >
              <h3 className="font-semibold text-xl mb-1">
                Configure Smart Contracts
              </h3>
              <p className="text-sm">
                Modify project parameters and gas limits (highly restricted
                access).
              </p>
            </a>
          </div>
        </div>
      </main>

      {/* Footer is hardcoded for Admin view */}
      <AdminFooter />
    </div>
  );
};

export default AdminDashboard;
