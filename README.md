
# Javascript


### Code snippets
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
	- [Array](https://github.com/uwspstar/Javascript-DataStructures-Algorithms-ES6/blob/master/array.jpg)
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
