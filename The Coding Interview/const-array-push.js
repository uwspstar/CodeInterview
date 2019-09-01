const list1 = [1, 2, 3, 4, 5];
// list pointing the address of the array which is passing by reference

const list2 = list1;
 
list1.push(6, 7, 8);
 
console.log(list2); //[1, 2, 3, 4, 5, 6, 7, 8]

/*
// passing by reference vs passing by value


JavaScript has six primitives types: 
string, 
number, 
undefined, 
null, 
boolean, 
and symbol. 

There is also a compound type or object. 
Interestingly, the primitive types are immutable and don't have properties. 

For example, because of the String object you can retrieve the length of a string.
The code "a".length is evaluated as new String("a").length by the interpreter like magic. 

There are also the objects Number, Boolean, and Symbol which also add properties to its own primitives.

*/


const list1 = [1, 2, 3, 4, 5];
const list2 = list1.slice();  //return a new array
const list3 = list1.concat([]);
const list4 = [...list1];
 
list1.push(6, 7, 8);
 
console.log('List 1: ', list1);
console.log('List 2: ', list2);
console.log('List 3: ', list3);
console.log('List 4: ', list4);

// List 1:  [ 1, 2, 3, 4, 5, 6, 7, 8 ]
// List 2:  [ 1, 2, 3, 4, 5 ]
// List 3:  [ 1, 2, 3, 4, 5 ]
// List 4:  [ 1, 2, 3, 4, 5 ]
