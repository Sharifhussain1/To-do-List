import inquirer from "inquirer";
let todoString = [];
let loop = true;
while (loop) {
    const todoinput = await inquirer.prompt([{
            type: "input",
            name: "todoItem",
            message: "Enter Item Name Which You Want To Add In Your Todo-List "
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do You Want To Add More Item In Your Todo-List ",
            default: false
        }]);
    const todoItem = todoinput.todoItem;
    const addMore = todoinput.addMore;
    if (todoItem) {
        todoString.push(todoItem);
    }
    loop = addMore;
}
if (todoString.length > 0) {
    console.log(`here Is Your todo list`);
    for (let i = 0; i < todoString.length; i++) {
        console.log(`${i + 1},${todoString[i]}`);
    }
}
else {
    console.log(`Your Todo list is Emty`);
}
