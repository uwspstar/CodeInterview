//Object Properties - Question Source Code

const a = {};
const b = { name: 'b' };
const c = { name: 'c' };

console.log(a); // {}

a[b] = 200;  // { '[object Object]': 200 }

console.log(a);

a[c] = 400;  // { '[object Object]': 400 }

console.log(a); 

console.log(a[b]); // 400 since the '[object Object]' replace
console.log(a[c]); // 400
