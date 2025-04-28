#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from 'figlet';
import { questions } from './questions.js';

// Helper to safely prompt without ugly crash
async function safePrompt(questions) {
  try {
    return await inquirer.prompt(questions);
  } catch (error) {
    if (error.isTtyError || error.message.includes('force closed')) {
      console.log(chalk.red('\n\n👻 Thanks for playing. Goodbye!'));
      process.exit(0);
    } else {
      throw error;
    }
  }
}

// Exits cleanly from the terminal
process.on('SIGINT', () => {
  console.log(chalk.red('\n\n👻 Thanks for playing. Goodbye!'));
  process.exit(0);
});

// Game state
let score = 0;
let currentQuestionIndex = 0;

// Display welcome message
console.log(
  chalk.magenta(
    figlet.textSync('Paranormal Quiz Game!', {
      font: 'standard',
      horizontalLayout: 'default',
      verticalLayout: 'default',
    })
  )
);

console.log(chalk.cyan('Welcome to the Paranormal Quiz Game!'));

// Main game function
async function askQuestion() {
  if (currentQuestionIndex >= questions.length) {
    console.log(
      chalk.blue(`Game over! Your score is: ${score}/${questions.length}`)
    );

    const { playAgain } = await safePrompt({
      type: 'confirm',
      name: 'playAgain',
      message: 'Do you want to play again?',
      default: false,
    });

    if (playAgain) {
      score = 0;
      currentQuestionIndex = 0;
      askQuestion();
    } else {
      console.log(chalk.green('👻 Thanks for playing! Goodbye!'));
    }
    return;
  }

  const currentQuestion = questions[currentQuestionIndex];

  console.log(chalk.yellow(`\nQuestion ${currentQuestionIndex + 1}:`));

  const userAnswer = await safePrompt({
    type: 'list',
    name: 'answer',
    message: currentQuestion.question,
    choices: currentQuestion.choices,
  });

  if (userAnswer.answer === currentQuestion.correctAnswer) {
    score++;
    console.log(chalk.green('✔️ Correct!'));
    console.log(chalk.dim(currentQuestion.explanation || ''));
  } else {
    console.log(chalk.red('❌ Incorrect!'));
    console.log(chalk.dim(currentQuestion.explanation || ''));
  }

  currentQuestionIndex++;

  const { continue: shouldContinue } = await safePrompt({
    type: 'confirm',
    name: 'continue',
    message: 'Continue to the next question',
    default: true,
  });

  if (shouldContinue) {
    askQuestion();
  } else {
    console.log(
      chalk.bold.green(
        `\n 👻 You are creepy! Thanks for playing. Your score is: ${score}/${currentQuestionIndex}`
      )
    );
  }
}

// Start the game
askQuestion();
