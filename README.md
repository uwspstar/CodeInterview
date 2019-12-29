
# Javascript

###  Javascript Runtime (call stack, memory heap, Web API, event loop, callback queue, etc.)
- https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13760086#overview

### An Advanced Look at Functions
- https://www.udemy.com/course/javascript-beginners-complete-tutorial/learn/lecture/17010172#overview
###  Higher Order Functions
- https://www.udemy.com/course/javascript-beginners-complete-tutorial/learn/lecture/17010194#overview
### all about function
- ```store functions in an array```
- Loop over all the functions in operations
```
function add(x, y) {
  return x + y;
}

const subtract = function (x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

const divide = function (x, y) {
  return x / y;
}

//We can store functions in an array!
const operations = [add, subtract, multiply, divide];

//Loop over all the functions in operations
for (let func of operations) {
  let result = func(30, 5); //execute func!
  console.log(result);
}

// We can also store functions in objects!
const thing = {
  doSomething: multiply
}
thing.doSomething(4, 5) //20
```
### function declaration vs function expression vs anomous function
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
- https://www.udemy.com/course/javascript-beginners-complete-tutorial/learn/lecture/17010184#overview
### var vs let
- inside function
- in for loop
### Google JavaScript Style Guide
- https://google.github.io/styleguide/jsguide.html

- 5.1.1 Use const and let
```
*** Declare all local variables with either const or let. 
*** Use const by default, unless a variable needs to be reassigned. 
*** The var keyword must not be used.
```
- 5.2.5 Spread operator
```
[...foo]   // preferred over Array.prototype.slice.call(foo)
[...foo, ...bar]   // preferred over foo.concat(bar)
```

- 5.8.1 ```For loops```
```
With ES6, the language now has three different kinds of for loops. 

All may be used, though for-of loops should be preferred when possible.

*** for-in loops may only be used on dict-style objects (see 5.3.3 Do not mix quoted and unquoted keys), 
and should not be used to iterate over an array. 

Object.prototype.hasOwnProperty should be used in for-in loops to exclude unwanted prototype properties. 

*** Prefer for-of and Object.keys over for-in when possible.
```

- 5.10.5 Wrapper objects for ```primitive types```
```
Never use new on the primitive object wrappers (Boolean, Number, String, Symbol), 
nor include them in type annotations.
```


### Style Checking 
(https://jshint.com/)

### slice vs splice

### function return a new Arry
- filter 
```
const newArr =  arr.filter(x=> return x > 1);  // 1)use return 2) a new arr
```
### undefined vs null
```
undefined means a variable has been declared but has not yet been assigned a value. 
On the other hand, null is an assignment value. 
It can be assigned to a variable as a representation of no value. 
Also, undefined and null are two distinct types: 
undefined is a type itself (undefined) while null is an object.
```
### mutate
```
- For arrays, use methods like slice, the spread operator, 
and concat that make copies of arrays so you do not mutate them
- Remember that strings are immutable so you will need to use methods like slice, substr, 
or substring to make copies of strings
```
### swap
```
// ES5
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}
```
### sort
```
function numberCompare(num1, num2) {
  return num1 - num2;
}

[ 6, 4, 15, 10 ].sort(numberCompare);
// [ 4, 6, 10, 15 ]


function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

[ "Steele", "Colt", "Data Structures", "Algorithms" ]
  .sort(compareByLen);
// [ "Colt", "Steele", "Algorithms", "Data Structures" ]

```
### Event loop
- What the heck is the event loop anyway? (https://www.youtube.com/watch?v=8aGhZQkoFbQ)  | Philip Roberts | JSConf EU

### Onlien Code snippets
- [Code snippets](https://repl.it/@uwspstar/fullstack)
![Code snippets](/full1.PNG)

### Js Array
- Js Array (https://www.w3schools.com/jsref/jsref_obj_array.asp)
### Js Array Methods
- Js Array Methods (https://www.w3schools.com/js/js_array_methods.asp)

### BigO
- [BigO]()
	- [BigO 1](/bigo.PNG)
	- [BigO 2](/bigo2.PNG)
- [Queue]()
	- [Queue](/que.JPG)

### Tool
- [code practice](https://repl.it/@uwspstar)
- [diagram](https://coggle.it/)
- [bigocheatsheet](http://bigocheatsheet.com)
- [data structures and algorithms diagram](https://coggle.it/diagram/W5E5tqYlrXvFJPsq/t/master-the-interview-click-here-for-course-link)
- [visualgo](https://visualgo.net/en)
- [Heapsort](https://brilliant.org/wiki/heap-sort)
- [Roadmap to Learn JavaScript](https://flaviocopes.com/javascript/)
- [ECMAScript® Language Specification](https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3)
- [Radix Sort](https://brilliant.org/wiki/radix-sort)
- [Radix Sort Animation](https://www.cs.usfca.edu/~galles/visualization/RadixSort.html)
- [Counting Sort](https://brilliant.org/wiki/counting-sort)
- [Counting Sort Animation](https://www.cs.usfca.edu/~galles/visualization/CountingSort.html)
- [event loop](http://latentflip.com/loupe)
- [JavaScript-Equality-Table](https://dorey.github.io/JavaScript-Equality-Table/)
- [submarine cable map](https://www.submarinecablemap.com/) 

### Basic
- Lexical Structure
- Expressions
- Types
- Variables
- Functions
	- IIFE
	- Array
	- String
- this
- Arrow Functions
- Loops and Scope
- Arrays
- Object
- Template Literals
- Strict Mode
- ECMAScript 6, 2016, 2017
- Asynchronous programming and callbacks
- Timers
- Promises
- Async and Await
- Closures
- The Event Loop

### object properties and methods
``` 
var obj = {
	greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

// key can be a function
var car = {
  name: 'toyata',
  model: 'x3',
  weight: 1700,
  extras: ['heated seats', 'tinted glass'],
  details: function() {
     alert(this.extras);
  },
  display: function() {
    alert('This car is a ' + this.name + '.');
  }
};

```
### functions and arrays
```
var arr = [];

arr.push(function() {
	console.log('Hello world 1');
});
arr.push(function() {
	console.log('Hello world 2');
});
arr.push(function() {
	console.log('Hello world 3');
});

//arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);
arr.forEach(function(item) {
	item();
});

forEach the callback is invoked with three arguments:

the value of the element
the index of the element
the Array object being traversed

```
### IIFE
```
var firstname = 'Jane';

(function (lastname) {

	var firstname = 'John';
	console.log(firstname);
	console.log(lastname);
	
}('Doe'));
```

console.log(firstname);

### JSON
```
// a JavaScript object...:
var myObj = { "name":"John", "age":31, "city":"New York" };

// ...converted into JSON:
var myJSON = JSON.stringify(myObj);

// myJSON is text received in JSON format.
// Convert JSON into a JavaScript object:
var myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.name;

// Storing data:
myObj = { "name":"John", "age":31, "city":"New York" };
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;
```

### Quick Reference
 

var fruits = ["Banana", "Orange", "Apple", "Mango"];
 
document.getElementById("demo").innerHTML = fruits.toString();
//Banana,Orange,Apple,Mango

document.getElementById("demo").innerHTML = fruits.join(" * ");
//Banana * Orange * Apple * Mango

var fruits = ["Banana", "Orange", "Apple", "Mango"];

- fruits.pop(); // Removes the last element ("Mango") from fruits

- fruits.shift();// Removes the first element "Banana" from fruits 

- fruits.push("Kiwi");//  Adds a new element ("Kiwi") to fruits

- fruits.unshift("Lemon");// Adds a new element "Lemon" to fruits 

- fruits[0] = "Kiwi";        // Changes the first element of fruits to "Kiwi" 

- fruits[fruits.length] = "Kiwi";          // Appends "Kiwi" to fruits 

- delete fruits[0]; 
//Changes the first element in fruits to undefined 
//Using delete may leave undefined holes in the array. Use pop() or shift() instead.

var fruits = ["Banana", "Orange", "Apple", "Mango"];

- fruits.splice(2, 0, "Lemon", "Kiwi");
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
//The splice() method returns an array with the deleted items:

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

- var citrus = fruits.slice(1);
//The slice() method creates a new array. It does not remove any elements from the source array.
//This example slices out a part of an array starting from array element 3 ("Apple"): 

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
- var citrus = fruits.slice(1, 3);

//The slice() method can take two arguments like slice(1, 3).
//The method then selects elements from the start argument, and up to (but not including) the end argument.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
- fruits.splice(0, 1);        // Removes the first element of fruits 

//The first parameter (0) defines the position where new elements should be added (spliced in).
//The second parameter (1) defines how many elements should be removed.
//The rest of the parameters are omitted. No new elements will be added.

- var myChildren = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3 
//The concat() method does not change the existing arrays. It always returns a new array.


- Numeric Sort
//By default, the sort() function sorts values as strings.
//This works well for strings ("Apple" comes before "Banana").
//However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
//Because of this, the sort() method will produce incorrect result when sorting numbers.
//You can fix this by providing a compare function:

```
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
```

- function addTwoNumbers (l1, l2) {..} vs const addTwoNumbers = function (l1, l2) {...}
```
const addTwoNumbers declare first, then below it can use addTwoNumbers function;
function addTwoNumbers call be called anywhere, the javascript will auto put it on the top
```
 
 ```
 (function(){
  var a = b = 3; // var a = b;  b = 3;
})();

console.log(typeof a); //undefined
console.log(typeof b); //int
```
```
var x = 5;

(function () {
    console.log(x); //undefined
    var x = 10;
    console.log(x); //10
})();

//inside function, declare to use
```
```
function foo1() {
  return {
    bar: 'bar',
  };
}

function foo2() {
  return
  {
    'bar';
  }
}

console.log(foo1());//{ bar: 'bar' }
console.log(foo2()); //undefined
```

```
console.log(0.1 + 0.2); //0.3
console.log(0.1 + 0.2 === 0.3); //false
console.log(9007199254740993 === 9007199254740992); //true
```
```
const a = {},
    b = {c:'b'},
    c = {b:'c'};

a[b] = 111;
a[c] = 333;

console.log(a[b]); //333
```
```
console.log(1 < 2 < 2); //true
console.log(3 > 2 > 1); //false
```
- https://ylv.io/top-ten-tricky-javascript-questions/
