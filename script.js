window.onload = function () {
  // Textos
  document.getElementById("titulo").textContent = "Para uma pessoa muito especial ❤️";
  document.getElementById("btn1").textContent = "Mensagem Especial";
  document.getElementById("btn2").textContent = "Botão Surpresa";
  document.getElementById("btn3").textContent = "Botão Misterioso";

  // Texto do popup
  document.getElementById("mensagemPopup").textContent = 
    "Você é uma pessoa incrível, e este site é só uma pequena forma de te mostrar o quanto você é especial! 💖";

  // Funções dos botões
  document.getElementById("btn1").onclick = mostrarPopup;
  document.getElementById("btn2").onclick = button2;
  document.getElementById("btn3").onclick = button3;
};

function mostrarPopup() {
  document.getElementById("popup").style.display = "block";
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}

function button2() {
   // Duração total da chuva (em milissegundos)
  const duracao = 3000;

  // Começa a criar corações a cada 100ms
  const intervalo = setInterval(() => {
    criarCoracao();
  }, 100);

  // Para de criar corações após a duração definida
  setTimeout(() => {
    clearInterval(intervalo);
  }, duracao);

  // Texto digitado
  const texto = "Você é alguém muito especial 💖";
  let i = 0;

  const mensagem = document.getElementById("mensagemDigitada");
  mensagem.textContent = ""; // limpa antes de digitar

  function digitarTexto() {
    if (i < texto.length) {
      mensagem.textContent += texto.charAt(i);
      i++;
      setTimeout(digitarTexto, 100);
    }
  }

  digitarTexto();
}


function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.classList.add("coraçao");
  coracao.textContent = "💖";

  // Posição horizontal aleatória
  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.fontSize = Math.random() * 20 + 20 + "px";

  document.getElementById("chuvaCoracoes").appendChild(coracao);

  // Remover após a animação
  setTimeout(() => {
    coracao.remove();
  }, 3000);
}

function button3() {
  window.open("coracao.html", "_blank");
}

