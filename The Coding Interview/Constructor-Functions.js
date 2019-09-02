// constructor function 

// example 1
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

// example 2
function user (firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = gender;
  this.age = age
}

user.prototype.getName = function () {
  return this.firstName + " " + this.lastName;
}
const userOne = new user ("bob", "wang","18", "M")

console.log(`firstName : ${userOne.firstName}`)
console.log(`lastName : ${userOne.lastName}`)
console.log(userOne.getName())
