//Primitive Datatypes
// 7 Types: String, Number, Boolean, Null, Undefined, Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 48797852n


// Reference Type (Non Primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"];
let myObj = {
    name : "robot",
    age : 21,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp)
console.log(typeof bigNumber)
console.log(typeof myFunction)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap(Non-Primitive)
let myYoutubeName = "robotwritingcodedotcom"
let anotherName = myYoutubeName
anotherName = "chaiorcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email : "robot@gmai.com",
    upi : "usr@byl"
}

let userTwo = userOne

userTwo.email = "changed@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)