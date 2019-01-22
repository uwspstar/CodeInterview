//hashtable : map key to values, key value, not order
//collision : two distinct keys colliding into the same index


/*
https://visualgo.net/en/hashtable

Hash Table is a data structure to map key to values (also called Table or Map Abstract Data Type/ADT). 
It uses a hash function to map large or even non-Integer keys into a small range of Integer indices (typically [0..hash_table_size-1]).

The probability of two distinct keys colliding into the same index is relatively high and each of this potential collision needs to be resolved to maintain data integrity.

There are several collision resolution strategies that will be highlighted in this visualization: 
Open Addressing (Linear Probing, Quadratic Probing, and Double Hashing) and Closed Addressing (Separate Chaining). 
Try clicking Search(8) for a sample animation of searching a value in a Hash Table using Separate Chaining technique.

Click 'Next' (on the top right)/press 'Page Down' to advance this e-Lecture slide, 
use the drop down list/press 'Space' to jump to a specific slide, or Click 'X' (on the bottom right)/press 'Esc' to go to Exploration mode.

*/







//find letter repeat times
//const str ="do not push you luck dude";
//letterCounter("do not push you luck dude") //d:3, O:3, u:3...
 
 //solution 2
 const letterCounter2 = function (str) {
    let result= {};
    for(let i=0; i<str.length; i++) {  
      const char= str[i].toLowerCase();
      if(result[char] > 0) {
        result[char] = result[char]+1;
      } else {
        result[char] =1;  
      }
    } 

    return result;
 };

 console.log(letterCounter2("do not push you luck dude"));