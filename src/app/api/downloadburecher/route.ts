// import { client } from "@/sanity/lib/client";

// export default async function handler(req: any, res: any) {
//   console.log("req", req);

//   console.log("body", req.body);

//   if (req.method === "POST") {
//     const { phoneNumber, ip, address } = req.body;

//     try {
//       const newPhoneNumber = await client.create({
//         _type: "user_number",
//         phoneNumber,
//         ip,
//         address,
//         submittedAt: new Date().toISOString(),
//       });

//       res.status(200).json({ success: true, data: newPhoneNumber });
//     } catch (error: any) {
//       res.status(500).json({ success: false, message: error.message });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }

// /app/api/downloadburecher/route.js or route.ts

// import { client } from "@/sanity/lib/client";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(request: object) {
  const { user_number, user_location, user_ip_address } = await request.json();
  try {
    const response = await client.create({
      _type: "user_number",
      user_number,
      user_ip_address,
      user_location,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      message: "Success",
      response: response,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error",
        error: error.message || "Something went wrong",
      },
      { status: 500 }
    );
  }
}

// const getSanityData = async () => {
//   return await client.fetch(`*[_type=="person"]`);
// };
