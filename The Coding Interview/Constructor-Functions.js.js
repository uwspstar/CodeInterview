// constructor function 
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
