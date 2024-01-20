let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#score-1")
const compScorePara = document.querySelector("#score-2")

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("Game was draw.");
    msg.innerText = "Game was draw.Play again.";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";

    }
}

const playGame = (userChoice) =>{
    console.log("user choice",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice",compChoice);

    if (userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) =>{
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click", ()=>{
        playGame(userChoice);
    });
});