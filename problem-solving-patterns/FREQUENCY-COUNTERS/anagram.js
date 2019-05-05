
/*
anagram

Given two strings, write a function to determine if the second string is an anagram of the first. 
An anagram is a word, phrase, or name formed by rearranging the letters of another, 
such as cinema, formed from iceman. 

*/

const validAnagram = function(str1, str2){

  if (str1.length !== str2.length) return false;

  let hashmap1 ={};
  let hashmap2 ={};

  for(let val of str1.split('')){
    hashmap1[val] =  (hashmap1[val] || 0 ) +1;
  }

  for(let val of str2.split('')){
    hashmap2[val] =  (hashmap2[val] || 0 ) +1;
  }

  for(let key in hashmap1) {

    if(!hashmap2[key] || hashmap1[key] !== hashmap2[key]) {

       return false;
    } 

  }
  
  return true;
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('qwerty', 'qeywrt'))// true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true
