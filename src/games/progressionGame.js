#!/usr/bin/env node
//
import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const number = start + step * i;
    progression.push(number);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const startProgression = getRandomNumber(0, 100);
  const lengthProgression = getRandomNumber(5, 10);
  const stepProgression = getRandomNumber(2, 6);
  const hiddenIndex = getRandomNumber(0, lengthProgression - 1);
  const progression = getProgression(startProgression, stepProgression, lengthProgression);
  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
