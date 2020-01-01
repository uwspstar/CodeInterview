# Functional Programming
- https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13828366#overview
### First Class Citizens
- https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13781264#overview

### Pure Functions
- cannot be 100% pure
###  Idempotent
```
Math.abs(Math.abs(10))
```
### Imperative vs Declarative
- https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13829074#overview

### Higher Order Functions and Closures
- https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13781272#overview
```
// Make a generic multiplyBy HOF that can make other functions like: multiplyByTwo, multiplyByTen and so on...
const multiplyBy = (num1) => {
  return function (num2) {
    return num1 * num2;
  }
}

const multiplyByTwo = multiplyBy(2);
multiplyByTwo(4)
```
```
//HOF
const hof = (fn) => fn(5);
hof(function a(x){ return x})
//Closure
const closure = function() {
  let count = 55;
  return function getCounter() {
    return count;
  }
}

const getCounter = closure()
getCounter()
getCounter()
getCounter()
```
```
const giveAccessTo = (name) =>
  'Access Granted to ' + name;

function authenticate(person) {
  let array = [];
  // you can add checks here for person.level
  for (let i = 0; i < 50000; i++) {
    array.push(i)
  }
  return giveAccessTo(person.name)
}

function letPerson(person, fn) { // ++ We now tell the function what data to use when we call it not when we define it + tell it what to do.
  if (person.level === 'admin') {
    return fn(person)
  } else if (person.level === 'user') {
    return fn(person)
  }
}

function sing(person) {
  return 'la la la my name is ' + person.name
}

letPerson({level: 'user', name: 'Tim'}, sing)
```
### Closures
```
function a() {
  let grandpa = 'grandpa'
  return function b() {
    let father = 'father'
    return function c() {
      let son = 'son'
      return `${grandpa} > ${father} > ${son}`
    }
  }
}

a()

//closures and higher order function
function boo(string) {
  return function(name) {
    return function(name2) {
      console.log(`hi ${name2}`)
    }
  }
}

const boo2 = (string) => (name) => (name2) => console.log(`hi ${name2}`)

boo('hi')('john')('tanya');

// AHH! HOW DOES IT REMEMBER THIS 5 years from now?
booString = boo2('sing');
booStringName = booString('John');
booStringNameName2 = booStringName('tanya')
```



