const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const btn = document.querySelector('.btn');

btn.addEventListener('click', runEvent);

function runEvent(e) {
    console.log(`Event type - ${e.type}`);
    e.preventDefault()
}

btn.addEventListener('dblclick', runEvent);

function runEvent(e) {
    console.log(`Event type - ${e.type}`);
    e.preventDefault();
}