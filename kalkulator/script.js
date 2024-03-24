'use strict';


let clear = document.getElementById('clear'),
    del = document.getElementById('del'),
    result = document.getElementById('result'),
    display = document.getElementById('display'),
    buttons = document.getElementById('buttons');

function add_symbol(elem) {
    display.textContent += elem.textContent
}
let btn;
for (let btn of buttons.children){
    if (!btn.id){
        btn.onclick = (event) => add_symbol(event.target)
    }

}
clear.onclick = () =>display.textContent = '';
result.onclick  =() =>{
    display.textContent = eval(display.textContent)
}
del.onclick = () =>{
    display.textContent = display.textContent.slice(0, -1)
}