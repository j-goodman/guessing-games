const readline = require('readline')
// 1-dimensional guessing game

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

const secretNumber = Math.ceil(Math.random() * 100)
console.log("I'm thinking of a number between 1 and 100.")

const ask = () => {
    rl.question('guess a number: ', guess => {
        guess = Number(guess)
        if (guess > secretNumber) {
            console.log("Lower.")
            ask()
        } else if (guess < secretNumber) {
            console.log("Higher.")
            ask()
        } else if (guess === secretNumber) {
            console.log("You win!")
            rl.close()
        }
    })
}

ask()