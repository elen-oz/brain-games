import readlineSync from 'readline-sync';

const gameDescription = 'What number is missing in the progression?';
const numberOfGames = 3;

const getRandom = (minParameter, maxParameter) => {
  const min = Math.ceil(minParameter);
  const max = Math.floor(maxParameter);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let i = 0; i < numberOfGames; i += 1) {
    const numberFirst = getRandom(1, 10);
    const numberDifference = getRandom(1, 10);
    const progLenght = getRandom(5, 10);
    const arrOfProgression = [numberFirst];
    let lengthOffArr = 0;

    for (let j = 0; j < progLenght - 1; j += 1) {
      arrOfProgression.push(arrOfProgression[j] + numberDifference);
      lengthOffArr += 1;
    }

    const missedNum = getRandom(0, lengthOffArr);
    const correctAnswer = arrOfProgression[missedNum];
    arrOfProgression[missedNum] = '..';

    console.log(`Question: ${arrOfProgression}`);
    const userAnswer = readlineSync.question('You answer: ');

    if (correctAnswer === +userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playGame;
