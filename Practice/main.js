// Question 1:
// create a number variable num wwith some value, now print "good" if the number is divisible by 10 and print "bad" if it is not divisible by 10
let num =31; // You can change the value of num to test different cases
if(num % 10 === 0) {
    console.log("Good");
} else if(num % 10 !==0) {
    console.log("Bad");
}


// Question 2:
// take the user name and age as input string using prompts

// let userName = prompt("Enter Your Name:");
// let age = prompt("Enter your Age:");
// alert(`Hello ${userName}, You are ${age} yeras old`);


// Question 3:
// using switch statements, print the month in quaters based on the month number
let quater = 3;
switch(quater) {
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        breakl
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Invalid Quater number");
}

// Question 4:
// write a program to find the largest of three numbers using if-else statements
let num1 = 40;
let num2 = 43.21;
let num3 = 230;

if(num1 >num3 && num1 > num2) {
    console.log(`${num1} is the largest number`);
} else if(num2 > num1 && num2 > num3) {
    console.log(`${num2} is the largest number`);
} else {
    console.log(`${num3} is the largest number`);
}

