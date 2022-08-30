const claimBtn = document.querySelector('.claim-btn')
const firstNameError = document.querySelector('.first-name-error')
const lastNameError = document.querySelector('.last-name-error')
const emailError = document.querySelector('.email-error')
const passwordError = document.querySelector('.password-error')
const firstNameInput = document.querySelector('.first-name')
const lastNameInput = document.querySelector('.last-name')
const emailInput = document.querySelector('.email')
const passwordInput = document.querySelector('.password')
const input = document.querySelectorAll('input')

claimBtn.addEventListener('click', (e) => {
    e.preventDefault();
        input.forEach(inp => {
            if(inp.value === ""){
                inp.parentElement.classList.add('error')
            }
            else{
                inp.parentElement.classList.remove('error')
            }
            
        })
})
