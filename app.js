const startGameBtn = document.getElementById('start-game-btn')

const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'
const DEFAULT_SELECTION = 'ROCK'
const RESULT_DRAW = 'DRAW'
const RESULT_PLAYER_WIN = 'YOU WIN'
const RESULT_COMPUTER_WIN = 'COMPUTER WINS'

let gameIsRunning = false

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK} or ${PAPER} or ${SCISSORS}`,
    ''
  ).toUpperCase()
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`invalid selection! and ${DEFAULT_SELECTION} is selected by default `)
    return DEFAULT_SELECTION
  } else {
    return selection
  }
}

const getComputerChoice = () => {
  const randomNumber = Math.random()
  if (randomNumber < 0.34) {
    return ROCK
  } else if (randomNumber < 0.64) {
    return PAPER
  } else {
    return SCISSORS
  }
}

const getResult = (pChoice, cChoice) =>
  pChoice === cChoice
    ? RESULT_DRAW
    : (pChoice === ROCK && cChoice === SCISSORS) ||
      (pChoice === PAPER && cChoice === ROCK) ||
      (pChoice === SCISSORS && cChoice === PAPER)
    ? RESULT_PLAYER_WIN
    : RESULT_COMPUTER_WIN

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return
  }
  gameIsRunning = true
  console.log('Game is starting')
  const pChoice = getPlayerChoice()
  const cChoice = getComputerChoice()
  console.log(pChoice)
  console.log(cChoice)
  const result = getResult(pChoice, cChoice)
  console.log(result)
})
