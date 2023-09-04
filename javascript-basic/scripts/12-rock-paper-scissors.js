//gets a value out of local storage

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  tie: 0
};

//function to update the score in html that was call here
updateScoreElement();

/*
if(!score){
  score = {
    wins: 0,
    losses: 0,
    tie: 0
  };
}
*/



//Auto Play Game

let isAutoPlaying = false;
let intervalId;


//const autoPlay = () => {

//}
function autoPlay() {
  if (!isAutoPlaying){
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000); //run the function every 1 seconds
    isAutoPlaying = true;
  } else{
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

//AddEventListener
//For Rock
document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });

//For Paper
document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });

//For Scissors
document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });


//AddEventListener keydown
document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r'){
    playGame('rock');
  } else if(event.key === 'p'){
    playGame('paper');
  } else if(event.key === 's'){
    playGame('scissors');
  }
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  //User Move
  let result = "";
  //Scissors
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You Lose!!!";
    } else if (computerMove === "paper") {
      result = "You Win!!!";
    } else if (computerMove === "scissors") {
      result = "Tie!!!";
    }
    //Paper
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You Win!!!";
    } else if (computerMove === "paper") {
      result = "Tie!!!";
    } else if (computerMove === "scissors") {
      result = "You Lose!!!";
    }
    //Rock
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie!!!";
    } else if (computerMove === "paper") {
      result = "You Lose!!!";
    } else if (computerMove === "scissors") {
      result = "You Win!!!";
    }
  }

  //Update the Score Object
  if (result === "You Win!!!") {
    score.wins += 1;
  } else if (result === "You Lose!!!") {
    score.losses += 1;
  } else if (result === "Tie!!!") {
    score.tie += 1;
  }
  //save to string into local storage
  localStorage.setItem("score", JSON.stringify(score));


  //function to update the score in html that was call here
  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML = 
    ` You
    <img class="move-icon" src="images/${playerMove}-emoji.png" alt="">
    <img class="move-icon" src="images/${computerMove}-emoji.png" alt="">
    Computer`;

  /*
    //Display Result w/ Multi-Line string
  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.tie}`);
  
  */
  
}

//function to update the score in html
function updateScoreElement(){
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.tie};`

}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  //Computer Move
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}