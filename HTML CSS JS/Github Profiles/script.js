// const APIURL = 'https://api.github.com/users/'

const input = document.getElementById('input')
const lightMode = document.querySelector('.light')
const darkMode = document.querySelector('.dark')
const main = document.getElementById('main')
const form = document.getElementById('search')

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
            <p>Joined ${user.created_at}</p>
        </div>
    </div>
  
    <div class="about-user">
        <p>    ${user.bio}
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
            <p>${user.location}</p>
        </div>
        <div class="link">
            <i class="fa-solid fa-link"></i>
            <a href="#">${user.blog}</a>
        </div>
        <div class="twitter">
            <i class="fa-brands fa-twitter"></i>
            <p>@${user.twitter_username}</p>
        </div>
        <div class="github-link">
          <i class="fa-solid fa-building-user"></i>
            <p>${user.company}</p>
        </div>
    </div>
</div>
    `

    main.innerHTML = card
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