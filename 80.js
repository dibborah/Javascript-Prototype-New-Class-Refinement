const obj1 = {
    key1: "value1",
    key2: "value2"
};

// const obj2 = {
//     key3: "value3"
// }

// console.log(obj2.key1); // Yaha js humne "undefined" return kar raha hain kiuki obj2 ke pass key1 nahi hain

// obj2 = {};
// # There is one more to create empty object
// Desi Bhasa main: Khali object banane ke liye hamare pas ek aur tarika hota hain
// obj2.key3 = "value3";
// console.log(obj2.key3);

// __proto__

// official ecmascript documentation
// [[Prototype]]
// __proto__, [[Prototype]]

// prototype

// __proto__ pe set karna hain obj1 ka reference to Object.create(obj1) se hum kar skte hain
const obj2 = Object.create(obj1);// See here that in create method we are passing obj1
// when obj1 is passed in create() method the referene of obj1 is store in obj2
// so now all the properties or key of obj1 can be called via obj2
// console.log(obj2);// Console kar ke hi humme pata chala ki obj2 ek khali object hain
// # hamesa yad rakhna humne console kar ke h bohot kuch pata chalta hain
obj2.key3 = "value3";
// obj2.key2 = "unique";
// console.log(obj2.key2);
console.log(obj2);
console.log(obj2.__proto__);// The object inside the object can be accessed using __proto__ 
// obj2.__proto__.key4 = "dance"// In the [[prototype]] object inside an object extra properties and key value pairs can also be added using __proto__

// obj2.__proto__//Isko Dundar v bolte hain


// Important Notes:
// par main ye nahi chahta ki js humne undefined return kare
// Main chahta hu ki agar for ex- js ko key1 obj2 main nhi mili to wo key1 obj1 main dundde aur agar usse obj1 main key1 mil gayi to usse wo console par print kar de

// [[Prototype]] => In console => Function & Objects

// To add properties or view in console
// Function => prototype
// Object => __proto__
