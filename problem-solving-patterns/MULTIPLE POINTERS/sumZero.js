
/*
Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. 
Return an array that includes both values that sum to zero or undefined if a pair does not exist 

*/

// is this a sort array ?
// Time Complexity - O(N) && Space Complexity - O(1)
const sumZero1 = function(arr) { 

  let left=0;
  let right= arr.length-1;

  while(left<right){

    const valLeft = arr[left];
    const valRight = arr[right];

    //console.log('valLeft',valLeft);
    //console.log('valRight',valRight);

    const temp = valLeft+valRight;
    if(temp===0){
      return[valLeft,valRight]
    } else if(temp<0){left++;}
    else{ 
      right--;
    }
  }
}
console.log(sumZero1([-3,-2,-1,0,5,10])) // undefined
console.log(sumZero1([-3,-2,-1,0,1,2,3])) // [-3,3] sorted
console.log(sumZero1([-5,-4,-3,-2,-1,0,6,7,9])) // undefined


// Time Complexity - O(N^2) && Space Complexity - O(1)
// is this a sort array ?
const sumZero = function(arr) {
  
  for (let i=0; i<arr.length; i++){
    for(let j = i+1; j<arr.length ; j++){

      if(arr[i] + arr[j] ===0) {
        return[arr[i], arr[j]]
      }

    } 
  } 

  return [];
}

console.log(sumZero([-3,-2,-1,3,1,2,0])) // [-3,3] not sorted
console.log(sumZero([-3,-2,-1,0,1,2,3])) // [-3,3] sorted
console.log(sumZero([-2,0,1,3]))// undefined
console.log(sumZero([1,2,3])) // undefined
