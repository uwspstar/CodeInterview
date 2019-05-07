/*
0041.First Missing Positive
 
Given an unsorted integer array, find the smallest missing positive integer.
Input: [1,2,0] Output: 3
//[1,2,0] //3
/[1,2,3] 

Input: [3,4,-1,1] Output: 2
//[3,4,-1,1] //2
//[1,-1,3,4] //2
Input: [7,8,9,11,12] Output: 1
// [7,8,9,11,12] // 1 suppose to be [1,2,3,4,5]
*/

/**
 * Runtime: 60 ms, 
 * faster than 98.59% of JavaScript online submissions for First Missing Positive.
 * Memory Usage: 33.7 MB, less than 92.77% of JavaScript online submissions for First Missing Positive.
 */
var firstMissingPositive1 = function(nums) {
    if(nums.length < 2) return nums[0] == 1 ? 2 : 1; 
    let result =[];
    for(let i = 0; i < nums.length; i++){ 
        const temp = nums[i];  
        if(temp > nums.length) {
          result[i] = false;
        }
        if(temp > 0){
          result[temp-1] = true;  
        }
    } 

    for(let i = 0; i < result.length; i++){
        if(!result[i]){
            return i + 1;
        }
    }
    return result.length + 1;
};

var firstMissingPositive2 = function(nums) {
    for (i = 1; i < 1000000; i++) { // why cannot use arr.length ?
    if(!nums.includes(i)) return i;
  }
};

var firstMissingPositive = function(nums) { 
    if(nums.length < 2) return nums[0] == 1 ? 2 : 1;  
    const hashTable = {};
    for(let val of nums){
      if(val > 0) {
        hashTable[val] = val;
      }  
    }
    console.log(hashTable); 
    let i = 1;
    for(let key in hashTable){ 
      if(hashTable[key]!== i){
        return i;
      } 
      i++;
    }
    return i;
};

console.log(firstMissingPositive([1]));//2
console.log(firstMissingPositive([2]));//1

console.log(firstMissingPositive([2,1]));//3 
console.log(firstMissingPositive([1,2,0]));//3
console.log(firstMissingPositive([3,4,-1,1]));//2
console.log(firstMissingPositive([7,8,9,11,12]));//1
