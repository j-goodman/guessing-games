// This code is a simple terminal interface which repeats anything the user says back to them. You can try it out by saving it to a file then running `node echo.js` (or whatever the name of the file is).

const readline = require('readline')

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

const ask = () => {
	rl.question('input: ', answer => {
		console.log(answer)
		ask()
	})
}

ask()

// Warmup: build a simple guessing game. The computer should think of a random number between 1 and 100 and prompt the user to guess the number. It should tell the user whether their guess it too high, too low, or correct. The user should be allowed to make as many guesses as they need.