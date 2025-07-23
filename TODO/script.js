let todo = [];

let req = prompt("Please enter your request:");

while(true){
    if(req =="quit"){
        console.log("Exiting the perogram.");
        break;
    }

    if(req =="list"){
        console.log("To-Do List:");
        for(task of todo){
            console.log("- " + task);
        }
        console.log("----------");
    }else if (req == "Add"){
        let task = prompt("Enter ther task to add:");
        todo.push(task);
        console.log("Task added: " + task);
    } 

}