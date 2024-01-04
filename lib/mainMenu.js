// DEPENDENCIES
const inquirer = require('inquirer');
const prompts = require('./prompts.js');
const userChoice = require('./userChoice.js');

// REUSABLE FUNCTION
// function that renders main Menu after user completed their choice
function mainMenu() {
    inquirer
    .prompt(prompts)
    .then((response => {
        userChoice(response)
    }))
    .catch(err => {
        console.log(err)    
    })
};

module.exports = mainMenu;