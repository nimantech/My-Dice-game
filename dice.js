
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;


const player1ScoreBoard = document.getElementById('player1Scoreboard');
const player2ScoreBoard = document.getElementById('player2Scoreboard');
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const message = document.getElementById('message');
const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');
const container = document.getElementsByClassName('container');




function displayButton(){

				rollBtn.style.display = "none";
			resetBtn.style.display = "inline-block";
		}


rollBtn.addEventListener('click' , function(){

	let randomNumber = Math.floor(Math.random() * 6) + 1;

	
	if(player1Turn){

		player1Dice.textContent = randomNumber;
		player1Score += randomNumber;
		player1ScoreBoard.textContent = player1Score;
		message.textContent = "Player 2 Turn"
		player1Dice.classList.remove('active');
		player2Dice.classList.add('active');
		player1Dice.style.backgroundImage = "url('images/dice2.png')"

		if (randomNumber == 1) {

		 	player1Dice.style.backgroundImage = "url('images/dice1.png')"
		 }
		 else if (randomNumber == 2) {

		 	player1Dice.style.backgroundImage = "url('images/dice2.png')"
		 }

		  else if (randomNumber == 3) {

		 	player1Dice.style.backgroundImage = "url('images/dice3.png')"
		 }

		  else if (randomNumber == 4) {

		 	player1Dice.style.backgroundImage = "url('images/dice4.png')"
		 }

		  else if (randomNumber == 5) {

		 	player1Dice.style.backgroundImage = "url('images/dice5.png')"
		 }

		  else if (randomNumber == 6) {

		 	player1Dice.style.backgroundImage = "url('images/dice6.png')"
		 }

	}

	else{

		player2Dice.textContent = randomNumber;
		player2Score += randomNumber;
		player2ScoreBoard.textContent = player2Score;
		message.textContent = "Player 1 Turn"
		player2Dice.classList.remove('active');
		player1Dice.classList.add('active');

		if (randomNumber == 1) {

		 	player2Dice.style.backgroundImage = "url('images/dice1.png')"
		 }
		 else if (randomNumber == 2) {

		 	player2Dice.style.backgroundImage = "url('images/dice2.png')"
		 }

		  else if (randomNumber == 3) {

		 	player2Dice.style.backgroundImage = "url('images/dice3.png')"
		 }

		  else if (randomNumber == 4) {

		 	player2Dice.style.backgroundImage = "url('images/dice4.png')"
		 }

		  else if (randomNumber == 5) {

		 	player2Dice.style.backgroundImage = "url('images/dice5.png')"
		 }

		  else if (randomNumber == 6) {

		 	player2Dice.style.backgroundImage = "url('images/dice6.png')"
		 }
		

	}
		 		
		if (player1Score >= 20 ) {

			message.textContent="🎉 Player 1 Wins 🎉";
			displayButton();
			
				

		}
		else if (player2Score >= 20){

			

			message.textContent="🎉 Player 2 Wins 🎉"
			displayButton();
			
			
		}

		player1Turn = !player1Turn;


})



function resetGame(){

				message.textContent = "Player 1 Turn"
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
				player1Turn = Boolean(Math.round(Math.random()));
				container[0].style.backgroundImage = "url('images/bg.jpg')";
				console.log(player1Turn)
					


			}


		resetBtn.addEventListener("click" , resetGame)

		

