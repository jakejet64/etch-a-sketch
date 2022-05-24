let gridSize = 16;
let board = [];

const container = document.querySelector('.container');

function makeNewBlock(){
    let ret = document.createElement('div');
    ret.classList.add('block');
    return(ret);
}

function setActive(){
    this.setAttribute('style', 'background-color:red');
}

function initializeBoard(){
    for(let i = 0; i < gridSize; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for(let j = 0; j < gridSize; j++){
            const newChild = makeNewBlock();
            newChild.addEventListener('mouseover', setActive, { once: true });
            row.appendChild(newChild);
        }
        board[i] = row;
    }
}

initializeBoard();