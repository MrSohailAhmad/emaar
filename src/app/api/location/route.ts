import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    // Get the client's IP address
    const ip = req.headers.get("x-forwarded-for") || req.ip || "8.8.8.8"; // Fallback to a known IP for testing

    // Call the IP API to get the country code using the client's IP
    const response = await fetch(
      `    https://api.ipgeolocation.io/ipgeo?apiKey=155b50fa9458498c9cfcda3fac325990&ip=${ip}`
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
