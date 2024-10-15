import React from "react";
import { images } from "../../public/images";

const RequestAvail = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:gap-10 my-10 p-4 max-w-screen-xl mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 text-center lg:text-left">
        Avena The Valley Villas by EMAAR Dubai
      </h2>
      <div className="flex items-center justify-center gap-10">
        {/* Left Section: Image */}
        <div className="w-[50%] h-full imgshadow">{images.Outdoor}</div>

        {/* Right Section: Text */}
        <div className="w-[50%] ">
          <p className="text-sm md:text-md lg:text-lg text-black mb-6 text-center lg:text-left">
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

          <button className="bg-red-600 text-white w-[50%] px-6 py-3  lg:w-auto">

            Request Available Units & Prices
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestAvail;
