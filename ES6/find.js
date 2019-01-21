
// find function return when first return true
var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var user;

user = users.find(x=>{
  return x.admin === true;
});

console.log(user);