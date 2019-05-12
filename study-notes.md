
# Study Notes (use white board)
- In each of those pairs (push/pop and unshift/shift), the longer word makes the array longer.
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Sorting_with_map
- ask input string has none english letter
 
### 05/05/2019 
- for...of values
- for...in keys
- input checking  if(arr.length < 2) return arr.length;
- ``` haspMap[key] = ( haspMap[key] || 0 ) +1; ```
- double index : index i, index j, j=i+1 // two pointers
- double index : left index i, right index j, i and j meet in middle //two pointers
- use index[0] as a space to save result
- new Set(arr).size -- NOT length
- Object.keys(hashMap).length -- NOT size

### 05/06/2019 
- slice(indexStart,indexEnd) -- NOT include arr[indexEnd]
- [...`${num1}${num2}`] -- combind num1 and num2 to be a new arr 
- const combined1 = `${numOne}${numTwo}`; //string let numOne = 123; let numTwo = 456;
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
- nums.splice(i,1);// remove num[i] element ; NOT slice
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
 - Circular Array
 ```
const arr =[1,2,3,4,5,6];
const len = arr.length;
let j = 0;
while(j < len) {
  const i = (3+j)%len; //start index 3
  const temp = `i = ${i}, arr[${i}] = ${arr[i]}`;
  console.log(temp); 
  j++
}
 ```

### 05/10/2019 
- a /= b is equivalent to a = a / b
```
a -= b is equivalent to a = a - b
a *= b is equivalent to a = a * b
a /= b is equivalent to a = a / b
```
- if( strs[i].indexOf(commonPrefix) != 0 ) // different with if( strs[i].indexOf(commonPrefix) === -1 )
```
strs[i].indexOf(commonPrefix) != 0  make sure apper at begining
strs[i].indexOf(commonPrefix) === -1 only make sure apper, but not always at begining
```
- arr.join('') and arr.join() // NOT arr.join(),, so bad; BUG !!!
- Math.abs(x) // absolute
- Remove Duplicate // arr.length -> n also keep reduce when found duplicate
```
public int removeElement(int[] nums, int val) {
    int i = 0;
    int n = nums.length; // Dynamic, n also keep reduce when found duplicate
    while (i < n) {
        if (nums[i] == val) {
            nums[i] = nums[n - 1];
            // reduce array size by one
            n--;
        } else {
            i++;
        }
    }
    return n;
}
```
### 05/11/2019 
- [1] differnet [ [1] ]
- split('') //NOT split()
- Upper case and Lower case // CHECK input
```
let hashmap = {
        'a' : true,
        'e' : true,
        'i' : true,
        'o' : true,
        'u' : true,
        'A' : true,
        'E' : true,
        'I' : true,
        'O' : true,
        'U' : true  
    }
```
- double index : left index i, right index j, i and j meet in middle //two pointers 
- while(<j){...} // meet, start noth side
```
while(<j){ // meet
...
i++; //from left, 
j--; //from right 
}
```
- arr.reduce((a,b)=>{},0) // 0 just initial number for b

### 05/12/2019
- numbers.sort((a, b) => a - b); // SORT the way you want, such as numbers.sort((s1, s2) => s1.lenght - s2.length);
- numbers.sort((s1, s2) => s1.lenght - s2.length);
```
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
```
- arr.pop() // 1 ,last, element from arr , NOT reture rest arr, the arr modified
- arr.join() vs arr.join(''); // If an element is undefined or null, it is converted to the empty string.
```
var elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); // expected output: "Fire,Air,Water"
console.log(elements.join('')); // expected output: "FireAirWater"
```
- var arr = [...str];
- str.split(' ') vs str.split('') // attention
```
var str = 'The quick brown fox jumps over the lazy dog.';
var words = str.split(' ');
console.log(words[3]); // expected output: "fox"
var chars = str.split('');
console.log(chars[8]);// expected output: "k"
var strCopy = str.split();
console.log(strCopy);// expected output: Array ["The quick brown fox jumps over the lazy dog."]

var myString = 'Hello World. How are you doing?';
var splits = myString.split(' ', 3); // ["Hello", "World.", "How"]
```
- var strReverse = str.split('').reverse().join('');
```Bonus: use === operator to test if the original string was palindrome.```
