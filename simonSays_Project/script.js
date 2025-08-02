let gameSeq = [];
let userSeq = [];

let btns = ["color1", "color2", "color3", "color4"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game shtartedd");
  }
  started = true;

  levelUp();
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

function levelUp() {
  level++;
  h2.innerText = `Level: ${level}`;

  let randIndex = Math.floor(Math.random() * 3);
  let randColor = btns[randIndex];

  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  // random btn choose for flash
  btnFlash(randBtn);
}

function btnPress(){
    let btn = this;
    userFlash(btn); 

    use
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}