import React from "react";
import { images } from "../../public/images";

const Cards = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
  );
};

export default Cards;
