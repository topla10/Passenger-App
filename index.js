

let countEl = document.getElementById("countElement");
let saveEl = document.getElementById("saveElement");
// console.log(countEl);
let result = "";
let count = 0;

function incrementNumber() {
    if(count < 0){
        count = 0;
        countEl.textContent = count;
    }
    count++;
    countEl.textContent = count;
}

function decreaseNumber() {
    if(count < 0){
        count = 0;
        countEl.textContent = count;
    }
    count--;
    countEl.textContent = count;
}

function saveNumber() {
    result = count + " - ";
    saveEl.textContent += result;
    count = 0;
    countEl.textContent = 0;
}
function clearAll() {
    saveEl.textContent = "Previous entries: "; //temporary solution
}


