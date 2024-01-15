// function createUser(firstName, age) {
  // this = {}// new is implicitly doing it all by itself
//   this.firstName = firstName;
//   this.age = age;
  // return firstName,age,firstName;
  // return this;// new is also implicitly doing it return the object
// }

// createUser.prototype.about = function () {
//   return `${this.firstName} and ${this.age}`;
// };

// const user = new createUser("dibya", 25);
// const user = createUser("dibya", 25);
//
// new keyword
// 1. It's creating an empty object this = {}
// 2. Returns that empty object this
// 3. New is also setting the proto of user to the prototype of createUser explicity
//    which earlier we were achieving using Object.create()

// Object.create(object_name)
// Does two thing
// 1. creates an empty object = {}
// 2. Creating the link between proto and prototype or setting proto

// New is one step earlier(new => this)
// # Note is used in relation with this
// 1. Creates empty this object
// 2. Returns the this object
// 3. Sets the proto (is methods are created and assigned in the prototype of the function)
//    Object.create(createUser.prototype) => new keyword kudh kar deta hain
//    humme kudhse alagse karneki koi jarurat nhi parti

// console.log(user.about());
