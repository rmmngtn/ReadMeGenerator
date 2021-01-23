// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');


const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function init() {
    function questions() {
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is your project title?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Write a brief description of your project.',
                name: 'description',
            },
            {
                type: 'input',
                message: 'What installation steps are required for this project?',
                name: 'install',
            },
            {
                type: 'input',
                message: 'How can others use this project?',
                name: 'usage',
            },
            {
                type: 'checkbox',
                message: 'What license does this app have?',
                name: 'license',
                choices: [
                    "MIT",
                    "ISC",
                    "Apache 2.0",
                    "BSD",
                    "None",
                ]
            },
            {
                type: 'input',
                message: 'Who can contribute to this project?',
                name: 'contribute',
            },
            {
                type: 'input',
                message: 'What tests does this project use?',
                name: 'test',
            },
            {
                type: 'input',
                message: 'What is your Github URL?',
                name: 'github',
            },
            {
                type: 'input',
                message: 'What is your email?',
                name: 'email',
            }
        ]);
        }

    // TODO: Create a function to write README file
    questions()
        .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
        .then(() => console.log("Successfully wrote README"))
        .catch((err) => console.error(err))

}

// Function call to initialize app
init()

