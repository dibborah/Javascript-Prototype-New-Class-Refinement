// const userMethod = {
//     about: function () {
//       return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18: function () {
//       return this.age >= 18;
//     },
//     sing: function () {
//       return "lalala lala";
//     },
//   };
function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype); // Prototype chain will be created;
  //   const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}
//   createUser.prototype.about = function(){
//           return `${this.firstName} is ${this.age} years old.`;
//     };

// using arrow function

createUser.prototype.about = function () {
    // console.log(this);
  return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function() {
    // console.log(this);
  return this.age >= 18;
};
createUser.prototype.sing = function () {
  return "lalala lala";
};

const user1 = createUser(
  "dibya",
  "borah",
  "dibya.borah@email.com",
  100,
  "Pegasus Tower"
);
const user2 = createUser(
  "dib",
  "borah",
  "dib.borah@email.com",
  15,
  "Pegasus Tower"
);
const user3 = createUser("d", "borah", "d.borah@email.com", 9, "Pegasus Tower");
console.log(user1);
console.log(user1.about());
console.log(user1.is18());
// console.log(createUser.prototype);
// createUser.prototype.uniqueKey="uniqueKey";
// createUser.key1 ="value1";

// # prototype is simply an object
// # __proto__ is simple a reference of chain you create