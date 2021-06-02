/*const n = +prompt('Enter count of elements', 10);
const data = [];

for(let i = 0; i < n; i++){
    const number = (Math.random() * 10).toFixed(2);
    data.push(number);
} 

const powData = [];
//for(let i = 0; i < data.length; i++){
for(let value of data){
    let accumulator = 1;
    for(let i = 1; i <= 5; i++){
        accumulator *= value
    }

    powData.push(accumulator);
}

console.log(powData); */




/*const array = [];
let n = +prompt('Enter number: ', '');

for(let i = 0; i < n; i++){
    let symbol = +prompt('Enter symbol: ', '');
    array.push(symbol);
}

let sum = 0;

for(let i = 0; i < array.length; i++){
    sum = sum + array[i];
}

alert(sum); */




/*const multiplicationTable = [];

for(let i = 1; i < 10; i++){
    const tmpTable = [];
    for(let j = 1; j < 10; j++){
        const value = `${i} x ${j} = ${i*j}`;
        tmpTable.push(value);
    }

    multiplicationTable.push(tmpTable);
}

console.log(multiplicationTable); */



const values = [
    {value: true, title: 'true'},
    {value: false, title: 'false'},
    {value: 1, title: '1'},
    {value: 0, title: '0'},
    {value: '', title: '""'},
    {value: '1', title: '"1"'},
    {value: '0', title: '"0"'},
    {value: null, title: 'null'},
    {value: undefined, title: 'undefined'},
    {value: {}, title: '{}'},
    {value: [], title: '[]'},
    {value: NaN, title: 'NaN'}
];

const  tableNode = document.createElement('table');
document.body.appendChild(tableNode);

const captionNode = document.createElement('tr');
tableNode.appendChild(captionNode);
captionNode.innerHTML = '<td></td>';

for(let i = 0; i < values.length; i++){
    const tdNode = document.createElement('td');
    captionNode.appendChild(tdNode);
    tdNode.innerText = values[i];
}

const valuesNode = document.createElement('tr');
tableNode.appendChild(valuesNode);
valuesNode.innerHTML = '<td>if (value)</td>';

for(let i = 0; i < values.length; i++){
    const tdNode = document.createElement('td');
    valuesNode.appendChild(tdNode);
    //tdNode.innerText = !!values[i].value;
    tdNode.classList.add(!!values[i].value ? 'true' : 'false');
}