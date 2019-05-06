https://leetcode.com/

## PATTERNS...

    - Frequency Counter
    - Multiple Pointers
    - Sliding Window
    - Divide and Conquer
    - Dynamic Programming
    - Greedy Algorithms
    - Backtracking
  
 
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

