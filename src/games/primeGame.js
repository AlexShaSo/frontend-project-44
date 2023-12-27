#!/usr/bin/env node

import getRandomNumber from '../getRandomNumber.js';
import createGameLogic from '../index.js';

const description = "Answer 'yes' if given number is prime. Otherwise answer 'no'."
const isNumberPrime = (number) => {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  };

const getRandomNumber = (minNumber, maxNumber) => {
    let minNumber = 2;
    let maxNumber = 151;
}

const startPrimeGame = () => {
    createGameLogic(description, getQuestionAndAnswer);
  };
  export default startPrimeGame;
//простое число делится только на себя и на единицу