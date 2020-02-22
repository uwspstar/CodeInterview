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