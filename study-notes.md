
# Study Notes (use white board)

### 05/05/2019
- for...of values
- for...in keys
- input checking  if(arr.length < 2) return arr.length;
- ``` haspMap[key] = ( haspMap[key] || 0 ) +1; ```
- double index : index i, index j, j=i+1 
- double index : left index i, right index j, i and j meet in middle
- use index[0] as a space to save result
- new Set(arr).size -- NOT length
- Object.keys(hashMap).length -- NOT size

### 05/06/2019
- slice(indexStart,indexEnd) -- NOT include arr[indexEnd]
- [...`${num1}${num2}`] -- combind num1 and num2 to be a new arr 
```
const combined1 = `${numOne}${numTwo}`; //string let numOne = 123; let numTwo = 456;
```
- typeof --NOT typeOf

- ```Declare all local variables with either const or let.``` 
- ```Use const by default, unless a variable needs to be reassigned.```
- ```The var keyword must not be used.```
- ```[...foo]   // preferred over Array.prototype.slice.call(foo)```
- ```[...foo, ...bar]   // preferred over foo.concat(bar)```
- ``` Prefer for-of and Object.keys over for-in when possible.```

### 05/07/2019
- maxSum = Math.max(maxSum, tempSum);
- arr[i]%2===0;
- Recursion
```
const printReverse2 = function(str){ 
  let arr = str.split('');  let n = arr.length; 
  //1. output
  let result = [];
  //2. helper with input
  function helper(input){  
    if (input.length === 0) return; //Base case
    result.push(input[input.length-1]); //modify result
    input.length = input.length-1; //update input
    helper(input); //Recursion
  };
  //3. call helper
  helper(arr);   return result.join('');
}
```
### 05/08/2019
- indexOf()  // NOT indexof 
```console.log(beasts.indexOf('bison', 2)); // start from index 2```
