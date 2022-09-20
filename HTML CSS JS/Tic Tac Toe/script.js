const xClass = 'x'
const circleClass = 'circle'
const cellsEl = document.querySelectorAll('[data-cell]')
const board = document.querySelector('.board')
const winningMessageEl = document.querySelector('.winning-message')
const message = document.querySelector('.message')
const result = document.querySelector('.result')
const restartButton = document.querySelector('.next-round-btn')
const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let circleTurn
console.log(cellsEl)

startGame()

restartButton.addEventListener('click', startGame)
function startGame() {
    circleTurn = false;
    cellsEl.forEach(cell => {
        cell.classList.remove(xClass)
        cell.classList.remove(circleClass)
        cell.addEventListener('click', handleClick, {once: true})
    })
    setBoardHoveredClass()
    winningMessageEl.classList.remove('show')
}

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? circleClass : xClass
    placeMark(cell, currentClass)

    if(checkWin(currentClass) ){
        endGame(false)
    }
    else if(isDraw()){
        endGame(true)
    }
    else{
        swapTurns()
        setBoardHoveredClass()
    }
    
}


function isDraw() {
    return [...cellsEl].every(cell => {
        return cell.classList.contains(xClass) || 
        cell.classList.contains(circleClass)
    })
}


function endGame(draw){
    if(draw){
        message.innerHTML = "LET'S TRY AGAIN"
        result.innerHTML = "DRAW!"
    }
    else{
        message.innerHTML = `${circleTurn ? "YOU LOSE" : "CONGRATS! YOU WON"}`
        result.innerHTML = ` ${circleTurn ? "O" : "X"} TAKES THE ROUND`
    }
    winningMessageEl.classList.add('show')
}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn
}


function setBoardHoveredClass() {
    board.classList.remove(xClass)
    board.classList.remove(circleClass)

    if(circleTurn) {
        board.classList.add(circleClass)
    }
    else{
        board.classList.add(xClass)
    }
}


function checkWin(currentClass) {
    return winningCombination.some(combination => {
        return combination.every(index => {
            return cellsEl[index].classList.contains(currentClass)
        })
    })
}