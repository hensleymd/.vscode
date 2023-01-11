// function myFunction() {} -Normal function
// const myFunction = () =>  {return; } -Arrow function
// const myFucntion = () => 10; -if can be written in one line, implicit return

const obj = {
    firstName: "Matt",
    lastName: "Hensley",
    age: 30, 
    address: {
        street: "1234 Example Rd",
        zip: 123456
    }
};

const myFunction = (obj) => {
    for (let prop in obj) {
        console.log(obj[prop]);
    }
};

myFunction(obj);