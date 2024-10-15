import React from "react";

const OurExpertForm = () => {
  return (
    <div className="bg-[#001d35] text-white p-10 flex justify-center items-start min-h-[400px] filter drop-shadow-md">
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-center items-start">
        {/* Left Text */}
        <div className="w-[50%] py-6"> {/* Added vertical padding */}
          <h2 className="text-4xl md:text-5xl font-bold leading-relaxed text-center md:text-left">
            OUR EXPERT
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold leading-relaxed text-center md:text-left my-4">
            WILL HELP YOU
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold leading-relaxed text-center md:text-left">
            <span className="text-[#1e71a0]">BUY THE BEST</span>
          </h2>
        </div>

        {/* Form Section */}
        <form className="flex w-[50%] flex-col gap-6">
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
              <span className="bg-transparent text-white p-2 rounded-md mr-3">
                +92
              </span>
              <input
                type="text"
                placeholder="Phone number"
                className="p-3 bg-transparent text-white outline-none"
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
