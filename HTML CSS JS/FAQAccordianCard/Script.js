const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        

        if(toggle.parentNode.classList.contains('active')){
            remove()
        }
        else{
            remove()
            toggle.parentNode.classList.add('active')
        }
    })
})


let remove = () => {
    toggles.forEach(toggle => {
        toggle.parentNode.classList.remove('active')
    })
}