import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function Analytics() {
  const { isDarkMode } = useTheme();

  const salesData = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 4500 },
    { month: "May", sales: 6000 },
    { month: "Jun", sales: 5500 },
  ];

  const trafficSourceData = [
    { name: "Direct", value: 400 },
    { name: "Social", value: 300 },
    { name: "Referral", value: 300 },
    { name: "Organic", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div
      className={`container mx-auto px-4 py-8 ${
        isDarkMode ? "text-white" : "text-gray-800"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div
          className={`p-6 rounded-lg ${
            isDarkMode ? "bg-gray-800" : "bg-white shadow"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
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
              <Legend />
              <Bar dataKey="sales" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div
          className={`p-6 rounded-lg ${
            isDarkMode ? "bg-gray-800" : "bg-white shadow"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Traffic Sources</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={trafficSourceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {trafficSourceData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div
        className={`p-6 rounded-lg ${
          isDarkMode ? "bg-gray-800" : "bg-white shadow"
        }`}
      >
        <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className={`p-4 rounded-lg ${
              isDarkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <h3 className="text-lg font-medium mb-2">Total Revenue</h3>
            <p className="text-2xl font-bold">$124,563.00</p>
            <p
              className={`text-sm ${
                isDarkMode ? "text-green-400" : "text-green-600"
              }`}
            >
              +12.5% from last month
            </p>
          </div>
          <div
            className={`p-4 rounded-lg ${
              isDarkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <h3 className="text-lg font-medium mb-2">Conversion Rate</h3>
            <p className="text-2xl font-bold">3.6%</p>
            <p
              className={`text-sm ${
                isDarkMode ? "text-red-400" : "text-red-600"
              }`}
            >
              -0.8% from last month
            </p>
          </div>
          <div
            className={`p-4 rounded-lg ${
              isDarkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <h3 className="text-lg font-medium mb-2">Average Order Value</h3>
            <p className="text-2xl font-bold">$85.20</p>
            <p
              className={`text-sm ${
                isDarkMode ? "text-green-400" : "text-green-600"
              }`}
            >
              +5.3% from last month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
