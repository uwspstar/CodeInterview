/*


When we assign a variable to a piece of data 
we are always either passing the data by value or passing that data by reference.

So what is passing data by value and what is passing data by reference.

If the data we are passing is a primitive datatype 
or it has no properties such as a string or a number
then the data is always passed by value passing by value is pretty straightforward.

When you pass data by value to a variable you are setting of that variable equal to the value of the

data.

*/

const list1 = [1, 2, 3, 4, 5];
const list2 = list1;
 
list1.push(6, 7, 8);
 
console.log(list2); // [1, 2, 3, 4, 5, 6, 7, 8]


/*
however changing a property on an object or an array does change the underlying object.

So any variables referencing that underlying object will reflect the change.

So that is how passing by reference works and that is why adding new elements to list one will update
*/


const list1 = [1, 2, 3, 4, 5];
const list2 = list1.slice();
// const list2 = list1.concat([]);
 
list1.push(6, 7, 8);
 
console.log('List 1: ', list1); //[1, 2, 3, 4, 5, 6, 7, 8]
console.log('List 2: ', list2); / [1, 2, 3, 4, 5]
