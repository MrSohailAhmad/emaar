// components/CustomModal.js
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { images } from "../../../public/images";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import PhoneInputProps from "react-phone-input-2";
const CustomModal = ({
  isOpen,
  onClose,
  title,
  onSubmit,
  setUserLocation,
  value,
  setValue,
  loading,
  error,
  setError,
}: any) => {
  if (!isOpen) return null;

  const [countryCode, setCountryCode] = useState("AE"); // Default country code

  const handleInputChange = (newValue: any) => {
    // If the input is empty, keep the country code in the input
    // Validate inputs

    if (newValue === "") {
      setValue(countryCode); // Reset value to country code
    } else {
      setValue("+" + newValue);
      setError(""); // Clear the error message when a valid input is provided
    }
    setUserLocation((prev: any) => ({ ...prev, user_number: "+" + value }));
  };

  // Fetch country code using the GET API
  const fetchCountryCode = async () => {
    try {
      const data = await fetch("/api/location");

      // Check if the response is OK
      if (!data?.ok) {
        throw new Error(`HTTP error! status: ${data?.status}`);
      }

      const { response } = await data?.json();
      console.log("Fetched location data:", response);

      // Set the country code using the response data
      setCountryCode(response?.country_code2 || "AE");
      setValue(response.calling_code || "+1");
    } catch (error) {
      console.error("Failed to fetch country code:", error);
    }
  };

  // Fetch country code when the component mounts
  useEffect(() => {
    fetchCountryCode();
  }, []); // Empty dependency array ensures it runs only once on mount

  console.log("countryCode", countryCode);
  console.log("value", value);

  return (
    <div className="fixed inset-0 w-full bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-[#414141] !max-w-screen-md sm:w-[80%] p-6 sm:p-8 relative rounded-lg text-center mx-4">
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
        {countryCode && (
          <div className="flex flex-col sm:flex-row justify-center items-center pt-8 w-[90%] mx-auto">
            <PhoneInput
              autoFormat
              defaultCountry={"AE"}
              countryCodeEditable={false}
              international
              placeholder="Enter phone number"
              className="p-3 !text-black border-none !w-full !outline-none"
              value={value}
              onChange={handleInputChange}
            />
          </div>
        )}
        {/* Modal Header */}
        <h3 className="text-white text-[.9rem] font-light py-4">{title}</h3>
        {error && <p className="text-red-500">{error}</p>}{" "}
        {/* Download Button */}
        <div className="mb-5 w-[95%] mx-auto">
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
