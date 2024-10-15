import { createClient } from "next-sanity";

const sanityClient = createClient({
  projectId: "your_project_id", // Replace with your project ID
  dataset: "production", // Replace with your dataset name
  apiVersion: "2023-10-15", // Use today's date for API version
  token: process.env.SANITY_API_TOKEN, // Add your Sanity token to .env.local
  useCdn: false, // `false` if you want to ensure fresh data
});

export default async function handler(req: any, res: any) {
  console.log("req", req);

  if (req.method === "POST") {
    const { phoneNumber } = req.body;

    try {
      const newPhoneNumber = await sanityClient.create({
        _type: "user_number",
        phoneNumber,
        submittedAt: new Date().toISOString(),
      });

      res.status(200).json({ success: true, data: newPhoneNumber });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

// const getSanityData = async () => {
//   return await client.fetch(`*[_type=="person"]`);
// };

export  async function handlerLocation(req, res) {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching location data" });
  }
}