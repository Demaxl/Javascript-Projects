var tempBoxes, curr, gameOver;

const board = [[0, 0, 0],
               [0, 0, 0],
               [0, 0, 0]
]

const states = [[0, 0, 0],
               [0, 0, 0],
               [0, 0, 0]
]

var turn = "X"
const turnHeading = document.getElementById("turn-heading")
const boxes = document.getElementsByClassName("box")


function assignStates() {
    tempBoxes = [...boxes]

    for (r = 0; r < 3; r++) {
        for (c = 0; c < 3; c++) {
            curr = tempBoxes.shift()
            states[r][c] = curr.innerHTML
        }
    }
}

function checkWin() {
    // for (i = 0; i < 3; i++) {
    //     if (states[i][0]==states[i][1]==states[i][2]!=0) {
            
    //     }
    // }

    gameOver = Array(...boxes).every((value) => value.innerHTML == 'X' || value.innerHTML == "O")

    if (gameOver) turnHeading.innerHTML = "GAME OVER"
}


function callback() {
    if (this.innerHTML) return

    if (turn == "X") {
        this.innerHTML = "X"
        this.classList.add("playerx")
        turn = "O"
    } else {
        this.innerHTML = "O"
        this.classList.add("playero")
        turn = "X"
    }

    turnHeading.innerHTML = `Player ${turn} turn`
    assignStates()
    checkWin()
}





for (i = 0; i < boxes.length; i++) {
    boxes[i].onclick = callback
}