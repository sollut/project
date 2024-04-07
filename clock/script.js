'use stric'

let area = document.getElementById('area')
let rect = document.getElementById('rect')


area.onclick = (event)=>{
    console.log(event)
    console.log('offsetX:',event.offsetX,'offsetY',event.offsetY)
    console.log('pageX:',event.pageX,'pageY',event.pageY)
    console.log('clientX:',event.clientX,'clientY',event.clientY)
}

function elemDrag(event){
    console.log('Мышь зажата')
    let shiftX = event.clientX - rect.getBoundingClientRect().left
    let shiftY = event.clientY - rect.getBoundingClientRect().top

    rect.style.position = 'absolute'
    moveAt(event.pageX,event.pageY)
    document.addEventListener('mousemove', elemMove)
    document.addEventListener('mouseup',elemDrop)
        

    function elemDrop(even){
        console.log('Мышь отпущена')
        document.removeEventListener('mousemove', elemMove)
        document.removeEventListener('mouseup',elemDrop)
    }

    function elemMove(event){
        console.log(event.offsetX,event.offsetY)
        moveAt(event.pageX,event.pageY)
    }
        
    function moveAt (pageX,pageY){
        rect.style.left = pageX - rect.offsetWidth / 2 - shiftX +'px'
        rect.style.top = pageY - rect.offsetHeight / 2 - shiftY +'px'
    }
    
}
rect.onmousedown = elemDrag
rect.ondragstart =function (){return false}; 

rect.onmouseover = function(){
    rect.style.backgroundColor = 'black'
    rect.style.transitionDuration = '1000ms'
}
rect.onmouseout = function(){
    rect.style.backgroundColor = 'red'
}
    
