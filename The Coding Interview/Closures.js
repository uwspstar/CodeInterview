//Closures - Solution Source Code

//What is closures : 
- a closure is an inner function that has access to the scope of an enclosing function

- a closure has access to variables in 3 separate scopes:
  - 1. Variable in its owner scope
  - 2. Variable in the scope of the outer function
  - 3. Variable in the global scope


const globalVariable = 'global var';
 
function outterFunc(param1) {
  const variable1 = 'var one';
  
  function innerFunc(param2) {
    const variable2 = 'var two';
    
    console.log('globalVariable: ', globalVariable);
    console.log('variable1: ', variable1);
    console.log('variable2: ', variable2);
    console.log('param1: ', param1);
    console.log('param2: ', param2);
  }
  
  innerFunc('param one');
}
 
outterFunc('param two');
