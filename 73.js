function hello(){
    console.log("hello universe");
}
hello.call();// calling using .call() method

// call() method is a very important method in Js 
// Other important methods are:
// bind() & apply()

function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);        
}

const user1 = {
    firstName : "harshit",
    age:8,
}

const user2 = {// Note that in user2 there is no about() method but we want to use it!!!// How are we going to do that . Let's See --->
    firstName : "mohit",
    age:9,
}

// user1.about();// If .call() method is not used and about method is directly called than no arguement needs to be passed
// The this value will be taken authomathically

// Inside call() method we pass ki this is binding kiske sath hogi
// this kisse value uthayega wo hum call() method ke andar pass karte hain
// user1.about.call(user1)// Inside the call method method we are providing the value of this
// The value from where this will take is passed inside the call method

// user1.about.call()// Inside the call method if nothing is passed than no this values is passed so result will show undefined and undefined since 
// this.firstName and this.age inside the about method the value of this won't be there so undefined will be returned when called

// user1.about("coding")
// user1.about.call(user1, "coding", "arijit");
// about.call(user1,"coding", "arijit")// The first arguement call method takes is for this

// about.apply(user1,["coding", "arijit"]);

// apply internally works same as call just the needed arguements are passed as a list or ARRAY 

// bind
// const func = about.bind(user2,"coding", "arijit");
// func();

// # bind method just returns a function which we have to catch and than later call it to get our value
// bind just returns a value which we than have to call to get our outcome 
// The same outcome which we would have got when using call() or apply()

// call , apply and bind are mostly same just slight different
// But the common thing is the first parameter they take the value with which this is to be bind.
// The 1st parameter is of this. From where this would be taken



