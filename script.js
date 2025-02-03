
const options = ["rock", "paper","scissor"];
const userChoiceContainer = document.getElementById("user-choice")
const computerChoiceContainer = document.getElementById("computer-choice")
const resultContainer = document.getElementById("result")

function selectRock(){
    // userChoice = rock;
   // computer choice ---> generate
   const userChoice = "rock";

   userChoiceContainer.innerHTML = " Your Choice :  Rock"

   const ComputerChoice = getComputerChoice();

   computerChoiceContainer.innerHTML = "Computer Choice is :" +ComputerChoice

   checkWinner(userChoice, computerChoice);
}
function selectPaper(){
    // userChoice = paper;
    const userChoice = "paper";

   userChoiceContainer.innerHTML = " Your Choice :  Paper"

   const ComputerChoice = getComputerChoice();

   computerChoiceContainer.innerHTML = "Computer Choice is :" +ComputerChoice

   checkWinner(userChoice, computerChoice);
}
function selectScissor(){
    // userChoice = scissor;
     const userChoice = "scissor";

   userChoiceContainer.innerHTML = " Your Choice :  Scissor"

   const computerChoice = getComputerChoice();

   computerChoiceContainer.innerHTML = "Computer Choice is :" + computerChoice

   checkWinner(userChoice, computerChoice);
}

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * options.length)
    return options[randomIndex]
}

function checkWinner(userChoice, computerChoice){
    if(
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock" )||
        (userChoice === "scissor" && computerChoice === "paper")
    ){
        resultContainer.innerHTML = "Result : Yaay... You Won";
    }else if(
        (computerChoice === "rock" && userChoice === "paper")||
        (computerChoice === "paper" && userChoice === "rock")||
        (computerChoice === "scissor" && userChoice === "paper")
    ){
       resultContainer.innerHTML = "Result : OOhhhoo.. You Lost";
    }else{
       resultContainer.innerHTML == "Result : Its a Draw";
    }

}