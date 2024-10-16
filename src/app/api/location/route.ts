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
  



// pages/api/location.js
export default async function handler(req, res) {
    if (req.method !== 'GET') {
      // Only allow GET requests
      return res.status(405).json({ message: "Method Not Allowed" });
    }
  
    try {
      const data = { countryCode: 'US' }; // Example response
      console.log('data', data);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Error fetching location data" });
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
