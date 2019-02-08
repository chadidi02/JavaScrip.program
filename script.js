var turn = true;
var squares = [];
var winners = [];

var ycount = 0;
var xcount = 0;

function reset() {
  getBoxes();
  if (squares.length == 9 && winners.length != 3) {
    alert("finish the game first!");
    return;
  }
  changeHTML("turn", "X");
  for (var i = 1; i <= 9; i++) {
    changeHTML("A" + i, "");
    document.getElementById("A" + i).style.color = "#fff";
  }
  winners = [];
  squares = [];
}

function selectWinner(winner) {
  if (winner == "X") {
    xcount++;
    changeHTML("xcount", xcount);
  }
  if (winner == "O") {
    ycount++;
    changeHTML("ycount", ycount);
  }
  for (var i = 0; i <= 2; i++) {
    document.getElementById("A" + winners[i]).style.color = "#000";
  }
}

function getBoxes() {
  for (var i = 1; i <= 9; i++) {
    console.log("count boxes: " + i);
    squares[i] = document.getElementById("A" + i).innerHTML;
  }
}

function checkWinner() {
  getBoxes();

  //check horizontal
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[1] != ""
  ) {
    // alert('player ' + squares[1] + ' wins the game');
    winners = [1, 2, 3];
    selectWinner(squares[1]);
  }
  if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[4] != ""
  ) {
    // alert('player ' + squares[4] + ' wins the game');
    winners = [4, 5, 6];
    selectWinner(squares[4]);
  }
  if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[7] != ""
  ) {
    // alert('player ' + squares[7] + ' wins the game');
    winners = [7, 8, 9];
    selectWinner(squares[7]);
  }
  //check vettical
  if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[1] != ""
  ) {
    // alert('player ' + squares[1] + ' wins the game');
    winners = [1, 4, 7];
    selectWinner(squares[1]);
  }
  if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[2] != ""
  ) {
    // alert('player ' + squares[2] + ' wins the game');
    winners = [2, 5, 8];
    selectWinner(squares[2]);
  }
  if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[3] != ""
  ) {
    // alert('player ' + squares[3] + ' wins the game');
    winners = [3, 6, 9];
    selectWinner(squares[3]);
  }

  //check diagonal
  if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[1] != ""
  ) {
    // alert('player ' + squares[1] + ' wins the game');
    winners = [1, 5, 9];
    selectWinner(squares[1]);
  }
  if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[3] != ""
  ) {
    // alert('player ' + squares[3] + ' wins the game');
    winners = [3, 5, 7];
    selectWinner(squares[3]);
  }
}

function changeHTML(id, value) {
  document.getElementById(id).innerHTML = value;
}

function insert(id) {
  if (winners.length == 3) {
    return;
  }
  if (turn && document.getElementById(id).innerHTML == "") {
    changeHTML(id, "X");
    changeHTML("turn", "O");
    turn = !turn;
  } else if (!turn && document.getElementById(id).innerHTML == "") {
    changeHTML(id, "O");
    changeHTML("turn", "X");
    turn = !turn;
  }
  checkWinner();
}
