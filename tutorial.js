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