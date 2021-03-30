const div = document.querySelector('.block');

div.addEventListener('mouseup', runEvent);
div.addEventListener('mousedown', runEvent);

function runEvent(e) {
    console.log(`Event type - ${e.type}`);
}