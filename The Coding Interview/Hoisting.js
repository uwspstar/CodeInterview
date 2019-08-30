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

Hoisting - Answer Part 2 Source Code
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



/*
difference between a function expression and a function declaration

We can also declare a function without the VAR or Const keywords which is called a function declaration
One important difference between a function expression and a function declaration is that they are hoisted
differently for a function declaration. the whole function including its definition is hoisted to the top of the file.

Using function declarations instead of function expressions can be very useful in your coding because
with a function declaration the whole function is hoisted to the top of the file or to the top of the
scope.
*/
