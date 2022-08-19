import enginGame from '../index.js';
import getRandom from '../utilities.js';

const gameDescription = 'What number is missing in the progression?';
const lenghtOfProgr = 9;

const getQuestion= (firstNumber, step, missedNumerIndex) => {
  const arrOfProgression = [firstNumber];
  for (let i = 0; i < lenghtOfProgr; i += 1) {
    arrOfProgression.push(arrOfProgression[i] + step);
  }
  arrOfProgression[missedNumerIndex] = '..';
  return arrOfProgression.join(' ');
};

const generateRound = () => {
  const firstNumber = getRandom(1, 10);
  const step = getRandom(1, 10);
  const missedNumerIndex = getRandom(0, lenghtOfProgr);
  const questionToUser = getQuestion(firstNumber, step, missedNumerIndex);
  const correctAnswer = String(firstNumber + missedNumerIndex * step);

  return [questionToUser, correctAnswer];
};

const playProgressionGame = () => enginGame(gameDescription, generateRound);
export default playProgressionGame;
