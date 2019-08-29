```
var color = blue

infact in javascript, declar on top, assign value later, it is Hoisting
var color;  ( top of the file)

color = blue
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
