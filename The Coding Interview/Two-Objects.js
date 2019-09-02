Two Objects - Solution Source Code


const user1 = {
  name: 'Jordan',
  age: 28,
};
 
const user2 = {
  name: 'Jordan',
  age: 28,
};
 
console.log(user1 == user2); //false
console.log(user1 === user2); //false
console.log(JSON.stringify(user1) === JSON.stringify(user2)); //true

/*

When we assign this object to the variable user one and we assign this object to the variable user to
both of these variables are referencing different objects in memory.
Because these two objects are totally separate.
They are different from one another and therefore they can never be equal to each other even if they
have all of the same properties and values.
*/
