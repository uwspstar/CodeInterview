//use reduce to return the final value
// find balancedParens
//"()()" //true
//"))))" //false
//"((((" //false
//"(())" //true
//")()(" //false
//")()())))" //false


var balancedParens = function (string){
  return [...string].reduce((x,y)=>{
    if(y==='('){
      x=x+1;
    } else {
      x=x-1;
    }  
    return x;

  },0);
}

console.log(balancedParens("()()"));
console.log(balancedParens("())()"));
console.log(balancedParens("(())"));
console.log(balancedParens("))))"));
console.log(balancedParens("(((("));