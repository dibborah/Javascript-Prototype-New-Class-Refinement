// Topics OOP & Creating functions to create multiple objects

// OOP => Object Oriented Programming

// (proto, prototype, class)=> We'll see and learn this concepts which includes in OOP

// The structures of OOP:
// Also known as the Building Blocks of OOP :
// 1. class
// 2. Object
// 3. method
// 4. Attribute

// 4 Principles of OOP are:
// 1. Encapsulation
// 2. Abstraction
// 3. Inheritance
// 4. Polymorphism

// OOP in Javascript :

// const user1 = {
//   firstName: "dibya",
//   lastName: "borah",
//   email: "dibya.borah@email.com",
//   age: 3,
//   address: "sector, colony, pincode, state",
//   about: function () {
//     return `${this.firstName} is ${this.age} years old.`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

// If we need any more such users such as User1 may be we would need 100 such users
// Can we hardcode all the such users like that
// Not to do such tedious job we will create a function

// After creating a function we will pass the (firstName, lastName, etc.) as arguement of the different users we need

//  function(that function 1.create object )
// 2. add key value pair
// 3. object ko return karega

// function =>
// 1. Create Object
// 2. Add key value pairs(properties)
// 3. Return that object

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName,
  user.lastName = lastName,
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function () {
    return `${this.firstName} is ${this.age} years old.`;
  };
  user.is18 = function () {
    return this.age >= 18;
  };
  //   console.log(user);
  return user;
}

const user1 = createUser("dibya", "borah", "dibya.borah@email.com",19, "Pegasus Tower");
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);

// Methods => Function Inside Objects 
