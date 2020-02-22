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
