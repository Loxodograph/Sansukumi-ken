let slug = document.getElementById("slug");
let snake = document.getElementById("snake");
let frog = document.getElementById("frog");
let playerChoice = "";

slug.addEventListener("click", () =>{ 
  playerChoice = "slug"
});
snake.addEventListener("click", () =>{ 
  playerChoice = "snake"
});
frog.addEventListener("click", () =>{ 
  playerChoice = "frog"
});