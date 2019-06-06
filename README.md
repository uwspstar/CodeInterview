
# Javascript

### Google JavaScript Style Guide
(https://google.github.io/styleguide/jsguide.html)

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

- 5.8.1 For loops
```
With ES6, the language now has three different kinds of for loops. 

All may be used, though for-of loops should be preferred when possible.

*** for-in loops may only be used on dict-style objects (see 5.3.3 Do not mix quoted and unquoted keys), 
and should not be used to iterate over an array. 

Object.prototype.hasOwnProperty should be used in for-in loops to exclude unwanted prototype properties. 

*** Prefer for-of and Object.keys over for-in when possible.
```

- 5.10.5 Wrapper objects for primitive types
```
Never use new on the primitive object wrappers (Boolean, Number, String, Symbol), 
nor include them in type annotations.
```


### Style Checking 
(https://jshint.com/)

## mutate
```
- For arrays, use methods like slice, the spread operator, 
and concat that make copies of arrays so you do not mutate them
- Remember that strings are immutable so you will need to use methods like slice, substr, 
or substring to make copies of strings
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

arr.forEach(function(item) {
	item();
});
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
 
