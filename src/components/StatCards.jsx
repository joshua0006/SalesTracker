import React from "react";
import { useTheme } from "../contexts/ThemeContext";

function StatCard({ title, value, icon }) {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`p-6 rounded-lg ${
        isDarkMode ? "bg-gray-800" : "bg-white shadow"
      }`}
    >
      <div className="flex items-center">
        <div
          className={`p-3 rounded-full ${
            isDarkMode ? "bg-gray-700" : "bg-gray-100"
          } mr-4`}
        >
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {title}
          </p>
          <p className="text-lg font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
}

function StatCards() {
  return (
    <>
      <StatCard title="Total Revenue" value="$54,321" icon="💰" />
      <StatCard title="New Customers" value="210" icon="👥" />
      <StatCard title="Total Orders" value="1,543" icon="📦" />
      <StatCard title="Avg. Order Value" value="$75.25" icon="📈" />
    </>
  );
}

export default StatCards;
