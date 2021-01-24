// TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderBadge(license) {
  let licBadge = license
  if (license == "MIT") licBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  if (license == "ISC") licBadge = "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)"
  if (license == "Apache 2.0") licBadge = "![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  if (license == "BSD") licBadge = "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
  if (license == "None") licBadge = ""
  
  return licBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLink(license)  { 
  let licLink = license
if (license === "MIT") licLink = "(https://opensource.org/licenses/MIT)";
if (license === "ISC") licLink = "(https://opensource.org/licenses/ISC)";
if (license === "Apache 2.0") licLink = "(https://opensource.org/licenses/Apache-2.0)"; 
if (license === "BSD") licLink = "(https://opensource.org/licenses/BSD-3-Clause)";
if (license === "None") licLink = ""; 

return licLink;
}


// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") { return ""}; 
  const badge = renderBadge(license)
  const link = renderLink(license);
  return `## License
  ​
${badge}
<br>
This project is licensed under the ${license} license. 
Additional information on this license [here](${link}).`
  
}; 

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {

  const license = answers.license; 
  const licenseInfo = renderLicenseSection(license); 

  return `# ${answers.title}
 
   

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

${answers.install}

## Usage
​
${answers.usage}. 
​
​
${licenseInfo}
  
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
If you have any questions, please contact me directly at ${answers.email}.
More of my work can be found at [${answers.github}](https://github.com/${answers.github}).

  `
};



module.exports = generateMarkdown
