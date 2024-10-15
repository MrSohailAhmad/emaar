import React from "react";
import { images } from "../../public/images";

const Cards = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="p-6 bg-white flex flex-col items-center shadow-lg hover:shadow-xl rounded-lg">
          <span>{images.Tree(" w-16 fill-[#6ba4c6] h-16")}</span>
          <h3 className="text-lg font-semibold text-[#6ba4c6]">Green</h3>
          <p className="text-gray-600">Community</p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-white flex flex-col items-center shadow-lg hover:shadow-xl rounded-lg">
          <span>{images.CCTV("w-16 fill-[#6ba4c6] h-16")}</span>
          <h3 className="text-lg font-semibold text-[#6ba4c6]">24/7</h3>
          <p className="text-gray-600">CCTV</p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white flex flex-col items-center shadow-lg hover:shadow-xl rounded-lg">
          <span>{images.OutDoor("w-16 fill-[#6ba4c6] h-16")}</span>
          <h3 className="text-lg font-semibold text-[#6ba4c6]">Outdoor</h3>
          <p className="text-gray-600">Pool</p>
        </div>

        {/* Card 4 */}
        <div className="p-6 bg-white flex flex-col items-center shadow-lg hover:shadow-xl rounded-lg">
          <span>{images.Teddy("w-16 fill-[#6ba4c6] h-16")}</span>
          <h3 className="text-lg font-semibold text-[#6ba4c6]">Kids</h3>
          <p className="text-gray-600">Play Area</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
