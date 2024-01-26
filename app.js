
function increment() {
    const countElement = document.getElementById("counternum");
    let count = parseInt(countElement.textContent);
    count++;
    countElement.textContent = count;
}
const btnincrement = document.getElementById("btnincrement");
btnincrement.addEventListener("click", increment);

function  decrement() {
    const countelement  = document.getElementById("counternum");
    let count = parseInt(countelement.textContent);
     count--;
    countelement.textContent = count; 
}

const btndicrement = document.getElementById("btndicrement");
btndicrement.addEventListener("click",decrement);