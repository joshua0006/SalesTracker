import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

function SignUp() {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex h-[calc(100vh-var(--header-height,124px))] overflow-hidden">
      {/* Testimonial section - hidden on mobile, 50% width on larger screens */}
      <div className="hidden md:flex md:w-1/2 flex-col justify-between bg-white dark:bg-gray-700">
        <div className="relative h-full w-full">
          <img
            src="https://www.lystloc.com/blog/wp-content/uploads/2023/02/webpd.webp"
            alt="AI-Powered Sales Analytics"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
            <p className="text-sm md:text-base mb-1 italic font-light">
              "This library has saved me countless hours of work and helped me
              deliver stunning designs to my clients faster than ever before."
            </p>
            <p className="text-sm font-semibold">Sofia Davis</p>
          </div>
        </div>
      </div>

      {/* Sign up form section - full width on mobile, 50% on larger screens */}
      <div
        className={`w-full md:w-1/2 p-4 flex items-center justify-center overflow-y-auto ${
          isDarkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="w-full max-w-md">
          <h2
            className={`text-xl md:text-2xl font-bold mb-2 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Create an account
          </h2>
          <p
            className={`text-xs md:text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } mb-4`}
          >
            Enter your email below to create your account
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="name@example.com"
              className={`w-full p-2 rounded-md text-sm ${
                isDarkMode
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-900"
              }`}
            />
            <button
              type="submit"
              className={`w-full p-2 rounded-md font-medium transition-colors text-sm ${
                isDarkMode
                  ? "bg-white text-gray-900 hover:bg-gray-200"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              Sign Up with Email
            </button>
          </form>
          <div
            className={`text-center my-3 text-xs ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            OR CONTINUE WITH
          </div>
          <button
            className={`w-full p-2 rounded-md font-medium transition-colors flex items-center justify-center text-sm ${
              isDarkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            GitHub
          </button>
          <p
            className={`text-xs mt-3 text-center ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            By clicking continue, you agree to our{" "}
            <Link
              to="/terms"
              className={
                isDarkMode
                  ? "text-white hover:underline"
                  : "text-gray-900 hover:underline"
              }
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className={
                isDarkMode
                  ? "text-white hover:underline"
                  : "text-gray-900 hover:underline"
              }
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
