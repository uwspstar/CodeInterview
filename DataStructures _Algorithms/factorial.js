// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop


//my solution

function findFactorialRecursive2(number) {

  if( number === 2) {
    return 2;
  } 
 
  return number * findFactorialRecursive2(number-1);

}

function findFactorialRecursive(number) { 
    // 1. stop condition
    // 2. return value ( next input )
    if((number-1)>0) {
      return number * findFactorialRecursive(number-1); 
    } 
    return number;
}

 
var findFactorialIterative = function (number) {

  let answer = number;

  for(let i = number ; i > 1; i--) { //5!= 5*4*3*2*1
 
     //console.log(number) ;
     //console.log(number-1) ;
     answer = answer * (number-1 ); 
     number = number-1; 
     //console.log(answer) ;
  }
 
  return answer;
}

// console.log(findFactorialIterative(5));

console.log(findFactorialRecursive(4));
console.log(findFactorialRecursive2(4));

/*  

// Solution : 

function findFactorialIterative(number) {
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

function findFactorialRecursive(number) {
  if(number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1)
}

findFactorialIterative(5);
findFactorialRecursive(5);

*/