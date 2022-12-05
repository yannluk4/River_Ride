const jogo = document.getElementById("mapa");
const entradas = jogo.children;

const novoElemento = (tagName, className) => {
  const elemento = document.createElement(tagName);
  elemento.className = className;
  return elemento;
};

const gerarParede = entrada => {
  const Parede = novoElemento("div", `Parede ${entrada}`);
  for (let i = 0; i < 3; i++) {
    const parede = novoElemento("div", "parede");
    Parede.appendChild(parede);
  }
  return Parede;
};

const novoCaminho = entrada => {
  const caminho = novoElemento("div", "animacao");
  for (let i = 0; i < 8; i++) {
    const Parede = gerarParede(`${entrada}`);
    caminho.appendChild(Parede);
  }
  return caminho;
};

const removerUltimoCaminho = () => {
  setTimeout(() => {
    jogo.removeChild(jogo.lastChild);
  }, 10000);
};

const inserirNovoCaminho = async caminhoAtual => {
  const valor = jogo.insertBefore(caminhoAtual, entradas[0]);
  await new Promise(resolve => {
    setTimeout(() => {
      resolve(valor);
    }, 10000);
  });
};

const paraPassagemLivre = async () => {
  const caminhoAtual = novoCaminho("passagem-livre");
  await inserirNovoCaminho(caminhoAtual);
  removerUltimoCaminho();
  const possiveisCaminhos = [
    paraPassagemLivre,
    paraPassagemLivreMaior,
    paraPassagemZigZag,
    paraPassagemBifurcada,
  ];
  const index = Math.floor(Math.random() * possiveisCaminhos.length);
  const proximoCaminho = possiveisCaminhos[index];
  proximoCaminho();
};

const paraPassagemLivreMaior = async () => {
  const caminhoAtual = novoCaminho("passagem-livre-maior");
  await inserirNovoCaminho(caminhoAtual);
  removerUltimoCaminho();
  const possiveisCaminhos = [
    paraPassagemLivre,
    paraPassagemLivreMaior,
    paraPassagemZigZag,
    paraPassagemLivreDireita,
    paraPassagemLivreEsquerda,
    paraPassagemBifurcada,
  ];
  const index = Math.floor(Math.random() * possiveisCaminhos.length);
  const proximoCaminho = possiveisCaminhos[index];
  proximoCaminho();
};

const paraPassagemZigZag = async () => {
  const caminhoAtual = novoCaminho("passagem-zig-zag");
  await inserirNovoCaminho(caminhoAtual);
  removerUltimoCaminho();
  const possiveisCaminhos = [
    paraPassagemLivre,
    paraPassagemLivreMaior,
    paraPassagemZigZag,
    paraPassagemBifurcada,
  ];
  const proximoCaminho =
    possiveisCaminhos[Math.floor(Math.random() * possiveisCaminhos.length)];
  proximoCaminho();
};

const paraPassagemLivreDireita = async () => {
  const caminhoAtual = novoCaminho("passagem-livre-direita");
  await inserirNovoCaminho(caminhoAtual);
  removerUltimoCaminho();
  const possiveisCaminhos = [paraPassagemLivreMaior, paraPassagemLivreEsquerda];
  const proximoCaminho =
    possiveisCaminhos[Math.floor(Math.random() * possiveisCaminhos.length)];
  proximoCaminho();
};

const paraPassagemLivreEsquerda = async () => {
  const caminhoAtual = novoCaminho("passagem-livre-esquerda");
  await inserirNovoCaminho(caminhoAtual);
  removerUltimoCaminho();
  const possiveisCaminhos = [paraPassagemLivreMaior, paraPassagemLivreDireita];
  const proximoCaminho =
    possiveisCaminhos[Math.floor(Math.random() * possiveisCaminhos.length)];
  proximoCaminho();
};

const paraPassagemBifurcada = async () => {
  const caminhoAtual = novoCaminho("passagem-livre-esquerda-direita");
  await inserirNovoCaminho(caminhoAtual);
  removerUltimoCaminho();
  const possiveisCaminhos = [
    paraPassagemLivreMaior,
    paraPassagemLivreEsquerda,
    paraPassagemLivreDireita,
  ];
  const proximoCaminho =
    possiveisCaminhos[Math.floor(Math.random() * possiveisCaminhos.length)];
  proximoCaminho();
};

window.addEventListener("load", () => {
  paraPassagemLivreMaior();
});
