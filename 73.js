function hello(){
    console.log("hello universe");
}
hello.call();// calling using .call() method

// call() method is a very important method in Js 
// Other important methods are:
// bind() & apply()

const user1 = {
    firstName : "harshit",
    age:8,
    about:function(){
        console.log(this.firstName, this.age);        
    }
}
const user2 = {// Note that in user2 there is no about() method but we want to use it!!!// How are we going to do that . Let's See --->
    firstName : "mohit",
    age:9,
}

// user1.about();
user1.about.call(user2)