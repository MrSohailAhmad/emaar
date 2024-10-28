"use client"; // Ensure this is included for client-side rendering

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";
// import required modules
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { images } from "../../../public/images";

const ImageGallery = ({ imgRef }) => {
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
    <div
      ref={imgRef}
      className="p-8  flex-col items-center justify-center bg-white shadow-lg my-10 md:my-16 lg:my-8 max-w-screen-xl mx-auto  lg:mt-20"
    >
      <div>
        <h1 className="font-extrabold text-4xl text-center lg:text-start lg:ml-20">
          GALLERY
        </h1>
      </div>
      <div className="md:my-10 my-5">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={100}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper !h-full !justify-center !items-center"
        >
          {galleryImages.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="!flex items-center justify-center !w-full !md:w-[60%]  overflow-auto"
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
