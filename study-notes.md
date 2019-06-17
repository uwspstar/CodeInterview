
# Study Notes (use white board)

- In each of those pairs (push/pop and unshift/shift), the longer word makes the array longer.
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Sorting_with_map
- https://medium.com/@frontman/how-swap-two-values-without-temporary-variables-using-javascript-8bb28f96b5f6

# Ask Question Before Start Coding
- ask input string has none English letter
- ask Upper case and Lower case // CHECK input
- ask the null and empty output
- ask ASCII str or Unicode str
- discuss first before start to code, after code review

# coding style
- Google JavaScript Style Guide
(https://google.github.io/styleguide/jsguide.html)

# Quick Note
- [a, b] = [b, a]
- a = b + (b=a, 0) //swap without temp table
- a = [b, b=a][0]; //swap without temp table
```
    We’re utilizing an array where the first index is the value of a 
    and the second index is the value of b
    a is set to the value of b when the array is created
    b is set to the first index of the array, which is a
```
- a = [b, b=a][0]; //[b,b = a] new array, the first item index [0], a = [new array][0] //smart
```
1. (b=a, 0) sets b to the old value of a and yields 0
2. a = b + 0 sets a to the old value of b
```
```
a = a + b
b = a - b
a = a - b
```
- Bubble sort 
```(i decrease, j increase, nest loop times keep shrinking)```
```
// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
  var noSwaps;
  for(var i = arr.length; i > 0; i--){
    noSwaps = true;
    for(var j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);

 function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  // i decrease, j incrase, nest loop times keep shrinking
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
```
 
### 05/05/2019 
- for...of values
- for...in keys
- input checking  if(arr.length < 2) return arr.length;
- ``` haspMap[key] = ( haspMap[key] || 0 ) +1; ```
- ``` haspMap[key] = haspMap[key] + 1 || 1; ```
- double index : index i, index j, j=i+1 // two pointers
- double index : left index i, right index j, i and j meet in middle //two pointers
- use index[0] as a space to save result
- new Set(arr).size -- NOT length
- Object.keys(hashMap).length -- NOT size

### 05/06/2019 
- slice(indexStart,indexEnd) -- NOT include arr[indexEnd]
- [...`${num1}${num2}`] -- combind num1 and num2 to be a new arr 
- const combined1 = `${numOne}${numTwo}`; //string let numOne = 123; let numTwo = 456;
- typeof --NOT typeOf
- ```Declare all local variables with either const or let.``` 
- ```Use const by default, unless a variable needs to be reassigned.```
- ```The var keyword must not be used.```
- ```[...foo]   // preferred over Array.prototype.slice.call(foo)```
- ```[...foo, ...bar]   // preferred over foo.concat(bar)```
- ``` Prefer for-of and Object.keys over for-in when possible.```

### 05/07/2019 
- maxSum = Math.max(maxSum, tempSum);
- arr[i]%2===0;
- Recursion
```
const printReverse2 = function(str){ 
  let arr = str.split('');  let n = arr.length; 
  //1. output
  let result = [];
  //2. helper with input
  function helper(input){  
    if (input.length === 0) return; //Base case
    result.push(input[input.length-1]); //modify result
    input.length = input.length-1; //update input
    helper(input); //Recursion
  };
  //3. call helper
  helper(arr);   return result.join('');
}
``` 
### 05/08/2019 
- ```let str = x + ''; let reversStr = str.split("").reverse().join("") ;```
- arr[0].toUpperCase()// up case
- if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1));
```
  - str.slice(1,-1) //cut first and last
  - recursion inside if...else
```
- indexOf()  //NOT indexof , indexOf works, but slow 
```
console.log(beasts.indexOf('bison', 2)); // start from index 2
```
- aString.charAt(index) // works, but slow
- 
```
let arr = s.split(''); // Only build arr at once
NOT for(let i = 0; i < s.split('').length ; i++), 
use for(let i = 0; i < arr.length;i++)
```
- arr[arr.length -1] // arr last element
- parseInt(len / 2) // get int
- loop meet in the middle
```
  const len = arr.length;
  const n = parseInt(len / 2);

  for(let i = 0; i < n ; i++){
      const temp = arr[i];
      arr[i] =  arr[len-1-i];
      arr[len-1-i] = temp;
  }
 ```
 
 - Math.pow(base, exponent)
 - shift(): Remove an item from the beginning of an array.
 - let str =  x.toString().trim('-'); // *** trim('-') NOT Working, need to use 
 - let str =  x.toString().replace("-","");
 - while(strs[i].indexOf(result) != 0) // cannot found continue
 ```
    while(i < strs.length){ //loop array
        while(strs[i].indexOf(result) != 0){
          result = result.substring(0,result.length-1);
        }   
        i++;
    }
 ```
### 05/09/2019 
- nums.splice(i,1);// remove num[i] element ; NOT slice
- str =`${num1}${num2}`;//conver num to string
- str = num + ''; //conver num to string
- num = +str ; //conver str to num
- ```(push/pop and unshift/shift), the longer word makes the array longer.```
- arr.pop() //arr.pop() output: last one element
- arr.pop() //conslg(arr) output: the rest arr
```var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
// expected output: "tomato"
console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
```
 - Circular Array
 ```
const arr =[1,2,3,4,5,6];
const len = arr.length;
let j = 0;
while(j < len) {
  const i = (3+j)%len; //start index 3
  const temp = `i = ${i}, arr[${i}] = ${arr[i]}`;
  console.log(temp); 
  j++
}
 ```

### 05/10/2019 
- a /= b is equivalent to a = a / b
```
a -= b is equivalent to a = a - b
a *= b is equivalent to a = a * b
a /= b is equivalent to a = a / b
```
- if( strs[i].indexOf(commonPrefix) != 0 ) // different with if( strs[i].indexOf(commonPrefix) === -1 )
```
strs[i].indexOf(commonPrefix) != 0  make sure apper at begining
strs[i].indexOf(commonPrefix) === -1 only make sure apper, but not always at begining
```
- arr.join('') and arr.join() // NOT arr.join(),, so bad; BUG !!!
- Math.abs(x) // absolute
- Remove Duplicate // arr.length -> n also keep reduce when found duplicate
```
public int removeElement(int[] nums, int val) {
    int i = 0;
    int n = nums.length; // Dynamic, n also keep reduce when found duplicate
    while (i < n) {
        if (nums[i] == val) {
            nums[i] = nums[n - 1];
            // reduce array size by one
            n--;
        } else {
            i++;
        }
    }
    return n;
}
```
### 05/11/2019 
- [1] differnet [ [1] ]
- split('') //NOT split()
- Upper case and Lower case // CHECK input
```
let hashmap = {
        'a' : true,
        'e' : true,
        'i' : true,
        'o' : true,
        'u' : true,
        'A' : true,
        'E' : true,
        'I' : true,
        'O' : true,
        'U' : true  
    }
```
- double index : left index i, right index j, i and j meet in middle //two pointers 
``` check pair```
- while(i<j){...} // meet, start noth side
```
while(i<j){ // meet
...
i++; //from left, 
j--; //from right 
}
```
- arr.reduce((a,b)=>{},0) // 0 just initial number for b

### 05/12/2019
- numbers.sort((a, b) => a - b); // SORT the way you want, such as numbers.sort((s1, s2) => s1.lenght - s2.length);
- numbers.sort((s1, s2) => s1.lenght - s2.length);
```
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
```
- arr.pop() // 1 ,last, element from arr , NOT reture rest arr, the arr modified
- arr.join() vs arr.join(''); // If an element is undefined or null, it is converted to the empty string.
```
var elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); // expected output: "Fire,Air,Water"
console.log(elements.join('')); // expected output: "FireAirWater"
```
- var arr = [...str];
- str.split(' ') vs str.split('') // attention
```
var str = 'The quick brown fox jumps over the lazy dog.';
var words = str.split(' ');
console.log(words[3]); // expected output: "fox"
var chars = str.split('');
console.log(chars[8]);// expected output: "k"
var strCopy = str.split();
console.log(strCopy);// expected output: Array ["The quick brown fox jumps over the lazy dog."]

var myString = 'Hello World. How are you doing?';
var splits = myString.split(' ', 3); // ["Hello", "World.", "How"]
```
- var strReverse = str.split('').reverse().join('');
```Bonus: use === operator to test if the original string was palindrome.```
- [a, b] = [b, a]  // ES6 swap without temp table
- a = b + (b=a, 0) // swap without temp table
```
1. (b=a, 0) sets b to the old value of a and yields 0
2. a = b + 0 sets a to the old value of b
```
```
a = a + b
b = a - b
a = a - b
```

### 05/13/2019
- new Set(...arr)
- var intersection = new Set([...set1].filter(x => set2.has(x))); // intersect can be simulated via 
- var difference = new Set([...set1].filter(x => !set2.has(x))); // difference can be simulated via

### 05/14/2019
- bubbleSort . ( tow pointers) // first pointer backward, second pointer reduce every time 
```
1. Compare a pair of adjacent items (a, b),
2. Swap that pair if the items are out of order (in this case, when a > b),
3. Repeat Step 1 and 2 until we reach the end of array
(the last pair is the (N-2)-th and (N-1)-th items as we use 0-based indexing),
4. By now, the largest item will be at the last position.
We then reduce N by 1 and repeat Step 1 until we have N = 1.

Bubble Sort is actually inefficient with its O(N^2) time complexity. 
Imagine that we have N = 105 numbers. Even if our computer is super fast 
and can compute 108 operations in 1 second, Bubble Sort will need about 100 seconds to complete.
```
```
//[5, 8, 2, 4, 3, 1]
function bubbleSort(arr){
  let noSwaps;
  for(var i = arr.length; i > 0; i--){ // ??? not i = arr.length-1; i>=0 
    noSwaps = true;
    for(var j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return arr;
}
```
### 05/15/2019
- [arr[min],arr[i]] = [arr[i],arr[min]]; //swap

### 05/16/2019
- arr.splice();
```
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1 output: Array ['Jan', 'Feb', 'March', 'April', 'June']
months.splice(4, 1, 'May');
// replaces 1 element at index 4 output: Array ['Jan', 'Feb', 'March', 'April', 'May']
var removed = months.splice(3, 1); 
//start index 3, remove 1 ['Jan', 'March', 'April'];
```
### 05/17/2019
- insertion sort // if current is samller, insert current to new position, and remove current from old position
- work.splice(0,index+1); // work.splice(0,len); // start 0 position remove len element
- arr1[] = arr2[]; // if the arr2 change, the arr change also;
```
let arr2 =[ 'a', 'b', 'c'];
let arr1 = arr2;
arr2.pop();
arr2.push("aaaa"); console.log(arr1); // . (arr2.pop()).push("aaaa"); 
//not working, arr2.pop() is the last element, not the arr2 array
```
- let arr2 =[ 'a', 'b', 'c']; //NOT working let arr2 =[ a, b, c];
### 05/20/2019
- mergesort

### 05/21/2019
- 3 while loops for mergesort
- mergesort : Divide and Conquer (abbreviated as D&C)
- What is the sorting algorithm behind a Javascript Array.sort method?
```
As ECMAScript doesn't specify any sorting algorithm to be implemented by Array.sort(), 
it totally depends on browser which sorting algorithm to be implement. 
Safari, Webkit, etc. uses selection sort 
whereas Mozilla uses merge sort. 
usually mergeSort is used as a built in sort method in most languages.
```
- n/(2^k) = 1 -> n = 2^k -> k = lg(n)
- There are log N levels and in each level, we perform O(N) work, thus the overall time complexity is O(N log N)
- n.toLocaleString()
```
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var n = 34523453.345
n.toLocaleString()
"34,523,453.345"
```
### 05/23/2019
- quickSort // Quick Sort is another Divide and Conquer sorting algorithm

### 05/24/2019
- parseInt(7/2) = 3
- ~~ 3.5 = 3
- ( meet in the middle ) let startIndex = 0; let endIndex = nums.length-1;  // endIndex NOT nums.length
- const INT_MAX = Math.pow(2, 31) - 1; // NOT Math.pow( 2^31 -1 )
- const INT_MIN = Math.pow(-2, 31);  // NOT Math.pow( -2^31)
- Static methods are often used to create utility functions for an application.

### 05/25/2019
- node
```
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
```
- linkList //head Node->tail Node ( val, next ) // head and tail can be same
```
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
```
- LinkList pop() // remove the last node
```
     pop() {
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        // get the node (newTail) before the last node (need to delete)
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        // update new tail
        this.tail = newTail;
        this.tail.next = null; 
        this.length--;
        // check the list is empty
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
```
- Add Element(s) to the Middle of an Array Using splice()
```
var list = ["foo", "bar"];
list.splice( 1, 0, "baz", "qux");
["foo", "baz", "qux", "bar"] // resul
```
- while(len--)
- arr[m--]
```
let arr = [1,2,3,6,8,10];
let len = arr.length;
let m = len - 1;
while(len--) {
  console.log('arr[m] = ', arr[m--]);
}
```

### 05/27/2019
```
&	AND	x = 5 & 1	0101 & 0001	0001	 1
|	OR	x = 5 | 1	0101 | 0001	0101	 5
~	NOT	x = ~ 5	 ~0101	1010	 10
^	XOR	x = 5 ^ 1	0101 ^ 0001	0100	 4
<<	Left shift	x = 5 << 1	0101 << 1	1010	 10
>>	Right shift	x = 5 >> 1	0101 >> 1	0010	  2
```
- string.charCodeAt(index)
```
var str = "HELLO WORLD";
var n = str.charCodeAt(0);
```
### The ASCII Character Set
https://www.w3schools.com/charsets/ref_html_ascii.asp
```
ASCII stands for the "American Standard Code for Information Interchange".
ASCII is a 7-bit character set containing 128 characters.
It contains the numbers from 0-9, the upper and lower case English letters from A to Z, and some special characters.
ASCII equivalent number.
```
- ```var s = 'A'; console.log(s.charCodeAt(0)); // 65 ```
- A	65 // console.log(String.fromCharCode(65)) // A
- a 97 // console.log(String.fromCharCode(97)) // a
- str.charCodeAt(i); // NOT str.charCodeAt(str[i]);

- fill 0 to arr 
```
let n = 10;
let temp = new Array(n);
temp.fill(0);
```
- arr[[0],....[0]]
```
let n = 10;
for (let i = 0; i < n; i++) {
        let temp = new Array(n);
        temp.fill(0);
        arr.push(temp);
    }
```
### 05/29/2019
- segment tree https://www.youtube.com/watch?v=e_bK-dgPvfM&t=939s
### 05/30/2019
https://www.cs.princeton.edu/~rs/AlgsDS07/
```
data types : stack, queue, list, union-find, priority queue
sorting : quicksort, mergesort, heapsort, radix sorts
searching : hash table, BST, red-black tree, B-tree
graphs : BFS, DFS, Prim, Kruskal, Dijkstra
strings : KMP, Rabin-Karp, TST, Huffman, LZW
geometry : Graham scan, k-d tree, Voronoi diagram
```
### 06/02/2019
- ``` haspMap[key] = ( haspMap[key] || 0 ) + 1; ```
- ``` haspMap[key] = haspMap[key] + 1 || 1; ```

### 06/03/2019

### Dynamic Programming
```
1) OPTIMAL SUBSTRUCTURE
2) OVERLAPPING SUBPROBLEMS
```
- Merge Sort https://visualgo.net/en/sorting?slide=10
```
Merge Sort is therefore very suitable to sort extremely large number of inputs as O(N log N) grows much slower than the O(N2) sorting algorithms
```
- Divide and Conquer algorithm
```
Divide step: Divide the large, original problem into smaller sub-problems 
and recursively solve the smaller sub-problems,

Conquer step: Combine the results of the smaller sub-problems 
to produce the result of the larger, original problem.
```
- n / (2^k) = 1 ```n = 2^k  ==> k = lg n  ```
- https://visualgo.net/en/sorting?slide=10-8
- https://visualgo.net/en/sorting?slide=10-9

- Quick Sort is another Divide and Conquer sorting algorithm
- Frequency Counter Pattern
### 06/07/2019
- let res = Array(m + n).fill(0); // create new array with element 0
- +num1.charAt(i) // convert char to number
```
   const m = num1.length;
    const n = num2.length;
    let res = Array(m + n).fill(0);
```
- Math.trunc() // returns the integer part of a number by removing any fractional digits.
```
Math.trunc(13.37);    // 13
Math.trunc(42.84);    // 42
Math.trunc(0.123);    //  0
Math.trunc(-0.123);   // -0
Math.trunc('-1.123'); // -1
Math.trunc(NaN);      // NaN
Math.trunc('foo');    // NaN
Math.trunc();         // NaN
```
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
### 06/17/2019
- bubbleSort . ( tow pointers) // first pointer backward, second pointer reduce every time 
```
1. Compare a pair of adjacent items (a, b),
2. Swap that pair if the items are out of order (in this case, when a > b),
3. Repeat Step 1 and 2 until we reach the end of array
(the last pair is the (N-2)-th and (N-1)-th items as we use 0-based indexing),
4. By now, the largest item will be at the last position.
We then reduce N by 1 and repeat Step 1 until we have N = 1.

Bubble Sort is actually inefficient with its O(N^2) time complexity. 
Imagine that we have N = 105 numbers. Even if our computer is super fast 
and can compute 108 operations in 1 second, Bubble Sort will need about 100 seconds to complete.
```
