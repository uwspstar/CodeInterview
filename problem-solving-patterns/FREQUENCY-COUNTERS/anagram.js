
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



//if the space is main concern
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

