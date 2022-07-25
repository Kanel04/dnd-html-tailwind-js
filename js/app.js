const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

/* draggable element */
const item = document.querySelector('.item');

item.addEventListener('dragstart', dragStart);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('border-blue-600')
        // e.target.classList.add('hide');
    }, 0);
}


/* drop targets */


boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.remove('bg-yellow-500')
    e.target.classList.add('bg-green-500');
}

function dragLeave(e) {
    e.target.classList.remove('bg-green-500');
}

function drop(e) {
    const classes = "item bg-yellow-500 w-10 h-10 items-center ml-2 mt-2"
    e.target.classList.remove('drag-over');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    const element = document.createElement('div');
    
    classes.split(' ').forEach((classe)=>{
        element.classList.add(classe)
    })

    // add it to the drop target
    e.target.appendChild(element);

    // display the draggable element
    draggable.classList.remove('hide');
}