//Object Properties - Question Source Code


const a = {};
const b = { name: 'b' };
const c = { name: 'c' };

console.log(a); // {}  --> obj[key] --> value

a[b] = 200;  // { '[object Object]': 200 }

console.log(a);

a[c] = 400;  // { '[object Object]': 400 }

console.log(a); // { '[object Object]': 400 }

console.log(a[b]); // 400 since the '[object Object]' replace
console.log(a[c]); // 400

/*
Because in javascript keys or properties and objects can only be strings 
they cannot be any other data type and they can definitely not be objects.

So what is really happening here.
If we are not actually making our B object a property or a object like it looks like we're doing well

we can alter our consul log a little bit to see what our object actually looks like.

After all of this so now we will just log out the entire object and run it

let map = {}
if(map[arr[i]] !== undetified) return true;
*/
