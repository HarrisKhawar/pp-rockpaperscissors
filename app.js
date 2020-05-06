let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user_score");
const compScore_span = document.getElementById("computer_score");
const scoreboard_div = document.querySelector(".scoreboard")
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function main() {

  rock_div.addEventListener('click', function() {
    game("rock");
  })

  paper_div.addEventListener('click', function() {
    game("paper");
  })

  scissors_div.addEventListener('click', function() {
    game("scissors");
  })

  game();
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "paperrock":
    case "rockscissors":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice);
      break;
  }

}

function win(userChoice, computerChoice) {
  const youWin = " You Win!"
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  if (userChoice == "paper") result_div.innerHTML = "Paper covers Rock." + youWin;
  else if  (userChoice == "rock") result_div.innerHTML = "Rock breaks Scissors." + youWin;
  else result_div.innerHTML = "Scissors cuts Paper." + youWin;
  userChoice_div.classList.add('green_glow')
  setTimeout(function() {userChoice_div.classList.remove('green_glow')}, 300);

}
function lose(userChoice, computerChoice) {
  const youLose = " You Lose!"
  const userChoice_div = document.getElementById(userChoice);
  compScore++;
  compScore_span.innerHTML = compScore;
  if (computerChoice == "paper") result_div.innerHTML = "Paper covers Rock." + youLose;
  else if  (computerChoice == "rock") result_div.innerHTML = "Rock breaks Scissors." + youLose;
  else result_div.innerHTML = "Scissors cuts Paper." + youLose;
  userChoice_div.classList.add('red_glow')
  setTimeout(function() {userChoice_div.classList.remove('red_glow')}, 300);

}
function draw(userChoice) {
  const userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML = "Draw!"
  userChoice_div.classList.add('blue_glow')
  setTimeout(function() {userChoice_div.classList.remove('blue_glow')}, 300);

}
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];

}
main();
