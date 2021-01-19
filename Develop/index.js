// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerAnswers, data) => {   
        console.log("Creating ReadME file");
        // fs.writeFileSync("ReadMe.md", inquirerAnswers, data);
    })
    .catch((err) => {
        console.log(err);
    })
}


// Function call to initialize app
init();



const promptUser = () =>
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your Github username',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Write a description of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What should be included in your Table of Contents?',
            name: 'linkedin',
        },
        {
            type: 'input',
            message: 'What are the requirements for installation?',
            name: 'github',
        }, 
        {
            type: 'input',
            message: 'How will this project be used?',
            name: 'usage',
        }, 
        {
            type: 'input',
            message: 'What license does this app use?',
            name: 'license',
        }, 
        {
            type: 'input',
            message: 'Who contributed to this project?',
            name: 'contributors',
        }, 
        {
            type: 'input',
            message: 'What tests are included with this application?',
            name: 'test',
        }, 
        {
            type: 'input',
            message: 'What is your contact information?',
            name: 'questions',
        }

    ]);


const generateMarkdown = (answers) =>



promptUser()
    .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
        .then(() => console.log("Successfully wrote to README.md"))
            .catch((err) => console.error(err));


    