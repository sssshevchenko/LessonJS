const canvas = document.querySelector('#paper-sheet');
const lineWidthElement = document.querySelector('#line-width');
const strokeStyleElement = document.querySelector('#stroke-style')

const paperSheet = {
    ctx: canvas.getContext('2d'),
    isEditMode: false,
    coords: {
        x1: null,
        y1: null,
        x2: null,
        y2: null
    }
};

paperSheet.ctx.lineWidth = 1;
paperSheet.ctx.strokeStyle = 'black';
paperSheet.ctx.lineCap = 'round';


canvas.addEventListener('mousedown', (event) => {
    paperSheet.isEditMode = true;

    paperSheet.ctx.lineWidth = lineWidthElement.value;
    paperSheet.ctx.strokeStyle = strokeStyleElement.value;

    paperSheet.coords.x1 = event.offsetX;
    paperSheet.coords.y1 = event.offsetY;
});

canvas.addEventListener('mouseup', (event) => {
    paperSheet.isEditMode = false;
});

canvas.addEventListener('mousemove', (event) =>{
    if(!paperSheet.isEditMode) return;

    paperSheet.coords.x2 = event.offsetX;
    paperSheet.coords.y2 = event.offsetY;

    paperSheet.ctx.beginPath();
    paperSheet.ctx.moveTo(paperSheet.coords.x1, paperSheet.coords.y1);
    paperSheet.ctx.lineTo(paperSheet.coords.x2, paperSheet.coords.y2);
    paperSheet.ctx.stroke();
    paperSheet.ctx.closePath();

    paperSheet.coords.x1 = paperSheet.coords.x2;
    paperSheet.coords.y1 = paperSheet.coords.y2;
});