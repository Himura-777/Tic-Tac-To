let players = ['x', 'o'];
let activePlayer = 0;

let gameBoard = [];

function startGame() {
	/*
  1. Создать игровое поле. Оно должно представлять из себя массив массивов. Для обращения к ячейке игрового поля нужно знать     
     строку и колонку этого поля.
  2. Установить активного игрока.
  3. Вызвать функцию renderBoard для отрисовки игрового поля.
  */

	gameBoard = [
		['', '', ''],
		['', '', ''],
		['', '', ''],
	];

	activePlayer = 'x';

	renderBoard(gameBoard);
}

function click(row, column) {
	gameBoard[row][column] = activePlayer == 'x' ? 'x' : 'o';

	let winner = players.indexOf(activePlayer);

	if (gameBoard[row][column] != '') {
		if (
			gameBoard[row][0] === gameBoard[row][1] &&
			gameBoard[row][0] === gameBoard[row][2] &&
			gameBoard[row][1] === gameBoard[row][2]
		) {
			showWinner(winner);
		} else if (
			gameBoard[0][column] === gameBoard[1][column] &&
			gameBoard[0][column] === gameBoard[2][column] &&
			gameBoard[1][column] === gameBoard[2][column]
		) {
			showWinner(winner);
		} else if (
			gameBoard[0][0] != '' &&
			gameBoard[1][1] != '' &&
			gameBoard[2][2] != '' &&
			gameBoard[0][0] === gameBoard[1][1] &&
			gameBoard[0][0] === gameBoard[2][2] &&
			gameBoard[1][1] === gameBoard[2][2]
		) {
			showWinner(winner);
		} else if (
			gameBoard[0][2] != '' &&
			gameBoard[1][1] != '' &&
			gameBoard[2][0] != '' &&
			gameBoard[0][2] === gameBoard[1][1] &&
			gameBoard[1][1] === gameBoard[2][0] &&
			gameBoard[2][0] === gameBoard[0][2]
		) {
			showWinner(winner);
		}
	}

	activePlayer = activePlayer == 'x' ? 'o' : 'x';

	renderBoard(gameBoard);
}
