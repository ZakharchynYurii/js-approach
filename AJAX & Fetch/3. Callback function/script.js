const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
]

function  createPost(post, cb) {
    setTimeout(function () {
        posts.push(post);
        cb();
    }, 3000)
}

function getPosts() {
    setTimeout(function () {
        let output = '';

        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        })

        document.body.innerHTML = output;
    }, 1000)
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);



