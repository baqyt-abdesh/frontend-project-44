import readlineSync from 'readline-sync';

let name = '';
const greeting = (question) => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(question);
};

const fail = () => {
  console.log(`Let's try again, ${name}!`);
};

const congrats = (correctAnswers) => {
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export { greeting, fail, congrats };
