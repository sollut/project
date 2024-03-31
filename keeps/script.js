'use strict'

let new_keep = document.getElementById('new_keep')
let new_keep_btn =document.getElementById('new_keep_btn')
let keeps = document.getElementById('keeps') 

new_keep.value = localStorage.getItem('input')
new_keep.oninput = save_input
function save_input(event){
    console.log(event.target.value)
    localStorage.setItem('input', event.target.value)
}

let keeps_array = JSON.parse(localStorage.getItem('keeps'))||[];
render_keep();
new_keep_btn.onclick = add_keep

function render_keep(){
    keeps.innerHTML =''
    for (let value of keeps_array){
        const keep_template = `
        <div class='col border p-3 m-3'>
            <div class='border p-2'>
                <p>${value}</p>
            </div>
        </div>
        `;
        keeps.insertAdjacentHTML('afterbegin', keep_template)
    }
}
function add_keep(event){
    
    if (!!new_keep.value){
        keeps_array.push(new_keep.value);
        localStorage.setItem('keeps', JSON.stringify(keeps_array))
        render_keep()
        new_keep.value = ''
        localStorage.removeItem('input')
    }
}
let is_hidden = true;

new_keep.hidden = is_hidden
new_keep_btn.hidden = is_hidden
