const espaconave = document.getElementById("espaconave");
let distancia = 45;

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == "37") {
    if (distancia < 90) distancia += 1;
    espaconave.style.right = `${distancia}%`;
  } else if (e.keyCode == "39") {
    if (distancia < 100 && distancia > 0) distancia -= 1;
    espaconave.style.right = `${distancia}%`;
  }
}