const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answerArr = ['Tak', 'Nie', 'Może']

const shakeBall = () => {
    ball.classList.add('shake-animation');
    setTimeout(checkInput,1000)
}

const checkInput = () => {
	if (input.value !== '' && input.value.slice(-1) === '?') {
		generateAnswers()
		error.textContent = ''
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie musi byc zakończone znakiem "?"'
	} else {
		error.textContent = 'Musisz zadac jakies pytanie "?"';
        answer.textContent = ''
	}

    ball.classList.remove('shake-animation');
}

const generateAnswers = () => {
	const number = Math.floor(Math.random() * answerArr.length)
	answer.innerHTML = `<span>Odpowiedź:</span> ${answerArr[number]}`
}

ball.addEventListener('click', shakeBall)
