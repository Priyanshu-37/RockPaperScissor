let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    let randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];

}
const draw = () => {
    console.log("game was draw");
    msg.innerText ="Game is Draw.";
    msg.style.backgroundColor = "#030c16";
}

const showwinner = (userwin) => {
    if(userwin){
       
        console.log("you Win");
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText ="You Win.";
        msg.style.backgroundColor = "green";
    }
    else{
       
        console.log("you Loose");
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText ="You Lose.";
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
    console.log("user choice is ",userchoice);
    const compchoice = genCompChoice();
    console.log("comp choice is ",compchoice);
    if(userchoice === compchoice){
        draw();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            userwin = compchoice === "scissor" ? false : true; 
        }else{
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        
        playgame(userchoice);
    })
})