const dailyEl = document.querySelector('.daily')
const weeklyEl = document.querySelector('.weekly')
const monthlyEl = document.querySelector('.monthly')
const hrs = document.querySelectorAll('.hrs')
const lastWeekHrs = document.querySelectorAll('.last-week-hrs')
const activity = document.querySelectorAll('.activity')

const dailyData = () => {
    fetch("./data.json").then((res) => res.json()).then((data) => {
        hrs.forEach((e, i) => {
            hrs[i].innerHTML = data[i].timeframes.daily.current + "hrs"
            lastWeekHrs[i].innerHTML = `Last Week - ${
                data[i].timeframes.daily.previous
            }hrs`
        })
    })
} 
dailyData()

const weeklyData = () => {
    fetch("./data.json").then((res) => res.json()).then((data) => {
        hrs.forEach((e, i) => {
            hrs[i].innerHTML = data[i].timeframes.weekly.current + "hrs"
            lastWeekHrs[i].innerHTML = `Last Week - ${
                data[i].timeframes.weekly.previous
            }hrs`

        })
    })
}
const monthlyData = () => {
    fetch("./data.json").then((res) => res.json()).then((data) => {
        hrs.forEach((e, i) => {
            hrs[i].innerHTML = data[i].timeframes.monthly.current + "hrs"
            lastWeekHrs[i].innerHTML = `Last Week - ${
                data[i].timeframes.monthly.previous
            }hrs`

        })
    })
} 


dailyEl.addEventListener('click', () => {
    dailyEl.classList.add('active')
    weeklyEl.classList.remove('active')
    monthlyEl.classList.remove('active')
    dailyData()
})
weeklyEl.addEventListener('click', () => {
    weeklyEl.classList.add('active')
    dailyEl.classList.remove('active')
    monthlyEl.classList.remove('active')
    weeklyData()

})
monthlyEl.addEventListener('click', () => {
    monthlyEl.classList.add('active')
    dailyEl.classList.remove('active')
    weeklyEl.classList.remove('active')
    monthlyData()

})
