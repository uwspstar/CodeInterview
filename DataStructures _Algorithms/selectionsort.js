const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
//my solution
function selectionSort(array) {

  let length = array.length; 

  for(let i = 0;i < length ; i++){
    let minIndex =  i; 
    
    for(let j = i; j< length; j++){ 

        if(array[j] < array[minIndex]) {  
          minIndex = j;
        }
    }
    const tmp = array[i];

    array[i] = array[minIndex];
    array[minIndex] = tmp;

   console.log(array);
  }
}

console.log(selectionSort(numbers));

//auth solution
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;
  for(let i = 0; i < length; i++){
    // set current index as minimum
    let min = i;
    let temp = array[i];
    for(let j = i+1; j < length; j++){
      if (array[j] < array[min]){
        //update minimum if current is lower that what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

selectionSort(numbers);
console.log(numbers);
