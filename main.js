#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms))

async function welcome(){
    const msg = `50 Challenges 25 days`;
    figlet(msg, (err, data) => {
        console.log(gradient.passion.multiline(data))
    });
    await sleep(3000);
    const entryText = chalkAnimation.glitch(`
    
    `)
    await sleep(5000);
}

await welcome();

async function askName(){
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'list',
        message: 'What is your name?',
        default(){
            return 'Player';
        }
    });
    player_name = answers.player_name;
}

await askName();

async function question1(){
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'What WATAFAK?',
        choices: [
            'May 23rd',
            'Feb',
            'Dec',
            '17'
        ],
    });
    return handleAnswer(answers.question_1 == 'Feb');
}

async function handleAnswer(isCorrect){
    const spinner = createSpinner('Checking answer...').start();
    await sleep();

    if(isCorrect){
        spinner.success({text:`Nice work ${player_name}`});
    }else{
        spinner.error({text: `Game Over`});
        process.exit(1);
    }
}

await question1();

function winner(){
    console.clear();
    const msg = `Congrats, ${player_name}`;

    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data))
    });
}

winner();