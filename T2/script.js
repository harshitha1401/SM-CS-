let count = 0;

const key = document.getElementById("key");
const code = document.getElementById("code");
const eventType = document.getElementById("event");
const time = document.getElementById("time");
const history = document.getElementById("history");
const total = document.getElementById("count");

function addEvent(e){

count++;

total.textContent = count;

key.textContent = e.key;

code.textContent = e.code;

eventType.textContent = e.type;

time.textContent = new Date().toLocaleTimeString();

const item = document.createElement("li");

item.textContent =
`${e.type} | ${e.key} | ${e.code}`;

history.prepend(item);

if(history.children.length>10){

history.removeChild(history.lastChild);

}

}

document.addEventListener("keydown",addEvent);

document.addEventListener("keyup",addEvent);
