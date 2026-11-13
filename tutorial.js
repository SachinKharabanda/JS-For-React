/*

Arrow functions

These are just a different way of defining functions

*/

//normal functions are defined as follows:

function doSomething() {

}

//arrow function definition:

const doSomethingElse = () => {

}

/*
Arrow functions are exported differently than normal functions.

normal functions need "export default" keyword before function defnition, arrow functions just need "export"

*/

export const exampleArrowExport = () => {}
export default function exampleNormalExport() {}

//these are important to react as react takes in compotents -> arrow functions which return HTML

/*
Anonymous functions

These are functions that are not named, they are usually used as arguments to other functions.
*/

//For example:
<button onClick={() => {
    console.log('Button clicked!')
    }}
>Click me</button>

/*
 * React lets you use JavaScript inside of HTML. It's not really HTML, though.
 * It's JSX, a syntax extension to JavaScript that allows you to write HTML
 * inside of JavaScript. This is why you can use arrow functions inside of HTML.
 * 
 * It's useful as it lets you write conditionals and logic and make that represent
 * your UI
 * 
 */


//Ternary operators are short hand ways of writing if-else statements

let name = age > 10 && "Pedro"; //and operator will return the second value if the first value is true, else it will return false
let nameSecond = age > 10 || "Pedro"; //or operator will return the first value if it is true, else it will return the second value
let nameThird = age > 10 ? "Pedro" : "John"; //if age is greater than 10, nameThird will be Pedro, else it will be John

//Ternary operators are combined with Arrow functions to make conditional rendering in React easier

//For example:

const exampleTernaryArrow = () => {
    return age > 10 ? <p>Pedro</p> : <p>John</p>;
};

//Objects

const shorthandDeclaration = "This is a shorthand declaration";

//how to define an object in JavaScript
const person = {
    name: "Pedro",
    age: 20,
    isMarried: false,
    shorthandDeclaration //this is a shorthand declaration, it will be the same as writing "shorthandDeclaration: shorthandDeclaration"
};

//how to assign variables to object properties
const objectName = person.name;
const objectAge = person.age;
const objectIsMarried = person.isMarried;


//the above can be simplified using object destructuring
const { name: destructuredName, age, isMarried } = person;

//What happens if I want to declare another object
//that has all the same properties as the person object, 
//but with a different name

const anotherPerson = {
    ...person, //this will copy all the properties of the person object into the anotherPerson object
    name: "John" //this will overwrite the name property of the anotherPerson object
};

//the same synatx works for arrays, for example:

const numbers = [1, 2, 3, 4, 5];
const moreNumbers = [...numbers, 6, 7, 8, 9, 10];

