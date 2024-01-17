// Same method in SUBBASE CLASS
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    eat() {
      return `${this.name} is eating`;
    }
    isSuperCute() {
      return this.age <= 1;
    }
    isCute() {
      return true;
    }
  }
  
  // const animal1 = new Animal("tommy", 1);
  // console.log(animal1);
  // const result = animal1.eat();
  // console.log(result);
  // console.log(animal1.isCute());
  // console.log(animal1.isSuperCute());
  
  // const tommy = new dog("tommy", 3);
  // console.log(tommy.isSuperCute());
  // console.log(Object.getPrototypeOf(tommy));// To see the prototype
  
  // ----------- Notes ---------------
  
  // Animal is a existing class
  // Dog is again made another class
  // With the same properties and methods as animal class
  
  // Animal is parent / super or base
  // Dog is child / subclass / derived class
  
  // ----------- Notes ---------------
  
  class Dog extends Animal {// yaha Javascript ko jab Dog class main koi constructor nhi milta to wo bolta hain ki: "Chalo! Animal class wala constructor h main use kar leta hu"
      constructor(name, age, speed){
          super(name,age);// Animal class ko hum super class bolte hain wo ye line of code(LOC) super class Animal ko h represent kar rahi hain
          // super() method kiya kati hain// super class wale constructur main super class main  pass hone wali values lo super method sop deti hain. To super class wali constructor h unvalues ko set karti hain Dog class wala constructor un values ko set nahi karegi
          this.speed = speed;        
      }
      eat(){
        return `Modified Eat: ${this.name} is eating`
      }
      run(){
        return `${this.name} is running at ${this.speed}KMPH`
      }
  
  }
  
  // ------ Notes ----------
  // # super() method call the super constructor 
  // super constructor is the constructor of the super class
  
  // Object <=> Instance
  // object is also known as instance and vice versa
  // In Js it is mostly known as Object
  // But in other Programming languages such as Python, Java etc. object is also known as an Instance
  
  // Let's say someone says that I have created a "dog1" instance ...
  // than the person means that the person has created an object of name "dog1"
  
  // ------ Notes ----------
  
  const dog1 = new Dog("tommy", 3, 45);// Yaha hum in properties("tommy", 3, 45) ko add karne ke liye kon sa constructor istamaal (use) kar rahe hain
  // Hum Animal class wala constructor use kar rahe hain
  // console.log(dog1);
  // console.log(dog1.run());
  // console.log(dog1.eat());

  const animal1 = new Animal("sheru", 2);
  console.log(animal1);
  console.log(animal1.eat());
  