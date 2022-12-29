var tempBoxes, curr, gameOver, board, states, turn, stopGame;

board = [[0, 0, 0],
         [0, 0, 0],
         [0, 0, 0]]

states = [[0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]]

stopGame = false;
turn = "X"

const turnHeading = document.getElementById("turn-heading")
const boxes = document.getElementsByClassName("box")

const boxesEqual = (g, h, f) => g === h && g === f && g !== ""

function assignStates() {
    tempBoxes = [...boxes]

    for (r = 0; r < 3; r++) {
        for (c = 0; c < 3; c++) {
            curr = tempBoxes.shift()
            states[r][c] = curr.innerHTML
            board[r][c] = curr
        }
    }

}

function checkWin() {
    for (i = 0; i < 3; i++) {
        if (boxesEqual(states[i][0], states[i][1], states[i][2]))  {
            board[i][0].classList.add("win-box")
            board[i][1].classList.add("win-box")
            board[i][2].classList.add("win-box")
            stopGame = true
        }
    }
    for (i = 0; i < 3; i++) {
        if (boxesEqual(states[0][i], states[1][i], states[2][i]))  {
            board[0][i].classList.add("win-box")
            board[1][i].classList.add("win-box")
            board[2][i].classList.add("win-box")
            stopGame = true
        }
    }

    if (boxesEqual(states[0][0], states[1][1], states[2][2]))  {
            board[0][0].classList.add("win-box")
            board[1][1].classList.add("win-box")
            board[2][2].classList.add("win-box")
            stopGame = true
    }
    if (boxesEqual(states[2][0], states[1][1], states[0][2]))  {
            board[2][0].classList.add("win-box")
            board[1][1].classList.add("win-box")
            board[0][2].classList.add("win-box")
            stopGame = true
    }

    if (stopGame) {
        box = document.querySelector(".win-box")

        turnHeading.innerHTML = `Player ${box.innerHTML} wins!!`
        
        return restart()
    }

    boxesFull = Array(...boxes).every((value) => value.innerHTML == 'X' || value.innerHTML == "O")
        
    if (boxesFull) {
        turnHeading.innerHTML = "GAME OVER! DRAW!!"
        stopGame = true

        for (box of boxes) box.classList.add("win-box")
        restart()
    } 

   
}

function restart() {
    setTimeout(() => {
        for (box of boxes) {
            box.classList.remove("win-box", "playerx", "playero")
            box.innerHTML = ""
        }
        board = [[0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]]

        states = [[0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]]
        
        turn = "X"
        turnHeading.innerHTML = "Player X turn"
        stopGame = false; 
    }, 3000);
}

function callback() {
    if (this.innerHTML || stopGame) return

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