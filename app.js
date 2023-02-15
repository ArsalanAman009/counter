let count = 0;
function increment() {
  let countEl = document.getElementById("count-el");

  count += 1;
  countEl.innerText = count;
  console.log(count);
}
let counter = 0;
function clear2() {
  let countEl = document.getElementById("count-el");

  count = 0;
  countEl.innerText = count;
  console.log(counter);
}
function clear5() {
  let decrement1 = 0;
  let countEl = document.getElementById("count-el");

  count = count - 1;
  countEl.innerText = count;
  console.log(count);
}
function save() {
  let saveEl = document.getElementById("save-el");
  let conterstr = count + " - ";
  saveEl.innerText += conterstr;
}

function clear3  () {
  let saveEl = document.getElementById("save-el");
  connt1 = "Previous Entries:";
  saveEl.innerText = connt1;
}
  
