const Max = prompt("Enter the maximum Number");
const random = Math.floor(Math.random() * Max) + 1;

let guess = prompt("Enter the Number you Guess");

while(true){
    if(guess == "quit"){
        console.log("You quit the game");
        break;
    }

    if(guess == random) {
        console.log("you guessed the number correctly! random number was " + random);
        break;
    } else if(guess < random){
        guess = prompt("To small! Try again or quit");
    } else{
        guess = prompt("Your guess was to large! Please try again or quit the game");
    }
}