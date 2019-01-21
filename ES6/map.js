
var paints = [
  { color: 'red' },
  { color: 'blue'  },
  { color: 'yellow'  }
];

function pluck(array, property) { 
    return array.map(x => {
        return x[property];
      }); 
} 

console.log(pluck(paints, 'color'));

/*

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];


var speeds = trips.map(x=>{
  return (x.distance / x.time) ;
});

console.log(speeds);


var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights =  images.map(x=>{
  return x.height;
});

console.log(heights);


var cars = [
  {model:'Buicl', price: 'CHEX'},
  {model:'sss', price: 'exs'}
];

var prices = cars.map(car =>{
  return car.price;
})

var prices2 = cars.map(function(car){
  return car.price;
})

console.log(prices2);

console.log(prices);








var numbers = [1,2,3,4,5];

var doubleNumbers  = [];




var double = numbers.map(function(x){
  return x*2;
})

console.log(double);


numbers.forEach(x=>{
  doubleNumbers.push(x*2);
})

console.log(doubleNumbers);

*/