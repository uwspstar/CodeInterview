# bigO
- https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11070006#overview
![BigO](https://github.com/uwspstar/Javascript/blob/master/BigO/bigo2.png)
- O(n)
```
function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
```
- O(1)
```
function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
```
# space
- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects)
