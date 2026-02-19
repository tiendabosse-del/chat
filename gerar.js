export async function handler(event) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      image: "https://picsum.photos/500"
    })
  };
}
