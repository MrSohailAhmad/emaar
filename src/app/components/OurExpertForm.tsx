"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "@/app/globals.css";
import { useEffect } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";

const OurExpertForm = () => {
  const [value, setValue] = useState("");
  const [countryCode, setCountryCode] = useState("AE"); // Default country code

  const [formSubmitted, setFormSubmitted] = useState<boolean>();
  const [error, setError] = useState(""); // State to handle validation error
  const [loading, setLoading] = useState<boolean>(false);
  const [state, setState] = useState({
    email: "",
    name: "",
    phone_number: "",
  });

  useEffect(() => {
    let timer: any;
    if (formSubmitted || error) {
      timer = setTimeout(() => {
        setFormSubmitted(false);
        setError(false);
      }, 5000);
    }
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [formSubmitted, error]);

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
    } catch (error) {
      console.error("Failed to fetch country code:", error);
    }
  };

  // Fetch country code when the component mounts
  useEffect(() => {
    fetchCountryCode();
  }, []); // Empty dependency array ensures it runs only once on mount

  const handleInputChange = async (newValue: any) => {
    // If the input is empty, keep the country code in the input
    if (newValue === "") {
      setValue(countryCode); // Reset value to country code
    } else {
      setValue(newValue);
      // setError(""); // Clear the error message when a valid input is provided
    }

    setState((prev) => ({ ...prev, phone_number: "+" + value }));
  };

  const postFormData = async () => {
    try {
      // if (!value) return;
      const response = await fetch("/api/requestcall", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Make sure to specify the content type
        },
        body: JSON.stringify({
          name: state.name,
          email: state.email,
          phone_number: state.phone_number,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate inputs
    if (!state.name || !state.email || !state.phone_number) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }
    if (!isValidPhoneNumber(state.phone_number)) {
      setError("Please enter a valid phone number.");
      setLoading(false);
      return;
    }

    try {
      const { response } = await postFormData();
      if (response) {
        setFormSubmitted(true);
      }
    } catch (error) {
      setError("Failed to submit form. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  console.log("state", state);

  return (
    <div className="bg-[#001d35] text-white p-10 flex flex-col md:flex-row justify-center items-center md:items-start max-w-screen-xl mx-auto py-20 mt-20">
      <div className="max-w-screen-xl w-full flex flex-col md:flex-row justify-center items-start mx-auto px-4">
        {/* Left Text */}
        <div className="md:w-[50%] flex items-center justify-center h-full">
          <span className="text-4xl md:text-5xl !leading-[4rem] font-bold text-center w-full md:text-left">
            OUR EXPERT <br className="hidden md:block" /> WILL HELP YOU{" "}
            <br className="hidden md:block" />
            <span className="text-[#1e71a0]">BUY THE BEST</span>
          </span>
        </div>

        {/* Form Section */}
        <form className="flex w-full md:w-[50%] flex-col gap-6 mt-10 md:mt-0">
          {/* Name Input */}
          <div className="flex flex-col w-full">
            <input
              onChange={(e: any) =>
                setState((prev) => ({ ...prev, name: e.target.value }))
              }
              type="text"
              placeholder="Your name"
              className="p-3 bg-transparent border-b-2 text-white outline-none border-b-[#fff]"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <input
              onChange={(e: any) =>
                setState((prev) => ({ ...prev, email: e.target.value }))
              }
              type="email"
              placeholder="Your e-mail"
              className="p-3 bg-transparent border-b-2 text-white outline-none border-b-[#fff]"
            />
          </div>

          {/* Phone Input */}
          <div className="flex flex-col w-full border-b-2 border-b-[#fff]">
            <div className="flex phoneitem items-center">
              <PhoneInput
                defaultCountry={countryCode}
                countryCodeEditable={false}
                initialValueFormat="international"
                international
                placeholder="Enter phone number"
                className="p-3 !text-black border-none !outline-none"
                value={value}
                onChange={handleInputChange}
                error={
                  value
                    ? isValidPhoneNumber(value)
                      ? undefined
                      : "Invalid phone number"
                    : "Phone number required"
                }
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="bg-white text-[#0a2a45] w-full md:w-[60%] p-4 font-bold uppercase hover:bg-gray-300 transition duration-300 mx-auto md:mx-0"
          >
            {loading ? "Form Submitting..." : "  Request a call back"}
          </button>
          {formSubmitted && (
            <span className="text-green-500">
              Your Form Submited Successfully
            </span>
          )}
          {error && <span className="text-red-600">{error}</span>}
        </form>
      </div>

      {/*  */}
    </div>
  );
};

export default OurExpertForm;
