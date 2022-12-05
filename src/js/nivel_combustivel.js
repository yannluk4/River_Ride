const diminuirCombust = () => {
  if (document.getElementById("queda").value <= 0) {
    document.location.reload();
  }
  document.getElementById("queda").value -= 3;
};

setInterval(() => {
  diminuirCombust();
}, 1000);