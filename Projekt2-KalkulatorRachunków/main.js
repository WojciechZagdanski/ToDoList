const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const error = document.querySelector('.error')
const cost = document.querySelector('.cost-info')
const span = document.querySelector('span')
const button = document.querySelector('button')


const showBill = () => {

    if(price.value !== '' && people.value !== '' && tip.value !== 0){
        error.textContent = ""
        countBill()  
    }else {
        error.textContent = "Uzupełnij wszystkie pola:"
        cost.style.display = 'none';
    }
}

const countBill = () => {

    const newPrice = parseFloat(price.value); 
    const newPeople = parseInt(people.value);
    const newTip = Number(tip.value);
    const sum = (newPrice + (newPrice * newTip)) / newPeople;

    cost.style.display = 'block';
    span.textContent = sum.toFixed(2)
    
}


button.addEventListener('click', showBill)