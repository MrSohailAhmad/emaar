"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { images } from "../../../public/images";
import { isValidPhoneNumber } from "react-phone-number-input";

const HeroSection = ({ heroRef }: any) => {
  const [value, setValue] = useState("");
  const [countryCode, setCountryCode] = useState("AE"); // Default country code
  const [userLocation, setUserLocation] = useState({
    user_location: "",
    user_ip_address: "",
    user_number: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(""); // State to handle validation error

  // Fetch country code using the GET API
  const fetchCountryCode = async () => {
    try {
      const response = await fetch("/api/location");

      // Check if the response is OK
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched location data:", data);

      // Set the country code using the response data
      setCountryCode(data.response.country_code2 || "AE");
      setValue(data.response.calling_code || "+1");
      setUserLocation({
        user_location: data?.response?.country_capital || "",
        user_ip_address: data?.response?.ip || "",
      });
    } catch (error) {
      console.error("Failed to fetch country code:", error);
    }
  };

  // Fetch country code when the component mounts
  useEffect(() => {
    fetchCountryCode();
  }, []); // Empty dependency array ensures it runs only once on mount

  const postUserData = async () => {
    try {
      // if (!value) return;
      const response = await fetch("/api/downloadburecher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Make sure to specify the content type
        },
        body: JSON.stringify({
          user_number: userLocation.user_number,
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

  useEffect(() => {
    let timer: any;
    if (error) {
      timer = setTimeout(() => {
        setError(false);
      }, 5000);
    }
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [error]);

  const handleSubmit = async () => {
    if (!userLocation.user_number) {
      setError("Please Enter Phone Number");
      setLoading(false);
      return;
    }

    if (!isValidPhoneNumber(userLocation.user_number)) {
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

  const handleInputChange = (newValue: any) => {
    // If the input is empty, keep the country code in the input
    // Validate inputs

    if (newValue === "") {
      setValue(countryCode); // Reset value to country code
    } else {
      setValue(newValue);
      setError(""); // Clear the error message when a valid input is provided
    }
    setUserLocation((prev) => ({ ...prev, user_number: "+" + value }));
  };

  return (
    <div
      ref={heroRef}
      className="mx-auto w-full flex h-auto lg:h-[70vh] gap-10 items-center flex-col lg:flex-row justify-center max-w-screen-xl m-4 my-16"
    >
      <div
        className="w-[90%] lg:w-[50%] h-full"
        style={{
          animation: "waveUp 2s ease-in-out forwards",
        }}
      >
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
              autoFormat
              defaultCountry={countryCode}
              countryCodeEditable={false}
              international
              placeholder="Enter phone number"
              className="p-3 !text-black border-none !outline-none"
              value={value}
              onChange={handleInputChange}
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}{" "}
            {/* Error message */}
            <button
              onClick={handleSubmit}
              className="w-[63%] bg-red-500 text-white px-2 py-3 rounded-md buttonAnimation"
            >
              {loading ? "Downloading..." : "Download a brochure"}
            </button>
            <span className="text-white">*Time to download - 2 seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
