import { enginGame } from '../index.js';
import { getRandom } from '../utilities.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return true;
  }
  let flag = true;
  for (let j = 2; j <= number / 2; j += 1) {
    if (number % j === 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

const playGame = () => {
  const randomNumber = getRandom(2, 50);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const questionToUser = `${randomNumber}`;

  return [questionToUser, correctAnswer];
};

const playPrimeGame = () => enginGame(gameDescription, playGame);
export default playPrimeGame;
