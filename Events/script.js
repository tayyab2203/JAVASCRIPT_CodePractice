
let btn  = document.querySelector("button")



btn.addEventListener("click", function(){
    let h1 = document.querySelector("h1")
    let rendColor = getrandColor();
    h1.innerText = rendColor
    
    console.log("COlor Updated")

    let div = document.querySelector(".color"); 
    div.style.backgroundColor =  rendColor;

})

function getrandColor(){
    let red = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)

    let color = `rgb(${red}, ${blue}, ${green})`
    return color
}
