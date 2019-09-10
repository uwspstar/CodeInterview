const checkPrime = function (num) {

  //check Input
  if (num <= 1) return false;

  //logic
  
  let sq = Math.floor(Math.sqrt(num));
  console.log('sq',sq);
  for (let i = 2; i < sq + 1; i++) {
     if (num % i == 0 ){
        return false;
     }  
  }
  return true; 
}

console.log(checkPrime(9));


// Task
// A prime is a natural number greater than  that has no positive divisors other than  
and itself. Given a number, , determine and print whether it's  or .

// Note: If possible, try to come up with a  primality algorithm, 
or see what sort of optimizations you come up with for an  algorithm. 
Be sure to check out the Editorial after submitting your code!

// Input Format

// The first line contains an integer, , the number of test cases.
// Each of the  subsequent lines contains an integer, , to be tested for primality.
 

// Sample Input

// 3
// 12
// 5
// 7
// Sample Output

// Not prime
// Prime
// Prime
// Explanation

// Test Case 0: .
//  is divisible by numbers other than  and itself (i.e.: , , ), so we print  on a new line.

// Test Case 1: .
//  is only divisible  and itself, so we print  on a new line.

// Test Case 2: .
//  is only divisible  and itself, so we print  on a new line.

