import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Call the IP API to get the country code
    const response = await fetch(
      "https://api.ipgeolocation.io/ipgeo?apiKey=155b50fa9458498c9cfcda3fac325990"
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
  } catch (error: any) {
    console.error("Error fetching location data:", error);
    return NextResponse.json(
      { message: "Error fetching location data", error: error.message },
      { status: 500 }
    );
  }
}
