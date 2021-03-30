//set item to local Storage
let item = 'Yurii';
localStorage.setItem('itemKey', item);

//set session to Storage
let item = 'Yurii';
sessionStorage.setItem('itemKey', item);

//remove from local storage
localStorage.removeItem('itemKey');

//get from local storage
const item = localStorage.getItem('itemKey');

//clear local storage
localStorage.clear();