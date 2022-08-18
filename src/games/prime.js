import readlineSync from 'readline-sync';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const numberOfGames = 3;

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  const isPrime = (number) => {
    if (number < 2) {
      return true
    }
    let flag = true;
    for (let j = 2; j <= number / 2; j += 1) {
      if (number % j === 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }

  for (let i = 0; i < numberOfGames; i += 1) {
    const randomNumber = Math.floor(Math.random() * 51);
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('You answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playGame;
