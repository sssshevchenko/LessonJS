/*
let x = +prompt('Enter X');
let y = +prompt('Enter Y');

let result;

if (x < y){
    result = `Минимум X - ${x}`;
} else if (y<x){
    result = `Минимум Y - ${y}`;
}

alert(result); 
*/


/*
const age = +prompt('Enter your age', '');

if (age >= 20 && age < 27){
    alert('Send a ticket');
} else{
    alert('Be alive');
}
*/


let greeting = '';
let lang = prompt('Enter language (ru, en, de)', 'ru').toLowerCase();

/*
if(lang ==='ru'){
    greeting = 'Привет';
} else if(lang === 'en'){
    greeting = 'Hello';
} else if(lang === 'de'){
    greeting = 'Gutten Tag';
} else{
    greeting = 'GTFO';
}
*/

switch (lang){
    case 'ru' : greeting = 'Привет'; break;
    case 'en' : greeting = 'Hello'; break;
    case 'de' : greeting = 'Gutten Tag'; break;
    default: greeting = 'GTFO';
}

alert(greeting);