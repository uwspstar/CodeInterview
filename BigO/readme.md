# Big O
- JavaScript Algorithms and Data Structures Masterclass
https://www.udemy.com/js-algorithms-and-data-structures-masterclass by Colt Steele
- To analyze the performance of an algorithm, we use Big O Notation
- Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
- Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?)
- The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
- Big O Notation is everywhere, so get lots of practice!

## Time Complexity
```
We say that an algorithm is O(f(n)) 
if the number of simple operations the computer has to do is eventually less than a constant times f(n), 
as n increases.

In a loop, the the complexity is the length of the loop times the complexity of whatever happens 
inside of the loop

```
- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n  )
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different!

### Constants Don't Matte
### Smaller Terms Don't Matter
### Big O Shorthands

- Arithmetic operations are constant
- Variable assignment is constant
- Accessing elements in an array (by index) or object (by key) is constant
- In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop

- Logarithm Complexity
```
Logarithmic time complexity is great!
```
### O(1) -> O(log n) -> O(n) ->O(nlog n) -> O (n^2)
- Certain searching algorithms have logarithmic time complexity.
- Efficient sorting algorithms involve logarithms.
- Recursion sometimes involves logarithmic space complexity.
## Space Complexity

### Space Complexity in JS
```
Rules of Thumb
- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects)
```

### OBJECTIVES (Unordered, key value pairs!)
- Understand how objects and arrays work, through the lens of Big O
- Explain why adding elements to the beginning of an array is costly
- Compare and contrast the runtime for arrays and objects, as well as built-in methods

- When to use objects
```
- When you don't need order
- When you need fast access / insertion and removal
```
### Big O of Objects
- When you don't need any ordering, objects are an excellent choice!
```
Insertion -   O(1)
Removal -   O(1)
Searching -   O(N)
Access -   O(1)
```


- Big O of Object Methods
```
Object.keys -   O(N)
Object.values -   O(N)
Object.entries -   O(N)
hasOwnProperty -   O(1)
```

### ARRAYS
- Ordered lists!
- WHEN TO USE ARRAYS
```
- When you need order
- When you need fast access / insertion and removal (sort of....)
```


