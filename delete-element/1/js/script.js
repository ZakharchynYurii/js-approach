let taskList = document.querySelector('.collection');
let taskItem = document.querySelectorAll('.collection-item');

let deleteTask = document.querySelectorAll('.delete-icon');
for(let i = 0; i < deleteTask.length; i++){
    deleteTask[i].addEventListener('click', function (e){
        let deleteThisItem = this.parentElement;
        deleteThisItem.remove();

        e.preventDefault();
    })
}
