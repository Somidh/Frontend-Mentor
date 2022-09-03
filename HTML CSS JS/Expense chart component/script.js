// let myRequest = new Request('./data.json')

fetch('./data.json')
.then((data) => {
    return data.json()
})
.then((actualData) => {
    console.log(actualData[2].amount)
    console.log(actualData)
})