/*const vehicle ={
  type: 'car',
  color: 'red/black',
  year: 2021,
  wasInAccident: true,
  engine: {
    type: 'electric',
    capacity: 132,
    battery: 2500,
  }
};

vehicle.sex = 'male'; //CREATE
console.log(vehicle.type); //READ
vehicle.type = 'horse'; //UPDATE
delete vehicle.wasInAccident; //DELETE

console.log(vehicle); */
//console.log(vehicle.engine.battery);
//console.log(vehicle['engine']['type']);
//console.log(vehicle.engine['type']);
//let key = prompt('Enter feature name');
//console.log( vehicle[key] );


/*var lang = prompt('Enter locale', 'ua');

var hello = {
  en: 'Hello',
  ru: 'Привет',
  [lang]: prompt(`Translate "Hello" to ${lang}`)
}; */


const vehicle ={
  type: 'car',
  color: 'red/black',
  year: 2021,
  wasInAccident: true,
  engine: null
};

let element = document.createElement('div'); //create new <div>
document.querySelector('body').appendChild(element);
//document.body  --- the same

let listNode = document.createElement('dl');
element.appendChild(listNode);

for (let key in vehicle){
  console.log(vehicle[key]);

  let titleNode = document.createElement('dt');
  listNode.appendChild(titleNode);
  titleNode.innerText = key;

  let definitionNode = document.createElement('dd');
  listNode.appendChild(definitionNode);
  definitionNode.innerText = vehicle[key] || '-';
}