import { startGame } from '../index.js';
import { getRandom } from '../utilities.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const playGame = () => {
  const randomNumber = getRandom(1, 100);
  const questionToUser = `${randomNumber}`;
  const isEven = () => randomNumber % 2 === 0;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [questionToUser, correctAnswer];
};

const playEvenGame = () => startGame(gameDescription, playGame);
export default playEvenGame;
