/* DATA TYPES

    - string -> indicated by quotes including numbers "afwd" "1"
    - number -> 30
    - boolean -> true or false ('switch' in game dev)
    - undefined
    - null
*/

// ES5  ECMAScript 5
// var FORGET IT!

/* ES6 update of ES5
    ! let: is mutable, can be changed later on
    ! const: is immutable, cannot be changed as its a constant
*/
const myName = "Matt";
let fullName = myName + " Hensley";
console.log(fullName)
// myName = "Jake";
let donkey = "Donkey"
donkey = "My Donkey";
function myFunction() {
    let monkey = "Monkey"
    console.log(donkey);
}

myFunction();
// console.log(monkey);
/*
    Operators
    mathematical (+ - * / ** < <= > >=)
    logical ( && || == !)
    shorthand ( ++ += -- -= *= /=)
    (=) assigning operator
*/
let four = 2**2;
console.log(four);

// Conditionals 
let num = 17
let condition1 = num % 3 == 0;
let condition2 = num % 2 == 0;

if (condition1) {
    // run code
    console.log("Num is divisible by 3");
} else if (condition2) {
    console.log("Num is not divisible by 2")
} else {
    console.log("Num:", num)
}

// Data structures

const newArray = [];
newArray.push(0);
newArray.push("Hello");
console.log(newArray)

// Objects
const obj = {
    firstName: "Matt",
    lastName: "Hensley",
    age: 30, 
    address: {
        street: "1234 Example Rd",
        zip: 123456
    }
}

const {firstName, lastName, age, address} = obj;

console.log(firstName);

const myRandomArray = [12, "Gandalf", true, "Fox", "Turtle", "Tiger", "Horse", "Whale", "Rabbit", "Sloth", "Python", "Camel"];
const [twelve, gandalf, isHungry, ...animals ] = myRandomArray;

console.log(gandalf);
console.log(animals[1]);
let mutableAnimalArray = [...animals];