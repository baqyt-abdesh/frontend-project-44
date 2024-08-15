import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from '@hexlet/pairs';
import { greeting, congrats, fail } from '../index.js';
import randomNum from '../getRandonNum.js';

export default () => {
  const operators = ['+', '-', '*'];
  const question = 'What is the result of the expression?';
  greeting(question);
  let correctAnswers = 0;
  for (correctAnswers; correctAnswers < 3; correctAnswers += 1) {
    const nums = cons(randomNum(1, 100), randomNum(1, 100));
    const a = car(nums);
    const b = cdr(nums);
    const randomOperator = Math.floor(Math.random() * operators.length);
    const operator = operators[randomOperator];
    console.log(`Question: ${a} ${operator} ${b}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    let correctAnswer = 0;
    switch (operator) {
      case '+':
        correctAnswer = a + b;
        break;
      case '-':
        correctAnswer = a - b;
        break;
      case '*':
        correctAnswer = a * b;
        break;
      default:
        break;
    }
    if (parseInt(yourAnswer, 10) === correctAnswer) {
      console.log('Correct!');
    } else {
      fail(yourAnswer, correctAnswer);
      break;
    }
  }
  congrats(correctAnswers);
};
