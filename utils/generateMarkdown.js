// TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicense(answers){ 
//   if (answer.license === "MIT") { return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]" }; 
//   if (answer.license === "ISC") { return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]"};
//   if (answer.license === "Apache 2.0") { return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]" };
//   if (answer.license === "BSD") { return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]"};
//   if (answer.license === "None") { return ""}
// }


// "MIT",
// "ISC",
// "Apache 2.0",
// "BSD",
// "None"

// TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderBadge(answers)  { 
// if (answer.license === "MIT") {
//    return "(https://opensource.org/licenses/MIT)" };
// if (answer.license === "ISC") { 
//   return "(https://opensource.org/licenses/ISC)"};
// if (answer.license === "Apache 2.0") { 
//   return "(https://opensource.org/licenses/Apache-2.0)" };
// if (answer.license === "BSD") { 
//   return "(https://opensource.org/licenses/BSD-3-Clause)"};
// if (answer.license === "None") { 
//   return ""}
// }


// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) =>
 `
  # ${answers.title}

## Description
​${answers.description} 

## Table of Contents 

* [Installation](#installation)
​
* [Usage](#usage)
​
* [License](#license)
​
* [Contributing](#contributing)
​
* [Tests](#tests)
​
* [Questions](#questions)
​
## Installation
​
To install necessary dependencies, run the following command:
​
${answers.install}

## Usage
​
${answers.usage}. 
​
## License
​
This project is licensed under the ${answers.license} license. 
Additional information on this license [here](${answers.license.link}).
  
## Contributing
​
${answers.contribute} can contribute to this repository. 
​
## Tests
​
This project uses ${answers.test} tests. 
​
## Questions
​
If you have any questions, please contact me directly at <${answers.email}>.
More of my work can be found at [${answers.github}](https://github.com/${answers.github}).

  `;



module.exports = generateMarkdown
