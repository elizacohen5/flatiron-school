/*

Phase 1 -> An Introduction to JavaScript
by Sakib Rasul
Updated March 12, 2024
Created August 21, 2023

Core Deliverables
1. Learn about variables, types, arrays, conditional statements,
   functions, and scope.
2. Complete the three challanges.

*/

// ~ Variables
// -> constants, variables, logging, annotations
// const, let 

/**
 * I'm writing something! 
 */
const apples = 65;
let books = 5;
// declaring a variable 

console.log(apples)

books = 25; //variable assignment
console.log(books);
console.log("I do not need to refresh")

// ~ Types
// -> undefined, null*, boolean, number, string
// undefined = not assigned 
// null allows you to forcibly tell javascript that a variable does not have a value 

// ~ Objects
// An object is a collection of values that represent something - used when something cannot be described with one value 
// multiple peices of information all related to a single entity 

const animal = {
    species: 'dog',
    name: 'Pistachio', 
    age: 4,
    isWellBehaved: false
};
console.log(animal['age']) // if a parameter is without strings, JavaScript will think it's a variable and look for a variable 
console.log(`${animal.name} is ${animal.age} years old!`) // interpolate values into the strings
console.log(animal.name + ' is ' + animal.age + ' years old!')
console.log(JSON.stringify(animal))
console.log(animal)
console.log('animal')

animal.isWellBehaved = false;
console.log(animal.isWellBehaved);

// -> definition, bracket/dot notation, stringify

// ~ Arrays
// -> definition, access, modification
// An array is a list of ordered values without naes (i.e. keys). 
const prices = [ 43, 56, 32, 23 ];
console.log(prices[2]);
console.log(JSON.stringify(prices));

animal.weight = 6;

prices[0] = 5;
console.log(prices)

// ~ Conditionals
// if, if-else, if-else-if-else, ternary
const isItSunny = false;
if (isItSunny) { 
    console.log("Wear sunglasses!"); 
} else {
    console.log("No need for sunglasses today.");
};

const action = isItSunny ? "Wear sunglasses!" : "Stay inside." // Ternary syntax. A way to assign binary if/else values to variables 

console.log(action)

// ~ Functions
// -> name, parameters, body, return, annotations
// -> methods, forEach, callback functions, anonymous functions

/**
 * 
 * @param {string} name The person to greet
 * @param {number} day  The person's age 
 * @returns The number five 
 */
function sayHello(name, day) {
    console.log(`Hi ${name}! It's ${day}.`);
    return [];
}

sayHello('Pistachio', 'Tuesday')

function square(number) {
    console.log(number * number)
}

const integers = [ 1, 2, 3, 4 ];
integers.forEach(square);
 
integers.forEach((number) => {console.log(number * number)})

const sq = (number) => { console.log(number * number) }

// ~ Scope
// -> global, local, closures, function hoisting

const x = 5;
function func() {
    console.log(x);
}


// CHALLENGES

// Try these practice problems on your own to reinforce this lesson's material :)
// 1. Write a function named `sum` that takes an array of `numbers` and returns its sum.

function sum(arr) {
    let arrSum = 0;
    arr.forEach((number) => arrSum += number)
    return arrSum;
}
console.log(sum([1, 2, 3]))

// 2. Write a function named `double` that takes an array of `numbers` and doubles each of its values.

// function double(arr) {
//     let newArr =[]
//     arr.forEach((number) => {
//        let doubleNum = (number *= 2);
//        newArr.push(doubleNum);
//     });
//     return newArr;
// };

function double(arr) {
    arr.forEach((_part, index) => {
        arr[index] *= 2;
    })
    return arr;
}

console.log( 'double ' + double([1, 2, 3]));

// 3. Write a function named `lowercase` that takes an array of `words` and returns a lowercased copy.


// function lowercase(arr) {
//     arr.forEach((part, index) => {
//         arr[index] = part.toLowerCase();
//     }
//   ) 
//         return arr;
// }


function lowercase(arr) {
    let newArr = []
    arr.forEach((word) => {
        let lowerWord = word.toLowerCase()
        newArr.push(lowerWord);
      }
     )
     return newArr;
    }

console.log( 'lowercase ' + lowercase(['MY', 'NAME', 'IS']))