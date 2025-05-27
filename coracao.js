window.onload = function () {
  iniciarChuva();
  animarTexto();
};

function iniciarChuva() {
  const duracao = 5000;
  const intervalo = setInterval(() => {
    criarCoracao();
  }, 100);

  setTimeout(() => {
    clearInterval(intervalo);
  }, duracao);
}

function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.classList.add("coraçao");
  coracao.textContent = "💖";
  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.fontSize = Math.random() * 20 + 20 + "px";
  document.getElementById("chuvaCoracoes").appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 3000);
}

function animarTexto() {
  const texto = "Você é alguém muito especial 💖";
  const alvo = document.getElementById("mensagemDigitada");
  let i = 0;
  alvo.textContent = "";

  function digitar() {
    if (i < texto.length) {
      alvo.textContent += texto.charAt(i);
      i++;
      setTimeout(digitar, 100);
    }
  }

  digitar();
}

function explodirCoracao() {
  const quantidade = 30; 
  const coracaoGigante = document.getElementById("coraçaoGigante");
  const rect = coracaoGigante.getBoundingClientRect();

  // Coordenadas do centro do coração gigante na tela
  const centroX = rect.left + rect.width / 2;
  const centroY = rect.top + rect.height / 2;

  for (let i = 0; i < quantidade; i++) {
    const coracao = document.createElement("div");
    coracao.classList.add("coraçaoExplosao");
    coracao.textContent = "💖";

    // posição inicial exata do centro do coração gigante
    coracao.style.left = `${centroX}px`;
    coracao.style.top = `${centroY}px`;

    // movimento aleatório (ângulo e distância)
    const angulo = Math.random() * 2 * Math.PI;
    const distancia = Math.random() * 200;

    const x = Math.cos(angulo) * distancia;
    const y = Math.sin(angulo) * distancia;

    coracao.style.setProperty("--x", `${x}px`);
    coracao.style.setProperty("--y", `${y}px`);

    document.body.appendChild(coracao);

    setTimeout(() => {
      coracao.remove();
    }, 1000);
  }
}

