const userMethod = { // Memory ke andar ye methods alag se store kar liya
    about : function () {
        return `${this.firstName} is ${this.age} years old.`;
      },
    is18 : function () {
        return this.age >= 18;
      },
}
function createUser(firstName, lastName, email, age, address) {
    const user = {};
    (user.firstName = firstName),
      (user.lastName = lastName),
      (user.email = email);
    user.age = age;
    user.address = address;
    user.about = userMethod.about; // This is just taking the reference (pata{matlab pata address store kar raha hain})
    // user.about = function () { // This is a less efficient way
    //     return `${this.firstName} is ${this.age} years old.`;
    //   },
    user.is18 = userMethod.is18;// But the actual method is stored in somewhere other memory location
    // user.is18 = function () { // Since in this way when any new object gets create again the same methods are assigned in new location // Creating repeatative data
    //     return this.age >= 18;
    //   };
    return user;
  }
  
  const user1 = createUser("dibya", "borah", "dibya.borah@email.com",19, "Pegasus Tower");
  const user2 = createUser("dib", "borah", "dib.borah@email.com",15, "Pegasus Tower");
  const user3 = createUser("d", "borah", "d.borah@email.com",9, "Pegasus Tower");

  console.log(user1.about());
  console.log(user2.about());
  console.log(user3.about());
  
  // Methods => Function Inside Objects

  // # Always try to create referance 
  // # Never write repeatative data or code

