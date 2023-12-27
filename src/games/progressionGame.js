#!/usr/bin/env node

import getRandomNumber from '../getRandomNumber.js';
import createGameLogic from '../index.js';

const description = 'What number is missing in the progression?';

const getProgressionGame = () => {
    const firstNumber = 1;
    const finalNumber = 10;
    const question = getRandomNumber(firstNumber, finalNumber)
    const multiplierNumber = 5;
    const multiplier = getRandomNumber(firstNumber, multiplierNumber);
    const createProgression = [question];
    for (let i = 1; i <= createProgression; i += 1) {
        createProgression.push(i * multiplier);
    };



let hiddenNumber = Math.floor(Math.random() * createProgression)
        hiddenNumber = ".."

};

const startProgressionGame = () => createGameLogic(description, getProgressionGame)

export default startProgressionGame;