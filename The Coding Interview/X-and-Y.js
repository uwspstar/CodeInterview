//X and Y - Solution Source Code
// all variable and all function are hoisting in JS

var x = 10;
 
function y() {
    x = 100;
    return;
    function x() {}
}
 
y();
 
console.log(x);

/* *** hoisting ****


var x = 10;
 
function y() {
    function x() {}
    x = 100;
    return;
    // function x() {}
}
 
y();
 
console.log(x);
*/

/*

var x = 10;
 
function y() {
   function x() {}
    x = 100; // cannot assign the value to function user
    return;  
}
 
//y();
console.log(y); 
console.log(y()); 
console.log(x); 

*/
