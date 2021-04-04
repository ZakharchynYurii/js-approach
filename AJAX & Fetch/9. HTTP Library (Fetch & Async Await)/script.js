const http = new EasyHTTP();

const data = {
    name: 'Yurii',
    secondName: 'Zakharchyn',
    email: 'zakharchyn@gmail.com'
}

http.get('https://jsonplaceholder.typicode.com/users')
    .then(users => {
        console.log(users);
    })
    .catch(err => {
        console.log(err);
    })

http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(user => {
        console.log(user)
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

http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(msg => {
        console.log(msg);
    })
    .catch(err => {
        console.log(err);
    })
