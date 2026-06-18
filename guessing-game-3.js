const readline = require('readline')
// 3-dimensional guessing game

const secretVector = {
	x: Math.floor(Math.random() * 10) + 1,
	y: Math.floor(Math.random() * 10) + 1,
	z: Math.floor(Math.random() * 10) + 1
}

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

const askForGuess = () => {
	rl.question('Guess x y z from 1 to 10: ', answer => {
		const [xText, yText, zText] = answer.trim().split(/\s+/)
		const guessVector = {
			x: Number(xText),
			y: Number(yText),
			z: Number(zText)
		}

		const horizontal = guessVector.x < secretVector.x ? 'east' : guessVector.x > secretVector.x ? 'west' : ''
		const vertical = guessVector.y < secretVector.y ? 'south' : guessVector.y > secretVector.y ? 'north' : ''
		const depth = guessVector.z < secretVector.z ? 'down' : guessVector.z > secretVector.z ? 'up' : ''
		const hint = [vertical, horizontal, depth].join('')

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