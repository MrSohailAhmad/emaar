import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    // Get the client's IP address
    const ip = req.ip || "8.8.8.8";

    // Call the IP API to get the country code using the client's IP
    const response = await fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=35ea2e531b1446919e1ddf00c175507f&ip=${ip}`
    );

    // Check if the response is OK
    if (!response.ok) {
      console.error(
        `Failed to fetch from IP API: ${response.status} ${response.statusText}`
      );
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched data:", data);

    // Return the country code from the response
    return NextResponse.json({
      message: "Success",
      response: data,
    });
  } catch (error) {
    console.error("Error fetching location data:", error);
    return NextResponse.json(
      { message: "Error fetching location data", error: error },
      { status: 500 }
    );
  }
}
