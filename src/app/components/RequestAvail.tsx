"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";
import { images } from "../../../public/images";
import CustomModal from "./CustomModal";

const RequestAvail = ({ reqRef }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [userLocation, setUserLocation] = useState<any>({
    user_location: "",
    user_ip_address: "",
    user_number: "",
  });

  const fetchCountryCode = async () => {
    try {
      const data = await fetch("/api/location", { method: "GET" });

      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }

      const { response } = await data.json();
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
      const response = await fetch("/api/downloadburecher", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      console.error("Failed to post user data:", error);
    }
  };

  const handleDownloadBrochure = async () => {
    if (!value) {
      setError("Please Enter Phone Number");
      setLoading(false);
      return;
    }
    if (!isValidPhoneNumber(value)) {
      setError("Please enter a valid phone number.");
      setLoading(false);
      return;
    }
    setLoading(true);
    const { response } = await postUserData();

    if (!response) {
      setError("Please enter a valid phone number.");
      return;
    }
    if (response) {
      setLoading(false);
      const link = document.createElement("a");
      link.href = "/brochure/brochure.pdf";
      link.download = "brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Framer Motion variants for the image animation
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <div
      ref={reqRef}
      className="p-4 bg-white shadow-lg my-16 md:my-8 max-w-screen-xl mx-auto mt-20"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center mb-6 w-full">
        <div className="lg:mr-6 w-full lg:w-[10%]"></div>
        <h2 className="text-lg md:text-xl lg:text-3xl font-bold text-black mb-4 text-center lg:text-left">
          Avena The Valley Villas by EMAAR Dubai
        </h2>
        <div className="bg-black h-[6px] lg:w-[15%] w-full lg:ml-6"></div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-10">
        <motion.div
          className="w-full lg:w-[47%] h-full border-4 border-gray-300 rounded-lg shadow-xl"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          {images.Outdoor("")}
        </motion.div>
        <div className="w-full lg:w-[45%] mt-4 lg:mt-0">
          <p className="text-sm md:text-md lg:text-lg text-black mb-6 lg:text-left">
            A quaint new town where life finds its inspiration amidst the vast
            shimmering sands and lush green open spaces. Welcome to The Valley
            by Emaar Properties — the perfect place for you to empower your
            dreams and become the innovators and visionaries that will lead the
            future of the world...
          </p>

          <button
            className="bg-red-600 text-sm md:text-lg text-white w-full lg:w-auto px-6 py-3"
            onClick={openModal}
          >
            Request Available Units & Prices
          </button>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto p-4 my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 bg-white flex flex-col items-center shadow-lg hover:shadow-xl h-auto w-full">
            <span className="mb-4">
              {images.Tree("w-16 fill-[#6ba4c6] h-12")}
            </span>
            <h3 className="text-xl font-bold text-[#6ba4c6]">Green</h3>
            <p className="text-md text-gray-600">Community</p>
          </div>

          <div className="p-4 bg-white flex flex-col items-center shadow-lg hover:shadow-xl h-auto w-full">
            <span className="mb-4">
              {images.CCTV("w-16 fill-[#6ba4c6] h-12")}
            </span>
            <h3 className="text-xl font-bold text-[#6ba4c6]">24/7</h3>
            <p className="text-md text-gray-600">CCTV</p>
          </div>

          <div className="p-4 bg-white flex flex-col items-center shadow-lg hover:shadow-xl h-auto w-full">
            <span className="mb-4">
              {images.OutDoor("w-16 fill-[#6ba4c6] h-12")}
            </span>
            <h3 className="text-xl font-bold text-[#6ba4c6]">Outdoor</h3>
            <p className="text-md text-gray-600">Pool</p>
          </div>

          <div className="p-4 bg-white flex flex-col items-center shadow-lg hover:shadow-xl h-auto w-full">
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
