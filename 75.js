// arrow function

const user1 = {
    firstName: "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }
}