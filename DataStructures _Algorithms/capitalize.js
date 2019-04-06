// capitalize sentence



const capitalize = function (str){
  const words = [];
  for(let char of str.split(' ') ){
    words.push(char[0].toUpperCase() + char.slice(1));
  }
  return words.join(' ');
}

console.log(capitalize('I love you baby'));
