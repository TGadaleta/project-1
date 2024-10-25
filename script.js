//Referenced Element Constants
const display = document.querySelector('.message')
const playerBoard = document.querySelector("#playerBoard")
const computerBoard = document.querySelector('#computerBoard')
const boards = document.querySelector('.boards')
const playerScore = document.querySelector('#playerScoresheet')
const computerScore = document.querySelector('#computerScoresheet')
const startBtn = document.querySelector('#startGameButton')

//Variables
const gridSize = 10 //how man cell rows and cols on each board 
message = display.textContent = 'Press Start Game'

// function init(){
//     createBoard(playerBoard) //creates player board
//     createBoard(computerBoard) //creates computer board
// }


//Create Boards Function
// function createBoard(boardEl){
//     for (let row = 0;row < gridSize;row++){
//         for (let col = 0;col < gridSize;col++){
//             let div = document.createElement('div')
//             div.dataset.row = row  //data attributs for finding location of cell
//             div.dataset.col = col
//             boardEl.appendChild(div)
//         }
//     }
// }
    
//Create Score sheets
//Fill out scoresheets
//allow user to place ships

//Call Functions
init() //calls function when page is opened