const http = new EasyHTTP;
const ui = new UI;

document.addEventListener('DOMContentLoaded', getPosts);

function getPosts() {
    http.get('api/posts.json')
        .then(posts => {
            ui.showPosts(posts);
        })
        .catch(err => {
            console.log(err)
        })
}

document.querySelector('.posts').addEventListener('click', (e) => {
    if(e.target.parentElement.classList.contains('delete')){
        const id = parseInt(e.target.parentElement.parentElement.dataset.id);
        const parentElement = e.target.parentElement.parentElement

        http.get('api/posts.json')
            .then(posts => {
                ui.deletePost(posts, id, parentElement)
            })
            .catch(err => {
                console.log(err)
            })
    }

    e.preventDefault();
});


