"call" and "apply" Methods - Solution 
// change the content "this"
// call(obj, param1,param2)
// apply(obj, [param1,param2] )
// arrow function cannot use call, and apply

const car = {
  engin:"v8",
  getCarDescription : function (year, color) {
    console.log(`engin ${this.engin} color ${color} build on ${year} `)
  },

  // arrow function cannot use call, and apply
  getCarDes2 : (year, color) => {
    console.log(`engin ${this.engin} color ${color} build on ${year} `)
  }

}

const myCar = {
  engin:"v6"
}

car.getCarDescription.call(myCar, 1998, "red")
car.getCarDes2.call(myCar, 1998, "red")
car.getCarDescription.apply(myCar, [1996, "blue"])
car.getCarDes2.apply(myCar, [1996, "blue"])

const car1 = {
  brand: 'Porsche',
  getCarDescription: function(cost, year, color) {
    console.log(`This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}.\n`);
  }
};
 
const car2 = {
  brand: 'Lamborghini'
};
 
const car3 = {
  brand: 'Ford'
};
 
car1.getCarDescription.call(car2, 1, 1, "red")
car1.getCarDescription.apply(car3,[1, 1, "red"])


// car1.getCarDescription(80000, 2010, 'blue');
// car1.getCarDescription.call(car2, 200000, 2013, 'yellow');
// car1.getCarDescription.apply(car3, [35000, 2012, 'black']);
