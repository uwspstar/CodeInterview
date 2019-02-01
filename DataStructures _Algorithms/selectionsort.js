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
