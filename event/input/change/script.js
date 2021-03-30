const form = document.querySelector('form');
const selectItem = document.querySelector('#select');
const title = document.querySelector('h1');

selectItem.addEventListener('change', runEvent)

function runEvent(e){
    title.innerHTML = e.target.value;
    console.log(e.target.value);
    console.log(`Event type ${e.type}`);
}
