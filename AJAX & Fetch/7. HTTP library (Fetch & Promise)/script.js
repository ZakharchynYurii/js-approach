const http = new EasyHTTP();

const data = {
    name: 'Yurii',
    username: 'Zakharchyn',
    email: 'zakharchyn@gamal.com'
}

http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err);
    })

http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })

http.put('https://jsonplaceholder.typicode.com/users/4', data)
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })

http.delete('https://jsonplaceholder.typicode.com/users/4')
    .then(data => {
        console.log('Post deleted');
    })
    .catch(err => {
        console.log(err)
    })