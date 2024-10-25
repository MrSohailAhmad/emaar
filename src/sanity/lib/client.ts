import { createClient } from "next-sanity";

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
// });
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-10-16",
  useCdn: false, // Set to false if you need fresh data
  token: process.env.SANITY_API_TOKEN, // Ensure this token has create permissions
});
