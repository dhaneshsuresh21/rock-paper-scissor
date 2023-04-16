const options = {
    "rock": "scissor",
    "paper": "rock",
    "scissor": "paper"
}

const userScoreElement = document.querySelector(".user-score");
const computerScoreElement = document.querySelector(".computer-score");

console.log(userScoreElement);
console.log(computerScoreElement);

let userScore = 0;
let computerScore = 0;

const computerChoices = ["rock", "paper", "scissor"];

const buttons = document.querySelectorAll(".btns");

for (const button of buttons) {

    button.addEventListener("click", (e) => {

        e.preventDefault();
        const computerChoiceIndex = generateComputerOption();
        const computerChoice = computerChoices[computerChoiceIndex];
        const userChoice = e.target.value;
        // console.log(userChoice);

        const result = checkResult(userChoice, computerChoice);

        const userElement = document.querySelector(".user");
        const userNewElement = createUserChoiceElement(userChoice);

        const computerElement = document.querySelector(".computer");
        const computerNewElement = createUserChoiceElement(computerChoice);
        // console.log(result);
        if (result === "win") {
            userScore++;
            userScoreElement.innerHTML = `User Score: ${userScore}`;
        }

        if (result === "lose") {
            computerScore++;
            computerScoreElement.innerHTML = `computer Score: ${computerScore}`;
        }

        
        userElement.appendChild(userNewElement);

        
        computerElement.appendChild(computerNewElement);


    });

}

function generateComputerOption() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber - 1;
}

function checkResult(userChoice, computerChoice) {
    console.log(userChoice + " " + computerChoice);

    if (userChoice === computerChoice)
        return "draw";

    if (options[userChoice] === computerChoice)
        return "win";

    return "lose";
}

function createUserChoiceElement(userChoice) {

    const element = document.createElement("h1");
    element.setAttribute("class", "new-h1");

    if (userChoice === "rock")
        element.innerHTML = "✊";
    if (userChoice === "paper")
        element.innerHTML = "🫲";
    if (userChoice === "scissor")
        element.innerHTML = "✌️";

    return element;
}

function createComputerChoiceElement(computerChoiceIndex) {

    const element = document.createElement("h1");
    element.setAttribute("class", "new-h1");

    if (computerChoiceIndex === "rock")
        element.innerHTML = "✊";
    if (computerChoiceIndex === "paper")
        element.innerHTML = "🫲";
    if (computerChoiceIndex === "scissor")
        element.innerHTML = "✌️";

    return element;
}