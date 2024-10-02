import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ExpenseOverview() {
  const { isDarkMode } = useTheme();
  // This is a placeholder for the chart data
  const chartData = [
    { month: "Jan", value: 5000 },
    { month: "Feb", value: 1200 },
    { month: "Mar", value: 2000 },
    { month: "Apr", value: 2500 },
    { month: "May", value: 4000 },
    { month: "Jun", value: 3800 },
    { month: "Jul", value: 4200 },
    { month: "Aug", value: 3500 },
    { month: "Sep", value: 4000 },
    { month: "Oct", value: 5500 },
    { month: "Nov", value: 2500 },
    { month: "Dec", value: 3000 },
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
        Overview
      </h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={isDarkMode ? "#374151" : "#E5E7EB"}
            />
            <XAxis
              dataKey="month"
              stroke={isDarkMode ? "#9CA3AF" : "#4B5563"}
            />
            <YAxis stroke={isDarkMode ? "#9CA3AF" : "#4B5563"} />
            <Tooltip
              contentStyle={{
                backgroundColor: isDarkMode ? "#1F2937" : "#FFFFFF",
                border: "none",
              }}
              itemStyle={{ color: isDarkMode ? "#D1D5DB" : "#1F2937" }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ExpenseOverview;
