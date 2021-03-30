const div = document.querySelector('.block');

div.addEventListener('mouseover', runEvent);
div.addEventListener('mouseout', runEvent);

function runEvent(e) {
    console.log(`Event type - ${e.type}`);
}