import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const enginGame = (gameDescription, playGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let i = 0; i < numberOfRounds; i += 1) {
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

export enginGame;
