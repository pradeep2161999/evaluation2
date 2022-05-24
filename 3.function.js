/*function c(a,b){
    return a*b;
}console.log(c(9,7));

setTimeout(function(){
    console.log("print something in 1 second");
    console.log(arguments);
},1000);
*/
let print = function(){
    console.log("print something in 1 second");
    console.log(arguments);
}
print();