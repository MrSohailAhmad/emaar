// components/CustomModal.js
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { images } from "../../../public/images";

const CustomModal = ({
  isOpen,
  onClose,
  title,
  onSubmit,
  countryCode,
}: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-[#414141] w-full sm:w-[80%] md:w-[60%] lg:w-[30%] p-6 sm:p-8 relative rounded-lg text-center mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[-40px] right-[-13px] text-2xl text-white cursor-pointer"
        >
          &times;
        </button>

        {/* Thumbnail Image */}
        <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24">
          <Image
            src={images.HEROIMG}
            alt="hero section image"
            className="w-full h-auto"
          />
        </div>

        {/* Phone Number Input */}
        <div className="flex flex-col sm:flex-row justify-center items-center pt-8 sm:w-3/5 mx-auto">
          <input
            type="text"
            value={countryCode}
            readOnly
            className="bg-gray-200 border border-gray-300 p-2 w-full sm:w-1/4 rounded-t-md sm:rounded-l-md sm:rounded-tr-none text-center border-b-0 sm:border-b sm:border-r-0"
          />
          <input
            type="text"
            placeholder="Enter Number"
            className="bg-gray-200 border border-gray-300 p-2 w-full sm:w-3/4 rounded-b-md sm:rounded-r-md sm:rounded-bl-none"
          />
        </div>

        {/* Modal Header */}
        <h3 className="text-white text-base font-bold py-4">{title}</h3>

        {/* Download Button */}
        <div className="mb-5">
          <button
            className="bg-red-600 text-white py-3 px-8 rounded-lg w-full sm:w-3/5 mx-auto block"
            onClick={onSubmit}
          >
            Download a brochure
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-white text-xs mt-3">*Time to download - 2 seconds</p>
      </div>
    </div>
  );
};

export default CustomModal;
