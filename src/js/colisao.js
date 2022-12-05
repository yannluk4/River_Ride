setInterval(() => {
    colisaoCombustivel();
    colisaoCoins();
    colisaoParede();
  }, 100);
  
  const paredes = document.getElementsByClassName("parede");
  const coins = document.getElementsByClassName("coin");
  const combust = document.getElementsByClassName("combt");
  let pontos = 0;
  let queda = 0;
  
  const colisaoParede = () => {
    for (const parede of paredes) {
      if (
        parede.getBoundingClientRect().width !== 0 &&
        parede.getBoundingClientRect().left < espaconave.getBoundingClientRect().right &&
        parede.getBoundingClientRect().right > espaconave.getBoundingClientRect().left &&
        parede.getBoundingClientRect().top < espaconave.getBoundingClientRect().bottom &&
        parede.getBoundingClientRect().bottom > espaconave.getBoundingClientRect().top
      ) {
        document.location.reload();
      }
    }
  };
  
  const colisaoCoins = () => {
    for (const coin of coins) {
      if (
        coin.getBoundingClientRect().left < espaconave.getBoundingClientRect().right &&
        coin.getBoundingClientRect().right > espaconave.getBoundingClientRect().left &&
        coin.getBoundingClientRect().top < espaconave.getBoundingClientRect().bottom &&
        coin.getBoundingClientRect().bottom > espaconave.getBoundingClientRect().top
      ) {
        pontos++;
        document.getElementById("progresso-de-pontos").innerHTML = pontos*10;
        coin.parentNode.removeChild(coin);
      }
    }
  };
  
  
  const colisaoCombustivel = () => {
    for (const combt of combust) {
      if (
        combt.getBoundingClientRect().left < espaconave.getBoundingClientRect().right &&
          combt.getBoundingClientRect().right > espaconave.getBoundingClientRect().left &&
          combt.getBoundingClientRect().top < espaconave.getBoundingClientRect().bottom &&
          combt.getBoundingClientRect().bottom > espaconave.getBoundingClientRect().top
      ) {
        if (document.getElementById("queda").value <= 100) {
          document.getElementById("queda").value += 50;
        }
        queda++;
        combt.parentNode.removeChild(combt);
      }
    }
  };