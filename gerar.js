const form = document.querySelector("form");
const input = document.querySelector("input");
const result = document.querySelector("#result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  result.innerHTML = "Gerando imagem...";

  const prompt = input.value;

  const response = await fetch("/.netlify/functions/gerar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt })
  });

  const data = await response.json();

  if (data.image) {
    result.innerHTML = `<img src="${data.image}" style="max-width:100%; border-radius:12px;" />`;
  } else {
    result.innerHTML = "Erro ao gerar imagem.";
  }
});
