# Javascript Evaluation - 2

## 5.Explain this keyword with an example?

- In javascript this keyword refers to the object.
- This is not a variable.It is a keyword you cannot change the value of this.
- This keyword refers to different objects depending on how it is used.
- In an object method this refers to the object.Alone this refers to the global object.
- In a function this refers to the global object.In a function in strict mode this is undefined.
- In a event this refers to the element that received the event.
- Methods like call(),apply()and bind() can refers this to any object.

## 7. Difference between map, reduce and filter methods? With an example

### map

The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.

```Javascript
let numbers = [1,3,5,7,8,10];
let result = numbers.map(value => value +1);
console.log(result);
console.log(numbers);
```

```Output:
PS F:\Yavar\evaluation-2> node 7.map.js
[ 2, 4, 6, 8, 9, 11 ]
[ 1, 3, 5, 7, 8, 10 ]
```

### reduce

### filter

Return value:new array consist of array of an items that passed a condition

```Javascript
let numbers = [0,10,2,3,4,5,6,7];
let condition = value => value < 10;
let filtered = numbers.filter(condition);
console.log(filtered);
console.log(numbers);
```

```Output:
PS F:\Yavar\evaluation-2> node 7.map.js
[
  0, 2, 3, 4,
  5, 6, 7
]
[
  0, 10, 2, 3,
  4,  5, 6, 7
]
```

## 9. The following array of numbers show the missing number? ([1,2,3,5,6])

```Javascript
var a = [1,2,3,5,6],
count = 6,
missing = [];
for (var i =1; i<=count; i++){
    if (a.indexOf(i) == -1){
        missing.push(i);
    }
}
console.log(missing);
```

```Output
PS F:\Yavar\evaluation-2> node missing.js
[ 4 ]
```

## 11. In the Javascript function, what are the differences between call by value and reference?

### call by value:

- The original value is not modified on changes in other variables.
- Actual and copied variables will be created in different memory location.
- On passing variable in a function any changes made in the passed variable will not affect the original one.

```Javascript
// call by value
var a = 3;
var b;
b = a;
a = 5;
console.log(a);
console.log(b);
```

```Output
PS F:\Yavar\evaluation-2> node call.js
5
3
```

### call by reference

- The original variable get modified on changes in other variables.
- Actual and copied variables are created in the same memory location.
- On passing a variable in a function any changes made in the passed parameter will updated

```Javascript
var c = { greeting :' welcome' };
var d;
d = c;
c.greeting =   'Welcome to dubai';
console.log(c);
console.log(d);
```

```Javascript
PS F:\Yavar\evaluation-2> node call.js
{ greeting: 'Welcome to dubai' }
{ greeting: 'Welcome to dubai' }
```

## !@

## 14.What is ES6?

# ECMA - European Computer Manufacturers Association

It is a non profit organisation that develops standards in computer hardware,communications and programming language.
Javascript ES-6 is the newest version of javascript that was intoduced in 2015.ECMA script is the standard that the javascript is used.ECMA script provides the specification of how javascript works.

## Javascript let:

Let is used to declare variable.Variable declared using let is a block scoped.this means that are only accessible in the particular block

```Javascript
let name = 'sara';
{
    let name = 'Peter';
    console.log(name);
}
console.log(name);
```

```Javascript
PS F:\Yavar\evaluation-2> node es.js
Peter
sara
```

## Javascript const:

The const statement is used to declare constants in javascript.once declared you cannot change the const variable.

```Javascript
const name = sara;
```

## Javascript Arrow Function:

In ES6 javascript is used arrow function to create a function expression.

```Javascript
let x = function (x,y){
    return x*y;
}
console.log(x(3,2));
```

```Javascript
PS F:\Yavar\evaluation-2> node es.js
6
```

```Javascript
let x = (x, y) => x * y;
console.log(x(7,3));
```

```Javascript
PS F:\Yavar\evaluation-2> node es.js
21
```

## Javascript Classes

Javascript class is used to create an object

```Javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}
const person1 = new Person('John');

console.log(person1.name);
```

```Javascript
PS F:\Yavar\evaluation-2> node es.js
John
```

## Default Parameter values:

You can pass the default values in the function parameter

```Javascript
function sum(x,y){
    console.log(x+y);
}
sum(5,10);
```

```Javascript
PS F:\Yavar\evaluation-2> node es.js
15
```

## Template string:

The template literal has made it easier to include variable inside a string.

```Javascript
const firstname = "Jack";
const lastname ="sparrow";
console.log('Hello'+ ' ' +firstname+ ' '+lastname);
```

```Output:
PS F:\Yavar\evaluation-2> node es.js
Hello Jack sparrow
```

```Javascript
const firstname1 = "Jack";
const lastname1 ="sparrow";
console.log(`Hello ${firstname1} ${lastname1} `);
```

```Output:
PS F:\Yavar\evaluation-2> node es.js
Hello Jack sparrow
```

## Javascript Destructring:

The destructring syntax make its easier to assign values.

```Javascript
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
```

```Output:
PS F:\Yavar\evaluation-2> node es.js
Pradeep
24
male
```

```Javascript
const person ={
  name:'Pradeep',
  age:24,
  gender:'male'

}
let { name,age,gender}=person;
console.log(name);
console.log(age);
console.log(gender);
```

```Output:
PS F:\Yavar\evaluation-2> node es.js
Pradeep
24
male
```

## Javascript import and export:

## Javascript promises:

The promise object represents the eventual completion of an synchronous operation and its resulting value.

## Javascript rest and spread parameter:

The rest parameter to represent an indefinite number of arguments as an array.

```Javascript
function show (a,b,...args){
  console.log(a);
  console.log(b);
  console.log(args);
}
show ('one','two','three','four','five')
```

```Output:
PS F:\Yavar\evaluation-2> node es.js
one
two
[ 'three', 'four', 'five' ]
```

You can use the spread syntax to copy the items in single array.

```Javascript
let arr1 = ['one','two'];
let arr2 = [...arr1,'three','four','five'];
console.log(arr2);
```

```Output:
PS F:\Yavar\evaluation-2> node es.js
[ 'one', 'two', 'three', 'four', 'five' ]
```
