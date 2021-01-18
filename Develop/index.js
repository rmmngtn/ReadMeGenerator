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
        fs.writeFileSync("ReadMe.md", inquirerAnswers, data);
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
            message: 'What is your location?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'What hobbies do you have?',
            name: 'hobbies',
        },
        {
            type: 'input',
            message: 'What is your LinkedIn URL?',
            name: 'linkedin',
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github',
        }

    ]);


const generateMarkdown = (answers) =>



promptUser()
    .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
        .then(() => console.log("Successfully wrote to README.md"))
            .catch((err) => console.error(err));


    