/**
countUniqueValues
Implement a function called countUniqueValues, 
which accepts a sorted array, 
and counts the unique values in the array. 
There can be negative numbers in the array, 
but it will always be sorted.
 */

var countUniqueValues =function(arr){
  
  if(arr.length < 2) return arr.length;
  let haspmap = {};
  for(let val of arr){
    haspmap[val] = (haspmap[val] || 0) +1;
  }
  return Object.keys(haspmap).length;
}

console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([]))// 0
console.log(countUniqueValues([-1]))// 1
console.log(countUniqueValues([-2,-1,-1,0,1]))// 4
