- Reduce Function 
https://codeburst.io/learn-understand-javascripts-reduce-function-b2b0406efbdc
- Array.find()
```
var numbers = [1, 2, 3, 4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 10;
}


the function takes 3 arguments:

The item value
The item index
The array itself
```
- Array.findIndex()
```
var numbers = [1, 2, 3, 4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 10;
}
```
