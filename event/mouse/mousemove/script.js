const div = document.querySelector('.block');
const rgb = document.querySelector('.rgb');

div.addEventListener('mousemove', runEvent);

function runEvent(e) {
    div.style.background = `rgb(${e.offsetX}, ${e.offsetY}, ${(e.offsetX + e.offsetY) / 2})`
    rgb.innerText = `Color: ${e.offsetX}, ${e.offsetY}, ${(e.offsetX + e.offsetY) / 2}`;
    console.log(`Event type - ${e.type}`);
}