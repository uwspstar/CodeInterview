// Arrow function expressions

/*
Arrow functions do not have their own this value. 
The value of this inside an arrow function is always inherited from the enclosing scope.

An arrow function does not have its own this. 
The this value of the enclosing lexical scope is used; 
arrow functions follow the normal variable lookup rules. 
So while searching for this which is not present in current scope, 
an arrow function ends up finding the this from its enclosing scope.

'use strict';

var obj = { // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log(this.i, this);
  }
}

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}

*/

// (param1, param2, …, paramN) => expression
// equivalent to: => { return expression; }

/*
An arrow function expression is a syntactically compact alternative to a regular function expression, 
although *** without its own bindings to the this, arguments, super, or new.target keywords. ***
Arrow function expressions are sill suited as methods, 
and they cannot be used as constructors


// Destructuring within the parameter list is also supported
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f(); // 6


elements.map(element => element.length); // [8, 6, 7, 9]
elements.map(({ length :lengthFooBArX }) => lengthFooBArX); // [8, 6, 7, 9]

*/
