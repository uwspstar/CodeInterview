# Functional Programming
### Pure Functions
- https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13828374#overview
```
//Side effects:
const array = [1,2,3];
function mutateArray(arr) {
  arr.pop()
}
function mutateArray2(arr) {
  arr.forEach(item => arr.push(1
  ))
}
//The order of the function calls will matter.
mutateArray(array)
mutateArray2(array)
array
```
### Idempotence
- predict result
```
// Idempotence:
function notGood() {
  return Math.random()
  // new Date();
}

function good() {
  return 5
}

Math.abs(Math.abs(10))
```
### Imperative vs Declarative
- tell what need to do, not how to do it
### Immutability
- https://medium.com/@dtinth/immutable-js-persistent-data-structures-and-structural-sharing-6d163fbd73d2
- https://vimeo.com/showcase/3953264/video/166790294
- React elements are immutable.
```
const obj = {name: 'Andrei'}
function clone(obj) {
  return {...obj}; // this is pure
}

function updateName(obj) {
  const obj2 = clone
  (obj);
  obj2.name = 'Nana'
  return obj2
}

const updatedObj = updateName(obj)
console.log(obj, updatedObj)
```
### Higher Order Functions and Closure
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

### Currying
```
//Currying
const multiply = (a, b) => a * b
const curriedMultiply = (a) => (b) => a * b
curriedMultiply(5)(20)
const multiplyBy5 = curriedMultiply(5)
multiplyBy5(20)
```
### Partial Application
```
//Partial Application
const multiply = (a, b, c) => a * b * c
const partialMultiplyBy5 = multiply.bind(null, 5)
partialMultiplyBy5(10, 20)
```
### memoize
```
//learn to cache
function addTo80(n) {
  return n + 80;
}

addTo80(5)

let cache = {};
function memoizeAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log('long time');
    const answer = n + 80;
    cache[n] = answer;
    return answer;
  }
}

// console.log(1, memoizeAddTo80(6))
// // console.log(cache)
// // console.log('-----------')
// console.log(2, memoizeAddTo80(6))

// let's make that better with no global scope. This is closure in javascript so.
function memoizeAddTo80(n) { 
  let cache = {};
  return function(n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('long time');
      const answer = n + 80;
      cache[n] = answer;
      return answer;
    }
  }
}

const memoized = memoizeAddTo80();
console.log(1, memoized(6))
// console.log(cache)
// console.log('-----------')
console.log(2, memoized(6))
```
### Compose and Pipe
```
fn1(fn2(fn3(50)));

compose(fn1, fn2, fn3)(50) //Right to lext
pipe(fn3, fn2, fn1)(50)//left to right

const compose = (f, g) => (a) => f(g(a))
const pipe = (f, g) => (a) => g(f(a))
const multiplyBy3AndAbsolute = compose((num) => num*3, Math.abs)
console.log(multiplyBy3AndAbsolute(-50))
```
