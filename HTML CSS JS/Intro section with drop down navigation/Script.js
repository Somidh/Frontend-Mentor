const featureDrop = document.querySelector('.feature-btn');
const companyDrop = document.querySelector('.company-btn')
const featureList = document.querySelector('.feature-list')
const companyList = document.querySelector('.company-list')
const featureBtn = document.querySelector('.feature-drop')
const companyBtn = document.querySelector('.company-drop')
const sideNav = document.querySelector('.side-nav');
const closeBtn = document.getElementById('close-btn');
const bars = document.getElementById('bars');

featureDrop.addEventListener('click', () => {
    featureList.classList.toggle('active');
    featureBtn.classList.toggle('active')
})

companyDrop.addEventListener('click', () => {
    companyList.classList.toggle('active');
    companyBtn.classList.toggle('active');
})

closeBtn.addEventListener('click', () => {
    sideNav.classList.add('active');
})

bars.addEventListener('click', () => {
    sideNav.classList.remove('active')
})