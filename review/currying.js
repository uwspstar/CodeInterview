function multiply(a, b) {
    return a*b;
}

// use bind this to get only one param

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4)); // 8

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4)); // 12
