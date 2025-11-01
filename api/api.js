async function getPublications() {
  const response = await fetch("http://localhost:3002/");
  const data = await response.json();
  return data;
}

async function createPublication(publication) {
  console.log(publication);
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