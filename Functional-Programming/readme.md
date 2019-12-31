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
