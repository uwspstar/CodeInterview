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
