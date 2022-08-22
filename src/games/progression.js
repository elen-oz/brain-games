import enginGame from '../index.js';
import getRandom from '../utilities.js';

const gameDescription = 'What number is missing in the progression?';
const lenghtOfProgression = 9;

const getQuestion = (firstNumber, step, missedNumberIndex) => {
  const arrOfProgression = [firstNumber];
  for (let i = 0; i < lenghtOfProgression; i += 1) {
    arrOfProgression.push(arrOfProgression[i] + step);
  }
  arrOfProgression[missedNumberIndex] = '..';
  return arrOfProgression.join(' ');
};

const generateRound = () => {
  const firstNumber = getRandom(1, 10);
  const step = getRandom(1, 10);
  const missedNumberIndex = getRandom(0, lenghtOfProgression);
  const questionToUser = getQuestion(firstNumber, step, missedNumberIndex);
  const correctAnswer = String(firstNumber + missedNumberIndex * step);

  return [questionToUser, correctAnswer];
};

const playProgressionGame = () => enginGame(gameDescription, generateRound);
export default playProgressionGame;
