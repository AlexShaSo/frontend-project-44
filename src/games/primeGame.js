#!/usr/bin/env node

import getRandomNumber from '../getRandomNumber.js';
import createGameLogic from '../index.js';

const description = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";
const isNumberPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const minNumber = 2;
const maxNumber = 151;

const getAnswer = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const expectedAnswer = isNumberPrime(question) ? 'yes' : 'no';

  return [question, expectedAnswer];
};

const startPrimeGame = () => {
  createGameLogic(description, getAnswer);
};

export default startPrimeGame;
