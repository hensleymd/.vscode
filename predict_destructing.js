// PROBLEM 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
console.log(randomCar)
// Tesla
console.log(otherRandomCar)
// Mercedes


// PROBLEM 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
console.log(name);
// error, name not defined because we reassigned it to otherName
console.log(otherName);
// Elon


// PROBLEM 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
console.log(password);
// 12345
console.log(hashedPassword);
// undefined, no error but we never defined a password in the const person


// PROBLEM 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
// , indicates skipping once to 2
const [,,,second] = numbers;
// ,,, indicates skipping three times to 5
const [,,,,,,,,third] = numbers;
// ,,,,,,,, indicates skipping eight times to 2
console.log(first == second);
// 2 != 5 giving us False
console.log(first == third);
// 2 == 2 giving us True


// PROBLEM 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
// pulls value 'value' from key in lastTest
const { secondKey } = lastTest;
// pulls value [1,2,3,4,5] from secondkey in lastTest
const [ ,willThisWork] = secondKey;
console.log(key); 
// value
console.log(secondKey);
// [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);
// 1
console.log(willThisWork);
// error, willThisWork is not defined