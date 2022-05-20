/*
// call by value
var a = 3;
var b;
b = a;
a = 5;
console.log(a);
console.log(b);
*/
// call by reference
var c = { greeting :' welcome' };
var d;
d = c;
c.greeting =   'Welcome to dubai';
console.log(c);
console.log(d);