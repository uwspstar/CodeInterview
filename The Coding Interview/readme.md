# The JS basic knowledge Interview
### basic
- global execution context
- Lexical Environment (scope, Lexical scope, where you write something)
```
*** eveytime, we create a function, we create a new env, new obj, new scropt
```
- Stack Overflow ( Maxinum call stack size exceed)
- Memory heap
```
 - global variable
 - event listener ( keep add addEventListener but not removeEventListener
 - setInterval
```
- Event Listener
```
  window.addEventListener("test", options, options);
  window.removeEventListener("test", options, options);
```
- Memory Leaks (
- Garbage Collection ( Mark & Sweep JS auto clean up the memory)
- single thread

### javascript runtime
- Call Stack + Memory Heap
- Event loop ( wait for callstack is empty)
- Web API ( DOM, Fetch, setIntervale, etc...)
- Callback Queue ( Web API finsihed, put in the Callback Queue, wait for Event loop send back to Call Stack)

### Stroage
- LocalStroage (web storage) vs IndexDB (good for offline data)
```
A good use case for Web Storage would be to store simple session data, 
for example a user's name, and save you some requests to your actual database. 
indexedDB's additional features, on the other hand, 
could help you store all the data you need for your application to work offline.

https://softwareengineering.stackexchange.com/questions/219953/how-is-localstorage-different-from-indexeddb
```
### Hoisting in JavaScript
```
variables and functions are hoisted to the top of the scope that they are declared in.

to be aware of is that although variables declared with the VAR keyword 
are initialized to undefined 
keywords with let or const are not initialized until their actual declaration so they can
not be accessed until they are actually declared.
```
### IIFEs
- ()();
- (fn(num) {...})(1)

### Closures
### "this" Keyword
### Scope and "self"
### Equals vs Strict Equals
### "call" and "apply" Methods
### Curry Function

# The Coding Interview
### Big O
http://bigocheatsheet.com/

### ES6
- https://www.w3schools.com/jsref/jsref_obj_array.asp
 
### Question
- https://repl.it/@uwspstar/fullstack

### 06/01/2019
- 0001 String Reversal  //reduce function
- 0002 Palindromes  // every function
- 0003 Integer Reversal // Math.sign(x) , toString(), parseInt , parseInt(0.00000000000434, 10); 
### 06/10/2019
- developer post a google phone interview one  leetcode
```The interview lasts for about half an hour. In the beginning I gave an elevated pitch on my experience. Then there came eight technical questions.
Here are the questions:
- What's best/ worst running time for Merge Sort?
- What's average / worst running time for Quick Sort?
- What's the worst running time for a look up in a Hashtable?
- Could you name an implementation of Hashtable?
- Which of the following Python data structure is not mutable: tuple, list, dictionary?
- For an unweighted graph, which algorithm should be used to find shortest path: breath first search or Diajkstra?
- Could you estimate 2^24?
- In Java, could you name two Map implementations?
```
- https://www.hackerearth.com/practice/notes/big-o-cheatsheet-series-data-structures-and-algorithms-with-thier-complexities-1/
- What's best/ worst running time for Merge Sort?
- What's average / worst running time for Quick Sort?
- What's the worst running time for a look up in a Hashtable?
### Merge Sort
```
Try Merge Sort on the example array [1, 5, 19, 20, 2, 11, 15, 17] 
that have its first half already sorted [1, 5, 19, 20] 
and its second half also already sorted [2, 11, 15, 17]. 

void merge(int a[], int low, int mid, int high) {
  // subarray1 = a[low..mid], subarray2 = a[mid+1..high], both sorted
  int N = high-low+1; // N is new arr length
  int b[N]; // b[N ]is a temporary array
  int left = low, right = mid+1, bIdx = 0;
  while (left <= mid && right <= high) // the merging
    b[bIdx++] = (a[left] <= a[right]) ? a[left++] : a[right++]; // move the arr1 index or arr2 index
  while (left <= mid) b[bIdx++] = a[left++]; // leftover, if any
  while (right <= high) b[bIdx++] = a[right++]; // leftover, if any
  for (int k = 0; k < N; k++) a[low+k] = b[k]; // copy back
}

```
### 06/11/2019
### BIG O of Stacks
- insertion O(1)
- removal O(1)
- search O(n)
- access o(n)
```
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
```
### Queues Using Arrays FIFO
- unshift with pop
- push with shift
### 06/11/2019
### recursive
- Factorial
```
const factorialNumber = function(n) {
  //Factorial
  if (n <= 1) /* base case */
    return n;
  else /* recursive caseS */
    return n * factorialNumber(n-1); 
    //f3 = 3*f2, f2 = 2*f1, f1 = 1
    // f2 = 2
    // f3 = 6
}

console.log(factorialNumber(3)); // 6
```
- Fibonacci // Fibonacci recursion tree (and DAG) are frequently used to showcase the basic idea of recursion.
```
each recursive step recurses to two other smaller sub-problems. 
(after one understands the concept of Dynamic Programming) 

const fabonacci = function(n) {
  //fabonacci
  if (n <= 1) /* base case */
    return 1;
  else /* recursive caseS */
    return fabonacci(n - 1) + fabonacci(n - 2); 
    // f4 = f3 + f2, 
    // f3 = f2 + f1, 
    // f2 = f1 + f0,
    // f1 = 1, f0 = 1
    // f2 = 2,
    // f3 = 3
    // f4 = f3 + f2 = 3 + 2 = 5
}

console.log(fabonacci(4)); // 5
```
- Catalan http://mathforum.org/advanced/robertd/catalan.html
```
- the number of ways a polygon with n+2 sides can be cut into n triangles
- the number of ways to use n rectangles to tile a stairstep shape (1, 2, ..., n−1, n).
```
```
const catalan = function(n) {
  //catalan
  if (n == 0) /* base case */
    return 1;
  else /* recursive case */
    return catalan(n - 1) * 2 * n * (2 * n - 1)/(n + 1)/n;
    // f3 = f2 * 2*3*(2*3-1)/(3+1)/3 = f2 * 2.5, 
    // f2 = f1 * 2*2*(2*2-1)/(2+1)/2 = f1 * 2
    // f1 = 1
    // f2 = 2,
    // f3 = 5
}

console.log(catalan(3)); // 5
```
- use single link list show recursive

### tree
- tree
- binary tree
- binary search tree
- single link list
### 06/15/2019
- let currnet = this.root; //(tree) 
- const resultArray = str.match(/[aeiou]/gi); 
``` 
//match char indise[],g : continue after find first match, i :  ignore case

const resultArray = str.match(/[aeiou]/gi);

retunr resultArray ? resultArray.length : 0;

```
