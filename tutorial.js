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

