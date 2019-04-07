//a,e,i,o,u
const vowels = function(str){

  let count = 0;
  const checker ="aeiou";

  for (let char of str.toLowerCase()){
    if(checker.includes(char)) {
      count++;
      }

  }

  return count;

}

console.log(vowels('hello world')); //3
