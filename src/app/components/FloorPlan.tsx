// components/FloorPlan.js

import Image from "next/image";
import { useEffect, useState } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";
import CustomModal from "./CustomModal";

const FloorPlan = ({ floorRef }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const [loading, setLoading] = useState<boolean>(false);
  const [loading2, setLoading2] = useState<boolean>(false);

  const [error, setError] = useState(""); // State to handle validation error
  const [error2, setError2] = useState(""); // State to handle validation error

  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  const openModal = () => setIsModalOpen(true);
  const openModal2 = () => setIsModalOpen2(true);

  const closeModal = () => setIsModalOpen(false);
  const closeModal2 = () => setIsModalOpen2(false);

  const [userLocation, setUserLocation] = useState<any>({
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
      // if (!value) return;
      const response = await fetch("/api/downloadburecher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Make sure to specify the content type
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
      // Check if the phone number is empty
      setError("Please enter a valid phone number.");
      return;
    }
    if (response) {
      setLoading(false);
      // Logic for downloading the PDF brochure
      // Create a temporary link element
      const link = document.createElement("a");

      // Set the URL to your PDF file located in the public folder
      link.href = "/brochure/plan.pdf"; // Correct path in public folder
      link.download = "plan.pdf"; // The name the file will have when downloaded

      // Programmatically click the link to trigger the download
      document.body.appendChild(link); // Append to body
      link.click(); // Trigger click
      document.body.removeChild(link); // Clean up
    }
  };
  const handleDownloadBrochure2 = async () => {
    console.log("api called");
    if (!value) {
      setError2("Please Enter Phone Number");
      setLoading2(false);
      return;
    }
    console.log("api called", value);
    if (!isValidPhoneNumber(value)) {
      setError2("Please enter a valid phone number.");
      setLoading2(false);
      return;
    }
    setLoading2(true);
    const { response } = await postUserData();

    if (!response) {
      // Check if the phone number is empty
      setError2("Please enter a valid phone number.");
      return;
    }
    if (response) {
      setLoading2(false);
      // Logic for downloading the PDF brochure
      // Create a temporary link element
      const link = document.createElement("a");

      // Set the URL to your PDF file located in the public folder
      link.href = "/brochure/floor-plan.pdf"; // Correct path in public folder
      link.download = "floor-plan.pdf"; // The name the file will have when downloaded

      // Programmatically click the link to trigger the download
      document.body.appendChild(link); // Append to body
      link.click(); // Trigger click
      document.body.removeChild(link); // Clean up
    }
  };
  return (
    <div
      ref={floorRef}
      className="p-8 bg-white shadow-lg my-32 md:my-16 lg:my-8 max-w-screen-xl mx-auto mt-20"
    >
      <h2 className="title !my-10">Floor Plans of Avena The Valley Villas</h2>
      <div className="flex items-start gap-10 flex-col md:flex-row">
        <div className="left-panel">
          <div className="floor-plan-info">
            <h3>3-Bedroom Unit</h3>
            <p>Total Area: 2217 sqft</p>
          </div>
          <div className="actions">
            <button
              onClick={openModal}
              className="bg-red-600 text-white !w-[20rem] px-6 py-3 lg:w-auto buttonAnimation my-2"
            >
              Get All Floor Plans.pdf
            </button>
            <button
              onClick={openModal2}
              className="bg-red-600 text-white  !w-[20rem] px-6 py-3 lg:w-auto buttonAnimation my-4"
            >
              Download Brochure.pdf
            </button>
          </div>
        </div>
        <div className="right-panel ">
          <div className="bedroom-selector !items-start">
            <button className="bedroom-button active">3 BR</button>
            <button className="bedroom-button">4 BR</button>
          </div>
          <div className="floor-plan-images">
            <div className="floor-plan-image">
              <Image
                src="/groud-level.jpg"
                alt="Ground"
                width={500}
                height={300}
                className="image"
              />
            </div>
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
      <CustomModal
        isOpen={isModalOpen2}
        onClose={closeModal2}
        title="One-click to download Available Units and Price brochure"
        onSubmit={handleDownloadBrochure2}
        value={value2}
        setUserLocation={setUserLocation}
        setValue={setValue2}
        loading={loading2}
        error={error2}
        setError={setError2}
      />
    </div>
  );
};

export default FloorPlan;
