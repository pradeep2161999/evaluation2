function calculate(){
var birthyear = window.prompt("Enter you year:");
var currentyear = window.prompt("Enter your current year:");
var age = currentyear - birthyear;
return age;
}
console.log("The age is " + calculate())    