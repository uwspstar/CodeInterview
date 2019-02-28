const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
//my solution
function selectionSort(array) {

  //1. check input

  //2. logic
  var current = 0;

  const len = array.length;

  while( current < len){//O(n)   

    //[99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
    for(let i = current; i<len; i++) {   //O(n^2) -> n+ (n-1) + (n-2) +...+ 1 = (n+1)(n/2) =>O(n^2) + O(n) -> O(n) 

        if(array[current] > array[i]) { 

          let tmp = array[current];

          array[current] = array[i];

          array[i] = tmp; 
      } 
    } 

    current ++;
  }

  console.log(array);
}

console.log(selectionSort(numbers));
