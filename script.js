//Referenced Element Constants
const display = document.querySelector('.display')
const grids = document.querySelectorAll('.grid')
const playerGrid = document.querySelector("#playerGrid")
const computerGrid = document.querySelector('#computerGrid')
const playerScore = document.querySelector('#playerScoresheet')
const computerScore = document.querySelector('#computerScoresheet')
const gameBtn = document.querySelector('#gameButton')
const pcarrier = document.querySelectorAll('.pcarrier')
const pbattleship = document.querySelectorAll('.pbattleship')
const pdestroyer = document.querySelectorAll('.pdestroyer')
const psubmarine = document.querySelectorAll('.psubmarine')
const ppatrolBoat = document.querySelectorAll('.ppatrol-boat')
const ccarrier = document.querySelectorAll('.ccarrier')
const cbattleship = document.querySelectorAll('.cbattleship')
const cdestroyer = document.querySelectorAll('.cdestroyer')
const csubmarine = document.querySelectorAll('.csubmarine')
const cpatrolBoat = document.querySelectorAll('.cpatrol-boat')

//Variables
const gridSize = 10 //how man cell rows and cols on each board
const carrierL = 5    
const battleshipL = 4 //length of
const destroSubL = 3  //ships
const pBoutL = 2
let message = display.textContent = 'Press Start Game'
const pGameBoard = []
const cGameBoard = []
let gameState = null

//Call Functions
init() //calls function when page is opened

//Functions
function init(){ //initial state function
    createGrid(playerGrid) //creates player grid
    createGrid(computerGrid) //creates computer grid
    createGameBoard(pGameBoard) //creates player game board
    createGameBoard(cGameBoard) //creates computer game board
}

function createGameBoard(gameBoard){
    for (let row = 0;row < gridSize;row++){
        let currentRow = []
        for (let col = 0;col < gridSize;col++){
            currentRow.push({row,col,content: 'water'})
        }
        gameBoard.push(currentRow)
    }
}

function createGrid(gridEl){ //Create Grids Function
    for (let row = 0;row < gridSize;row++){
        for (let col = 0;col < gridSize;col++){
            let cell = document.createElement('div')
            cell.classList.add('cell')
            cell.dataset.row = row  //data attributs for finding location of cell
            cell.dataset.col = col
            gridEl.appendChild(cell)
        }
    }
}

function buttonClickHandler(event){
    gameState = 'setup'
}

function gridClickHandler(event){ //handles clicking a water square
    console.log(event.target.dataset.row)
    //updateMessage('You Clicked The Board')
}


//Fill out scoresheets
//allow user to place ships

//Event Listeners
grids.forEach((cell) => cell.addEventListener('click',gridClickHandler))
gameBtn.addEventListener('click', buttonClickHandler)
