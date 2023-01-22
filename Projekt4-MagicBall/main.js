const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')


const arr = [
	'Tak',
	'Nie',
	'Nie chcesz znac odpowiedzi na to pytanie :/',
	'Wydaje mi sie ze tak',
	'W życiu',
	'Chyba żartujesz',
	'Zdecydowanie',
	'Nie weim',
	'Nie pomoge',
]


const checkForm = () => {
	if (input.value == '') {
		error.textContent = 'Musisz zadać jakieś pytanie'
	} else if (input.value !== '' && !input.value.includes('?')) {
		error.textContent = 'Pytanie musi byc zakończone znakiem "?"'
	} else {
		error.textContent = ''
		drawAnswer()
	}
    
    ball.classList.remove('shake-animation')
}

const addAnimation = () => {
	ball.classList.add('shake-animation')
    setTimeout(checkForm,1000)
}

const drawAnswer = () => {
	const index = Math.floor(Math.random() * arr.length)
    const span = document.createElement('span')
    span.textContent = 'ODPOWIEDŹ';

    console.log(answer.parentElement);
    
	answer.textContent = arr[index]
}

ball.addEventListener('click', addAnimation)
