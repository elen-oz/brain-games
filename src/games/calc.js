import enginGame from '../index.js';
import getRandom from '../utilities.js';

const gameDescription = 'What is the result of the expression?';
const maxNumber = 1;
const minNumber = 10;
const operators = ['+', '-', '*'];

const getCalcResult = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return `Unknown operator: ${operator}`;
  }
};

const generateRound = () => {
  const number1 = getRandom(minNumber, maxNumber);
  const number2 = getRandom(minNumber, maxNumber);
  const randomOperator = operators[getRandom(0, operators.length - 1)];
  const questionToUser = `${number1} ${randomOperator} ${number2}`;
  const correctAnswer = getCalcResult(number1, number2, randomOperator);

  return [questionToUser, correctAnswer];
};

const playCalcGame = () => enginGame(gameDescription, generateRound);
export default playCalcGame;
