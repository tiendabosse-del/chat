export async function handler(event) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  try {
    const { prompt } = JSON.parse(event.body);

    const response = await fetch("https://api.openai.com/v1/images", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-image-1",
        prompt: prompt,
        size: "1024x1024"
      })
    });

    const data = await response.json();

    // 🔥 NOVO FORMATO
    const imageBase64 = data.data[0].b64_json;

    return {
      statusCode: 200,
      body: JSON.stringify({
        image: `data:image/png;base64,${imageBase64}`
      })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}
