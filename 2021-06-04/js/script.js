/*function sum(x, y) {
  alert(x+y);
}

sum(1, 2);  */



/*function sum(){
  let result = 0;

  for(let of arguments){
    result += Number(value);
  }

  //alert(result);
  return result;
}

let sumResult = sum(1, 2, 3, '4');
alert(sumResult);  */



/*function isPalindrom(str){
  
  str = str.toLowerCase().replace(/\s/g, '');

  for (let i = 0; i < str.length; i++){
    if(str[i] !== str[str.length - i]){
      return false;
    }
  }
  return true;
}

let result = isPalindrom('Аргентина манит негра');
alert(result); */


const users = [
  {firstname: 'John', lastname: 'Doe'},
  {firstname: 'Jane', lastname: 'Doe'},
  {firstname: 'Babe', lastname: 'Doe'},
];

function addElement(item){
  const nodeTitle = document.createElement('dt');
  const nodeDefinition = document.createElement('dd');
  nodeTitle.innerText = item.firstname;
  nodeDefinition.innerText = item.lastname;

  return {
    nodeTitle,
    nodeDefinition
  }
}
 
const nodeList = document.createElement('dl');
document.body.appendChild(nodeList);

for(let user of users){
  const nodes = addElement(user);
  nodeList.appendChild(nodes.nodeTitle);
  nodeList.appendChild(nodes.nodeDefinition);
}