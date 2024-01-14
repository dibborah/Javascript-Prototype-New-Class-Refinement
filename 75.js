// arrow function

const user1 = {
    firstName: "harshit",
    age: 8,
    // about: function(){// anonymous function(function without any name)
    //     console.log(this);// Here this is user1 since this is not a arrow function
    //     console.log(this.firstName, this.age);
    // }
    about: () => {// Anonymous arrow function
        // arrow function apna this surroundings se leta hain
        // console.log(this);// Here this is the GLOBAL WINDOW object //Arrow function searches this by going one level up and searches the global scope
        console.log(this.firstName, this.age);// Arrow function main this nahi hota
    }
}

// user1.about();
user1.about.call(user1);// Arrow function ka this ko hum change nhi kar skte

// # In Arrow function this is the global window object
// When normal funciton syntax is used this is the local scope object
// this => OBJECT