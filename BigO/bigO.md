# bigO
- https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11070006#overview
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
