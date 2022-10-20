const placeholders = document.querySelectorAll('.placeholder');
const item = document.querySelector('.item');   

for (const placeholder of placeholders){
    placeholder.addEventListener('dragover', dragOver);
    placeholder.addEventListener('dragenter', dragEnter);
    placeholder.addEventListener('dragleave', dragLeave);
    placeholder.addEventListener('drop', drop);
}


item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

function dragStart(e){
    e.target.classList.add('hold');
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

function dragEnd(e){
    e.target.classList.remove('hold', 'hide');
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.target.classList.add('hovered');
}

function dragLeave(e){
    e.target.classList.remove('hovered');
}

function drop(e){
    e.target.classList.remove('hovered');
    e.target.append(item);
}