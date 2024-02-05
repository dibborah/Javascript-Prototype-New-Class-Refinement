class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static info(){
        return "this is a class method";
    }
    static prop = "this is a class property";

    get fullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
    setName(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    set fullName(fullName){
        const [firsName, lastName] = fullName.split(" ");
        this.firstName = firsName;
        this.lastName = lastName;
    }
}

const person1 = new Person("dibya", "borah", 50);

// static methods cannot be called or invoked on class instances/objects and can only called directly on class
// console.log(person1.info());
// console.log(person1.prop);

console.log(Person.info());
console.log(Person.prop);
