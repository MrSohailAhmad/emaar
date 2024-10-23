// components/FloorPlan.js

import React from "react";
import Image from "next/image";

const FloorPlan = ({ floorRef }: any) => {
  return (
    <div
      ref={floorRef}
      className="p-8 bg-white shadow-lg my-32 md:my-16 lg:my-8 max-w-screen-xl mx-auto mt-20"
    >
      <h2 className="title">Floor Plans of Avena The Valley Villas</h2>
      <div className="content">
        <div className="left-panel">
          <div className="floor-plan-info">
            <h3>3-Bedroom Unit</h3>
            <p>Total Area: 2217 sqft</p>
          </div>
          <div className="actions">
            <button className="bg-red-600 text-white w-[50%] px-6 py-3 lg:w-auto buttonAnimation my-2">
              Get All Floor Plans.pdf
            </button>
            <button className="bg-red-600 text-white w-[50%] px-6 py-3 lg:w-auto buttonAnimation my-4">
              Download Brochure.pdf
            </button>
          </div>
        </div>
        <div className="right-panel">
          <div className="bedroom-selector">
            <button className="bedroom-button active">3 BR</button>
            <button className="bedroom-button">4 BR</button>
          </div>
          <div className="floor-plan-images">
            <div className="floor-plan-image">
              <Image
                src="/books.jpg"
                alt="Ground Level"
                width={500}
                height={300}
                className="image"
              />
              <p>Ground Level</p>
            </div>
            <div className="floor-plan-image">
              <Image
                src="/books.jpg"
                alt="First Level"
                width={500}
                height={300}
                className="image"
              />
              <p>First Level</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
