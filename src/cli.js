import readlineSync from 'readline-sync' 

const userName = () => {
    console.log('Welcome to the Brain Games!');
    const user = readlineSync.question('May I have your name? ');
    return user;
  };

export default userName;
