// ES6/ ES-2015
// class keyword
// Fake internally
// B/c internally it work same as how our previous construction function (the below code was working)
// By externally it makes our life easy by shortening the syntax ...
// And saves us from doing the tedious tasks again and again

class CreateUser {
  constructor(firstName, lastName, email, age, address) {
    console.log("Constructor called");
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }
  about(){
    return `${this.firstName} is ${this.age} years old.`;
  };
  is18(){
    return this.age >= 18;
  };
  sing(){
    return "lalala lala";
  };
  func(a){
    console.log(a);
  }
}

// ------------Note---------------

// invoke => call
// call => invoke
// call karne ka matlab hain invoke karna
// invoke karne ka matlab hain call karna

// ------------Note-End-----------

// function CreateUser(firstName, lastName, email, age, address) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.email = email;
//   this.age = age;
//   this.address = address;
// }

// CreateUser.prototype.about = function () {
//   // console.log(this);
//   return `${this.firstName} is ${this.age} years old.`;
// };
// CreateUser.prototype.is18 = function () {
//   // console.log(this);
//   return this.age >= 18;
// };
// CreateUser.prototype.sing = function () {
//   return "lalala lala";
// };

const user1 = new CreateUser("dibya","borah","dibya.borah@email.com",25,"Pegasus Tower");
const user2 = new CreateUser("dib","borah","dib.borah@email.com",15,"Pegasus Tower");
const user3 = new CreateUser("d","borah","d.borah@email.com",9,"Pegasus Tower");

// console.log(user1);
// console.log(user1.sing());

console.log(Object.getPrototypeOf(user1));
// user1.func("dibya");
user1.func(12);