#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomNumber from '../src/getRandomNumber.js';
const evenGame = () => { 
console.log('Greatings! Answer "yes" if the number is even, otherwise answer "no".');
    let correctAnswer = 0;
for (let i = 0; i < 3; i += 1){
    const number = getRandomNumber(2, 50);
    console.log(number);
    const isEven = number => number % 2 === 0;
    const expectedAnswer = isEven(number) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (expectedAnswer === userAnswer) {
        console.log('Correct!');
        correctAnswer += 1;
        
  } else {
    console.log(`'${number}' is wrong answer ;(. Correct answer was '${isEven(number) ? "no" : "yes"}'.`);
     console.log(`Let's try again!`);
 }
}
if (correctAnswer === 3) {
          console.log('Congratulations!'); 
      } 
}
export default evenGame


//import readlineSync from 'readline-sync';
//import getRandomNumber from '../src/getRandomNumber.js';
//console.log('Answer "yes" if the number is even, otherwise answer "no".');
//const number = getRandomNumber(2, 50);
//console.log(number);
//const isEven = number => number % 2 === 0;
//const expectedAnswer = isEven(number) ? 'yes' : 'no';
//const userAnswer = readlineSync.question('Your answer: ');
//    let correctAnswer = 0;
//  if (expectedAnswer === userAnswer) {
//      console.log('Correct!');
//      correctAnswer += 1;
//}
// 
//      for (let i = 0; correctAnswer < 3; i++) {
//        const result = (expectedAnswer === userAnswer); 
//        if (result === true) {
//          console.log('Congratulations!');
//          if (result === true) {
//            expectedAnswer()
//                userAnswer()
//          }
//      } else {
//          console.log(`'${number}' is wrong answer ;(. Correct answer was '${isEven(number) ? "no" : "yes"}'.`);
//          console.log(`Let's try again!`);
//      }
//}