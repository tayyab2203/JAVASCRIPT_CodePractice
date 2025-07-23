function greet(name){

    console.log(`Hello ${name}`)
    console.log(`Hello ${name}, your shirt is nice`)
    console.log(`Hello ${name}, you are looking good today`)
    console.log(`Hello ${name}, how are you?`)
    console.log(`Hello ${name}, I hope you are doing well`)
}


greet("Irfan");

greet("Ali");

console.log("-------------------------");
// Practce Question: write a function that write a poem for a person

function poem(){
    console.log("Twinkle twinkle little star, how i wonder what you are")
    console.log("Up above the world so high, like a diamond in the sky")
    console.log("Twinkle twinkle little star, how i wonder what you are")
    console.log("When the blazing sun is gone, when he nothing shines upon")
    console.log("Then you show your little light, twinkle twinkle all the night")
    console.log("Twinkle twinkle little star, how i wonder what you are")
}
poem();

console.log("-------------------------");

// Function to roll a dice
function rollDice(){
   let random = Math.floor( Math.random() * 6 + 1);
    console.log(`You rolled a dice: ${random}`);
}
rollDice();
rollDice( );

// function that give us an avarage of three numbers
function avg(num1, num2, num3){
    let average = (num1+num2+num3) / 3;
    console.log(`the average of ${num1}, ${num2}, ${num3} is: ${average}`);
    return average;
}
avg(12, 40, 30);


//function that prints the multiplication table of a number
function multiplicationTable(num){
    for(let i = num; i<=num*10; i+=num){
        console.log(i);
    }
}
multiplicationTable(3); 



// Assignment: Create a faulty calculator that takes two numbers and an operator as input and returns the result of the operation

function faultyCalc(num1, operation, num2) {
    let result;
    switch(operation) {
        case '+':
            result = num1 - num2;
            break;
        case '-':
            result = num1 + num2;
            break;
        case '*':
            if(num2 !== 0) {
            result = num1 / num2;
            break;
        } else {
            console.log("Error: Division by zero is not allowed.");
            return;
        }
        case '/':
                result = num1 ** num2;
                break;
            break;
        default:
            console.log("Error: Invalid operation. Please use +, -, *, or /.");
            return;
    }
    console.log(`The result of ${num1} ${operation} ${num2} is: ${result}`);
}
faultyCalc(10, '-', 5);

// Practice:
// let greet = "Hello, how are you?";

//   function changeGreet() {
//       let greet = "Salammm, I am fine";
//       console.log(greet);

//       function innerFunction() {
//           console.log(greet);
//       }

//       innerFunction();
//   }


// console.log(greet);
// changeGreet();


// SetTimeout function:
// console.log("Hi Tayyab, how are you?");
// setTimeout( ()=>{                              //Argument of setTimeout is a function that is called callback function, and time interval is in milliseconds
//     console.log("MaxCore technologies!!")
// }, 4000)

// console.log("Welcome to");



// SetInterval Function:
// let id = setInterval(() =>{
//     console.log("Irfan, how are you?");
//     console.log("I am fine, thank you!");
// }, 2000)

console.log("This message will repeat every 2 seconds.");
// To stop the interval after 10 seconds
// setTimeout(() => {
//     clearInterval(id)
//     console.log("Interval cleared, no more messages will be logged.");
// }, 10000)

console.log("-------------------------------");
// fnction to print hello world 5 times at interval of 2 second
let id1 = setInterval(() => {
    console.log("Hello World");
}, 2000)

// To stop the interval after 12 seconds
setTimeout(() =>{
    clearInterval(id1)
    console.log("Interval cleared, no more messages will be logged.");
}, 12000)
