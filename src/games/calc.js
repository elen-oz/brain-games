import readlineSync from "readline-sync";
import startGame from "../index";

const gameDescription = 'What is the result of the expression?';
const numberOfGames = 3;
const maxNumber = 1;
const minNumber = 20;


const calculate = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return 'undefined operator';
  }
};

const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

const playGame = () => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  const number1 = getRandom(minNumber, maxNumber);
  const number2 = getRandom(minNumber, maxNumber);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandom(0, operators.length - 1)];

  const question = `Question: ${number1} ${randomOperator} ${number2}?`;
  rightAnswer = calculate(number1, number2, randomOperator);

  return [question, rightAnswer.toString]
}

export default playGame;