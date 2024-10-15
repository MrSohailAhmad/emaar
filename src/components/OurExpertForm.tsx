"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input/input";
import "react-phone-number-input/style.css";

const OurExpertForm = () => {
  const [value, setValue] = useState();

  return (

    <div className="bg-[#001d35] text-white p-10 flex flex-col md:flex-row justify-center items-center md:items-start min-h-[400px] py-32">
      <div className="md:max-w-7xl !w-full flex flex-col md:flex-row justify-center items-start ">
        {/* Left Text */}
        <div className="md:w-[50%] flex items-center justify-center h-full">
          <span className="text-4xl md:text-5xl !leading-[4rem] font-bold text-center w-full md:text-left">
            OUR EXPERT <br className="hidden md:block" /> WILL HELP YOU{" "}
            <br className="hidden md:block" />

            <span className="text-[#1e71a0]">BUY THE BEST</span>
          </span>
        </div>

        {/* Form Section */}

        <form className="flex w-full md:w-[50%] flex-col gap-6 ">

          {/* Name Input */}
          <div className="flex flex-col w-full">
            <input
              type="text"
              placeholder="Your name"
              className="p-3 bg-transparent border-b-2 text-white outline-none border-b-[#fff]"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Your e-mail"
              className="p-3 bg-transparent border-b-2 text-white outline-none border-b-[#fff]"
            />
          </div>

          {/* Phone Input */}
          <div className="flex flex-col w-full border-b-2 border-b-[#fff]">
            <div className="flex items-center">

              <PhoneInput
                defaultCountry="AE"
                placeholder="Enter phone number"
                className="p-3  bg-transparent  text-white  outline-none  "
                value={value}
                onChange={setValue}

              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-white text-[#0a2a45] w-[60%] p-4 font-bold uppercase hover:bg-gray-300 transition duration-300"
          >
            Request a call back
          </button>
        </form>
      </div>
    </div>
  );
};

export default OurExpertForm;
