//NOTE :  "this" in the arrow function may not working

const profile = {
    name: 'Alex',
    getName : () => {
        return profile.name;
        // return this.name not working in arrow function
    }
};

console.log(profile.getName());


const profile = {
    name: 'Alex',
    getName : function() {
        return this.name; 
        // return this.name not working if we are using arrow function
        // arrow function we need to use profile.name
        
    }
};

console.log(profile.getName());