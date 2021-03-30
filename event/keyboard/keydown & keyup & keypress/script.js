const form = document.querySelector('form');
const taskInput = document.querySelector('#task');

form.addEventListener('keydown', runEvent);

function runEvent(e) {
    console.log(`Event type - ${e.type}`);
    e.preventDefault();
}

form.addEventListener('keyup', runEvent);

function runEvent(e) {
    console.log(`Event type - ${e.type}`);
    e.preventDefault();
}

form.addEventListener('keypress', runEvent);

function runEvent(e) {
    console.log(`Event type - ${e.type}`);
    e.preventDefault();
}