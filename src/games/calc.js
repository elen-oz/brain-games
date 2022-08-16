import readlineSync from "readline-sync";
// import startGame from "../index";

const gameDescription = "What is the result of the expression?";
const numberOfGames = 3;
const maxNumber = 1;
const minNumber = 20;

const calculate = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case "+":
      return firstOperand + secondOperand;
    case "-":
      return firstOperand - secondOperand;
    case "*":
      return firstOperand * secondOperand;
    default:
      return "undefined operator";
  }
};

const getRandom = (minParameter, maxParameter) => {
  const min = Math.ceil(minParameter);
  const max = Math.floor(maxParameter);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

const playGame = () => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let i = 0; i < numberOfGames; i += 1) {
    const number1 = getRandom(minNumber, maxNumber);
    const number2 = getRandom(minNumber, maxNumber);
    const operators = ["+", "-", "*"];
    const randomOperator = operators[getRandom(0, operators.length - 1)];

    console.log(`Question: ${number1}${randomOperator}${number2}?`);
    const correctAnswer = calculate(number1, number2, randomOperator);
    const userAnswer = readlineSync.question("You answer: ");

    if (correctAnswer == +userAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playGame;
