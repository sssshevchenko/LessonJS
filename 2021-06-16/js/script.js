document.querySelector('.blue').addEventListener('click', function(event) {
    event.stopPropagation();
    console.log('blue');
});

document.querySelector('.green').addEventListener('click', function(event) {
    event.stopPropagation();
    console.log('green');
});

document.querySelector('.red').addEventListener('click', function() {
    console.log('red');
});

document.querySelector('a').addEventListener('click', (event) =>{
    event.preventDefault();  //предотвращает поведение элемента по умолчанию (переход по href)
    event.stopPropagation(); //останавливает фазу всплытия событий
    console.log('click on link');
});

//---------------------------------------------------------------------------------------------

document.querySelector('.blue').addEventListener('mousedown',function (event) {
    event.stopPropagation();
    console.log('mouse down');
});

document.querySelector('.blue').addEventListener('mouseup',function (event) {
    event.stopPropagation();
    console.log('mouse up');
});

document.querySelector('.blue').addEventListener('mousemove',function (event) {
    event.stopPropagation();
    console.log('mouse move');
});