class Animal {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}

// const animal1 = new Animal("tommy", 1);
// console.log(animal1);
// const result = animal1.eat();
// console.log(result);
// console.log(animal1.isCute());
// console.log(animal1.isSuperCute());

// dog class

// class dog{
//     constructor(name, age){
//         this.name= name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating`;
//     };
//     isSuperCute(){
//         return this.age <= 1;
//     };
//     isCute(){
//         return true;
//     };
// }

// const tommy = new dog("tommy", 3);
// console.log(tommy.isSuperCute());
// console.log(Object.getPrototypeOf(tommy));// To see the prototype 

// Animal is a existing class
// Dog is again made another class
// With the same properties and methods as animal class

// Animal is parent / super or base
// Dog is child / subclass / derived class
class Dog extends Animal{
    constructor(name, age, gender){
        super(name,age);
        this.gender = gender;
    }
    isMale(){
        return true;
    }
    isCute(){
        return false;
    }

}

const dog1 = new Dog("tommy", 1, "male");// new keyword calls a constructor
// console.log(dog1);
console.log(dog1.isCute());
