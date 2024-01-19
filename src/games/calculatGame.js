#!/usr/bin/env node

import getRandomNumber from '../getRandomNumber.js';
import createGameLogic from '../index.js';

const description = 'What is the result of the expression?';
const marks = ['+', '-', '*'];
const minNumber = 0;
const maxNumber = 25;

const calc = (firstValue, secondValue, mark) => {
  switch (mark) {
    case '+':
      return (firstValue + secondValue);
    case '-':
      return (firstValue - secondValue);
    case '*':
      return (firstValue * secondValue);
    default:
      return `operation ${mark} is not supported`;
  }
};

const calcLogic = () => {
  const firstValue = getRandomNumber(minNumber, maxNumber);
  const secondValue = getRandomNumber(minNumber, maxNumber);
  const mark = marks[getRandomNumber(0, marks.length - 1)];
  const answer = String(calc(firstValue, secondValue, mark));
  const question = `${firstValue} ${mark} ${secondValue}`;
  return [question, answer];
};

const startCalcGame = () => {
  createGameLogic(description, calcLogic);
};

export default startCalcGame;
