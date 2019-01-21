//case 3
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

//case 2
//use reduce to return ["red","blue","green"]
var colors =[
  {color: "red"},
  {color: "blue"},
  {color: "green"}
]; 

var colorResult =  colors.reduce((x,y)=>{
  x.push(y.color);
  return x;
},[]);

console.log(colorResult);


//case 1
var numbers=[1,2,3,4,5];

var result = numbers.reduce((x,y)=>{
  return x+y;
},0);  
// 0 is the intial value for x, 
// y in the element value

console.log(result);