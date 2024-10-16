"use client";

import React, { useState,useEffect } from "react";
import { images } from "../../public/images";
import CustomModal from "./CustomModal";

const RequestAvail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleDownloadBrochure = () => {
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
    closeModal();
  };
  const [countryCode, setCountryCode] = useState("+1"); // Default country code

 // src/components/requestAvail.tsx
useEffect(() => {
  const fetchCountryCode = async () => {
    try {
      const response = await fetch('/api/location', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // console.log('response====', data);

      setCountryCode(data.countryCode);
    } catch (error) {
      console.error('Failed to fetch country code:', error);
    }
  };

  fetchCountryCode();
}, []);



  return (
    <div className="flex flex-col items-center lg:gap-10 my-10 pt-6 p-4 max-w-screen-xl mx-auto shadow-lg mt-20">
      <div className="flex flex-col lg:flex-row items-center justify-center mb-6 w-full">
        {/* Left Spacer */}
        <div className="lg:mr-12 w-full lg:w-[10%]"></div> {/* Increased margin on the left */}

        <h2 className="text-1xl md:text-xl lg:text-3xl font-bold text-black mb-6 text-center lg:text-left">
          Avena The Valley Villas by EMAAR Dubai
        </h2>

        {/* Black Divider */}
        <div className="bg-black h-[6px] lg:w-[15%] w-full lg:ml-6"></div> {/* Increased width and margin on the right */}
      </div>
      <div className="flex items-center justify-center gap-10">
        {/* Left Section: Image */}
        <div className="w-[47%] h-full imgshadow">{images.Outdoor}</div>

        {/* Right Section: Text */}
        <div className="w-[45%] ">
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

          <button className="bg-red-600 text-white w-[50%] px-6 py-3  lg:w-auto"
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
            <span className="mb-4">{images.Tree("w-16 fill-[#6ba4c6] h-12")}</span>
            <h3 className="text-xl font-bold text-[#6ba4c6]">Green</h3>
            <p className="text-md text-gray-600">Community</p>
          </div>

          {/* Card 2 */}
          <div className="p-4 bg-white flex flex-col items-center shadow-lg hover:shadow-xl h-[150px] w-[200px]">
            <span className="mb-4">{images.CCTV("w-16 fill-[#6ba4c6] h-12")}</span>
            <h3 className="text-xl font-bold text-[#6ba4c6]">24/7</h3>
            <p className="text-md text-gray-600">CCTV</p>
          </div>

          {/* Card 3 */}
          <div className="p-4 bg-white flex flex-col items-center shadow-lg hover:shadow-xl h-[150px] w-[200px]">
            <span className="mb-4">{images.OutDoor("w-16 fill-[#6ba4c6] h-12")}</span>
            <h3 className="text-xl font-bold text-[#6ba4c6]">Outdoor</h3>
            <p className="text-md text-gray-600">Pool</p>
          </div>

          {/* Card 4 */}
          <div className="p-4 bg-white flex flex-col items-center shadow-lg hover:shadow-xl h-[150px] w-[200px]">
            <span className="mb-4">{images.Teddy("w-16 fill-[#6ba4c6] h-12")}</span>
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
        countryCode={countryCode}
      />
    </div>
  );
};

export default RequestAvail;
