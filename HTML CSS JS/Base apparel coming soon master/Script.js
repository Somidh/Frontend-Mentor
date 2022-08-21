const email = document.getElementById('email-input');
const submit = document.querySelector('.arrow')
const errorMessage = document.getElementById('error-message');
const emailEmptyMessage = document.getElementById('empty-email-message');
const errorSign = document.querySelector('.error')
let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
submit.addEventListener('click', (e) => {

    if (!email.value) {
        e.preventDefault();
        emailEmptyMessage.innerHTML = "You must type in an email !"
        emailEmptyMessage.style.color = 'red'
        email.style.border = '2px solid red'
        errorSign.classList.add('active');
    }
    else {
        emailEmptyMessage.innerHTML = ' Email Submited';
        emailEmptyMessage.style.color = 'Green';
        errorSign.classList.remove('active');
        email.value = ''

    }
})

checkEmail()


// if (!filter.test(email.value)) {
//    alert('please provide a valid email address');
//    email.focus
// }
// else{
//     errorMessage.innerHTML = ''
// }


function checkEmail() {

    var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
 }
}
