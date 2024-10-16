import { client } from "@/sanity/lib/client";
import { createClient } from "next-sanity";

export default async function handler(req: any, res: any) {
  console.log("req", req);

  if (req.method === "POST") {
    const { phoneNumber, ip, address } = req.body;

    try {
      const newPhoneNumber = await client.create({
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
