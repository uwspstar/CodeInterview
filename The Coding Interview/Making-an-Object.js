3 ways Making an Object - Solution Source Code

//1. object literal syntax
const myBoat = {
  length: 24,
  maxSpeed: 45,
  passengers: 14,
  getLength: function() {
    return this.length;
  }
}; 
 
 
//2. new keyword & Object constructor
const student = new Object();
 
student.grade = 12;
student.gradePointAverage = 3.7;
student.classes = ["English", "Algebra", "Chemistry"];
student.getClasses = function() {
  return this.classes;
};
 
 
//3. constructor function 
function Car(color, brand, year) {
  this.color = color;
  this.brand = brand;
  this.year = year;
}
 
Car.prototype.getColor = function() {
  return this.color;
};
 
const carlysCar = new Car('blue', 'ferarri', 2015);
const jimsCar = new Car('red', 'tesla', 2014);
 
console.log(carlysCar.getColor());
console.log(jimsCar.getColor());
