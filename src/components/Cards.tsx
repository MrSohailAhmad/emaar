import React from "react";

const Cards = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="p-6 bg-white flex flex-col items-center shadow-lg hover:shadow-xl rounded-lg">
          <img
            src="/path-to-green-community-icon.svg"
            alt="Green Community"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-lg font-semibold text-blue-600">Green</h3>
          <p className="text-gray-600">Community</p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-white flex flex-col items-center shadow-lg hover:shadow-xl rounded-lg">
          <img
            src="/path-to-cctv-icon.svg"
            alt="24/7 CCTV"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-lg font-semibold text-blue-600">24/7</h3>
          <p className="text-gray-600">CCTV</p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white flex flex-col items-center shadow-lg hover:shadow-xl rounded-lg">
          <img
            src="/path-to-outdoor-pool-icon.svg"
            alt="Outdoor Pool"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-lg font-semibold text-blue-600">Outdoor</h3>
          <p className="text-gray-600">Pool</p>
        </div>

        {/* Card 4 */}
        <div className="p-6 bg-white flex flex-col items-center shadow-lg hover:shadow-xl rounded-lg">
          <img
            src="/path-to-kids-play-area-icon.svg"
            alt="Kids Play Area"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-lg font-semibold text-blue-600">Kids</h3>
          <p className="text-gray-600">Play Area</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
