





var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(image=>{
  areas.push(image.height * image.width);
})

console.log(areas);

/*


function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
    posts.forEach(savePost);
   
    for (var i = 0; i < posts.length; i++) {
      savePost(posts[i]);
    }
      
}

function savePost(x){
  console.log(x);
}
handlePosts();

//-------------------------
  
var numbers = [1,2,3,4,5];
var sum = 0;


function adder(number){
  sum += number;
}

numbers.forEach(adder) // not calling adder(), or adder(number) 

console.log(sum);



numbers.forEach( number => {
  sum += number;
})




numbers.forEach(function(number){
  sum += number;
})

console.log(sum);

 

var colors =['red','blue','yellow','green'];

//forEach pass the iteration function inside 
colors.forEach(function(x){ 
  console.log(x);
});


 

colors.forEach(x=>{
  console.log(x);
});

const result = function (arr){
  
  arr.forEach( x=> {
    console.log(x);
  })
}

result(colors);

*/