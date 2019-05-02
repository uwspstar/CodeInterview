/*
54.Spiral Matrix
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */


const matrix1= [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
];
const matrix2= [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
];

const matrix3= [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10,11,12],
  [13,14,15,16],
  [17,18,19,20]
];
var spiralOrder = function(matrix) {
    
    let len = matrix.length * matrix[0].length;

    let rowStart = 0;
    let rowEnd = matrix.length-1;
    let columnStart = 0;
    let columnEnd = matrix[0].length-1; 

    let result = []; 
    let i = 0;
    //for(let i = 0; i<len ; i++ ){ //use while loop
      while(rowEnd>=rowStart && columnEnd >=columnStart ){
       //topleft --> topright
       for(let j = columnStart; j<= columnEnd;j++){
         result.push(matrix[rowStart][j]);
         console.log('result1',result);
       }
       rowStart++;

       //topright --> bottomright
       for(let j = rowStart; j<= rowEnd; j++){ 
         result.push(matrix[j][columnEnd]);        
         console.log('result2',result);
       } 
       columnEnd--; 

       // bottomright  --> bottomleft
       if(rowEnd>=rowStart){
          for(let j = columnEnd; j>= columnStart; j--){
              result.push(matrix[rowEnd][j]);
              console.log('result3',result);
          } 
          
       }
       rowEnd--; 

       // bottomleft  --> topleft
       if(columnEnd>columnStart){
          for(let j = rowEnd; j>= rowStart; j--){
          result.push(matrix[j][columnStart]);
          console.log('result4',result);
        } 
       }
       columnStart++;

       

       //console.log('i=',i+1);
    }

    return result;
};

console.log(spiralOrder(matrix1));
console.log(spiralOrder(matrix2))
console.log(spiralOrder(matrix3))
