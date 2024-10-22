"use client";
import React, { useEffect, useState } from "react";
import { images } from "../../../public/images";
import PhoneInput from "react-phone-input-2";
import { isValidPhoneNumber } from "react-phone-number-input";

const DescriptiveBrochure = ({ desRef }: any) => {
  const [value, setValue] = useState("");
  const [countryCode, setCountryCode] = useState("AE"); // Default country code

  const [formSubmitted, setFormSubmitted] = useState<boolean>();
  const [error, setError] = useState<boolean | string>(""); // State to handle validation error
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
        setValue("");
        setState({
          email: "",
          name: "",
          phone_number: "",
        });
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
      // console.log("Fetched location data:", data);

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

  const handleSubmit = async (e: any) => {
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

  return (
    <div
      ref={desRef}
      className="relative max-w-screen-xl mx-auto p-10 bg-[#4B504A] rounded-lg overflow-hidden"
    >
      <div className="-bottom-[25rem] !-left-[15rem] rotate-6 absolute ">
        {images.FormImg("w-full h-full")}
      </div>
      <div className="text-white ml-[10%] text-lg mb-8">
        <h2 className="text-2xl font-bold text-start mb-6">
          Descriptive Brochure
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {" "}
          {/* Reduced gap from 8 to 4 */}
          <div className="flex flex-col  space-y-2">
            {" "}
            {/* Reduced space-y from 4 to 2 */}
            <div className="flex items-start justify-start gap-10 w-[20rem] ">
              <div>
                <span className="font-light">
                  {" "}
                  <span className="mr-2">—</span> Lifestyle
                </span>
                <span className="font-light">
                  {" "}
                  <span className="mr-2">—</span> Gallery
                </span>
              </div>
              <div>
                <span className="font-light">
                  {" "}
                  <span className="mr-2">—</span> Masterplan
                </span>
                <span className="font-light">
                  {"+92 "}
                  <span className="mr-2">—</span> Floor plans
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image positioned at bottom left */}
      <div className=" flex flex-col items-start justify-between">
        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 ml-auto text-white p-6 md:p-10 rounded-lg">
          {/* Form Fields */}
          <form className="space-y-4 border border-white p-6 w-80 mx-auto bg-transparent">
            <h3 className="text-center text-white font-semibold text-lg mb-4">
              FILL IN THE FORM
            </h3>
            <div>
              <input
                value={state.name}
                onChange={(e: any) =>
                  setState((prev) => ({ ...prev, name: e.target.value }))
                }
                type="text"
                className="w-full p-2.5 mt-1 border border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <input
                value={state.email}
                onChange={(e: any) =>
                  setState((prev) => ({ ...prev, email: e.target.value }))
                }
                type="email"
                className="w-full p-2.5 mt-1 border border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-white"
                placeholder="Your e-mail"
              />
            </div>
            <div className="flex desInput">
              <PhoneInput
                autoFormat
                defaultCountry={countryCode}
                countryCodeEditable={false}
                international
                placeholder="Enter phone number"
                className="!p-3 !text-black border-none !w-full !bg-none !outline-none"
                value={value}
                onChange={handleInputChange}
              />
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}{" "}
            {formSubmitted && (
              <p className="text-green-500 mt-2">
                Form Data Submit Successfully
              </p>
            )}
            <div className="flex justify-center mt-4">
              <button
                onClick={handleSubmit}
                className="w-64 py-2 border border-white text-white font-semibold bg-transparent hover:bg-gray-500 transition duration-200"
              >
                {loading ? "Submiting..." : "SEND"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DescriptiveBrochure;
