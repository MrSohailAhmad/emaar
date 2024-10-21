"use client";
import React from "react";

const DescriptiveBrochure = () => {
  return (
    <div className="p-8 brochureImg shadow-lg my-32 md:my-16 lg:my-8 max-w-screen-3xl mx-auto mt-20 ">
      {/* Background image (if any) */}
      <div className="absolute inset-0 bg-opacity-60"></div>

      {/* Main container */}
      <div className="relative max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between p-6 md:p-10">
        {/* Left Side: Descriptive Brochure Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="/path-to-brochure-image.jpg"
            alt="Descriptive Brochure"
            className="rounded-md shadow-lg"
          />
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 bg-gray-900 text-white p-6 md:p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Fill in the Form</h2>

          {/* Form Fields */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Your Name
              </label>
              <input
                type="text"
                className="w-full p-3 mt-1 border rounded-md bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Your E-mail
              </label>
              <input
                type="email"
                className="w-full p-3 mt-1 border rounded-md bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400">
                Phone Number
              </label>
              <div className="flex items-center">
                <span className="px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-l-md">
                  +92
                </span>
                <input
                  type="tel"
                  className="w-full p-3 border-t border-b border-r rounded-r-md bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  placeholder="Phone number"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition duration-200"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DescriptiveBrochure;
