const gameNum = Math.floor(Math.random() * 10) + 1

let guesNum
let tries = 0

while (true) {
  guesNum = Number(prompt('Guess your number (1-10): '))
  tries++

  if (gameNum === guesNum) {
    console.log(
      `Congratulation! You got the correct number ${gameNum} in ${tries} tries.`
    )
    break // game over and breack the while loops
  } else if (guesNum < gameNum) {
    console.log('Too low! Try again.')
  } else {
    console.log('Too high! Try again.')
  }
}
