
/*







🔹 Task 6: querySelectorAll
👉 Goal: Print the text of all buttons in the console.

Instruction:
Use querySelectorAll to get all .btn buttons, loop through them, and console.log() their text.

🔥 Bonus Task: Event + DOM
👉 Goal: When the button with id="btn-id" is clicked, change the background of all paragraphs.

Instruction:

Add an event listener to the #btn-id button.

Inside the function, select all .para elements and change their background color to lightblue.




Task 1: getElementById
👉 Goal: Change the text of the <h1> with id main-title.

Instruction:
In script.js, use getElementById to change the heading text to:
"Changed with getElementById"

*/

document.getElementById("main-title").innerText = "Changed with getElementById";

// 🔹 Task 2: getElementsByClassName
// 👉 Goal: Change the background color of all buttons with class btn.

// Instruction:
// Use getElementsByClassName to loop through all buttons and change their background color to green.

const btnColor = document.getElementsByClassName("btn");
btnColor[0].style.backgroundColor = "green";
btnColor[1].style.backgroundColor = "green";
btnColor[2].style.backgroundColor = "green";


// 🔹 Task 3: querySelector
// 👉 Goal: Change the color of the first paragraph with class para.

// Instruction:
// Use querySelector to select the first paragraph and change its text color to blue.

document.querySelector(".para").style.color = "blue"


// 🔹 Task 4: querySelectorAll
// 👉 Goal: Add the class highlight to all paragraphs.

// Instruction:
// Use querySelectorAll to loop through all .para elements and add the class highlight (it will make background yellow from CSS).

document.querySelectorAll(".para").forEach((para) =>{
    para.classList.add("highlight");
})


// 🔹 Task 5: querySelector
// 👉 Goal: Set a value in the first input field with class input-field.

// Instruction:
// Use querySelector to set the value of the first input to "Hello from JS!".


document.querySelector(".input-field").value = "Hello from javascript"