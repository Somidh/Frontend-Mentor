const numbers = document.querySelectorAll('li')
const button = document.getElementById('submit-btn')
const rating = document.querySelector('.rating-section')
const submitted = document.querySelector('.submitted-section')
const span = document.querySelector('.span')
var rate
numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        rate = e.target.textContent
        span.innerHTML = `You selected ${rate} out of 5`
        if (number.classList.contains('color')) {
            rate = ''
            remove();
        span.innerHTML = `You selected nothing`


        } else {
            remove();
            number.classList.add('color')
        } 


    })
})


function remove() {
    numbers.forEach((number) => {
        number.classList.remove('color');
    })
}

button.addEventListener('click', () => {
    rating.classList.add('active')
    submitted.classList.remove('active')


})
// let rate =

console.log(rate)