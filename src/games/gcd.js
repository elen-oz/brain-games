import enginGame from '../index.js';
import getRandom from '../utilities.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const maxNumber = 1;
const minNumber = 100;

const getGcd = (x, y) => {
  let result;
  if (y === 0) {
    result = x;
  } else {
    result = getGcd(y, x % y);
  }
  return result;
};

const playGame = () => {
  const number1 = getRandom(minNumber, maxNumber);
  const number2 = getRandom(minNumber, maxNumber);
  const questionToUser = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2);

  return [questionToUser, correctAnswer];
};

const playGcdGame = () => enginGame(gameDescription, playGame);
export default playGcdGame;
