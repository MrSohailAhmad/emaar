"use client";

import React, { useState, useEffect } from "react";
import CustomModal from "./CustomModal";
import { images } from "../../../public/images";
import { isValidPhoneNumber } from "react-phone-number-input";

const RequestAvail = ({ reqRef }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(""); // State to handle validation error
  const [countryCode, setCountryCode] = useState("AE"); // Default country code
  const [value, setValue] = useState("");
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [userLocation, setUserLocation] = useState({
    user_location: "",
    user_ip_address: "",
    user_number: "",
  });

  const fetchCountryCode = async () => {
    try {
      const data = await fetch("/api/location", {
        method: "GET",
      });

      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }

      const { response } = await data.json();

      setCountryCode(response?.country_code2);
      setUserLocation({
        user_location: response?.country_capital || "",
        user_ip_address: response?.ip || "",
      });
    } catch (error) {
      console.error("Failed to fetch country code:", error);
    }
  };

  useEffect(() => {
    fetchCountryCode();
  }, []);

  const postUserData = async () => {
    try {
      // if (!value) return;
      const response = await fetch("/api/downloadburecher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Make sure to specify the content type
        },
        body: JSON.stringify({
          user_number: value,
          user_location: userLocation.user_location,
          user_ip_address: userLocation.user_ip_address,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch country code:", error);
    }
  };

  const handleDownloadBrochure = async () => {
    console.log("api called");
    if (!value) {
      setError("Please Enter Phone Number");
      setLoading(false);
      return;
    }
    console.log("api called", value);
    if (!isValidPhoneNumber(value)) {
      setError("Please enter a valid phone number.");
      setLoading(false);
      return;
    }
    setLoading(true);
    const { response } = await postUserData();

    if (!response) {
      // Check if the phone number is empty
      setError("Please enter a valid phone number.");
      return;
    }
    if (response) {
      setLoading(false);
      // Logic for downloading the PDF brochure
      // Create a temporary link element
      const link = document.createElement("a");

      // Set the URL to your PDF file located in the public folder
      link.href = "/brochure/brochure.pdf"; // Correct path in public folder
      link.download = "brochure.pdf"; // The name the file will have when downloaded

      // Programmatically click the link to trigger the download
      document.body.appendChild(link); // Append to body
      link.click(); // Trigger click
      document.body.removeChild(link); // Clean up
    }
  };

  return (
    <div
      ref={reqRef}
      className="p-8 bg-white shadow-lg my-32 md:my-16 lg:my-8 max-w-screen-xl mx-auto mt-20"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center mb-6 w-full">
        {/* Left Spacer */}
        <div className="lg:mr-12 w-full lg:w-[10%]"></div>{" "}
        {/* Increased margin on the left */}
        <h2 className="text-1xl md:text-xl lg:text-3xl font-bold text-black mb-6 text-center lg:text-left">
          Avena The Valley Villas by EMAAR Dubai
        </h2>
        {/* Black Divider */}
        <div className="bg-black h-[6px] lg:w-[15%] w-full lg:ml-6"></div>{" "}
        {/* Increased width and margin on the right */}
      </div>
      <div className="flex items-center flex-col lg:flex-row lg:my-0 my-10 justify-center gap-10">
        {/* Left Section: Image */}
        <div className={`lg:w-[47%] w-full h-full imgshadow openAnimation`}>
          {images.Outdoor("w-full h-ful")}
        </div>

        {/* Right Section: Text */}
        <div className="lg:w-[45%] flex flex-col items-center w-full">
          <p className="text-sm md:text-md lg:text-lg text-black mb-6 lg:text-left">
            A quaint new town where life finds its inspiration amidst the vast
            shimmering sands and lush green open spaces. Welcome to The Valley
            by Emaar Properties — the perfect place for you to empower your
            dreams and become the innovators and visionaries that will lead the
            future of the world. The Valley by Emaar is an oasis of luxury
            nestled in the heart of the UAE, offering serene landscapes,
            world-class amenities, and unparalleled sophistication. Experience
            the epitome of modern living amidst the charm of the desert, where
            innovation meets tradition in every corner. Discover a harmonious
            blend of urban convenience and natural beauty, where every day
            presents new opportunities for exploration and growth. Come, embark
            on a journey of endless possibilities at The Valley by Emaar.
          </p>

          <button
            className="bg-red-600 text-sm md:text-lg text-white w-[50%] px-6 py-3 lg:w-auto buttonAnimation"
            onClick={openModal}
          >
            Request Available Units & Prices
          </button>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto p-4 my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20">
          {/* Card 1 */}
          <div className="p-4 bg-white flex flex-col items-center shadow-lg hover:shadow-xl h-[150px] w-[200px]">
            <span className="mb-4">
              {images.Tree("w-16 fill-[#6ba4c6] h-12")}
            </span>
            <h3 className="text-xl font-bold text-[#6ba4c6]">Green</h3>
            <p className="text-md text-gray-600">Community</p>
          </div>

          {/* Card 2 */}
          <div className="p-4 bg-white flex flex-col items-center shadow-lg hover:shadow-xl h-[150px] w-[200px]">
            <span className="mb-4">
              {images.CCTV("w-16 fill-[#6ba4c6] h-12")}
            </span>
            <h3 className="text-xl font-bold text-[#6ba4c6]">24/7</h3>
            <p className="text-md text-gray-600">CCTV</p>
          </div>

          {/* Card 3 */}
          <div className="p-4 bg-white flex flex-col items-center shadow-lg hover:shadow-xl h-[150px] w-[200px]">
            <span className="mb-4">
              {images.OutDoor("w-16 fill-[#6ba4c6] h-12")}
            </span>
            <h3 className="text-xl font-bold text-[#6ba4c6]">Outdoor</h3>
            <p className="text-md text-gray-600">Pool</p>
          </div>

          {/* Card 4 */}
          <div className="p-4 bg-white flex flex-col items-center shadow-lg hover:shadow-xl h-[150px] w-[200px]">
            <span className="mb-4">
              {images.Teddy("w-16 fill-[#6ba4c6] h-12")}
            </span>
            <h3 className="text-xl font-bold text-[#6ba4c6]">Kids</h3>
            <p className="text-md text-gray-600">Play Area</p>
          </div>
        </div>
      </div>
      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="One-click to download Available Units and Price brochure"
        onSubmit={handleDownloadBrochure}
        value={value}
        setUserLocation={setUserLocation}
        setValue={setValue}
        loading={loading}
        error={error}
        setError={setError}
      />
    </div>
  );
};

export default RequestAvail;
