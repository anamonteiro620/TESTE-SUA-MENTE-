let jogadas = 0;
let perfil = "Indefinido";

function esconderMenu() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("voltar").style.display = "block";
}

function voltarMenu() {
  document.getElementById("menu").style.display = "flex";
  document.getElementById("jogo").innerHTML = "";
  document.getElementById("voltar").style.display = "none";
}

/* 🎡 ROLETA */
function abrirRoleta() {
  esconderMenu();
  document.getElementById("jogo").innerHTML = `
    <h2>🎡 Gire a roleta</h2>
    <div class="roleta-container">
      <div id="roleta" class="roleta"></div>
    </div>
    <button onclick="girarRoleta()">Girar</button>
  `;
}

function girarRoleta() {
  const roleta = document.getElementById("roleta");
  roleta.classList.remove("girando");
  void roleta.offsetWidth;
  roleta.classList.add("girando");

  setTimeout(() => {
    jogadas++;
    const ganhou = Math.random() > 0.5;
    document.getElementById("jogo").innerHTML += `
      <p>${ganhou ? "🎉 Você ganhou!" : "😬 Quase! Que tal tentar de novo?"}</p>
    `;
    perfil = ganhou ? "Persistente" : "Impulsivo";
  }, 3000);
}

/* 🎁 CAIXAS */
function abrirCaixas() {
  esconderMenu();
  document.getElementById("jogo").innerHTML = `
    <h2>🎁 Escolha um presente</h2>
    <button onclick="resultadoCaixa()">🎁 Caixa 1</button>
    <button onclick="resultadoCaixa()">🎁 Caixa 2</button>
    <button onclick="resultadoCaixa()">🎁 Caixa 3</button>
  `;
}

function resultadoCaixa() {
  jogadas++;
  const ganhou = Math.random() > 0.5;
  document.getElementById("jogo").innerHTML += `
    <p>${ganhou ? "💰 Você ganhou!" : "💸 Não foi dessa vez. Tente novamente!"}</p>
  `;
}

/* 🍒 CAÇA-NÍQUEL */
function abrirCacaNiquel() {
  esconderMenu();
  document.getElementById("jogo").innerHTML = `
    <h2>🍒 Caça-Níquel</h2>
    <div id="caca" class="caca">🍒 🍋 🍊</div>
    <button onclick="girarCaca()">Girar</button>
  `;
}

function girarCaca() {
  const frutas = ["🍒","🍋","🍊","⭐"];
  const a = frutas[Math.floor(Math.random()*4)];
  const b = frutas[Math.floor(Math.random()*4)];
  const c = frutas[Math.floor(Math.random()*4)];
  document.getElementById("caca").innerText = `${a} ${b} ${c}`;

  if (a === b && b === c) {
    perfil = "Impulsivo";
    document.getElementById("jogo").innerHTML += `<p>🎉 JACKPOT!</p>`;
  } else {
    document.getElementById("jogo").innerHTML += `<p>😢 Quase ganhou. Tente outra vez.</p>`;
  }
}

/* 📊 RESULTADOS */
function mostrarResultados() {
  esconderMenu();
  document.getElementById("jogo").innerHTML = `
    <h2>📊 Resultado Final</h2>
    <p><strong>Perfil:</strong> ${perfil}</p>
    <p>🧠 Para evitar vícios, estabeleça limites de tempo e dinheiro, evite jogar para recuperar perdas e procure apoio se sentir perda de controle.</p>
  `;
}













