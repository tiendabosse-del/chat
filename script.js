
async function gerarImagem() {
  const prompt = document.getElementById("prompt").value;
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "Gerando imagem...";

  const response = await fetch("/.netlify/functions/gerar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });

  const data = await response.json();

  if (data.error) {
    resultado.innerHTML = "Erro: " + data.error;
    return;
  }

  resultado.innerHTML = `<img src="${data.image}" />`;
}
