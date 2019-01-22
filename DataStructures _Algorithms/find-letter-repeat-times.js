//find-letter-repeat-times.js

//find letter repeat times
//const str ="do not push you luck dude";
// letterCounter("do not push you luck dude") //d:3, O:3, u:3...
 
 const letterCounter = function (str) {
   
   var map = {} ;
   var result= {};

   [...str].forEach(x=>{

     if(!map[x]){
       map[x] = true; 
       result[x]  = 0;
     }

   });

   [...str].forEach(x=>{ 
     
     if(map[x]){  
       result[x] = result[x]+1;
     }

 
   })
   
   return result;
 }
 
 console.log(letterCounter("do not push you luck dude"));