function bigBrother(){
  function littleBrother() {
    return 'it is me!';
  }
  
  return littleBrother();
  
  function littleBrother() {
    return 'no me!';
  }
}

// Before running this code, what do you think the output is?
console.log(bigBrother()); 


```

function bigBrother(){
  function littleBrother() {
    return 'it is me!';
  }
  
  function littleBrother() { //over write first one
    return 'no me!';
  }
  return littleBrother();
  
  
}

// Before running this code, what do you think the output is?
console.log(bigBrother()); //'no me!'

```


var color = blue

```
infact in javascript, declar on top, assign value later, it is Hoisting

var color;  ( top of the file)

color = blue
```

var getTotal = function(){
}

```
something happen for function expression

var getTotal = function(){
}


will do " var getTotal;"  on the top

then getTotal = function (){...}

```
```
to be aware of is that although variables declared with the VAR keyword 
are initialized to undefined 
keywords with let or const are not initialized until their actual declaration so they can
not be accessed until they are actually declared.
```
Hoisting
// tab 1
 
console.log(color);  // Undefined
 
var color = "blue";
 
console.log(color); // blue
 
 
 
//tab 2 .(reason)
 
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
differently 

for a function declaration. 
the whole function including its definition is hoisted to the top of the file.

Using function declarations instead of function expressions can be very useful in your coding because
with a function declaration the whole function is hoisted to the top of the file or to the top of the
scope.

*/

// function scope vs block scope
/*
Var is function scope not block scope

In reality this is only true when we are using the VAR keyword to declare a variable because the VAR
keyword is function scoped.

If however we use the const or let keywords to declare a variable
there is another scope that we must be aware of.

Constant Let are still both aware of the global scope and function scope.
but constant, an let variables are also aware of another scope to call the block scope
*/


// tab 1
 
function getTotal() {
  console.log(multiplier);
  console.log(total);
  
  let total = 0;
  
  for(var i = 0; i < 10; i++) {
    
    let valueToAdd = i;
    var multiplier = 2;
    total += valueToAdd * multiplier;
  }
  
  return total;
}
 
getTotal();
 
 
 
// tab 2
 
function getTotal() {
  let total;
  var multiplier;
  
  console.log(multiplier); // Undefined
  console.log(total); // Undefined
 
  total = 0;
  
  for(var i = 0; i < 10; i++) {
    let valueToAdd;
    
    valueToAdd = i;
    multiplier = 2;
   
    total += valueToAdd * multiplier;
  }
  
  return total;
}
 
getTotal();
