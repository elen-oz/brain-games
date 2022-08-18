import { getRandom, startGame } from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const playGame = () => {
  const numberFirst = getRandom(1, 10);
  const numberDifference = getRandom(1, 10);
  const progLenght = getRandom(5, 10);
  const arrOfProgression = [numberFirst];
  let lengthOffArr = 0;

  for (let i = 0; i < progLenght - 1; i += 1) {
    arrOfProgression.push(arrOfProgression[i] + numberDifference);
    lengthOffArr += 1;
  }

  const missedNum = getRandom(0, lengthOffArr);
  const correctAnswer = arrOfProgression[missedNum];
  arrOfProgression[missedNum] = '..';
  const outputProgression = arrOfProgression.join(' ');
  const questionToUser = `${outputProgression}`;

  return [questionToUser, correctAnswer];
};

const playProgressionGame = () => startGame(gameDescription, playGame);
export default playProgressionGame;
