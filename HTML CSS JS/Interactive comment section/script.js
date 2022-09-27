fetch('/data.json').then(res => res.json()).then(data => {
    console.log(data)
    let comment = data.comments
    comment.forEach((com, idx) => {
        newComment(data, idx)
    })
    
})


const main = document.querySelector('.main')





function newComment(data, idx) {
    let comment = `

      <div class="comment">
            <div class="user-info">
                <img class="avatar" src="/images/avatars/image-amyrobson.png" alt="">
                <div class="user-name">amyrobson</div>
                <div class="comment-duration">10 months ago</div>
            </div>
            <div class="comment-text">
                <p>Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.
                    You've nailed the design and the responsiveness at various breakpoints works really well.</p>
            </div>
            <div class="votes">
                <img class="up-vote" src="/images/icon-plus.svg" alt="">
                <div class="vote-count">12</div>
                <img class="down-vote" src="/images/icon-minus.svg" alt="">
            </div>
            <div class="reply-btn">
                <button class="new-reply-btn"><img src="/images/icon-reply.svg" alt="">Reply</button>
            </div>
        </div>
    `

    main.innerHTML = comment
}


function newReply(data) {
    let reply = `<div class="new-reply">
                    <img class="avatar" src="${data.currentUser.image.png}" alt="">
                    <textarea class="new-reply-textarea">@${data.currentUser.username},</textarea>
                    <button class="add-reply-btn cmn-btn">REPLY</button>
                </div> `
        main.innerHTML = reply
}
