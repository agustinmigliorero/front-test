async function getPublications() {
  try {
    const response = await fetch("http://localhost:3002/", {
      cache: 'no-store', // Ensure fresh data on each request
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching publications:", error);
    throw error;
  }
}

async function createPublication(publication) {
  //console.log(publication);
  const response = await fetch("http://localhost:3002/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(publication),
  });
  const data = await response.json();
  return data;
}

export { getPublications, createPublication };