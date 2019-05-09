
# Study Notes (use white board)
- In each of those pairs (push/pop and unshift/shift), the longer word makes the array longer.
## collapsible markdown?

<details><summary>CLICK ME</summary>
<p>

#### yes, even hidden code blocks!

```python
print("hello world!")
```

</p>
</details>
 
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

- ```let str = x + ''; let reversStr = str.split("").reverse().join("") ;```
- arr[0].toUpperCase()// up case
- if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1));
```
  - str.slice(1,-1) //cut first and last
  - recursion inside if...else
```
- indexOf()  //NOT indexof , indexOf works, but slow 
```
console.log(beasts.indexOf('bison', 2)); // start from index 2
```
- aString.charAt(index) // works, but slow
- 
```
let arr = s.split(''); // Only build arr at once
NOT for(let i = 0; i < s.split('').length ; i++), 
use for(let i = 0; i < arr.length;i++)
```
- arr[arr.length -1] // arr last element
- parseInt(len / 2) // get int
- loop meet in the middle
```
  const len = arr.length;
  const n = parseInt(len / 2);

  for(let i = 0; i < n ; i++){
      const temp = arr[i];
      arr[i] =  arr[len-1-i];
      arr[len-1-i] = temp;
  }
 ```
 
 - Math.pow(base, exponent)
 - shift(): Remove an item from the beginning of an array.
 - let str =  x.toString().trim('-'); // *** trim('-') NOT Working, need to use 
 - let str =  x.toString().replace("-","");
 - while(strs[i].indexOf(result) != 0) // cannot found continue
 ```
    while(i < strs.length){ //loop array
        while(strs[i].indexOf(result) != 0){
          result = result.substring(0,result.length-1);
        }   
        i++;
    }
 ```
### 05/09/2019
- str =`${num1}${num2}`;//conver num to string
- str = num + ''; //conver num to string
- num = +str ; //conver str to num
- ```(push/pop and unshift/shift), the longer word makes the array longer.```
- arr.pop() //arr.pop() output: last one element
- arr.pop() //conslg(arr) output: the rest arr
```var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
// expected output: "tomato"
console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
```
