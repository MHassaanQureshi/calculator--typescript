import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number:", type: "number", name: "firstNumber" },
    { message: "enter second number:", type: "number", name: "secondNumber" },
    {
        message: "Select Operator:",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "multiplication", "division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
