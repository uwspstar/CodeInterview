

/*
FREQUENCY COUNTERS

This pattern uses objects or sets to collect values/frequencies of values
This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has it's corresponding value squared in the second array. 
The frequency of values must be the same.

same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
*/


//O(n), use 3 loops instead of using a nest loop, use for...of (value) and for...in (key)
const same3 = function(arr1, arr2){

  if(arr1.length!=arr2.length)  return false;

  let hashmap1 ={};
  let hashmap2 ={};

 //O(n)
  for(let key of arr1){  
    hashmap1[key]  =  (hashmap1[key] || 0) + 1;
  }

 //O(n)
  for(let key of arr2){ 
    hashmap2[key]  =  (hashmap2[key] || 0) + 1;
  }   
 
  //O(m)  and m<n
  for(let key in hashmap1){  
     
      if( !hashmap2[key**2] || hashmap2[key ** 2] !== hashmap1[key]) {
          return false;
      }  
  } 

  return true;

}

console.log(same3([1,2,3], [4,1,9]));
console.log(same3([1,2,3], [1,9]));
console.log(same3([1,2,1], [4,4,1]));



//O(n), use 3 loops instead of using a nest loop
const same2 = function(arr1, arr2){

  if(arr1.length!=arr2.length)  return false;

  let hashmap1 ={};
  let hashmap2 ={};

 //O(n)
  for(let i = 0; i <arr1.length; i++){ 
    const key =arr1[i]
    hashmap1[key]  =  (hashmap1[key] || 0) + 1;
  }

 //O(n)
  for(let i = 0; i <arr2.length; i++){ 
    const key =arr2[i]
    hashmap2[key]  =  (hashmap2[key] || 0) + 1;
  }  

  const key1s  = Object.keys(hashmap1);
  const key2s  = Object.keys(hashmap2);
 
  //O(m)  and m<n
  for(let i = 0; i< key1s.length; i++){   
      if( key2s[i]!=(key1s[i]**2)  || hashmap1[key1s[i]] !=  hashmap2[key2s[i]]){
          return false;
      } 
       
  } 

  return true;

}

console.log(same2([1,2,3], [4,1,9]));
console.log(same2([1,2,3], [1,9]));
console.log(same2([1,2,1], [4,4,1]));


// Time Complexity - N^2
const same = function(arr1, arr2){

  if(arr1.length!=arr2.length)  return false;

  for(let i = 0; i <arr1.length; i++){

     
    let index = arr2.indexOf(arr1[i] ** 2); //indexOf is o(n)

    if(index ===-1) { 
      return false;
    }

    console.log(arr2);

    arr2.splice(index,1)
  }

  return true;

}

console.log(same([1,2,3], [4,1,9]));
console.log(same([1,2,3], [1,9]));
console.log(same([1,2,1], [4,4,1]));
