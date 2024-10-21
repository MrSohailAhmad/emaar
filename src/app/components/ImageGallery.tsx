"use client"; // Ensure this is included for client-side rendering

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";
// import required modules
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { images } from "../../../public/images";

const ImageGallery: React.FC = () => {
  const galleryImages = [
    images.GalleryImg1("!w-full !h-full"),
    images.GalleryImg1("!w-full !h-full"),
    images.GalleryImg1("!w-full !h-full"),
    images.GalleryImg1("!w-full !h-full"),
    images.GalleryImg1("!w-full !h-full"),
    images.GalleryImg1("!w-full !h-full"),
    images.GalleryImg1("!w-full !h-full"),
    images.GalleryImg1("!w-full !h-full"),
    images.GalleryImg1("!w-full !h-full"),
    images.GalleryImg1("!w-full !h-full"),
    images.GalleryImg1("!w-full !h-full"),
    // images.GalleryImg2("!w-full !h-full"),
    // images.GalleryImg3("!w-full !h-full"),
    // images.GalleryImg4("!w-full !h-full"),
    // images.GalleryImg5("!w-full !h-full"),
    // images.GalleryImg6("!w-full !h-full"),
  ];

  return (
    <div className="p-8  bg-white shadow-lg my-32 md:my-16 lg:my-8 max-w-screen-3xl mx-auto mt-20">
      <div>
        <h1 className="font-extrabold text-6xl">GALLERY</h1>
      </div>
      <div className="my-10">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={100}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {galleryImages.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="!flex items-center justify-center overflow-auto"
            >
              {item}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageGallery;
