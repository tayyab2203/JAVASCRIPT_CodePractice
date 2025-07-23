// Pracrice question
// print only odd number from 1 to 15

for(let i = 1; i<=15;i++){
    if(i % 2 !==0){
        console.log(i);
    }
}

console.log("**********");
// print the table of 5 using for loop
for(let i = 5; i<=50; i= i+5){
    console.log(i);
}

console.log("**********");
// print the table of any number using for loop
let num = prompt("Enter a number to print its table:");
num = parseInt(num);

for (i=num; i<=num* 10; i = i + num){
    console.log(i);
}