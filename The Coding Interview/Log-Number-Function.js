// Log Number Function

var num = 50;

function logNumber() {
    console.log(num); 
    var num = 100;
}
 
logNumber(); //Undefined

//reason : var hoisting

var num = 50;
 
function logNumber() {
    var num;
    console.log(num); //Undefined
    num = 100;
}
 
logNumber(); 
