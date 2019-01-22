//find letter repeat times
//const str ="do not push you luck dude";
// letterCounter("do not push you luck dude") //d:3, O:3, u:3...
 
 //solution 2
 const letterCounter2 = function (str) {
    let result= {};
    for(let i=0; i<str.length; i++) {  
      const char= str[i].toLowerCase();
      if(result[char] > 0) {
        result[char] = result[char]+1;
      } else {
        result[char] =1;  
      }
    } 

    return result;
 };

 console.log(letterCounter2("do not push you luck dude"));

 //solution 1
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