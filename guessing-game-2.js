const readline = require('readline')
// 2-dimensional guessing game

const secretVector = {
	x: Math.floor(Math.random() * 10) + 1,
	y: Math.floor(Math.random() * 10) + 1
}

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

const askForGuess = () => {
	rl.question('Guess x y from 1 to 10: ', answer => {
		const [xText, yText] = answer.trim().split(/\s+/)
		const guessVector = {
			x: Number(xText),
			y: Number(yText)
		}

		const horizontal = guessVector.x < secretVector.x ? 'east' : guessVector.x > secretVector.x ? 'west' : ''
		const vertical = guessVector.y < secretVector.y ? 'south' : guessVector.y > secretVector.y ? 'north' : ''
		const hint = [vertical, horizontal].join('')

		if (hint) {
			console.log(hint)
		} else {
			console.log('Correct!')
			rl.close()
			return
		}

		askForGuess()
	})
}

askForGuess()