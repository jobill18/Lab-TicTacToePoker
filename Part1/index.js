console.log("hello");

//Global Variables

let player = "X";

//Functions

function play(evt) {
  const targetSquare = evt.target;
  targetSquare.innerText = player;
  if (player === "X") {
    player = "O";
  } else {
    player = "X";
  }
  const playerSpan = document.querySelector("#current-player");
  playerSpan.innerText = player;

  const winner = checkWinner();
  if (winner) {
    alert(`${winner} is the winner!`);
  } else if (boardFull()) {
    alert("Game is a tie!");
  }
}

function checkWinner() {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const line of lines) {
    const [a, b, c] = line;
    const squareAText = squares[a].innerText;
    const squareBText = squares[b].innerText;
    const squareCText = squares[c].innerText;

    if (squareAText !== "" && (squareAText === squareBText) === squareCText) {
      return squareAText;
    }
  }
  return undefined;
}

function boardFull() {
  for (const square of squares) {
    if (square.innerText === "") {
      return false;
    }
  }
  return true;
}

//Event listeners

const squares = document.querySelectorAll(".square");

for (const square of squares) {
  square.addEventListener("click", play);
}
