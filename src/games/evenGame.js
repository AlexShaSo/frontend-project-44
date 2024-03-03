#!/usr/bin/env node
import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(0, 100);
  const isEvenNumber = (number) => number % 2 === 0;
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
