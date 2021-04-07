class UI {
    constructor() {
        this.posts = document.querySelector('.posts');
    }

    showPosts(posts){
        let output = '';

        posts.forEach((post, index) => {
            output += `
                <div class="post-item" data-id="${index}"> 
                    <h1>${post.title}</h1>
                    <p>${post.body}</p>
                    <div class="delete">
                        <button>DELETE</button>
                    </div>
                </div> 
            `;
        })

        this.posts.innerHTML = output;
    }

    deletePost(posts, id, parentElement){

        posts.forEach(post => {
            if(id = post.id){
                parentElement.remove();
            }
        })
    }
}