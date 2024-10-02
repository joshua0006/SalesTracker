import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const salesData = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
  },
  { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00" },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "+$299.00",
  },
  { name: "William Kim", email: "will@email.com", amount: "+$99.00" },
  { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00" },
];

function RecentSales() {
  const { isDarkMode } = useTheme();

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left pb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              Customer
            </th>
            <th className="text-right pb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale, index) => (
            <tr
              key={index}
              className="border-t border-gray-200 dark:border-gray-700"
            >
              <td className="py-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full hidden sm:block bg-gray-200 dark:bg-gray-700 mr-3"></div>
                  <div>
                    <p
                      className={`text-xs font-medium ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {sale.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {sale.email}
                    </p>
                  </div>
                </div>
              </td>
              <td
                className={`py-3 text-right text-sm font-medium ${
                  isDarkMode ? "text-green-400" : "text-green-600"
                }`}
              >
                {sale.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-center">
        <a
          href="#"
          className={`text-sm font-medium ${
            isDarkMode
              ? "text-blue-400 hover:text-blue-300"
              : "text-blue-600 hover:text-blue-500"
          }`}
        >
          View all sales
        </a>
      </div>
    </div>
  );
}

export default RecentSales;
