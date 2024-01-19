#!/usr/bin/env node

import getRandomNumber from '../getRandomNumber.js';
import createGameLogic from '../index.js';

const description = 'What number is missing in the progression?';

const firstNumber = 1;
const finalNumber = 10;
const question = getRandomNumber(firstNumber, finalNumber);
const multiplierNumber = 8;
const multiplier = getRandomNumber(firstNumber, multiplierNumber);
const createProgression = [];
for (let i = question; createProgression.length < 10; i += multiplier) {
  createProgression.push(i);
}
const getProgressionGame = () => {
  const fullyProgression = () => {
    const full = Math.floor(Math.random() * createProgression.length);
    return createProgression[full];
  };

  const expectedAnswer = fullyProgression(createProgression);

  const hiddenNumber = createProgression.indexOf(expectedAnswer);
  createProgression[hiddenNumber] = '..';
  return [question, expectedAnswer];
};

const startProgressionGame = () => createGameLogic(description, getProgressionGame);

export default startProgressionGame;
