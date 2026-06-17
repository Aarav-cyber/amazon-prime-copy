let userScore = 0;
let compScore = 0;
let DrawCount = 0;
let u = document.querySelector("#user");
let c = document.querySelector("#computer");
let d = document.querySelector("#DRAW");

let m = document.querySelector(".msg-counter");

let choice = document.querySelectorAll(".pic");

function computer() {
    const option = ["rock", "paper", "scissor"];
    const rand = Math.floor(Math.random() * 3);
    return option[rand];
}


function userWin(userChoice, compChoice) {
    let user = true;
    if (userChoice === "rock")
    {//paper beats rock
        user=(compChoice === "paper") ? false : true;
    }

    else if (userChoice === "paper")
    {//scissor beats paper
        user=(compChoice === "scissor") ? false : true;
    }
    else
    {//rock beats scissor
        user=(compChoice === "rock") ? false : true;
    }

    return user;
}


function clk(event) {
    let userChoice = event.target.getAttribute("id");
    let compChoice = computer();
    

    console.log("your choice = ", userChoice);
    console.log("comp choice = ", compChoice);
    
    if (userChoice === compChoice) {
        console.log("Draw game");
        m.innerText = "Draw game";
        DrawCount++;
        d.innerText = DrawCount;
    }

    else {
        if (userWin(userChoice, compChoice)) {
            console.log("you win");
            userScore++;
            u.innerText = userScore;
            m.innerText = "YOU WIN!"

        }
        else {
            console.log("you loose");
            compScore++;
            c.innerText = compScore;
            m.innerText = `Computer choose ${compChoice} YOU LOOSE :(`


        }
    }
    
}   


for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener("click", clk);
}