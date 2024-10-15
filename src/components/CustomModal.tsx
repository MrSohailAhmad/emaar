// components/CustomModal.js
"use client";

import React from "react";

const CustomModal = ({ isOpen, onClose, title, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Thumbnail Image */}
        <div className="flex justify-center mb-4">
          <img
            src="/images/sample.jpg"
            alt="Thumbnail"
            className="w-16 h-16 rounded"
          />
        </div>

        {/* Modal Header */}
        <h3 className="text-lg font-semibold text-center">{title}</h3>

        {/* Phone Number Input */}
        <div className="mt-4">
          <div className="flex items-center">
            <span className="bg-gray-100 px-3 py-2 border border-gray-300">
              +92
            </span>
            <input
              type="text"
              placeholder="Enter Number"
              className="w-full p-2 border border-gray-300 rounded-r"
            />
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-6">
          <button
            className="bg-red-600 text-white px-6 py-3 w-full rounded-lg"
            onClick={onSubmit}
          >
            Download a brochure
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-500 mt-2 text-center">
          *Time to download - 2 seconds
        </p>
      </div>
    </div>
  );
};

export default CustomModal;
