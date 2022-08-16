import readlineSync from 'readline-sync';

const maxRoundCount = 3;

const startGame = (gameDescription, playGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let i = 0; i < maxRoundCount; i += 1) {
    playGame();
  }
  
};

export default startGame;
