    Simplify the big O expression as much as possible - O(n + 10) //O(n)
    Simplify the big O expression as much as possible - O(100 * n)//O(n)
    Simply the following big O expression as much as possible - O(25)//O(1)
    Simply the following big O expression as much as possible -  O(n^2 + n^3)////O(n^3)
    Simply the following big O expression as much as possible - O(n + n + n + n)////O(n)

//Determine the time complexity for the following function function 
logUpTo(n) { for (var i = 1; i <= n; i++) { console.log(i); } } 
//O(n)

//Determine the time complexity for the following function  function 
logAtMost10(n) { for (var i = 1; i <= Math.min(n, 10); i++) { console.log(i); } }
//O(1)

//Determine the time complexity for the following functionfunction 
logAtLeast10(n) { 
  for (var i = 1; i <= Math.max(n, 10); i++) { console.log(i); } }
//O(n)

//Determine the time complexity for the following function function 
onlyElementsAtEvenIndex(array) { 
  var newArray = Array(Math.ceil(array.length / 2)); 
  for (var i = 0; i < array.length; i++) { if (i % 2 === 0) { newArray[i / 2] = array[i]; } } return newArray; }
//O(n)
//Determine the time complexity for the following function

    function subtotals(array) {
        var subtotalArray = Array(array.length);
        for (var i = 0; i < array.length; i++) {
            var subtotal = 0;
            for (var j = 0; j <= i; j++) {
                subtotal += array[j];
            }
            subtotalArray[i] = subtotal;
        }
        return subtotalArray;
    }
    //O(n^2)


/////////////"space complexity"

    //Determine the space complexity for the following function  

    function logUpTo(n) {
        for (var i = 1; i <= n; i++) {
            console.log(i);
        }
    }
    //O(1)

    //Determine the space complexity for the following function  

    function logAtMost10(n) {
        for (var i = 1; i <= Math.min(n, 10); i++) {
            console.log(i);
        }
    }
        //O(1)


//Determine the space complexity for the following function  

    function logAtMost10(n) {
        for (var i = 1; i <= Math.min(n, 10); i++) {
            console.log(i);
        }
    }

     //O(1)


//Determine the  space complexity for the following function 

    function onlyElementsAtEvenIndex(array) {
        var newArray = Array(Math.ceil(array.length / 2));
        for (var i = 0; i < array.length; i++) {
            if (i % 2 === 0) {
                newArray[i / 2] = array[i];
            }
        }
        return newArray;
    }
    //O(n)

    //Determine the "space complexity" for the following function

    function subtotals(array) {
        var subtotalArray = Array(array.length);
        for (var i = 0; i < array.length; i++) {
            var subtotal = 0;
            for (var j = 0; j <= i; j++) {
                subtotal += array[j];
            }
            subtotalArray[i] = subtotal;
        }
        return subtotalArray;
    }
    //O(n)  not O(n^2)  
    //the subtotal += array[j]; is not assing new array