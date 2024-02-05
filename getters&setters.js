class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
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
// console.log(person1.fullName);

console.log(person1);
person1.fullName = "d b"
console.log(person1);
