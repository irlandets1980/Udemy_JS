// //let timerId = setTimeout(sayHello, 3000);
// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);
// function sayHello(){
//     //alert('Hay!');
//     console.log('Hay!');
// }

// let timerId = setTimeout(function log() {
//     console.log('Hay!');
//     setTimeout(log, 2000);
// });


let btn = document.querySelector('.btn'),
    box = document.querySelector('.box');

function myAnimation() {
    let pos = 0;

    let   id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval();
        }else{
            pos++;
            box.style.top = pos+'px';
            box.style.left = pos+'px';
        }
    }

}
btn.addEventListener('click',myAnimation);

let btnBlock = document.querySelector('.btn-block'),
btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click',function(event){
//if(event.target && event.target.tagName == 'BUTTON'){
    //if(event.target && event.target.classList.contains('first')){//проверяем если первая кнопка нажата
    if(event.target && event.target.matches('button.first')){
    console.log('аа');
}
});