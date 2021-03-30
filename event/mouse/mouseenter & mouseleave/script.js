const div = document.querySelector('.block');

div.addEventListener('mouseenter', runEvent);
div.addEventListener('mouseleave', runEvent);

function runEvent(e) {
    console.log(`Event type - ${e.type}`);
}