# Big O
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

## Space Complexity

### Space Complexity in JS
```
Rules of Thumb
- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects)
```

