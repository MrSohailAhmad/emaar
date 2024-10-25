// import React, { useState, useEffect } from "react";
// import { images } from "../../../public/images";
// import { isValidPhoneNumber } from "react-phone-number-input";
// import CustomModal from "./CustomModal";
// import { motion } from "framer-motion";

// const AvailLocationMap = ({ availRef }: any) => {

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState(""); // State to handle validation error
//   const [countryCode, setCountryCode] = useState("AE"); // Default country code
//   const [value, setValue] = useState("");

//   const [userLocation, setUserLocation] = useState({
//     user_location: "",
//     user_ip_address: "",
//     user_number: "",
//   });

//   const fetchCountryCode = async () => {
//     try {
//       const data = await fetch("/api/location", {
//         method: "GET",
//       });

//       if (!data.ok) {
//         throw new Error(`HTTP error! status: ${data.status}`);
//       }

//       const { response } = await data.json();

//       setCountryCode(response?.country_code2);
//       setUserLocation({
//         user_location: response?.country_capital || "",
//         user_ip_address: response?.ip || "",
//       });
//     } catch (error) {
//       console.error("Failed to fetch country code:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCountryCode();
//   }, []);

//   const postUserData = async () => {
//     try {
//       // if (!value) return;
//       const response = await fetch("/api/downloadburecher", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json", // Make sure to specify the content type
//         },
//         body: JSON.stringify({
//           user_number: value,
//           user_location: userLocation.user_location,
//           user_ip_address: userLocation.user_ip_address,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error("Failed to fetch country code:", error);
//     }
//   };

//   const handleDownloadBrochure = async () => {
//     console.log("api called");
//     if (!value) {
//       setError("Please Enter Phone Number");
//       setLoading(false);
//       return;
//     }
//     console.log("api called", value);
//     if (!isValidPhoneNumber(value)) {
//       setError("Please enter a valid phone number.");
//       setLoading(false);
//       return;
//     }
//     setLoading(true);
//     const { response } = await postUserData();

//     if (!response) {
//       // Check if the phone number is empty
//       setError("Please enter a valid phone number.");
//       return;
//     }
//     if (response) {
//       setLoading(false);
//       // Logic for downloading the PDF brochure
//       // Create a temporary link element
//       const link = document.createElement("a");

//       // Set the URL to your PDF file located in the public folder
//       link.href = "/brochure/map-brochure.pdf"; // Correct path in public folder
//       link.download = "brochure.pdf"; // The name the file will have when downloaded

//       // Programmatically click the link to trigger the download
//       document.body.appendChild(link); // Append to body
//       link.click(); // Trigger click
//       document.body.removeChild(link); // Clean up
//     }
//   };

//     // Framer Motion variants for the image animation
//     const imageVariants = {
//       hidden: { opacity: 0, scale: 0.8 },
//       visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
//       hover: { scale: 1.1, transition: { duration: 0.3 } },
//     };
//   return (
//     <div
//       ref={availRef}
//       className="flex flex-col items-center lg:gap-10 my-10 pt-6 p-4 max-w-screen-xl mx-auto shadow-lg mt-20"
//     >
//       <div className="flex flex-col lg:flex-row items-center justify-center mb-6 w-full gap-8">
//         {/* Left Spacer */}
//         <div className="lg:mr-12 w-full lg:w-[10%]"></div>{" "}
//         {/* Increased margin on the left */}
//         <h2 className="text-1xl md:text-xl lg:text-3xl font-bold text-black mb-6 text-center lg:text-left">
//           Avena The Valley Villas by EMAAR Dubai
//         </h2>
//         {/* Black Divider */}
//         <div
//           className="flex justify-center items-center"
//           style={{
//             width: "201px",
//             height: "67px",
//             backgroundColor: "#001d35",
//           }}
//         >
//           <span className="text-white text-center text-4xl font-bold">
//             Avena
//           </span>
//         </div>
//       </div>
//       <div className="flex items-center justify-center gap-10">
//         {/* Left Section: Image */}
//         {/* <div className="w-[47%] h-full imgshadow">{images.Outdoor}</div> */}
//         <motion.div
//           className="w-[47%] h-full border-4 border-gray-300 rounded-lg shadow-xl"
//           variants={imageVariants}
//           initial="hidden"
//           animate="visible"
//           whileHover="hover"
//         >
//           {images.Outdoor("")}
//         </motion.div>
//         {/* Right Section: Text */}
//         <div className="w-[45%] ">
//           <p className="text-sm md:text-md lg:text-lg text-black mb-6 lg:text-left">
//             A quaint new town where life finds its inspiration amidst the vast
//             shimmering sands and lush green open spaces. Welcome to The Valley
//             by Emaar Properties — the perfect place for you to empower your
//             dreams and become the innovators and visionaries that will lead the
//             future of the world. The Valley by Emaar is an oasis of luxury
//             nestled in the heart of the UAE, offering serene landscapes,
//             world-class amenities, and unparalleled sophistication. Experience
//             the epitome of modern living amidst the charm of the desert, where
//             innovation meets tradition in every corner. Discover a harmonious
//             blend of urban convenience and natural beauty, where every day
//             presents new opportunities for exploration and growth. Come, embark
//             on a journey of endless possibilities at The Valley by Emaar.
//           </p>

//           <div className="flex justify-center w-full">
//             <button
//               onClick={openModal}
//               className="bg-[#ea1214] text-white w-[50%] px-6 py-3 lg:w-auto buttonHoverAnimation">
//               Download Location Map
//             </button>
//           </div>
//         </div>
//       </div>
//       <CustomModal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         title="One-click to download Available Units and Price brochure"
//         onSubmit={handleDownloadBrochure}
//         value={value}
//         setUserLocation={setUserLocation}
//         setValue={setValue}
//         loading={loading}
//         error={error}
//         setError={setError}
//       />
//     </div>
//   );
// };

// export default AvailLocationMap;
//===//
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";
import { images } from "../../../public/images";
import CustomModal from "./CustomModal";

const AvailLocationMap = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(""); // State to handle validation error
  const [value, setValue] = useState("");

  const [userLocation, setUserLocation] = useState({
    user_location: "",
    user_ip_address: "",
    user_number: "",
  });

  const fetchCountryCode = async () => {
    try {
      const data = await fetch("/api/location", {
        method: "GET",
      });

      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }

      const { response } = await data.json();

      // setCountryCode(response?.country_code2);
      setUserLocation({
        user_location: response?.country_capital || "",
        user_ip_address: response?.ip || "",
      });
    } catch (error) {
      console.error("Failed to fetch country code:", error);
    }
  };

  useEffect(() => {
    fetchCountryCode();
  }, []);

  const postUserData = async () => {
    try {
      const response = await fetch("/api/downloadburecher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_number: value,
          user_location: userLocation.user_location,
          user_ip_address: userLocation.user_ip_address,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch country code:", error);
    }
  };

  const handleDownloadBrochure = async () => {
    console.log("api called");
    if (!value) {
      setError("Please Enter Phone Number");
      setLoading(false);
      return;
    }
    console.log("api called", value);
    if (!isValidPhoneNumber(value)) {
      setError("Please enter a valid phone number.");
      setLoading(false);
      return;
    }
    setLoading(true);
    const { response } = await postUserData();

    if (!response) {
      setError("Please enter a valid phone number.");
      return;
    }
    if (response) {
      setLoading(false);
      // Logic for downloading the PDF brochure
      const link = document.createElement("a");
      link.href = "/brochure/map-brochure.pdf";
      link.download = "brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Framer Motion variants for the image animation
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex flex-col items-center lg:gap-10 my-10 pt-6 p-4 max-w-screen-xl mx-auto shadow-lg mt-20">
      <div className="flex flex-col lg:flex-row items-center justify-center mb-6 w-full gap-8">
        {/* Left Spacer */}
        <div className="lg:mr-12 w-full lg:w-[10%]"></div>
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
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
        {/* Left Section: Image */}
        <motion.div
          className="w-full lg:w-[47%] h-auto border-4 border-gray-300 rounded-lg shadow-xl"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          {images.Outdoor("")}
        </motion.div>
        {/* Right Section: Text */}
        <div className="w-full lg:w-[45%] flex flex-col">
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
            <button
              onClick={openModal}
              className="bg-[#ea1214] text-white w-full lg:w-auto px-6 py-3 buttonHoverAnimation"
            >
              Download Location Map
            </button>
          </div>
        </div>
      </div>
      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="One-click to download Available Units and Price brochure"
        onSubmit={handleDownloadBrochure}
        value={value}
        setUserLocation={setUserLocation}
        setValue={setValue}
        loading={loading}
        error={error}
        setError={setError}
      />
    </div>
  );
};

export default AvailLocationMap;
