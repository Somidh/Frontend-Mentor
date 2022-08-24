const claimBtn = document.querySelector('.claim-btn')
const firstNameError = document.querySelector('.first-name-error')
const lastNameError = document.querySelector('.last-name-error')
const emailError = document.querySelector('.email-error')
const passwordError = document.querySelector('.password-error')
const firstNameInput = document.querySelector('.first-name')
const lastNameInput = document.querySelector('.last-name')
const emailInput = document.querySelector('.email')
const passwordInput = document.querySelector('.password')

claimBtn.addEventListener('click', () => {

    if(firstNameInput.value === ""){
       
        firstNameError.parentNode.classList.add('error')
    }
    if(lastNameInput.value === ""){
        lastNameError.parentNode.classList.add('error')

    }
    if(emailInput.value === ""){
        emailError.parentNode.classList.add('error')

    }
    if(passwordInput.length > 5){
        passwordError.parentNode.classList.add('error')

    }
})
