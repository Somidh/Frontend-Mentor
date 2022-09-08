const amounts = document.querySelectorAll('.amount')
const graphs = document.querySelectorAll('.graph')


fetch('./data.json')
.then((res) => res.json())
.then((data) => {
   for(let i = 0; i < amounts.length; i++){
        amounts[i].innerHTML = data[i].amount
   }
})

graphs.forEach((graph) => {
    graph.addEventListener('mouseover', () => {
      graph.parentElement.classList.add('hovered')
    })
    graph.addEventListener('mouseout', () => {
      graph.parentElement.classList.remove('hovered')
    })
})





