# Prototypal Inheritance
-  C# or Java use something called ```classical inheritance```. Javascript uses ```prototype``` all inheritance.
- array object: everything is an object in the array object gets access to the properties and methods of the object in JavaScript.
- functions object: through this chain that we call prototype all inheritance functions get access to the methods and properties of objects.
- Don't do ```__proto__```, ```bad performance```. Show with bind.
 
```
let dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    return 5
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`
    }
  }
}

let lizard = {
  name: 'Kiki',
  fight() {
    return 1
  }
}
// Don't do this, bad performance. Show with bind.
lizard.__proto__ = dragon; // inheritance
dragon.isPrototypeOf(lizard);
console.log(lizard.fire)
console.log(lizard.sing())
const lizardFire =dragon.sing.bind(lizard)
console.log(lizardFire())
```
- Object.prototype.hasOwnProperty()
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
```
//Every Prototype chain links to a prototype object{}
function multiplyBy5(num) {
  return num*5
}

multiplyBy5.__proto__
Function.prototype
multiplyBy5.__proto__.__proto__
Object.prototype
multiplyBy5.__proto__.__proto__.__proto__
typeof Object
typeof {}
```
- ```__proto__``` (pointer) links to ```prototype``` object
- ``__proto__``` lives inside ```prototype``` object, only ```functions```` have the prototype property
```
// Create our own prototypes:
var human = {mortal: true}
var socrates = Object.create(human);
human.isPrototypeOf(socrates); // true
```
- typeof Object // function , Object is construct function to create a new object
- type of {} // object
- type of Object.prototype  // object
```
//Array.map() => to print '🗺'
Array.prototype.map = function()  { // what happens with arrow function here?
  arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push((this[i]+'🗺'));
  }
  return arr;
}
console.log([1,2,3].map())

//Date object => to have method .yesterday() which shows you yesterday's day in 'YYYY-MM-DD' format.
Date.prototype.lastYear = function(){
  return this.getFullYear() - 1;
}

new Date('1900-10-10').lastYear()
// don't worry if you didn't get this... we will expand on this later.
```
```
// How would you be able to create your own .bind() method using call or apply.

Function.prototype.bind = function(whoIsCallingMe){
  const self = this;
  return function(){
    return self.apply(whoIsCallingMe, arguments);
  };
}
```
