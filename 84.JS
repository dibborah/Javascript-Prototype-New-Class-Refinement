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
  
  const user1 = new CreateUser("dibya","borah","dibya.borah@email.com",25,"Pegasus Tower");
  const user2 = new CreateUser("dib","borah","dib.borah@email.com",15,"Pegasus Tower");
  const user3 = new CreateUser("d","borah","d.borah@email.com",9,"Pegasus Tower");

  