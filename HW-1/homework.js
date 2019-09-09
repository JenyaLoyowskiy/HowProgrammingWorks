    //ИДЕНТИФИКАТОРЫ
let name = 'Jenya';
const year = 2002;
let printName = name => {
  console.log(`Hello ${name}!`);
}
printName('Jenya');
printName(name);
printName(year);

    //ЦИКЛЫ
for (let i = 15; i <= 30; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

let range = (start, end) => {
  for (start; start < end; start++) {
    if (start % 2 !== 0) {
      console.log(start);
    }
  }
}
range(15,30)


    //ФУНКЦИИ
let average = (a,b) => {
  console.log((a+b)/2);
}

let square = x => {
  return Math.pow(x, 2);
}

let cube = x => {
  return Math.pow(x, 3);
};

for (let i = 0; i < 3; i++) {
  average(square(i), cube(i));
}

    //ОБЪЕКТЫ
const first_obj = {
  name: 'Jenya'
}
let second_obj = {
  name: 'Jenya'
}
first_obj.name = 'Vova';
second_obj.name = 'Vova';

console.log(first_obj.name, second_obj.name);

// first_obj = {
//   name: 'Egor'
// }
// second_obj = {
//   name: 'Egor'
// }
console.log(first_obj.name, second_obj.name);

let createUser = (name, phone) => {
  console.log({name: name, phone: phone});
}

createUser('Marcus Aurelius','+380445554433');

    //МАССИВЫ
let people = [{name: 'Jack', phone: '+380445554433'},{name: 'Bob', phone: '+380957248835'},{name: 'Rick', phone: '+483480234866'}];

let findPhoneByName = name => {
  for (let i = 0; i < people.length; i++) {
    if (people[i].name == name) {
      console.log(people[i].phone);
    }
  }
}
findPhoneByName('Rick');

    //КОЛЛЕКЦИИ ХЕШ-ТАБЛИЦЫ
let object = {
  "Jack": "+380445554433",
  "Bob": "+380957248835",
  "Rick": "+483480234866"
}

let findPhoneByName = name => {
  for ( const n in object) {
    if (n == name) {
      console.log(object[n])
    }
  }
}
findPhoneByName('Bob');
