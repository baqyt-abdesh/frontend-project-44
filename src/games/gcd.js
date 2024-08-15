import readlineSync from 'readline-sync';
import { greeting, fail, congrats } from '../index.js';
import randomNum from '../getRandonNum.js';

export default () => {
  greeting('Find the greatest common divisor of given numbers.');
  let correctAnswers = 0;
  for (correctAnswers; correctAnswers < 3; correctAnswers += 1) {
    let a = randomNum(1, 100);
    let b = randomNum(1, 100);
    console.log(`Question: ${a} ${b}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    while (b !== 0) {
      const remainder = a % b;
      a = b;
      b = remainder;
    }
    if (a === parseInt(yourAnswer, 10)) {
      console.log('Correct!');
    } else {
      fail(yourAnswer, a);
      break;
    }
  }
  congrats(correctAnswers);
};
