const buildCharMap = function (str){
  const charMap={};
  for(let char of str ){
    charMap[char] = charMap[char] +1 || 1;
  }
  return charMap;
}

console.log(buildCharMap('aabcddddde'));
