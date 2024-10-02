import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const reportTypes = ["Sales", "Inventory", "Customer", "Financial"];

const salesData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 4500 },
  { name: "May", value: 6000 },
  { name: "Jun", value: 5500 },
];

const inventoryData = [
  { name: "Product A", stock: 120 },
  { name: "Product B", stock: 80 },
  { name: "Product C", stock: 200 },
  { name: "Product D", stock: 150 },
  { name: "Product E", stock: 100 },
];

function Reports() {
  const { isDarkMode } = useTheme();
  const [selectedReport, setSelectedReport] = useState("Sales");

  const renderChart = () => {
    switch (selectedReport) {
      case "Sales":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={isDarkMode ? "#374151" : "#E5E7EB"}
              />
              <XAxis
                dataKey="name"
                stroke={isDarkMode ? "#9CA3AF" : "#4B5563"}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                stroke={isDarkMode ? "#9CA3AF" : "#4B5563"}
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDarkMode ? "#1F2937" : "#FFFFFF",
                  border: "none",
                  fontSize: 12,
                }}
                itemStyle={{ color: isDarkMode ? "#D1D5DB" : "#1F2937" }}
              />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3B82F6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      case "Inventory":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={inventoryData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={isDarkMode ? "#374151" : "#E5E7EB"}
              />
              <XAxis
                dataKey="name"
                stroke={isDarkMode ? "#9CA3AF" : "#4B5563"}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                stroke={isDarkMode ? "#9CA3AF" : "#4B5563"}
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDarkMode ? "#1F2937" : "#FFFFFF",
                  border: "none",
                  fontSize: 12,
                }}
                itemStyle={{ color: isDarkMode ? "#D1D5DB" : "#1F2937" }}
              />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey="stock" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        );
      default:
        return <p>No data available for this report type.</p>;
    }
  };

  const getReportSummary = () => {
    switch (selectedReport) {
      case "Sales":
        return {
          description:
            "Our sales performance has shown significant growth over the past quarter. We've seen a 15% increase in overall revenue, with our top-performing product line experiencing a 22% surge in sales.",
          metrics: [
            { name: "Total Revenue", value: "$1,245,678" },
            { name: "Average Order Value", value: "$87.50" },
            { name: "Conversion Rate", value: "3.8%" },
          ],
          insights: [
            "E-commerce sales have outperformed in-store sales by 30%",
            "Mobile purchases now account for 55% of all online transactions",
            "Customer retention rate has improved by 7% since last quarter",
          ],
        };
      case "Inventory":
        return {
          description:
            "Our inventory management has improved efficiency this quarter. We've reduced overstock issues by 25% and minimized stockouts for high-demand items.",
          metrics: [
            { name: "Total SKUs", value: "1,567" },
            { name: "Average Stock Turn", value: "8.3 times/year" },
            { name: "Carrying Cost", value: "$234,567" },
          ],
          insights: [
            "Implemented just-in-time inventory for top 20% of products",
            "Reduced warehouse space utilization by 15%",
            "Improved forecast accuracy by 12% using new predictive analytics tool",
          ],
        };
      case "Customer":
        return {
          description:
            "Customer satisfaction scores have reached an all-time high this quarter. Our focus on personalized experiences and improved customer service has yielded positive results.",
          metrics: [
            { name: "Net Promoter Score", value: "72" },
            { name: "Customer Lifetime Value", value: "$1,234" },
            { name: "Churn Rate", value: "2.1%" },
          ],
          insights: [
            "Loyalty program membership has grown by 28%",
            "Customer support response time reduced by 35%",
            "Personalized product recommendations have increased cross-sell by 18%",
          ],
        };
      case "Financial":
        return {
          description:
            "Our financial health remains strong, with steady growth in revenue and profitability. Cost-saving initiatives have contributed to improved margins across all departments.",
          metrics: [
            { name: "Gross Profit Margin", value: "32.5%" },
            { name: "Operating Expense Ratio", value: "18.7%" },
            { name: "Return on Investment", value: "11.2%" },
          ],
          insights: [
            "Successfully reduced operational costs by 8% through process optimization",
            "New product lines have contributed 15% to overall revenue growth",
            "International market expansion has increased revenue share by 12%",
          ],
        };
      default:
        return {
          description:
            "No detailed information available for this report type.",
          metrics: [],
          insights: [],
        };
    }
  };

  const summary = getReportSummary();

  return (
    <div
      className={`container mx-auto px-4 py-8 ${
        isDarkMode ? "text-white" : "text-gray-800"
      }`}
    >
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Reports</h1>

      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          Select Report Type
        </h2>
        <div className="flex flex-wrap gap-2">
          {reportTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedReport(type)}
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm ${
                selectedReport === type
                  ? isDarkMode
                    ? "bg-blue-600 text-white"
                    : "bg-blue-500 text-white"
                  : isDarkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition-colors`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`p-4 sm:p-6 rounded-lg ${
          isDarkMode ? "bg-gray-800" : "bg-white shadow"
        }`}
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          {selectedReport} Report
        </h2>
        {renderChart()}
      </div>

      <div
        className={`mt-8 p-4 sm:p-6 rounded-lg ${
          isDarkMode ? "bg-gray-800" : "bg-white shadow"
        }`}
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Report Summary
        </h2>
        <p className="mb-4 text-sm sm:text-base">{summary.description}</p>
        <h3 className="text-lg sm:text-xl font-semibold mb-2">Key Metrics:</h3>
        <ul className="list-disc list-inside mb-4 text-sm sm:text-base">
          {summary.metrics.map((metric, index) => (
            <li key={index}>
              {metric.name}:{" "}
              <span className="font-semibold">{metric.value}</span>
            </li>
          ))}
        </ul>
        <h3 className="text-lg sm:text-xl font-semibold mb-2">Key Insights:</h3>
        <ul className="list-disc list-inside text-sm sm:text-base">
          {summary.insights.map((insight, index) => (
            <li key={index}>{insight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Reports;
