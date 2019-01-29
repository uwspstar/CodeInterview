// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0,  1,  1,  2,  3,  5,  8, 13, 21, 34, 55, 89, 144 ...
//[0],[1],[2],[3],[4],[5],[6]
// the pattern of the sequence is that 
//each value is the sum of the 2 previous values, 
//that means that for N=5 → 2+3



// 0,  1,  1,  2,  3,  5,  8, ...
//[0],[1],[2],[3],[4],[5],[6]
//For example: fibonacciRecursive(6) should return 8

/*
function fibonacciIterative(n){
  //code here;


}
fibonacciIterative(3);
*/

//my solution
function fibonacciRecursive(n) { 

  if(n===0) return 0;
  if(n===1) return 1;  

  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2); 
}

console.log(fibonacciRecursive(7));