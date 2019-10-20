//Logging X and Y - Solution Source Code
‘use strict’;
 
(function() {
  var x = y = 200; 
})();
 
console.log('y: ', y);  // 200
console.log('x: ', x);  // cannot access


//reason IIFE run, the x inside function is inside function scope

‘use strict’;
 
(function() {
  // var x = y = 200;
  y = 200; //globle ( from right to left in order assign value)
  var x = y; 
})();
 
console.log('y: ', y);  // 200
console.log('x: ', x);  // cannot access

// next step
‘use strict’;
 
(function() {
  var x;
  y = 200; //globle ( from right to left in order assign value)
  x = y;   // insie function
})();
 
console.log('y: ', y);  // 200
console.log('x: ', x);  // cannot access


