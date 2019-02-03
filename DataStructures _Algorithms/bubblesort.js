const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {

  const len = array.length;

 // loop n time, everytime, only find the biggest number
  for(let i = 0; i<len; i++){   

      //loop once to find the biggest one
      for(let j = 0; j<len; j++ ) {   
        if(array[j]>array[j+1]){
            const tmp = array[j+1];
            array[j+1] = array[j];
            array[j] = tmp; 
          }
      } 

      console.log(array); //output everytime find the biggest
  } 
}

console.log(bubbleSort(numbers));
console.log(numbers);


/*


const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) { 

 const len = array.length;   

 for(let i=0; i<len;i++){ 
   for(let j= 0; j<len ;j++){

      if(array[j]>array[j+1]){ 
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
   }
 }



}

bubbleSort(numbers);
console.log(numbers);

*/