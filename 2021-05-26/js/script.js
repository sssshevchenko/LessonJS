/*
let count = +prompt('Enter maximum count', 10);

let sum = 0;
let i = 1;

while (i <= count){

  if (i % 2 === 1){
    sum += i;
  }

  i++;
}

alert(`Sum = ${sum}`);
*/

/*
let areHandsClean = false;

do {
  alert('Washing hands');
  areHandsClean = confirm('Are hands clean');
} while(!areHandsClean);

alert('Give a handshake to your buddy');
*/

/*
let i;
let rnd = null;

for(i = 0;; i++){
  rnd = Math.random();

  if(rnd > 0.2){
    break;
  }
}

alert(`${rnd} ${i}`);
*/

/*
var sum = 0;

for(var x = 0;;x++){
  let input = prompt('Enter 0 number', 10);

  if(input === null){
    break;
  }

  sum += parseInt(input);
}

alert(`average` + sum/x);
alert(`sum =` + sum);
alert(`quantity =` + x);
*/


for (let i = 0; i < 10; i++){
  for (let j = 1; j < 10; j++){
    console.log(`${i} * ${j} = ${i * j}`);
  } 
}