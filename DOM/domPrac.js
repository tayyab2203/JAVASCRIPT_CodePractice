let selectByClass = document.getElementsByClassName("box");
selectByClass[0].style.backgroundColor = "red";
selectByClass[1].style.backgroundColor = "orange";
selectByClass[2].style.backgroundColor = "blue";
selectByClass[3].style.backgroundColor = "Yellow";
selectByClass[4].style.backgroundColor = "green";
selectByClass[5].style.backgroundColor = "darkBlue";

selectByClass[5].style.color = "white";

selectByClass[4].style.fontSize = "25px";


// for Box 2
let selectByID = document.getElementById("box2");
selectByID.style.backgroundColor = "purple";

// For buttons
// this is used to select all the elements with the same class
document.querySelectorAll(".button").forEach(b =>{
    b.style.backgroundColor = "black";
    b.style.color = "white";
})
// if want to change only 1 using query selector, then this is the syntax
document.querySelector(".button").style.backgroundColor = "green"
 