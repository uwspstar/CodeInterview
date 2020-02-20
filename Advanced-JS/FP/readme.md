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
