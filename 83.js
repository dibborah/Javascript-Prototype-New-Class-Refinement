// Improvement using new keyWord

// constructor function: Because it is constructing an object for us

// # In constructor function it is a convention to write the first letter of the name of the funciton in upper case
// Write the first character in CAPITAL letters of the name of the function when defining or creating Constructor function
// This helps the future develops who have to understand the code to know that the function is a constructor function
// Why it is important for the developer to know this
// B/c then he would know that he have to create object using the function with the new keyword
// This is a Convention
// You must follow it in order to be a better CODER / DEVELOPER
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
console.log(user1);
console.log(user1.about());
// console.log(user1.is18());
// console.log(user2);
// console.log(user2.about());
// console.log(user2.is18());
