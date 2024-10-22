import React from "react";
import { images } from "../../../public/images";

const AvailLocationMap = ({ availRef }: any) => {
  return (
    <div
      ref={availRef}
      className="flex flex-col items-center lg:gap-10 my-10 pt-6 p-4 max-w-screen-xl mx-auto shadow-lg mt-20"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center mb-6 w-full gap-8">
        {/* Left Spacer */}
        <div className="lg:mr-12 w-full lg:w-[10%]"></div>{" "}
        {/* Increased margin on the left */}
        <h2 className="text-1xl md:text-xl lg:text-3xl font-bold text-black mb-6 text-center lg:text-left">
          Avena The Valley Villas by EMAAR Dubai
        </h2>
        {/* Black Divider */}
        <div
          className="flex justify-center items-center"
          style={{
            width: "201px",
            height: "67px",
            backgroundColor: "#001d35",
          }}
        >
          <span className="text-white text-center text-4xl font-bold">
            Avena
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-10">
        {/* Left Section: Image */}
        {/* <div className="w-[47%] h-full imgshadow">{images.Outdoor}</div> */}
        <div className={`w-[47%] h-full imgshadow openAnimation`}>
          {images.Outdoor}
        </div>
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

          <div className="flex justify-center w-full">
            <button className="bg-[#ea1214] text-white w-[50%] px-6 py-3 lg:w-auto buttonHoverAnimation">
              Download Location Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailLocationMap;
