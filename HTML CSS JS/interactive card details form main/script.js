const cardNo = document.querySelector('.card-no')
const cardName = document.querySelector('.name')
const cardExpiry = document.querySelector('card-expiry')
const cardCvc = document.querySelector('.cvc-number')
const nameInput = document.getElementById('name-input')
const numberInput = document.getElementById('number-input')
const expiryMonth = document.getElementById('expiry-month')
const expiryYear = document.getElementById('expiry-year')
const cvc = document.getElementById('cvc')
const btn = document.querySelector('.btn')
const nameError = document.querySelector('.name-error')
const numberError = document.querySelector('.card-number-error')
const expiryError = document.querySelector('.expiry-error')
const cvcError = document.querySelector('.cvc-error')
const completedPage = document.getElementById('completed')
let numbers = /^[0-9]+$/;

let form = false;
btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (nameInput.value === "") {
        nameError.classList.add('error')
        form = false;
    } else {
        nameError.classList.remove('error')
        form = true;

    }
    if (!numberInput.value.match(numbers)) {
        numberError.classList.add('error')
        form = false;

    } else {
        numberError.classList.remove('error')
        form = true;

    }
    if (expiryMonth.value > 12 && !expiryMonth.value.match(numbers)) {
        expiryError.classList.add('error')
        form = false;

    } else {
        expiryError.classList.remove('error')
        form = true;

    }
    if (expiryYear.value < 22 && ! expiryYear.value.match(numbers)) {
        expiryError.classList.add('error')
        form = false;

    } else {
        expiryError.classList.remove('error')
        form = true;

    }

    if (form) {
       
        completedPage.classList.add('completed')
        cardNo.innerHTML = numberInput.value
        cardName.innerHTML = nameInput.value
        cardCvc.innerHTML = cvc.value
    }
    
})



