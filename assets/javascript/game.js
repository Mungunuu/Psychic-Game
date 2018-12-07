var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var comGuess = letters[Math.floor(Math.random() * 26)]
var wins = 0
var loses = 0
var guesses = 10

var winsDiv = document.getElementById('wins')
winsDiv.textContent = wins

var losesDiv = document.getElementById('loses')
losesDiv.textContent = loses

var guessesDiv = document.getElementById('guesses')
guessesDiv.textContent = guesses

var screenletterDiv = document.getElementById('screenletter')

document.onkeyup = function (event) {
  var userGuess = event.key
  screenletterDiv.textContent = screenletterDiv.textContent + ', ' + userGuess
  console.log('userGuess: ' + userGuess)
  console.log('comGuess: ' + comGuess)

  if (userGuess == comGuess) {
    console.log('win')
    wins++
    console.log(wins)
    winsDiv.textContent = wins
    guesses = 10
    clearDivs()
  } else if (guesses == 1) {
    loses++
    losesDiv.textContent = loses
    guesses = 10
    clearDivs()
  }else {
    console.log('oh no')
    guesses--
    console.log(guesses)
    guessesDiv.textContent = guesses
  }
}

function clearDivs () {
  comGuess = letters[Math.floor(Math.random() * 26)]
  guessesDiv.textContent = guesses
  screenletterDiv.textContent = ''
}
