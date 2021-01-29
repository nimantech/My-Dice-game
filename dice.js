
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

let player2NewName = "";

const player1ScoreBoard = document.getElementById('player1Scoreboard');
const player2ScoreBoard = document.getElementById('player2Scoreboard');
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const message = document.getElementById('message');
const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');
const container = document.getElementsByClassName('container');
let player1Name = document.getElementById('player1name')
let player2Name = document.getElementById('player2name')
const submitNames = document.getElementById('submitBtn')
const introContainer = document.getElementById('intro');
const gameContainer = document.getElementById('game-container');






submitNames.addEventListener("click", myGame)

function myGame() {

	gameContainer.style.display = "block";
	introContainer.style.display = "none";
	let player1NewName = player1Name.value;
	let player2NewName = player2Name.value;
	message.textContent = player1Name.value + "'s Turn";
}





function displayButton() {

	rollBtn.style.display = "none";
	resetBtn.style.display = "inline-block";
}


rollBtn.addEventListener('click', function () {

	const randomNumber = Math.floor(Math.random() * 6) + 1;




	if (player1Turn) {


		player1Score += randomNumber;
		player1ScoreBoard.textContent = player1Score;
		message.textContent = player2Name.value + "'s Turn";

		player1Dice.classList.remove('active');
		player2Dice.classList.add('active');
		player1Dice.style.backgroundImage = `url('images/dice${randomNumber}.png')`

	}

	else {
		player2Score += randomNumber;
		player2Dice.textContent = randomNumber;
		player2ScoreBoard.textContent = player2Score;
		message.textContent = player1Name.value + "'s Turn";
		player2Dice.classList.remove('active');
		player1Dice.classList.add('active');
		player2Dice.style.backgroundImage = `url('images/dice${randomNumber}.png')`


	}

	if (player1Score >= 20) {

		message.textContent = "🎉 " + player1Name.value + " Wins 🎉";
		displayButton();



	}
	else if (player2Score >= 20) {



		message.textContent = "🎉 " + player2Name.value + " Wins 🎉";
		displayButton();



	}

	player1Turn = !player1Turn;


})

resetBtn.addEventListener("click", resetGame)

function resetGame() {

	introContainer.style.display = "block";
	gameContainer.style.display = "none";
	player1Name.value = ""
	player2Name.value = ""
	message.textContent = player1Name.value + "'s Turn";
	player1ScoreBoard.textContent = 0;
	player2ScoreBoard.textContent = 0;
	player1Dice.textContent = "-";
	player2Dice.textContent = "-";
	player1Score = 0;
	player2Score = 0;
	player1Turn = true;
	rollBtn.style.display = "inline-block";
	resetBtn.style.display = "none";
	player2Dice.classList.remove('active');
	player1Dice.classList.add('active');
	player1Dice.style.backgroundImage = "url('images/bg.gif')"
	player2Dice.style.backgroundImage = "url('images/bg.gif')"
	container[0].style.backgroundImage = "url('images/bg.jpg')";




}






