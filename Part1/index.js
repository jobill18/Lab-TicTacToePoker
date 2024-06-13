console.log("hello");

//Global Variables

let player = "X";

//Functions

function play() {
  if (player === "X") {
    player = "O";
  } else {
    player = "X";
  }
  const playerSpan = document.querySelector("#current-player");
  playerSpan.innerText = player;
  console.log(playerSpan.innerText);
}

//Event listeners

const squares = document.querySelectorAll(".square");

for (const square of squares) {
  square.addEventListener("click", play);
}
