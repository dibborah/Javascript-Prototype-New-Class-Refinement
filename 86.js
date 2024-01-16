// ES6/ ES-2015
// class keyword
// Fake internally
// B/c internally it work same as how our previous construction function (the below code was working)
// By externally it makes our life easy by shortening the syntax ...
// And saves us from doing the tedious tasks again and again

class CreateUser {
  constructor(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }
  about(){};
  is18(){};
  sing(){};
}
// invoke => call
// call => invoke
// call karne ka matlab hain invoke karna
// invoke karne ka matlab hain call karna

function CreateUser(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
}

CreateUser.prototype.about = function () {
  // console.log(this);
  return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function () {
  // console.log(this);
  return this.age >= 18;
};
CreateUser.prototype.sing = function () {
  return "lalala lala";
};

const user1 = new CreateUser(
  "dibya",
  "borah",
  "dibya.borah@email.com",
  25,
  "Pegasus Tower"
);
const user2 = new CreateUser(
  "dib",
  "borah",
  "dib.borah@email.com",
  15,
  "Pegasus Tower"
);
const user3 = new CreateUser(
  "d",
  "borah",
  "d.borah@email.com",
  9,
  "Pegasus Tower"
);
