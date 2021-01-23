// TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string



// TODO: Create a function that returns the license link
// // If there is no license, return an empty string



// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answer.title}


## Description
​${answer.description} 

## Table of Contents 
​
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
${answer.install}

## Usage
​
Use git clone to pull down the repository. 
​
## License
​
${answer.license}
  
## Contributing
​
${answer.contribute} can contribute to this repository. 
​
## Tests
​
This project uses ${answer.test} tests. 
​
## Questions
​
If you have any questions, please contact me directly at <${answer.email}>.
More of my work can be found at [rmmngtn](https://github.com/${answer.github}).

  `;


};

module.exports = generateMarkdown
