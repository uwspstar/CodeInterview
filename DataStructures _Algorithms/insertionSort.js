//my solution

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  
  const len =  array.length; 

  let newArray = []; 

  newArray.push(array[0]);

  if(array[0]<array[1]){

     newArray.push(array[1]); 

  } else {

    newArray.unshift(array[1]);
  }
   
  //[99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
  for(let i = 2; i<len; i++ ){  
      
      for(let j = 0; j<newArray.length ; j++) {   
       
        //add to the end of new array 
         if(array[i] > newArray[newArray.length-1]){
           newArray.push(array[i]);
           break; 
         } 

         if(array[i] < newArray[j]) {
            newArray.splice(j, 0, array[i] );
            break; 
         } 
         
        
          
      } 
      
  } 

   console.log(newArray);

}

console.log(insertionSort(numbers));




//auth solution

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  const length = array.length;
	for (let i = 0; i < length; i++) {
		if (array[i] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(i,1)[0]);
    } else {
      // only sort number smaller than number on the left of it. 
      //This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i-1]) {
        //find where number should go
        for (var j = 1; j < i; j++) {
          if (array[i] > array[j-1] && array[i] < array[j]) {
            //move number to the right spot
            array.splice(j,0,array.splice(i,1)[0]);
          }
        }
      }
    }
	}
}

insertionSort(numbers);
console.log(numbers);
