const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const input = document.querySelector('.title');

taskInput.addEventListener('input', runEvent)

function runEvent(e){
    input.innerHTML = e.target.value;

    console.log(`Event type ${e.type}`);
}
