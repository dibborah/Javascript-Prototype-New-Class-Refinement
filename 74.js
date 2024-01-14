const user1 = {
    firstName: "harshit",
    age: 8,
    about: function(){
        // console.log(this);
        console.log(this.firstName, this.age);
    }
}

// don't do this mistake
// user1.about();

// # Note: If we return the function we only have to use bind() method in order to get the correct value // When returning if bind is not used the right value won't be returned

// Calling the returned value in the future is done in case of Bind method
// Bind method can bind but other methods can't
const myFunc = user1.about.bind(user1);// myFunc main hum bas reference store kar rahe hain
myFunc();

// Not done in call (storing the return value in a const and later calling the const)
// const myFunc = user1.about.call(user1);// hum call method se value nahi return kar sakte bas bind method se kar skte hai
// myFunsc();// When used call no need to return the value and store it in a const and than again call it further in the future
// myFunc.call(user1);

