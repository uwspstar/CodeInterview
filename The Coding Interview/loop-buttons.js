// this print "This is button 6" 5 times,
// need to print "This is button 1" ..."This is button 6" 

function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     button.onclick = function() {
          alert('This is button ' + i);
     }
     body.appendChild(button);
   }
}
 
createButtons();

// when we click the button, the loop finish, the i = 6 , so we use IFFE

// Solution 1:
 
function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     
     //IIFE Immediately Invoked Function Expression
     (function(num) {
       button.onclick = function() {
          alert('This is button ' + num);
       }
     })(i);
     
     body.appendChild(button);
   }
}
 
createButtons();
 
 
 
 
// Solution 2:
 
function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;  
     
     addClickFunctionality(button, i);
     
     body.appendChild(button);
   }
}
 
function addClickFunctionality(button, num) {
  button.onclick = function() {
    alert('This is button ' + num);
  }
}
 
createButtons();
 
 
 
 
// Solution 3:  ?????
 
function createButtons() {
   for (let i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     
     button.onclick = function() {
          alert('This is button ' + i);
     }
     
     body.appendChild(button);
   }
}
 
createButtons();
