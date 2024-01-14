// // short syntax when defining method in object

// const user1 = {
//     firstName: "harshit",
//     age: 8,
//     about: function(){
//         // console.log(this);
//         console.log(this.firstName, this.age);
//     }
// }
// short syntax when defining method in object

const user1 = {
    firstName: "harshit",
    age: 8,
    about(){ // Same as the above syntax // This is the short syntax to define fc inside an OBJECT
        console.log(this.firstName, this.age);
    }
}

user1.about();