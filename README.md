# Javascript Evaluation - 2

## 1. Display prime numbers 1 to 200?

```Javascript

function prime(){
    let num = 200;
    for(let i=2; i<=num ; i++){
    let a =0;
    for(let j=2; j<i; j++){
      if(i%j==0){
          a = 1;
          break;
      }
  }
  if(i> 1 && a == 0){
      console.log(i);
  }
}
}prime()
```

```OUtput:
PS F:\Yavar\evaluation-2> node 1.primenumber.js
2
3
5
7
11
13
17
19
23
29
31
37
41
43
47
53
59
61
67
71
73
79
83
89
97
101
103
107
109
113
127
131
137
139
149
151
157
163
167
173
179
181
191
193
197
199
```

## 2. From two sorted arrays, how would you find the common numbers?

```Javascript
var a = [1,3,4,6,7,8,9];
var b = [1,4,6,7,10];
for(var i =0;i<a.length;i++){
    for(var j = 0;j<a.length;j++){
        if(a[i] === b[j] ){
            console.log(a[i]);
        }
}
}
```

```Output
PS F:\Yavar\evaluation-2> node 2.sorted.js
1
4
6
7
```

## 3. Explain about function Anatomy, Anonymous function and Assigning function to a

## variable with an example?

### Anatomy function:

The function consist of the function keyword follwed by the name and paranthesis containing a list of parameter and a function body enclosed in bracket.

```Javascript
function c(a,b){
    return a*b;
}console.log(c(9,7));
```

```Output:
 PS F:\Yavar\evaluation-2> node 3.function.js
63
```

### Anonymous function:

It is the function that has no name or we can say which is without any name.when we create an anonymous function it is declared without any identifier so it is difference between normal function and anonymous function

```Javascript
setTimeout(function(){
    console.log("print something in 1 second");
    console.log(arguments);
},1000);
```

```Output:
PS F:\Yavar\evaluation-2> node 3.function.js
print something in 1 second
[Arguments] {}
```

### Assigning function:

Anonymous function can be assigned to a variable making them a named function again.by doing this can seperate the function definitionfrom its use in a object.

```Javascript
let print = function(){
    console.log("print something in 1 second");
    console.log(arguments);
}
print();
```

```Output:
PS F:\Yavar\evaluation-2> node 3.function.js
print something in 1 second
[Arguments] {}
```

## 4. Show an example ofSafeguarding function parameters?

The solution is to check safe guard the function value.javascript have built in directive type of that we can use before calling the function.

```Javascript
function safeguarding(fun) {
  console.log("type of fun is", typeof fun)
  if (typeof fun === "function") {
    fun();
  } else console.log("fun is not a function");
}

let a = 10;
safeguarding(arguments);
safeguarding(a);

function arguments() {
  console.log("hiiii");
}
```

```Output:
PS F:\Yavar\evaluation-2> node 4.safeguard.js
type of fun is function
hiiii
type of fun is number
fun is not a function
```

## 5.Explain this keyword with an example?

- In javascript this keyword refers to the object.
- This is not a variable.It is a keyword you cannot change the value of this.
- This keyword refers to different objects depending on how it is used.
- In an object method this refers to the object.Alone this refers to the global object.
- In a function this refers to the global object.In a function in strict mode this is undefined.
- In a event this refers to the element that received the event.
- Methods like call(),apply()and bind() can refers this to any object.

```Javascript
const person ={
    firstname : "pradeep",
    lastname : "tcrr",
    id : 007,
    fullname : function(){
        return this.firstname + " " + this.lastname;
    }
}
console.log(person.fullname());
```

```Output:
PS F:\Yavar\evaluation-2> node 5.this.js
pradeep tcrr
```

## 6. How ‘this’ inside the function and class?

### this inside the function

The value of this inside a function is usually defined by the function's call

```Javascript
const test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
};
console.log(test.func());
```

```Output
PS F:\Yavar\evaluation-2> node 6.this.js
42
```

### this inside the class

This keyword is used inside of a class and refers to the current instance.

```Javascript
class Person {
  constructor (name) {
    this.name=name;
  }

  greet() {
    console.log('Hi! My name is' + this.name);
  }
}

var john = new Person('John Doe');
john.greet();
```

```Output
PS F:\Yavar\evaluation-2> node 6.this.js
Hi! My name isJohn Doe
```

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

reduce() method applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.

```Javascript
var total = [0, 1, 2, 3].reduce(function(a, b){ return a + b; });
console.log("total is : " + total );
```

```Output:
PS F:\Yavar\evaluation-2> node 7.map.js
total is : 6
```

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

## 8. Count Total number of zeros from 1 up to 50

```Javascript
function number(from, to) {
  let a = 0;
  for (i = from; i <= to; i++) {
    let numericString = i.toString();
    let arr = numericString.split("");
    for (j = 0; j < arr.length; j++) {
      if (arr[j] == "0") {
        a = a + 1;
      }
    }
  }
  console.log(`Total number of Zero between ${from} to ${to} is ${a}`);
}
number(1, 50);
```

```Output:
PS F:\Yavar\evaluation-2> node 8.count.js
Total number of Zero between 1 to 50 is 5
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

## 10. Write a program for calculating age using Date of birth? (1990)

```Javascript
function calculate(){
var birthyear = window.prompt("Enter you year:");
var currentyear = window.prompt("Enter your current year:");
var age = currentyear - birthyear;
return age;
}
console.log(calculate())
```

```Output:
The age is 32
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

l

## 12. What is Arity in Javascript? Explain with a real time example.

Arity is the number of argument a function takes.You can access function arity via function.length property.

```Javascript
function f(a,b,c){}
let arity = f.length;
console.log(arity);
```

```Output
PS F:\Yavar\evaluation-2> node 12.arity.js
3
```

## 13. What is Currying in Javascript? Explain with a real time example.

It is a technique in functional programming, transformation of the function of multiple arguments into several functions of a single argument in sequence.

```Javascript
let planets =(a) => (b) => "Planets are" +a+ "and" +b;
console.log(planets("venus")("mars"));
```

```Output
PS F:\Yavar\evaluation-2> node 12.arity.js
Planets arevenusandmars
```

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

- it export a variable using the export keyword in front of that variable declaration. You can also export a function and a class by doing the same.
- import a variable using import keyword. You can specify one of all the members that you want to import from a JavaScript file

## Javascript promises:

The promise object represents the eventual completion of an synchronous operation and its resulting value.

```Javascript
var promise = new Promise(function(resolve, reject) {
    resolve('Geeks For Geeks');
})

promise
    .then(function(successMessage) {
        console.log(successMessage);
    }, function(errorMessage) {
        console.log(errorMessage);
    })
```

```Output
PS F:\Yavar\evaluation-2> node 14.es.js
Geeks For Geeks
```

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

## 15. What is an anonymous function? Where do we use it? Why do we need it?

- it is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.
- it defines something that is unknown or has no identity. In JavaScript, an anonymous function is that type of function that has no name or we can say which is without any name. When we create an anonymous function, it is declared without any identifier.
- The advantage of an anonymous function is that it does not have to be stored in a separate file.

```Javascript
setTimeout(function () {
    console.log('Execute later after 1 second')
}, 1000);

```

```Output:
PS F:\Yavar\evaluation-2> node 14.es.js
Execute later after 1 second
```

## 16. List the differences between named function and assigning functions to variable with

## example.

### named function:

The way of function can be reffered to a function that employs the function name keyword followed by a name that can be used as the callback function.

```Javascript
function subtract(num1, num2) {
  return num1 - num2;
}
console.log(subtract(9,2));
```

```Output:
PS F:\Yavar\evaluation-2> node 16.named.js
7
```

### Assigning function:

Anonymous function can be assigned to a variable making them a named function again.by doing this can seperate the function definitionfrom its use in a object.

```Javascript
let print = function(){
    console.log("print something in 1 second");
}
print();
```

```Output
PS F:\Yavar\evaluation-2> node 16.named.js
print something in 1 second
```
