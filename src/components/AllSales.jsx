import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AllSales() {
  const { isDarkMode } = useTheme();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // This is dummy data. In a real application, you'd fetch this from an API or database
  const allSalesData = [
    { id: 1, user: "Olivia Martin", date: "2023-05-01", total: 1999.0 },
    { id: 2, user: "Jackson Lee", date: "2023-05-02", total: 39.0 },
    { id: 3, user: "Isabella Nguyen", date: "2023-05-03", total: 299.0 },
    { id: 4, user: "William Kim", date: "2023-05-04", total: 99.0 },
    { id: 5, user: "Sofia Davis", date: "2023-05-05", total: 39.0 },
    { id: 6, user: "Liam Johnson", date: "2023-05-06", total: 199.0 },
    { id: 7, user: "Emma Wilson", date: "2023-05-07", total: 149.0 },
    { id: 8, user: "Noah Brown", date: "2023-05-08", total: 79.0 },
    { id: 9, user: "Ava Taylor", date: "2023-05-09", total: 249.0 },
    { id: 10, user: "Elijah Anderson", date: "2023-05-10", total: 89.0 },
  ];

  const filteredSalesData = allSalesData.filter((sale) => {
    const saleDate = new Date(sale.date);
    if (startDate && endDate) {
      return saleDate >= startDate && saleDate <= endDate;
    }
    return true;
  });

  return (
    <div
      className={`container mx-auto px-4 py-8 ${
        isDarkMode ? "text-white" : "text-gray-800"
      }`}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Sales</h1>
        <Link
          to="/"
          className={`py-2 px-4 rounded-md ${
            isDarkMode
              ? "bg-gray-700 text-white hover:bg-gray-600"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          } transition-colors duration-200`}
        >
          Back to Dashboard
        </Link>
      </div>
      <div className="mb-6 flex space-x-4">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Start Date"
          className={`p-2 rounded-md ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
          }`}
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="End Date"
          className={`p-2 rounded-md ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
          }`}
        />
      </div>
      <div
        className={`overflow-x-auto ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } rounded-lg shadow`}
      >
        <table className="min-w-full divide-y divide-gray-200">
          <thead className={isDarkMode ? "bg-gray-700" : "bg-gray-50"}>
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                User
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Total Expense
              </th>
            </tr>
          </thead>
          <tbody
            className={`divide-y ${
              isDarkMode ? "divide-gray-700" : "divide-gray-200"
            }`}
          >
            {filteredSalesData.map((sale) => (
              <tr key={sale.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div
                        className={`h-10 w-10 rounded-full ${
                          isDarkMode ? "bg-gray-600" : "bg-gray-200"
                        }`}
                      ></div>
                    </div>
                    <div className="ml-4">
                      <div
                        className={`text-sm font-medium ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {sale.user}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div
                    className={`text-sm ${
                      isDarkMode ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {sale.date}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div
                    className={`text-sm ${
                      isDarkMode ? "text-green-400" : "text-green-600"
                    }`}
                  >
                    ${sale.total.toFixed(2)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllSales;
