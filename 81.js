// console.log("hello universe!!!");

// new keyword

function hello() {
  console.log("hello world");
}

// javascript fc fc to hain par fc ek object v hain
// fc => treat => fc + object

// console.log(hello.name);// name is a property which gives the of the function where it is used
// hello.myOwnProperty = "Example property"
// console.log(hello.myOwnProperty);
// hello.num = 7;
// console.log(hello.prototype);

// name property ------> tells function name

// function provides more useful properties

// call method // bind method

// function hame object dete hain(kind of free space)

// Js main function humme mufat main space deti hain

// Free space => {} => [[Prototype]]

// [[Prototype]] => Object => Which comes along with every object => Free space

// console.log(hello.prototype);

// Only function provide prototype property
// humne check karna hain ki koi property kisi object main hain ki nahi hain

// Function => Function + Object 

// const hello = {key1: "value1"};// prototype is not present here
// const hello = ["value1"];// prototype is neither present here

// # Note prototype is only present in functions

if(hello.prototype){
    console.log("Prototype is present");
}else{
    console.log("Prototype is not present");
}

// Means hello function ke pass prototype property present hoti hain

// This is an empty object

hello.test="test";

hello.prototype.abc = "string1";
hello.prototype.xyz = "string2";
hello.prototype.sing = function(){
    return "lalala";
}
console.log(hello.prototype.sing());
console.log(hello.prototype);
// console.log(hello.prototype.abc);

// # proto => Chain create kar raha tha // proto ek reference tha

// Prototype ek object hain
// Ye object humme free milti hain Js ke kisi v function ke sath




