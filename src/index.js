import readlineSync from 'readline-sync';

const numberOfGames = 3;

const getRandom = (minParameter, maxParameter) => {
  const min = Math.ceil(minParameter);
  const max = Math.floor(maxParameter);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const startGame = (gameDescription, playGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let i = 0; i < numberOfGames; i += 1) {
    const [questionToUser, correctAnswer] = playGame();
    console.log(`Question: ${questionToUser}`);
    const userAnswer = readlineSync.question('You answer: ');

    if (String(correctAnswer) === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

// export numberOfGames;
export {
  getRandom,
  startGame,
};
