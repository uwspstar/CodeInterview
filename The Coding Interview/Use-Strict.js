//Use Strict

Your question are :
1) What does using strict mode do to your code 
2) What are the benefits of using it.

```
the main purpose of using the use strict option as a beginning of a file 
is to enforce stricter parsing and error handling in your javascript code.


This is good because if you accidentally define a global variable there is always the chance 
that you could end up overriding 
or interfering with an actual global variable that has the same name 
which could cause a lot of bugs in your code.

```

// example 1
 
'use strict';
 
city = 'London';
 
console.log(city);
 
 
 
 
// example 2
 
'use strict';
 
// error, two "a" 
function myFunc(a, a, b) {
    console.log(a, a, b); 
}
 
myFunc(1, 2, 3);
 
 
 
 
// example 3
// cannot delete prototype (avod) 

'use strict';

delete Object.prototype;
