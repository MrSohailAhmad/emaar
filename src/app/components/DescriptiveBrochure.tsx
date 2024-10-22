"use client";
import React from "react";

const DescriptiveBrochure = () => {
  return (
    <div className="relative max-w-screen-xl mx-auto p-10 bg-[#4B504A] rounded-lg">
    <div className="text-white text-lg mb-8">
  <h2 className="text-2xl font-semibold text-center mb-6">Descriptive Brochure</h2>
  <div className="grid grid-cols-2 gap-4"> {/* Reduced gap from 8 to 4 */}
    <div className="flex flex-col space-y-2"> {/* Reduced space-y from 4 to 2 */}
      <div className="flex items-center">
        <span className="mr-2">—</span> Lifestyle
      </div>
      <div className="flex items-center">
        <span className="mr-2">—</span> Masterplan
      </div>
    </div>
    <div className="flex flex-col space-y-2"> {/* Reduced space-y from 4 to 2 */}
      <div className="flex items-center">
        <span className="mr-2">—</span> Gallery
      </div>
      <div className="flex items-center">
        <span className="mr-2">—</span> Floor plans
      </div>
    </div>
  </div>
</div>

{/* Image positioned at bottom left */}
<div className="relative flex flex-col md:flex-row items-start justify-between">
  {/* Left Side: Descriptive Brochure Image at bottom left corner */}
<div className="w-full md:w-1/2 mb-6 md:mb-0 relative"> {/* Added relative class for positioning */}
  <img
    src="/formimg.png"
    alt="Descriptive Brochure"
    className="rounded-md absolute bottom-0 left-0 w-24 h-24" // Set width and height for small size
  />
</div>

  {/* Right Side: Form */}
  <div className="w-full md:w-1/2 text-white p-6 md:p-10 rounded-lg">
    {/* Form Fields */}
    <form className="space-y-4 border border-white p-6 w-80 mx-auto bg-transparent">
      <h3 className="text-center text-white font-semibold text-lg mb-4">FILL IN THE FORM</h3>
      <div>
        <input
          type="text"
          className="w-full p-2.5 mt-1 border border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-white"
          placeholder="Your name"
        />
      </div>
      <div>
        <input
          type="email"
          className="w-full p-2.5 mt-1 border border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-white"
          placeholder="Your e-mail"
        />
      </div>
      <div className="flex">
        <span className="flex items-center px-2.5 border border-white text-white bg-transparent">
          +92
        </span>
        <input
          type="tel"
          className="w-full p-2.5 border-t border-b border-r border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-white"
          placeholder="Phone number"
        />
      </div>
      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="w-64 py-2 border border-white text-white font-semibold bg-transparent hover:bg-gray-500 transition duration-200"
        >
          SEND
        </button>
      </div>
    </form>
  </div>
</div>

    </div>
  );
};

export default DescriptiveBrochure;
