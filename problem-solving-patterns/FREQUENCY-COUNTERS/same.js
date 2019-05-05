
/*
FREQUENCY COUNTERS

This pattern uses objects or sets to collect values/frequencies of values

This can often avoid the need for nested loops or O(N^2) operations with arrays / strings


Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has it's corresponding value squared in the second array. 
The frequency of values must be the same.

same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
*/

const same = function(arr1, arr2){

  if(arr1.length!=arr2.length)  return false;



  return false;
}

console.log(same([1,2,3], [4,1,9]));
console.log(same([1,2,3], [1,9]));
console.log(same([1,2,1], [4,4,1]));
