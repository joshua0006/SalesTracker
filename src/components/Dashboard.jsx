import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import StatCards from "./StatCards";
import ExpenseOverview from "./ExpenseOverview";
import RecentSales from "./RecentSales";

function Dashboard() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`container mx-auto px-4 py-8 ${
        isDarkMode ? "text-white" : "text-gray-800"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCards />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          className={`p-6 rounded-lg ${
            isDarkMode ? "bg-gray-800" : "bg-white shadow"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Expense Overview</h2>
          <ExpenseOverview />
        </div>
        <div
          className={`p-6 rounded-lg ${
            isDarkMode ? "bg-gray-800" : "bg-white shadow"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Recent Sales</h2>
          <RecentSales />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
