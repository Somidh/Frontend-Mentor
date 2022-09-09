const dailyEl = document.querySelector('.daily')
const weeklyEl = document.querySelector('.weekly')
const monthlyEl = document.querySelector('.monthly')
const hrs = document.querySelectorAll('.hrs')
const lastWeekHrs = document.querySelectorAll('.last-week-hrs')
const activity = document.querySelectorAll('.activity')



dailyEl.addEventListener('click', () => {
    dailyEl.classList.add('active')

    if(weeklyEl.classList.contains('active')){
        weeklyEl.classList.remove('active')
    }
    if(monthlyEl.classList.contains('active')){
        monthlyEl.classList.remove('active')
    }
})
weeklyEl.addEventListener('click', () => {
    weeklyEl.classList.add('active')
    if(dailyEl.classList.contains('active')){
        dailyEl.classList.remove('active')
    }
    if(monthlyEl.classList.contains('active')){
        monthlyEl.classList.remove('active')
    }
})
monthlyEl.addEventListener('click', () => {
    monthlyEl.classList.add('active')

    if(dailyEl.classList.contains('active')){
        dailyEl.classList.remove('active')
    }
    if(weeklyEl.classList.contains('active')){
        weeklyEl.classList.remove('active')
    }
})


fetch('./data.json')
.then((res) => res.json())
.then((data) => {
    console.log(data)
   
})

