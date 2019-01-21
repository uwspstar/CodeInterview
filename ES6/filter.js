//filter will return all result true
//find will return the first true result

var numbers=[10,20,30];

function reject(numbers, num) {
  return numbers.filter(x=>{
    return x<15
  })
}

console.log(reject(numbers,10));



var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers =[];

filteredUsers = users.filter(x=>{
  return x.admin===true;
})

console.log(filteredUsers);

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = [];

filteredNumbers  = numbers.filter(x=>{
  return x>50;
})

console.log(filteredNumbers);


var post = { id:4, title:'a'};

var comments = [
  { id:4, title:'a'},
  { id:3, title:'b'},
  { id:4, title:'c'},
  ]
 

var commentsPost = function (post, comments){
  return comments.filter(x=>{
    return x.id === post.id;
  })
}

console.log(commentsPost(post,comments))

const products =[
  {name:1 , type:'a',  num :10 },
  {name:2 , type:'b' , num :20 },
  {name:3 , type:'a' , num :30 },
  {name:4 , type:'d' , num :40 }
];

var filterProducts =[];

filterProducts = products.filter(x=>{
  return x.type ==='a' && x.num >20
});

console.log(filterProducts);

/*
var filterProducts =[];

filterProducts = products.filter(x=>{
  return x.type ==='a'
});

console.log(filterProducts);

*/