import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";

function SaleItem({ name, email, amount }) {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
        <div>
          <div
            className={`font-medium ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {name}
          </div>
          <div className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
            {email}
          </div>
        </div>
      </div>
      <div className="font-medium text-green-400">+${amount}</div>
    </div>
  );
}

function RecentSales() {
  const { isDarkMode } = useTheme();
  const sales = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      amount: "1,999.00",
    },
    { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "39.00" },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      amount: "299.00",
    },
    { name: "William Kim", email: "will@email.com", amount: "99.00" },
    { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "39.00" },
  ];

  return (
    <div
      className={`rounded-lg p-6 ${
        isDarkMode ? "bg-gray-800" : "bg-white shadow-md"
      }`}
    >
      <h2
        className={`text-xl font-semibold mb-4 ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Recent Sales
      </h2>
      <p
        className={`text-sm mb-4 ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        You made 265 sales this month.
      </p>
      {sales.map((sale, index) => (
        <SaleItem key={index} {...sale} />
      ))}
      <Link
        to="/all-sales"
        className={`block text-center mt-4 py-2 px-4 rounded-md ${
          isDarkMode
            ? "bg-gray-700 text-blue-400 hover:bg-gray-600"
            : "bg-gray-100 text-blue-600 hover:bg-gray-200"
        } transition-colors duration-200`}
      >
        View all sales
      </Link>
    </div>
  );
}

export default RecentSales;
