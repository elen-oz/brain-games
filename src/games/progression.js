import enginGame from '../index.js';
import getRandom from '../utilities.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (firstNumber, step, lenghtOfProgr) => {
  const arrOfProgression = [firstNumber];

  for (let i = 0; i < lenghtOfProgr; i += 1) {
    arrOfProgression.push(arrOfProgression[i] + step);
  }

  return arrOfProgression;
};

const generateRound = () => {
  const firstNumber = getRandom(1, 10);
  const step = getRandom(1, 10);
  const lenghtOfProgr = 9;
  const progression = generateProgression(firstNumber, step, lenghtOfProgr);
  const missedNum = getRandom(0, lenghtOfProgr);
  const correctAnswer = progression[missedNum];
  progression[missedNum] = '..';
  const questionToUser = progression.join(' ');

  return [questionToUser, correctAnswer];
};

const playProgressionGame = () => enginGame(gameDescription, generateRound);
export default playProgressionGame;
