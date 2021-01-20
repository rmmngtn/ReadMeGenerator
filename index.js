// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');


const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
            message: 'What are the requirements for installation?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'How will this project be used?',
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
                "GNU GPLv3", 
                "BSD", 
            ]
        },
        // {
        //     type: 'input',
        //     message: 'If you would like to include a license badge, add the URL here.',
        //     name: 'badge',
        // },
        {
            type: 'input',
            message: 'Who contributed to this project?',
            name: 'contributors',
        },
        {
            type: 'input',
            message: 'What tests are required with this application?',
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
        },
        {
            type: 'input',
            message: 'How would you prefer to be contacted?',
            name: 'contact',
        }

    ]);
};


// TODO: Create a function to write README file
function writeToFile(fileName, answers) {


};





// TODO: Create a function to initialize app
const init = async () => {
    console.log('work');
    try {
        const answers = await questions();

        const markdown = generatemarkdown(data);

        await writeFileAsync('READMe.md', markdown);

        console.log('Successfully wrote to READme');
    } catch (err) {
        console.log(err);
    }
};




// Function call to initialize app
init();

