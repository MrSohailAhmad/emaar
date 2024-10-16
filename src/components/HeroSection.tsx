"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { images } from "../../public/images";
import axios from "axios";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const HeroSection = () => {
  const [value, setValue] = useState("");
  const [countryCode, setCountryCode] = useState("+1"); // Default country code
  const [error, setError] = useState(""); // State to handle validation error

  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const response = await fetch("/api/location", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setCountryCode(data.countryCode || "+1");
      } catch (error) {
        console.error("Failed to fetch country code:", error);
      }
    };

    fetchCountryCode();
  }, []);

  const handleSubmit = async () => {
    if (!value) {
      // Check if the phone number is empty
      setError("Please enter a valid phone number.");
      return;
    }
    // Logic for downloading the PDF brochure
     // Create a temporary link element
     const link = document.createElement('a');

     // Set the URL to your PDF file located in the public folder
     link.href = '/brochure/brochure.pdf'; // Correct path in public folder
     link.download = 'brochure.pdf'; // The name the file will have when downloaded
 
     // Programmatically click the link to trigger the download
     document.body.appendChild(link); // Append to body
     link.click(); // Trigger click
     document.body.removeChild(link); // Clean up
  };

  const handleInputChange = (newValue) => {
    setValue(newValue);
    if (newValue) {
      setError(""); // Clear the error message when a valid input is provided
    }
  };

  return (
    <div className="mx-auto w-full flex h-auto lg:h-[70vh] gap-10 items-center flex-col lg:flex-row justify-center max-w-screen-xl m-4 my-16">
      <div className="w-[90%] lg:w-[50%] h-full">
        <Image
          className="w-full h-full"
          src={images.HEROIMG}
          alt="hero sec image"
        />
      </div>
      <div className="w-[90%] md:w-[80%] lg:w-[50%] h-[80vh] lg:h-full flex items-start gap-3 flex-col">
        <div className="flex flex-col gap-3">
          <span className="w-full text-4xl font-bold">
            Family-Oriented 3 & 4BR Villas{" "}
          </span>
          <span className="text-2xl font-[500]">
            in AVENA AT THE VALLEY by EMAAR, Dubai
          </span>
        </div>
        <div className="p-1 w-[40%] bg-black" />
        <div>
          <p className="font-light text-[1rem]">
            Avena at The Valley is a place where modern living meets the gentle
            touch of nature. This charming community of elegant 4-bedroom villas
            is designed to offer a sustainable lifestyle, nestled in harmony
            with the environment.
          </p>
        </div>
        <div className="flex w-full gap-5 md:gap-0 flex-wrap justify-center items-center md:justify-between">
          <div className="flex items-center justify-center gap-5">
            <span>{images.Wallet("w-10 fill-[#308a7b] h-10")}</span>
            <div className="flex flex-col">
              <span className="text-[.9rem] font-bold">AED 4,362,888</span>
              <span className="font-light text-sm">Starting Price</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div className="flex flex-col">
              <span className="text-[.9rem] font-bold">Easy 60/40</span>
              <span className="font-light text-sm">Payment Plan</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <span className="w-10 h-10">{images.Home}</span>
            <div className="flex flex-col">
              <span className="text-[.9rem] font-bold">Q4 2025</span>
              <span className="font-light text-sm">Completion</span>
            </div>
          </div>
        </div>
        <div className="w-full mt-20 align-bottom md:mt-auto flex items-center justify-center">
          <div className="w-[80%] flex items-center justify-center gap-2 flex-col bg-black/90 rounded-lg relative pb-5">
            <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 animate-up-down">
              <Image
                src={images.HEROIMG}
                alt="hero section image"
                className="w-full h-auto"
              />
            </div>
            <span className="mt-10 text-white">
              One-click to download Price List and PDF brochure
            </span>
            <PhoneInput
              defaultCountry={"PK"}
              international
              placeholder="Enter phone number"
              className="p-3 !text-black border-none !outline-none"
              value={value}
              onChange={handleInputChange}
            />
            {error && <p className="text-red-500 mt-2">{error}</p>} {/* Error message */}
            <button
              onClick={handleSubmit}
              className="w-[63%] bg-red-500 text-white px-2 py-3 rounded-md"
            >
              Download a brochure
            </button>
            <span className="text-white">*Time to download - 2 seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
