import readlineSync from "readline-sync";

const gameDescription = "Find the greatest common divisor of given numbers.";
const numberOfGames = 3;
const maxNumber = 1;
const minNumber = 100;

const getRandom = (minParameter, maxParameter) => {
  const min = Math.ceil(minParameter);
  const max = Math.floor(maxParameter);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

const getGcd = (x, y) => {
  if (y == 0) {
    return x;
  } else {
    return getGcd(y, x % y);
  }
};

const playGame = () => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let i = 0; i < numberOfGames; i += 1) {
    const number1 = getRandom(minNumber, maxNumber);
    const number2 = getRandom(minNumber, maxNumber);

    console.log(`Question: ${number1} ${number2}`);
    const correctAnswer = getGcd(number1, number2);
    const userAnswer = readlineSync.question("You answer: ");

    if (correctAnswer == +userAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playGame;
