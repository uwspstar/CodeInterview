```
var color = blue

infact in javascript, declar on top, assign value later, it is Hoisting
var color;  ( top of the file)

color = blue
```
```
something happen for function expression

var getTotal = function(){
}


will do " var getTotal;"  on the top

then "getTotal = function (){...}

```

Hoisting
// tab 1
 
console.log(color);  // Undefined
 
var color = "blue";
 
console.log(color); // blue
 
 
 
//tab 2 .( reason)
 
var color;
 
console.log(color);
 
color = "blue";
 
console.log(color);
 
 
 
// tab 3 function expression hoisting
 
console.log(getProduct(2, 3)); // Undefined
 
var getProduct = function(num1, num2) {
  return num1 * num2;
};
 
console.log(getProduct(2, 3)); 
 
 
 
// tab 4 function declaration hoisting to top as whole
 
console.log(getProduct(2, 3));
 
function getProduct(num1, num2) {
  return num1 * num2;
}
 
 
 
// tab 5 hoisting inside (...)();
 
var globalVar = 'global';
 
(function() {
  
  var name = 'Jen';
  
  var getAge = function() {
    return '30';
  };
  
  function getState() {
    return 'Delaware'; 
  }
  
})();



/*
difference between a function expression and a function declaration

We can also declare a function without the VAR or Const keywords which is called a function declaration
One important difference between a function expression and a function declaration is that they are hoisted
differently for a function declaration. the whole function including its definition is hoisted to the top of the file.

Using function declarations instead of function expressions can be very useful in your coding because
with a function declaration the whole function is hoisted to the top of the file or to the top of the
scope.
*/
