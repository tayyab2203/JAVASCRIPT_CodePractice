let btns = document.querySelectorAll("button")

for (btn of btns) {
    // btn.onclick = sayHello;
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);
}
function sayHello(){
    alert("Heloo Tayyab");
}
function sayName(){
    alert("This is JS Name Function");
}