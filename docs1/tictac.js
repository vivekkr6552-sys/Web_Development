let boxes = document.querySelectorAll(".boxy");
let resetb = document.querySelector(".reset");
let msgcont = document.querySelector(".msg-contain");
let msg = document.querySelector("#msg");

let turnO = true;

const win = [
    [0,1,2],[3,4,5],[6,7,8], 
    [0,3,6],[1,4,7],[2,5,8],
    [2,4,6],[0,4,8]
];

boxes.forEach((boxy) => {
    boxy.addEventListener("click", () => {
        if (turnO) {
            boxy.innerText = "O";
            turnO = false;
        } else {
            boxy.innerText = "X";
            turnO = true;
        }
        boxy.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    boxes.forEach((boxy) => {
        boxy.disabled = true;
    });
};

let showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgcont.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of win) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
};

const resetGame = () => {
    turnO = true;
    boxes.forEach((boxy) => {
        boxy.innerText = "";
        boxy.disabled = false;
    });
    msgcont.classList.add("hide");
};

resetb.addEventListener("click", resetGame);