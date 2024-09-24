let slug = document.getElementById("slug");
let snake = document.getElementById("snake");
let frog = document.getElementById("frog");
let reset = document.getElementById("reset")
let playerScoreCard = document.getElementById("player-score");
let opponentScoreCard = document.getElementById("opponent-score");
let playerScore = 0;
let opponentScore = 0;
let playerChoice = "";
let opponentChoice = "";
let result = document.getElementById("result");
let btn = document.getElementsByClassName("btn");

//reset button programming

reset.addEventListener("click", () => {
  playerScore = 0;
  opponentScore = 0;
  playerScoreCard.innerText = playerScore;
  opponentScoreCard.innerText = opponentScore;
  frog.style.display = "block";
  slug.style.display = "block";
  snake.style.display = "block";
  playRound();
})
// Player chooses animal
slug.addEventListener("click", () =>{
  opponentChoice = getOpponentChoice(); 
  playerChoice = "Slug";
  playRound(playerChoice, opponentChoice);
});

snake.addEventListener("click", () =>{ 
  opponentChoice = getOpponentChoice();
  playerChoice = "Snake";
  playRound(playerChoice, opponentChoice);
});

frog.addEventListener("click", () =>{ 
  opponentChoice = getOpponentChoice();
  playerChoice = "Frog"
  playRound(playerChoice, opponentChoice);
});

//computer chooses animal

function getOpponentChoice() {
  let animalArray = ["Slug", "Snake", "Frog"]
  let animalArrayIndex = Math.floor(Math.random() * 3);
  //generates random number between 0 and 2 to select opponent choice
  return animalArray[animalArrayIndex];
}

function playRound(playersChosenAnimal, opponentsChosenAnimal) {
  //reset button hides
  reset.style.display = "none";
  //Slug beats Snake
  
  if (playersChosenAnimal === "Slug" && opponentsChosenAnimal === "Snake") {
      result.innerText = `You win! Slug eats Snake`;
      playerScore++;
      playerScoreCard.innerText = playerScore;
  //frog beats slug   
    } else if (playersChosenAnimal === "Frog" && opponentsChosenAnimal === "Slug") {
      result.innerText = "You win! Frog eats Slug.";
      playerScore++;
      playerScoreCard.innerText = playerScore;
  //snake beats frog
    } else if (playersChosenAnimal ==="Snake" && opponentsChosenAnimal === "Frog") {
      result.innerText = "You Win! Snake eats Frog!";
      playerScore++;
      playerScoreCard.innerText = playerScore;
    } else if (playersChosenAnimal === opponentsChosenAnimal) {
      result.innerText = `Tie! You both chose ${playersChosenAnimal}.`;
    } else {
      result.innerText = `You lose! ${opponentsChosenAnimal} eats ${playersChosenAnimal}`;
      opponentScore++;
      opponentScoreCard.innerText = opponentScore;
  }
  gameOver();
}

function gameOver(){
  if (opponentScore === 5) {
    result.innerText = "Game Over! You Lose"
    frog.style.display = "none";
    slug.style.display = "none";
    snake.style.display = "none";
    reset.style.display = "block";
   
  } else if (playerScore === 5) {
    result.innerText = "You win!"
    frog.style.display = "none";
    slug.style.display = "none";
    snake.style.display = "none";
    reset.style.display = "block";
    
  }
}