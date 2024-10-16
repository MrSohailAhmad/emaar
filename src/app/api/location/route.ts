// export default async function handlerLocation(req, res) {
//     try {
//       // If you want to fetch data from the API, uncomment the lines below:
//       // const response = await fetch("https://ipapi.co/json/");
//       // if (!response.ok) {
//       //   throw new Error(`Failed to fetch location data. Status: ${response.status}`);
//       // }
//       // const data = await response.json();
//       // console.log('data json', data);
  
//       // Example static data response
//       const data = { countryCode: 'US' };
  
//       // Send a JSON response with status 200
//       res.status(200).json(data);
//     } catch (error) {
//       // If there's an error, return a 500 status response with an error message
//       res.status(500).json({ message: "Error fetching location data" });
//     }
//   }
  



// // src/app/api/location/route.ts
// import { NextResponse } from 'next/server';

// export async function GET() {
//   try {
//     const data = { countryCode: 'US' }; // Example response
//     console.log('data', data);
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ message: 'Error fetching location data' }, { status: 500 });
//   }
// }

// src/app/api/location/route.ts
// src/app/api/location/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Call the IP API to get the country code
    const response = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=155b50fa9458498c9cfcda3fac325990');
    
    // Check if the response is OK
    if (!response.ok) {
      console.error(`Failed to fetch from IP API: ${response.status} ${response.statusText}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Fetched data:', data);

    // Return the country code from the response
    return NextResponse.json({ countryCode: data.calling_code });
  } catch (error) {
    console.error('Error fetching location data:', error);
    return NextResponse.json({ message: 'Error fetching location data', error: error.message }, { status: 500 });
  }
}

  

// app/api/location/route.js or route.ts
// export async function GET() {
//     try {
//         const response = await fetch("https://ipapi.co/8.8.8.8/json/");
        
//         if (!response.ok) {
//             console.error(`Error fetching from ipapi: ${response.status} ${response.statusText}`);
//             return new Response(JSON.stringify({ message: "Error fetching location data" }), {
//                 status: response.status, // Forward the original status code
//                 headers: { 'Content-Type': 'application/json' },
//             });
//         }
        
//         const data = await response.json();
//          console.log('json data', data);
//          return data
         
//         // Return the response with status 200
//         return new Response(JSON.stringify(data), {
//             status: 200,
//             headers: { 'Content-Type': 'application/json' },
//         });
//     } catch (error) {
//         console.error('Error fetching location data:', error);
        
//         // If there's an error, return a 500 status response
//         return new Response(JSON.stringify({ message: "Error fetching location data" }), {
//             status: 500,
//             headers: { 'Content-Type': 'application/json' },
//         });
//     }
// }
