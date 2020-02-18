# Object Oriented Programming
- https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13821828#overview
### Factory Functions : the function create obj for us, only functions have prototype
```
// factory function make/create
function createElf(name, weapon) {
  //we can also have closures here to hide properties from being changed.
  return {
    name: name,
    weapon: weapon,
    atack() {
      return 'atack with ' + weapon
    }
  }
}
const sam = createElf('Sam', 'bow');
const peter = createElf('Peter', 'bow');

sam.atack()
```
### Object.create()
```
const elfFunctions = {
  attack: function() {
    return 'atack with ' + this.weapon  // not weapon only, need to use this.weapon
  }
}
function createElf(name, weapon) {
  //Object.create creates __proto__ link
  newElf = Object.create(elfFunctions)
  newElf.name = name;
  newElf.weapon = weapon
  return newElf
}


const sam = createElf('Sam', 'bow');
const peter = createElf('Peter', 'bow');
sam.attack()
```
### Constructor Functions : need to use 'new' keyword
- https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13821850#overview
```
//Constructor Functions
function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function() { 
  return 'atack with ' + this.weapon
}
const sam = new Elf('Sam', 'bow');
const peter = new Elf('Peter', 'bow');
sam.attack()
```
```
//Constructor Functions
function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function() { 
  return 'atack with ' + this.weapon
}
const sam = new Elf('Sam', 'bow');
const peter = new Elf('Peter', 'bow');
sam.attack()
```
### ES6 Classes
```
class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return 'atack with ' + this.weapon
  }
}

const fiona = new Elf('Fiona', 'ninja stars');
console.log(fiona instanceof Elf) // 
const ben = new Elf('Ben', 'bow');
fiona.attack()
```
### this - 4 Ways
```
// new binding
function Person(name, age) {
  this.name = name;
  this.age =age;
  console.log(this);
}

const person1 = new Person('Xavier', 55)

//implicit binding
const person = {
  name: 'Karen',
  age: 40,
  hi() {
    console.log('hi' + this.name)
  }
}

person.hi()

//explicit binding
const person3 = {
  name: 'Karen',
  age: 40,
  hi: function() {
    console.log('hi' + this.setTimeout)
  }.bind(window)
}

person3.hi()

// arrow functions
const person4 = {
  name: 'Karen',
  age: 40,
  hi: function() {
    var inner = () => {
      console.log('hi ' + this.name)
    }
    return inner()
  }
}

person4.hi()
```
