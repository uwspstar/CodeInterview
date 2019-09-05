//Bind Method - Solution Source Code
// the bind method will change the "this"

this.distance = 10000;

const roadTrip1 = {
  distance: 3000,
  getDistance: function(unit, caption) {
    return this.distance + unit + caption;
  }
};

const getTripDistance = roadTrip1.getDistance
getTripDistance(); // return "10000" globle this


const roadTrip2 = {
  distance: 5000
};
 
const getTripDistance = roadTrip1.getDistance.bind(roadTrip2, 'km'); // return 5000, "this" from roadTrip2
 
getTripDistance(' in total');


/*

this.x = 9;    // this refers to global "window" object here in the browser
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();   
// returns 9 - The function gets invoked at the global scope

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global var x with module's property x
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81

*/
