const input = document.getElementById('input')
// const lightMode = document.querySelector('.light')
// const darkMode = document.querySelector('.dark')
const main = document.getElementById('main')
const form = document.getElementById('search')
const text = "Not Available"
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];



//   lightMode.addEventListener('click', () => {
//     lightMode.classList.remove('active')
//     darkMode.classList.add('active')
//   })
//   darkMode.addEventListener('click', () => {
//     lightMode.classList.add('active')
//     darkMode.classList.remove('active')
//   })


function getUser(username) {
    fetch('https://api.github.com/users/' + username)
    .then((res) => {
        if(res.status == 404 || res.status == 403){
            createErrorCard("No user found with this username")
        }
        else{
            return res.json()
        }
    })
    .then((user) => {
        createCard(user)
    })
}





function createCard(user) {

    const card = 
    `
 <div class="card">

    <div class="avatar">
        <img src="${user.avatar_url}" alt="">
        <div class="user-name">
            <h1>${user.name}</h1>
            <span>@${user.login}</span>
            <p>${joinedDate(user)}</p>
        </div>
    </div>
  
    <div class="about-user">
        <p>    ${userbio(user)}
            </p>
    
    </div>
    <div class="user-details">
        <ul>
            <li>
                Repos
                <strong>${user.public_repos}</strong>
            </li>
            <li>
                Followers
                <strong>${user.followers}</strong>
            </li>
            <li>
                Following
                <strong>${user.following}</strong>
            </li>
        </ul>
    </div>
    <div class="other-details">
        <div class="location">
            <i class="fa-solid fa-location-dot"></i>
            <p id="userLocation">${userLocation(user)}</p>
        </div>
        <div class="link">
            <i class="fa-solid fa-link"></i>
            <a id="userLink" href="#">${blog(user)}</a>
        </div>
        <div class="twitter">
            <i class="fa-brands fa-twitter"></i>
            <p id="userTwitter">${twitter(user)}</p>
        </div>
        <div class="github-link">
          <i class="fa-solid fa-building-user"></i>
            <p id="user-github-link">${githubLink(user)}</p>
        </div>
    </div>


    
</div>
    `

 

    main.innerHTML = card
}



function userbio(user){
    if(user.bio === null || user.bio){
        return "This person has not added anything in his bio"
    }
}


function joinedDate(user) {
    const date = user.created_at

        let day = date.slice(8,10)
        let month = date.slice(5,7)
        let year = date.slice(0,4)

        if(month < 10){
            month = date.slice(6,7)
        }

        return `Joined ${day} ${months[month]} ${year}`
}


function userLocation(user){
    const text = "Not Available"

    if(user.location === null){
        return text
    }
    else{
        return `@${user.location}`
    }

}


function twitter(user){

    if(user.twitter === undefined){
        return text
    }
    else{
        return `${user.twitter}`
    }

}
function blog(user){

    if(user.blog === ''){
        return text
    }
    else{
        return `${user.blog}`
    }

}
function githubLink(user){

    if(user.company === null){
        return text
    }
    else{
        return `${user.company}`
    }

}


function createErrorCard(msg) {
    const mesg = 
    `
    <h1 class="error-msg">${msg}</h1>
    `
    main.innerHTML = mesg
}

form.addEventListener('submit' ,(e) => {
    e.preventDefault();

    const user = input.value
    if(user) {
        getUser(user)
        search.value = ''
    }
})