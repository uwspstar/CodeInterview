const list1 = [1, 2, 3, 4, 5];
// list pointing the address of the array
const list2 = list1;
 
list1.push(6, 7, 8);
 
console.log(list2); //[1, 2, 3, 4, 5, 6, 7, 8]
