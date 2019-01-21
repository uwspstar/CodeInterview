//1. refernce type
//2. context vs scope
//3. instantiation

//refernce type
var object1 ={value:10};
var object2 = object1;
var object3 ={value:10};

console.log(object1===object2); //true
console.log(object1===object3); //false

console.log(object1.value ===object3.value); //true

function b(){
  console.log(this);
}
//b();
//console.log(this); //this = window
//console.log(window) ;

//console.log(this === window) 

//context vs scope
 
class Player{
  constructor(name,type){
    console.log(this);
    this.name = name;
    this.type= type;
  }

  instroduce(){
    console.log(`I am ${this.name}, I am ${this.type}`);
  }
}


class Wizard extends Player{
  constructor(name,type){
    super(name,type)
  }
  play(){
    console.log(`I am ${this.type}`);
  }
}

const test = new Wizard('shelly','healer');
const test2 = new Wizard('shelly2','healer2');

test.instroduce();
test2.play();

//instantiation