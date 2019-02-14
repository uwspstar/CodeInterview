// 1. reverse string
// 2. find missing string : check overflow


var findMissingStr = function(arr1, arr2){
  
  // check input
  if(arr1.length === 0) return arr2;
  if(arr2.length === 0) return arr2; 

  // logic
  var arr =[];
  var hashMap ={};

  for(let i = 0; i<arr1.length; i++) { //O(n)
    let tmp = arr1[i];
    if(!hashMap[tmp]) {
      hashMap[tmp] = true;
    }
  }

  for(let j = 0; j<arr2.length; j++) { 
    let item = arr2[j];
 
    if(!hashMap[item]){
      console.log([item]);
    }
  }
}

var arr1 = [2, 4, 6, 8, 10];
var arr2 = [1, 2, 3, 4, 8, 10];

console.log(findMissingStr(arr1,arr2));