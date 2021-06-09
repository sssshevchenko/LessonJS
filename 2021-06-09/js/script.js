//создайте массив из минимум 100 случайных целых чисел

/*const numbers = [];
const count = 100;

for(let i = 0; i < count; i++){
  const rnd = parseInt(Math.random() * 100);
  numbers.push(rnd);
}

console.log('initial data', numbers);

const uniqueNumbers = [];
for (let i = 0; i < numbers.length; i++){
  const number = numbers[i];

  let isUnique = true;
  for(let j = 0; j < uniqueNumbers.length; j++){
    if(uniqueNumbers[j] === number){
      isUnique = false;
      break;
    }
  }

  if(isUnique){
    uniqueNumbers.push(number);
  }
}

console.log('uniqueNumbers', uniqueNumbers);   */




/*
Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями, у некоторых есть поле middlename. Используя встроенные функции массивов:  
Отфильтруйте пользователей младше 18 лет
Добавьте каждому объекту поле fullName, которое является конкатенацией firstname, middlename и lastname, если есть все три, и только firstname и lastname, если middlename нет
Сформируйте новый массив, который содержит только полное имя пользователей
*/

/*const users = [];
for(let i = 0; i < 3; i++){
  const value = prompt('Enter user data in format "Firstname Lastname Age"');

  if(value === null) break;

  const [firstname, lastname, age] = value.split(' ');
  console.log(firstname, lastname, age);

  const newUser = {
    firstname,
    lastname,
    age: +age
  };

  users.push(newUser);
}

console.log('users', users);
const adults = users.filter((user) => user.age >= 18);

console.log('adults', adults);

users.forEach(function(user) {
  user.fullName = `${user.lastname} ${user.firstname}`;
});

console.log('users with full name', users);

const fullNames = users.map(function(user){
  return user.fullName;
});

console.log('fullNames', fullNames);  */




//Используя замыкание, напишите функцию createTimer, которая использует метод performance.now() для получения текущей временной метки и служит для замера времени выполнения другого кода:

/*function createTimer(){
  const initialTime = performance.now();

  return () => {
    return performance.now() - initialTime;
  };
}

var timer = createTimer();

alert('!');

alert(parseInt (timer () / 1000) + 's' ); */



// ЗАДАЧКА ДЛЯ СОБЕСА!!!!

// 1 способ

/*for(var i = 0; i < 10; i++){
  (function(){
    setTimeout(function(){
    console.log(j);
    }, j * 1000);
  })(i);
}   */

// 2 способ

for(let i = 0; i < 10; i++){
    setTimeout(function(){
    console.log(i);
    }, i * 1000);
}