

// Scope and "self"
// function is an object
// "this" for the object owner (a function object ower), js word, the gloale obj is windows


var myCar = {
    color: "Blue",
    logColor: function() {
        var self = this;
        console.log("In logColor - this.color: " + this.color); // "this" refers to myCar obj
        console.log("In logColor - self.color: " + self.color); // "self" equel this refer to myCar object
        
        (function() {
            console.log("In IIFE - this.color: " + this.color); 
            // "this" lost refers to myCar, will point globle object which we do not have
            console.log("In IIFE - self.color: " + self.color); // "this refers to myCar
        })();
        
    }
};
 
myCar.logColor();

/*
In logColor - this.color: Blue
In logColor - self.color: Blue
In IIFE - this.color: undefined
In IIFE - self.color: Blue
*/
