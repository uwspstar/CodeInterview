// also look at Curry function
// deep understand of js Closures

function myFunc() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}
 
console.log(myFunc()); // print a function 
 
const instanceOne = myFunc(); // create a instanse to hold function
const instanceTwo = myFunc();
 
console.log('instanceOne: ', instanceOne()); // return instanceOne: 1
console.log('instanceOne: ', instanceOne()); // return instanceOne: 2
console.log('instanceOne: ', instanceOne()); // return instanceOne: 3
console.log('instanceTwo: ', instanceTwo()); // return instanceTwo: 1
console.log('instanceTwo: ', instanceTwo()); // return instanceTwo: 2
console.log('instanceOne: ', instanceOne()); // return instanceOne: 4
