
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

   checkWinner(userChoice, ComputerChoice);
}
function selectPaper(){
    // userChoice = paper;
    const userChoice = "paper";

   userChoiceContainer.innerHTML = " Your Choice :  Paper"

   const ComputerChoice = getComputerChoice();

   computerChoiceContainer.innerHTML = "Computer Choice is :" +ComputerChoice

   checkWinner(userChoice, ComputerChoice);
}
function selectScissor(){
    // userChoice = scissor;
     const userChoice = "scissor";

   userChoiceContainer.innerHTML = " Your Choice :  Scissor"

   const ComputerChoice = getComputerChoice();

   computerChoiceContainer.innerHTML = "Computer Choice is :" +ComputerChoice

   checkWinner(userChoice, ComputerChoice);
}

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * options.length)
    return options[randomIndex]
}

function checkWinner(userChoice, ComputerChoice){
    if(
        (userChoice === "rock" && ComputerChoice === "paper")
        (userChoice === "paper" && ComputerChoice === "rock" )
        (userChoice === "scissor" && ComputerChoice === "paper")
    ){
        resultContainer.innerHTML = "Result : Yaay... You Won";
    }else if(
        (ComputerChoice === "rock" && userChoice === "paper")
        (ComputerChoice === "paper" && userChoice === "rock")
        (ComputerChoice === "scissor" && userChoice === "paper")
    ){
        resultContainer.innerHTML = "Result : OOhhhoo.. You Lost";
    }else{
        resultContainer.innerHTML == "Result : Its a Draw";
    }

}