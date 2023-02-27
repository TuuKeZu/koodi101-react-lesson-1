// variables
let a = 1
const b = 2

// functions
function sum(x, y) {
    return x + y
}

// printing
console.log("hello world")

// lists
let list = []
list.push("kana") // list would be: ["kana"]

// lists
let greetings = [
    'Hello',
    'Hi',
    'Bye',
    'Goodbye'
]

// iterate over every single one
greetings.forEach( function(greeting) {
    console.log(greeting)
})
/*
prints:
    Hello
    Hi
    Bye
    Goodbye
*/

// add "!" to every greeting
for (let i = 0; i < greetings.length; i++) {
    greetings[i] = greetings[i] + "!"
}

console.log(greetings); // greetings is now ["Hello!", "Hi!", ...]

// add "!" to every greeting with map
let better_greetings = greetings.map( function(greeting) {
    return (greeting + "!")
})

console.log(better_greetings)

// alternative syntax for 'function'
/*
const sum = (x, y) => {
    return x + y
}
*/

// you can modify webpage with JavaScript
let header = document.createElement('h1');
header.textContent = "Hello from JavaScript";

document.appendChild(header);