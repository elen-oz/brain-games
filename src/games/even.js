import readlineSync from "readline-sync";

const gameDescription =
  'Answer "yes" if the number is even, otherwise answer "no".';
const numberOfGames = 3;

const playGame = () => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let i = 0; i < numberOfGames; i += 1) {
    const randomNumber = Math.floor(Math.random() * 101);
    const isEven = () => randomNumber % 2 === 0;
    const correctAnswer = isEven(randomNumber) ? "yes" : "no";

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question("You answer: ");

    if (correctAnswer === userAnswer) {
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
