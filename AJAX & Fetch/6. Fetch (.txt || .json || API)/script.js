document.querySelector('.btn1').addEventListener('click', getText)

function getText() {
    fetch('text.txt')
        .then(res => {
            return res.text();
        })
        .then(res => {
            console.log(res)
            document.getElementById('output').innerHTML = res;
        })
        .catch(err => {
            console.log(err)
        })
}

document.querySelector('.btn2').addEventListener('click', getJSON);

function getJSON() {
    fetch('users.json')
        .then(users => {
            return users.json();
        })
        .then(users => {
            let output = '';

            users.forEach(user => {
                output += `<li>${user.name}</li>`;
            })

            document.getElementById('output').innerHTML = output;
        })
}

document.querySelector('.btn3').addEventListener('click', getAPI);

function getAPI() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(users =>{
            return users.json()
        })
        .then(users => {
            let output = '';

            users.forEach(user => {
                output += `<li>${user.name}</li>`;
            })

            document.getElementById('output').innerHTML = output;
        })
}