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


//Section 4 - Array functions: map & filter

/* map

map() creates a NEW array by running a function on every item of the original array.
The original array is not changed, and the new array always has the same length.

*/

const doubled = numbers.map((number) => number * 2); //[2, 4, 6, 8, 10]

//map gives you the index as the second argument, if you need it
const labelled = numbers.map((number, index) => `Item ${index}: ${number}`);

//map is used in React to turn an array of data into a list of elements
const people = [
    { name: "Pedro", age: 20 },
    { name: "John", age: 15 }
];

const names = people.map((person) => person.name); //["Pedro", "John"]

//in React, each element in a mapped list needs a unique key
// const listItems = people.map((person) => <li key={person.name}>{person.name}</li>);

/* filter

filter() creates a NEW array containing only the items that pass a test.
The test is a function that returns true (keep the item) or false (drop it).

*/

const evenNumbers = numbers.filter((number) => number % 2 === 0); //[2, 4]

const adults = people.filter((person) => person.age >= 18); //[{ name: "Pedro", age: 20 }]

//filter and map can be chained, filter first then map
const adultNames = people
    .filter((person) => person.age >= 18)
    .map((person) => person.name); //["Pedro"]

/* Filtering in React

Conditional rendering with filter works the same way. Filter the data first, then map it into elements:

// const adultItems = people
//     .filter((person) => person.age >= 18)
//     .map((person) => <li key={person.name}>{person.name}</li>);

*/

//Section 5 - Async, await & fetch

/* Async

These are used to write code that waits for something (like data from a server) without freezing the rest of the program.

An async function always returns a Promise.

*/

//normal function, returns a plain value
function getGreeting() {
    return "Hello";
}

//async function, same idea but it always returns a Promise
async function getGreetingAsync() {
    return "Hello";
}

/* Promises

A Promise represents a value that will be available later.
It is always in one of three states: pending, fulfilled (resolved) or rejected.

*/

const laterValue = () => new Promise((resolve) => {
    setTimeout(() => resolve("Done after 1 second"), 1000);
});

/* Await

await can only be used inside an async function. It pauses that function until the Promise settles,
then gives you the resolved value. Other code keeps running in the meantime.

*/

async function showLaterValue() {
    const result = await laterValue(); //waits for the promise to resolve
    console.log(result); //"Done after 1 second"
}

/* Fetch

fetch() is a built-in function for making HTTP requests (getting or sending data to a server/API).
It returns a Promise that resolves to a Response object.
The Response body must be converted to usable data, usually with .json().

Note: fetch only rejects on network failures. A 404 or 500 response still resolves,
so check response.ok yourself.

*/

async function getUser(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json(); //parse the JSON body
        return data;
    } catch (error) {
        console.log("Something went wrong:", error.message);
    }
}

//the same request written with .then() instead of await (same result, older style)
function getUserThen(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(data => data.name);
}

/* Fetching in React

In React, fetching is usually done inside useEffect and the result is stored in state:

const [user, setUser] = useState(null);

useEffect(() => {
    getUser(1).then(setUser);
}, []); //the empty array means "run once when the component mounts"

*/
