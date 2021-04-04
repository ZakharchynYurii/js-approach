const btn = document.querySelector('#btn');
const output = document.querySelector('#output');

btn.addEventListener('click', loadData);

function loadData(){
    //create an XML XHR Object
    const xhr = new XMLHttpRequest();

    //OPEN
    xhr.open('GET', 'data.txt', true);

    // NEW
    xhr.onload = function () {
        if(this.status === 200){
            output.innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    // OLD
    // xhr.onreadystatechange = function(){
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText)
    //     }
    // }

    xhr.onerror = function(){
        console.log('error');
    }

    xhr.send();

    //readyState
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

    //HTTP Status
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"
}
