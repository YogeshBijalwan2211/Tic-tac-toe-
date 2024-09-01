let boxes = document.querySelectorAll(".box");
let Winner = document.querySelector("#Winner");
let start =document.querySelector("#start");
let RestartBtn = document.querySelector("#restart");
let startBtn = document.querySelector("#start");

let chanceO = true;
const winPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6]];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(chanceO){
            box.innerText = "O";
            chanceO = false;
        }else{
            box.innerText = "X";
            chanceO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (pos1) =>{
    Winner.innerText = `Winner of Game is ${pos1}`;
    Winner.classList.remove("msgCon");
    start.classList.remove("msgCon");
    disableBox();
};

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 ===pos3){
                showWinner(pos1);
            }
        }
    }
};

const enableBox= ()=>{
    for(let box of boxes){
        box.innerText="";
        box.disabled = false;
    }
}
const resetGame = () =>{
    chanceO = true;
    enableBox();
    Winner.classList.add("msgCon");
    start.classList.add("msgCon");
}

RestartBtn.addEventListener("click",resetGame);
startBtn.addEventListener("click",resetGame);