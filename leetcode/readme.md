- https://leetcode.com/
- http://www.cnblogs.com/grandyang/p/4570699.html

## PATTERNS...

    - Frequency Counter
    - Multiple Pointers
    - Sliding Window
    - Divide and Conquer
    - Dynamic Programming
    - Greedy Algorithms
    - Backtracking
  
## Two Pointers

- 26. Remove Duplicates from Sorted Array
https://leetcode.com/articles/remove-duplicates-from-sorted-array/
- 27. Remove Element
https://leetcode.com/articles/remove-element/


## RECURSION
(https://leetcode.com/explore/learn/card/recursion-i/250/principle-of-recursion/1439/)
```
//use IFFE and Recursion

const printReverse1 = function(str){  
  
  let arr = str.split(''); 
  let n = arr.length; 
  let result = [];
  //IFFE
  (function help(input){  
    if (input.length === 0) return; 
    result.push(input[input.length-1]);
    input.length = input.length-1; 
    help(input); 
  }(arr));
  
  return result.join('');
}

const printReverse2 = function(str){ 
 
  let arr = str.split(''); 
  let n = arr.length; 

  //1. output
  let result = [];

  //2. helper with input
  function helper(input){  

    if (input.length === 0) return; //Base case

    result.push(input[input.length-1]); //modify result

    input.length = input.length-1; //update input

    helper(input); 
  };
  
  //call helper
  helper(arr);  
  return result.join('');
}

console.log(printReverse('helloworld'));

```

### Frequency Counter
- This pattern uses objects or sets to collect values/frequencies of values
- This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

    
###  hashmap{}
```
let hashmap = {}; 

for(let val of arr1){
   hashmap[val] = (hashmap[val] || 0) + 1;
}

```
###  Object.keys(hashmap).length
###  (new Set(arr)).size

