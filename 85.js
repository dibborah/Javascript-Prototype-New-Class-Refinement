// let number = [1, 2, 3];
// const res = Object.getPrototypeOf(number);
// // console.log(res); // => Is an Array
// console.log(Array.isArray(Array.prototype));
// // res looks likes an array
// // Since in Js Arrays are objects

// function hello (){
//     console.log("Hello Universe");
// }
// console.log(hello.prototype);

// hello.prototype = [];
// console.log(hello.prototype);// Now we made hello.prototype which was an object an array(empty array)
// hello.prototype.push("1");
// console.log(hello.prototype);

// let numbers = [1, 2, 3];
// console.log(numbers); // numbers array main hum itne sare methods use kar skte hain
// par wo sab method to is array numbers[] ke andar nahi hain
// to Js ko ye sab methods kaha se mil rahe hain
// Kaha se itne methods mil rahe hain
// Js ko ye sab methods mil rahe hain prototype main
// Matlab array main v prototype hote hain

// Pehle to pata hain ki prototype Functions main h bas hote hain
// Aur objects main

// Par avi pata chala ki arrays main v prototype hoti hain

// let obj = {};
// console.log(obj);

// console.log(Array.prototype); // Array prototype are Arrays and
// console.log(Object.prototype); // Object prototype are Objects

let num = [2, 3, 4]; // typeOf(object)

// console.log(Object.getPrototypeOf(num));// So we are doing Object. and not Array.
// console.log(Array.prototype);
// console.log(typeof(num));
// console.log(Array.isArray(Object.getPrototypeOf(num)));

// ### Note
// Internally Js Array create karne ke liye Array constructor use karta hain
// let numbers = [1, 2, 3];
// let numbers = new Array(1, 2, 3); // Internally JS creates an array using ARRAY CONSTRUCTOR function
// If the above syntax is how an Array is created internally using new keyword than why do we use ... ,
// let numbers = [1, 2, 3];// Since is a very easy and short syntax
// console.log(Array.prototype);
// console.log(Array.isArray(Array.prototype));// Array.prototype is an array // So prototype of Array is under [] square brackets

function hello (){
    console.log("hello");
}

console.log(hello.prototype);// It is a object so the prototype is an {} curly braces
hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push("1");
console.log(hello.prototype);
