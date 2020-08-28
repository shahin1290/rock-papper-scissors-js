const startGameBtn = document.getElementById('start-game-btn')

const ROCK = 'ROCK'
const PAPPER = 'PAPPER'
const SCISSORS = "SCISSORS"
const DEFAULT_SELECTION = 'ROCK'

let gameIsRunning = false

const getPlayerChoice = function(){
  const selection = prompt(`${ROCK} or ${PAPPER} or ${SCISSORS}`, '').toUpperCase()
  if(selection !== ROCK && selection !== PAPPER && selection !== SCISSORS){
    alert(`invalid selection! and ${DEFAULT_SELECTION} is selected by default `)
    return DEFAULT_SELECTION
  }else {
    return selection
  }
}


const selection = startGameBtn.addEventListener('click', function(){
  if(gameIsRunning){
    return
  }
  gameIsRunning = true
  console.log('Game is starting')
  const playerChoice = getPlayerChoice()
  console.log(playerChoice)
})




