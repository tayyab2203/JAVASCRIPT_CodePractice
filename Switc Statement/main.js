let grade = "distinction"; // Change this value to test different cases

switch(grade) {
    case "pass":
        console.log("you passed the exam");
        break;
    case "fail":
        console.log("you faild in all subjects");
        break;
    case "distinction":
        console.log("you passed with distinction");
        break;
    default:
        console.log("you did not take the exam");
        break;
}
console.log("Practice question started");
// practice with switch statement
let day = 5;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}