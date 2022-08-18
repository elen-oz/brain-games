import enginGame from '../index.js';
import getRandom from '../utilities.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const playGame = () => {
  const randomNumber = getRandom(1, 100);
  const questionToUser = `${randomNumber}`;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [questionToUser, correctAnswer];
};

const playEvenGame = () => enginGame(gameDescription, playGame);
export default playEvenGame;
