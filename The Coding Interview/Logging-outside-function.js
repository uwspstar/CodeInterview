Logging X and Y - Solution Source Code
‘use strict’;
 
(function() {
  var x = y = 200; 
})();
 
console.log('y: ', y);  // 200
console.log('x: ', x);  // cannot access


//reason

‘use strict’;
 
(function() {
  var x;
  y = 200; //globle
  x = y;   // insie function
})();
 
console.log('y: ', y);  // 200
console.log('x: ', x);  // cannot access
