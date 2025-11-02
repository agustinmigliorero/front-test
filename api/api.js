// API functions commented out to avoid build-time fetch errors
// Will be restored once API is configured for production

// async function getPublications() {
//   try {
//     const response = await fetch("http://localhost:3002/", {
//       cache: 'no-store',
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching publications:", error);
//     throw error;
//   }
// }

// async function createPublication(publication) {
//   const response = await fetch("http://localhost:3002/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(publication),
//   });
//   const data = await response.json();
//   return data;
// }

// Export stubs to avoid import errors
export function getPublications() {
  return Promise.resolve([]);
}

export function createPublication() {
  return Promise.resolve({ success: false, error: "API not configured" });
}