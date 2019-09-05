// Array IndexOf - Question Source Code
// two objects are never same in js, but if the two objs point same address, there are same


const myArray = [5];
const anotherArray = myArray

console.log([10, 20, 30, 40, 50].indexOf(30)); // 2

//index same as a key , the key cannot be an object
console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' })); // -1


console.log('hello world'.indexOf('o')); // 4

// Array [2] is object, the indexOf(obj) not working

console.log([[1], [2], [3], [4]].indexOf([2])); //-1

//myArray, anotherArray pointing same address
console.log([[1], [2], [3], [4], myArray].indexOf(anotherArray)); //4

