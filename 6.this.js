/*const test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
};
console.log(test.func());
*/
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