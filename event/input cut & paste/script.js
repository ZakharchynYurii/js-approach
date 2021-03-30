const form = document.querySelector('form');
const taskInput = document.querySelector('#task');

taskInput.addEventListener('cut', runEvent) // Ctrl + X
taskInput.addEventListener('paste', runEvent2) // Ctrl + V

function runEvent(e){
    console.log(`Event type ${e.type}`);
}

function runEvent2(e){
    console.log(`Event type ${e.type}`);
}