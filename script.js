let userScore=0;
let compScore=0;
let msg=document.querySelector(".message");

const icons=document.querySelectorAll(".icon");

icons.forEach((icon) => {
    icon.addEventListener("click", () => {
        let userChoice=icon.id;
        console.log("user chose",userChoice);
        let n=Math.floor(3*Math.random());
        let compChoice="None";
        if (n==0){
            compChoice="rock";
            if (userChoice=="paper"){
                msg.innerText="You WIN in this turn";
                userScore++;
            }else if (userChoice=="scissors") {
                msg.innerText="You LOSS in this turn";
                compScore++;
            } else {
                msg.innerText="DRAW in this turn";
            }
        }
        else if (n==1) {
            compChoice="paper";
            if (userChoice=="paper"){
                msg.innerText="DRAW in this turn";
            }else if (userChoice=="scissors") {
                msg.innerText="You WIN in this turn";
                userScore++;
            } else {
                msg.innerText="You LOSS in this turn";
                compScore++;
            }
        } else {
            compChoice="scissors";
            if (userChoice=="paper"){
                msg.innerText="You LOSS in this turn";
                compScore++;
            }else if (userChoice=="scissors") {
                msg.innerText="DRAW in this turn";
            } else {
                msg.innerText="You WIN in this turn";
                userScore++;
            }
        }
        console.log("computer chose",compChoice);
        console.log("user has",userScore,"points and comp has",compScore,"points");
        document.querySelector("#uc").innerText=userScore;
        document.querySelector("#cc").innerText=compScore;
        let messge=document.querySelector(".para");
        if (userScore==compScore){
            messge.innerText="The Match is DRAWN!!";
        }else if (userScore>compScore){
            messge.innerText="Congrats,You WON!!";
        }
        else{
            messge.innerText="You LOST!!";
        }
    });
});