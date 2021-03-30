const form = document.querySelector('form');
const taskInput = document.querySelector('#task');

form.addEventListener('submit', runEvent);

function runEvent(e) {
    console.log(`Event type - ${e.type}`);
    e.preventDefault();
}