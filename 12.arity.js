/*
//Arity
function f(a,b,c){}
let arity = f.length;
console.log(arity);
// currying
let planet = function(a){
    return function(b){
        return "favourite planets are" + a + " and " +b;
    };
};
let favouritePlanets = planet("Jupiter");

console.log(favouritePlanets("Earth"));
console.log(favouritePlanets("Jupiter"));
console.log(favouritePlanets("Mars"));
*/
let planets =(a) => (b) => "Planets are" +a+ "and" +b;
console.log(planets("venus")("mars"));