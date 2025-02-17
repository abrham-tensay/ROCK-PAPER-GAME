// Get the computer's choice
const computerChoices = ['rock', 'paper', 'scissors'];
const getComputerChoice =()=>computerChoices[Math.floor(Math.random() * computerChoices.length)];


// get the human choice
const getPlayerChoice = () => {
    let choice;
    do {
        choice = prompt("Choose 'rock', 'paper', or 'scissors'").toLowerCase();
    } while (!['rock', 'paper', 'scissors'].includes(choice)); // keep asking until valid choice
    return choice;
};

const computerChoice=getComputerChoice();
const playerChoice=getPlayerChoice();
// play a single round
function playSingleRound(computerChoice,playerChoice){
    
    if (computerChoice===playerChoice)
    {return "It's a tie!"}
    else if(
        computerChoice==="rock" && playerChoice==="scissors" ||
        computerChoice==="paper" && playerChoice==="rock" ||
        computerChoice==="scissors" && playerChoice==="paper"
    )
    {return "Computer wins!"}
    else
    {return "You WIN!"}
};
const result=playSingleRound(computerChoice,playerChoice)
console.log(`Computer chose: ${computerChoice}`);
console.log(`Player chose: ${playerChoice}`);
console.log(result);

