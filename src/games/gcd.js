import { getRandom, startGame } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const maxNumber = 1;
const minNumber = 100;

const getGcd = (x, y) => {
  if (y === 0) {
    return x;
  } else {
    return getGcd(y, x % y);
  }
};

const playGame = () => {
  const number1 = getRandom(minNumber, maxNumber);
  const number2 = getRandom(minNumber, maxNumber);
  const questionToUser = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2);

  return [questionToUser, correctAnswer];
};

const playGcdGame = () => startGame(gameDescription, playGame);
export default playGcdGame;
