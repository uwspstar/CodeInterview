
# JavaScript Algorithms and Data Structures Masterclass: 
- https://www.udemy.com/js-algorithms-and-data-structures-masterclass by Colt Steele
```
- Define what an algorithm is
- Devise a plan to solve algorithms
- Compare and contrast problem solving patterns including frequency counters, 
two pointer problems and divide and conquer
```
- WHAT IS AN ALGORITHM?
```A process or set of steps to accomplish a certain task.```

### PROBLEM SOLVING
```
- Understand the Problem
- Explore Concrete Examples
- Break It Down
- Solve/Simplify
- Look Back and Refactor
```

- UNDERSTAND THE PROBLEM
```
Can I restate the problem in my own words?
What are the inputs that go into the problem?
What are the outputs that should come from the solution to the problem?
Can the outputs be determined from the inputs? In other words, 
do I have enough information to solve the problem? 
(You may not be able to answer this question until you set about solving the problem. That's okay; 
it's still worth considering the question at this early stage.)
How should I label the important pieces of data that are a part of the problem?
``` 
- EXPLORE EXAMPLES
```
Start with Simple Examples
Progress to More Complex Examples
**** Explore Examples with Empty Inputs
**** Explore Examples with Invalid Inputs
```
- BREAK IT DOWN
```
Explicitly write out the steps you need to take.

This forces you to think about the code you'll write before you write it, 
and helps you catch any lingering conceptual issues or misunderstandings 
before you dive in and have to worry about details (e.g. language syntax) as well.
```
- SIMPLIFY
```
Find the core difficulty in what you're trying to do
Temporarily ignore that difficulty
Write a simplified solution
Then incorporate that difficulty back in
```
- REFACTORING QUESTIONS
```
Can you check the result?
Can you derive the result differently?
Can you understand it at a glance?
Can you use the result or method for some other problem?
Can you improve the performance of your solution?
Can you think of other ways to refactor?
How have other people solved this problem?
```


### SOME PATTERNS...
```
- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking
********** Many more!
```


### FREQUENCY COUNTERS

- This pattern uses objects or sets to collect values/frequencies of values
- This can often avoid the need for nested loops or O(N^2) operations with arrays / strings


### MULTIPLE POINTERS

- Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
- Very efficient for solving problems with minimal space complexity as well

### SLIDING WINDOW


- This pattern involves creating a window which can either be an array or number from one position to another
- Depending on a certain condition, the window either increases or closes (and a new window is created)
- Very useful for keeping track of a subset of data in an array/string etc.


### RECURSIVE FUNCTIONS
- ##### How recursive functions work
    ```
    Two essential parts of a recursive function!
        - Base Case
        - Different Input
    ```
    - ```Invoke the same function with a different input until you reach your base case!```

    - ```Base Case :The condition when the recursion ends. This is the most important concept to understand```



