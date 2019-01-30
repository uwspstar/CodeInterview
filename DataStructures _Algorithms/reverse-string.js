//Implement a function that reverses a string using iteration...and then recursion!
//my solution
var reverseStringRecursion = function (str) { 

  let len = str.length;

  if(len ===1) {
    return str;
  }

  return reverseStringRecursion(str[len-1]) + str;

}

console.log(reverseStringRecursion('master'));

// my solution
var reverseString = function (str) { 
  
  let newStr ="";

  //simple input checking
  if(str.length ===1) {
    return str;
  } 
   
  //str length bigger than 1
  for(let i = str.length-1; i >= 0; i--){
     newStr = newStr + str[i];
  }

  return newStr;
}

//reverseString('yoyo mastery')
//should return: 'yretsam oyoy'

console.log(reverseString('yoyo mastery'));


//reverse string
//Create a function that reverses a string:
//'Hi Myname is Andrei' should be
//iderdna si eman iH'

const reversString = function(str) {
  //check input
  if(!str || str.lenght<2 || typeof str !=='string'){
    return 'this is not good!'
  }

  const backwards =[]; 
  const arr = str.split(''); 
  // console.log(arr);
  // javascript just use str[i] or use 
  const totalItem = arr.length -1;  
  //console.log(totalItem);

  for(let i = totalItem; i>= 0; i--) {  
    backwards.push(arr[i]);
  } 

  //console.log(backwards);
  return backwards.join('');
}


console.log(reversString('Hi Myname is Andrei'));


