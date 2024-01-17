// static methods and properties

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  static classInfo(){
    return "this is Person class";
  }
  static desc = "static property";
  get fullName() {
    // get makes the method getable directly
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
  eat() {
    return `${this.firstName} is eating`;
  }
  isSuperCute() {
    return this.age <= 1;
  }
  isCute() {
    return true;
  }
}

const person1 = new Person("dibya", "borah", 26);
// console.log(person1.eat());// Ye method ya is class ke sabhi methods hum class ke objects pe call karte hain
// console.log(person1.classInfo());// Throws Error. classInfo is a static method and can't be called by instance or object
// console.log(Person.classInfo());
// console.log(person1.desc);// can't acces by this// Shows undefined// B/c person1 ke pass desc karke koi property nhi hain
console.log(Person.desc);


// USE CASE : static concept
// App initialise:
// app run karne ke liye hum ek jo class bana lete hain choti si 
// us class main hum static method bana lete hain hum init() karke kuch
// usse help milti hain humme aap ko initialize karne ke liye

