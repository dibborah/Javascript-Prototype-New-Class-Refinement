// getters and setters

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // get is treating the method as a property
    // so then fullName can be used as an property being an method indeed
    get fullName(){// get makes the method getable directly
        // get keyword changes a method into a property like
        return `${this.firstName} ${this.lastName}`;
    }
    // setName(firstName, lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        // fullName.split(" "); => [Elon, Musk] // Is line se ye kam hoga
        // split " " space se string ko split karke internally ek list , ek array jesa bana deti hain
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// const person1 = new Person("dibya", "borah", 5);
// console.log(person1);
// console.log(person1.fullName());// Since get it used and now it is being a method behaving like a object property or key so we cann't call it 
// but since we are calling it so, it is throwing error

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.fullName);// Ye internally call hoga par humme ismme () parenthesis lagane ki jaruraat nhi hain
// Wo internally isme kuch perenthesis () laga degi
// Throws error => If we put parenthesis explicitly

// const person1 = new Person("dibya", "borah", 5);
// console.log(person1.firstName);
// console.log(person1.lastName);

// Line 1
// person1.setName("elon", "musk"); // Changed or setted the values of firstName and lastName
// Line 2
// person1.firstName = "elon";
// person1.lastName = "musk";
// # Note : Line 1 === Line 2;
// Line 1 is equivalent of Line 2;

// console.log(person1.firstName);
// console.log(person1.lastName);



// USE CASE:

// If we have to set users "firstName" and "lastName" using its "fullName"
// We'll achieve this by using "SETTERS"

// I want that if I write 

// person1.fullName = "Elon Musk";

// console.log(person1);
// console.log(person1.fullName);

// Then Automatically firstName should be equal to "Elon"
// And lastName should be equal to "Musk"

// But it is not doing it now

// Let's do it then:

// set keyword (setter method)
const person1 = new Person("dibya", "borah", 5);
person1.fullName = "Elon Musk";
// console.log(person1.firstName);
// console.log(person1.lastName);
console.log(person1);





