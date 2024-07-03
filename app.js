let fantasmito = document.getElementById("fantasmito");
let cherry = document.getElementById("cherry");
let divcontador = document.getElementById("contador");
let logoPacman = document.getElementById("logoPacman");
let gameover = document.getElementById("gameover");
gameover.style.display = "none";
cherry.style.display = "none";
let comer = 1;
let contador = 0;
let intervaloFantasmito;

intervaloFantasmito = setInterval(showFantasmito, 4000);

fantasmito.addEventListener("click", (e) => {
  comerPacman(e);
  contador += 100;
  divcontador.innerHTML = contador + " PTS";
  gameOver();
});

cherry.addEventListener("click", (e) => {
  comerCherry(e);
  contador += 500;
  divcontador.innerHTML = contador + " PTS";
  gameOver();
});


function gameOver() {
  if (contador >= 5000) {
    gameover.style.display = "block";
    fantasmito.style.display = "none";
    cherry.style.display = "none";
    logoPacman.style.display = "none";
    clearInterval(intervaloFantasmito);
  }
}

function comerPacman(event) {
  fantasmito.style.display = "none";
  comer++;

  logoPacman.style.left = event.clientX - logoPacman.offsetWidth / 2 + "px";
  logoPacman.style.top = event.clientY - logoPacman.offsetHeight / 2 + "px";
  if (comer % 4 !== 0) {

    intervaloFantasmito = setInterval(showFantasmito, 4000);
  } else {
    toggleItems();
  }
}

function comerCherry(event) {
  cherry.style.display = "none";
  comer++;
  logoPacman.style.left = event.clientX - logoPacman.offsetWidth / 2 + "px";
  logoPacman.style.top = event.clientY - logoPacman.offsetHeight / 2 + "px";
  toggleItems();
}

function showFantasmito() {
  let fantasmitoWidth = fantasmito.offsetWidth;
  let fantasmitoHeight = fantasmito.offsetHeight;


  let posX = Math.random() * (window.innerWidth - fantasmitoWidth);
  let posY = Math.random() * (window.innerHeight - fantasmitoHeight);


  fantasmito.style.left = posX + "px";
  fantasmito.style.top = posY + "px";

  fantasmito.style.display = "block";

  if (contador >= 100000) {
    fantasmito.style.display = "none";
  }
}

function showCherry() {
  cherry.style.display = "block";
  if (contador >= 5000) {
    cherry.style.display = "none";
  }
}

function toggleItems() {
  if (comer % 4 === 0) {
    setTimeout(showCherry, 4000);
    fantasmito.style.display = "none";
  } else {
    setTimeout(showFantasmito, 4000);
    cherry.style.display = "none";
  }
}
