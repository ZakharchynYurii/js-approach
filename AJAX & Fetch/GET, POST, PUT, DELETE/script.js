const http = new easyHTTP;

//create data
const data = {
    title: 'Test title',
    body: 'test body'
}


// METHOD GET
http.get('https://jsonplaceholder.typicode.com/posts', (err, posts) => {
    if(err){
        console.log(err)
    }else{
        console.log(posts)
    }
})

// METHOD POST
http.post('https://jsonplaceholder.typicode.com/posts', data, (err, post) => {
    if(err){
        console.log(err);
    }else{
        console.log(post)
    }
})

// METHOD PUT
http.put('https://jsonplaceholder.typicode.com/posts/1', data, (err, post) => {
    if(err){
        console.log(err)
    }else{
        console.log(post)
    }
})

// METHOD DELETE
http.delete('https://jsonplaceholder.typicode.com/posts/5', (err, post) => {
    if(err){
        console.log(err);
    }else{
        console.log('Post deleted');
    }
})