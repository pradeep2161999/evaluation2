/*let
let name = 'sara';
{
    let name = 'Peter';
    console.log(name);
}
console.log(name);
//const
const name = sara;

let x = function (x,y){
    return x*y;
}
console.log(x(3,2));
// function expression using arrow function
let x = (x, y) => x * y;
console.log(x(7,3));

class Person {
  constructor(name) {
    this.name = name;
  }
}
const person1 = new Person('John');

console.log(person1.name); 
function sum(x,y=5){
    console.log(x+y);
}
sum(5,10);
const firstname = "Jack";
const lastname ="sparrow";
console.log('Hello'+ ' ' +firstname+ ' '+lastname);

const firstname1 = "Jack";
const lastname1 ="sparrow";
console.log(`Hello ${firstname1} ${lastname1} `);
//Destructuring 
const person ={
  name:'Pradeep',
  age:24,
  gender:'male'

}
let name = person.name;
let age = person.age;
let gender = person.gender;

console.log(name);
console.log(age);
console.log(gender);
const person ={
  name:'Pradeep',
  age:24,
  gender:'male'

}
let { name,age,gender}=person;
console.log(name);
console.log(age);
console.log(gender);
// rest parameter
function show (a,b,...args){
  console.log(a);
  console.log(b);
  console.log(args);
}
show ('one','two','three','four','five')*/
//spread parameter
let arr1 = ['one','two'];
let arr2 = [...arr1,'three','four','five'];
console.log(arr2);

