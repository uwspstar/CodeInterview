# Advanced Javascript

### Javascript Runtime
https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13760086#overview

### trick to avoid overstack flow
```
setTimeout(removeItemsFromList, 0); // move to API JS runtime, event loop handle it
```
### Node.js 
- a javascript runtime build on v8 engine

### Execution Context
- https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13772854#overview
- ```global object``` & ```this```
### Lexical Environment
- execution context is going to tell me which lexical environment which planet is currently running
### Hoisting
- only work with ```var``` and ```function``` key words
- https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13772862#overview

### Function Invocation
- Function Expression
```
const fn = function () { ... }
const fn = () => { ... }
```
- Function Declaration
```
function fn () { ... }
```
### arguments Keyword
- https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13772874#overview
### Variable Environment
```
//Variable Environement

function two() {
  var isValid; // 5. isValid is undefined in this execution context.
}

function one() {
  var isValid = true; // 3. this variable will be put into the new execution context. It's own variable environment
  two(); // 4. New execution context created.
}

var isValid = false; // 1. Global variable is created as undefined. Then during execution, it changes in memory to false.
one() // 2. New execution context is created on top of the stack.

```
