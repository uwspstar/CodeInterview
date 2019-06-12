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
