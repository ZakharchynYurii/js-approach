const form = document.querySelector('form');
const taskInput = document.querySelector('#task');

taskInput.addEventListener('focus', runEvent)
taskInput.addEventListener('blur', runEvent2)


function runEvent(e){
    if(taskInput.getAttribute('placeholder') !== ''){
        taskInput.setAttribute('placeholder', '');
    }
}

function runEvent2(e) {
    if(taskInput.getAttribute('placeholder') === ''){
        taskInput.setAttribute('placeholder', 'Enter your email');
    }
}