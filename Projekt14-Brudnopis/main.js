const currencyOne = document.querySelector('#currency-one')
const currencyTwo = document.querySelector('#currency-two')
const amountOne = document.querySelector('.amount-one')
const amountTwo = document.querySelector('.amount-two')

const swapBtn = document.querySelector('.swap')
const rateInfo = document.querySelector('.rate-info')

const calculate = () => {
	fetch(`https://api.exchangerate.host/latest?base=${currencyOne.value}&symbols=${currencyTwo.value}`)
    .then(res => res.json())
    .then(data => {
        const currency1 = currencyOne.value;
        const currency2 = currencyTwo.value;

        const rate = data.rates[currency2];
        rateInfo.innerText = `1 ${currency1} = ${rate.toFixed(4)} ${currency2}`;

        amountTwo.value = (amountOne.value * rate).toFixed(2);
    })
}

currencyOne.addEventListener('change', calculate)
currencyTwo.addEventListener('change', calculate)
amountOne.addEventListener('input', calculate)

calculate()