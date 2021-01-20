// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (data.license === "MIT") { return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]" };
  if (data.license === "ISC") { return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]" };
  if (data.license === "Apache 2.0") { return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]" };
  if (data.license === "GNU GPLv3") { return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]" };
  if (data.license === "BSD") { return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]" };
  if (data.license === "None") { return "" };
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (data.licence === "MIT") { return "(https://opensource.org/licenses/MIT)" };
  if (data.license === "ISC") { return "(https://opensource.org/licenses/ISC)" };
  if (data.license === "Apache 2.0") { return "(https://opensource.org/licenses/Apache-2.0)" };
  if (data.license === "GNU GPLv3") { return "(https://www.gnu.org/licenses/gpl-3.0)" };
  if (data.licence === "BSD") { return "(https://opensource.org/licenses/BSD-3-Clause)" };
  if (data.license === "None") { return "" };
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
    [![License: ${license}]${badge}]

    ### ${data.description}
    
    
    <br>
    
    ## Table of Contents
    ----
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [License](#license)
    5. [Contributors](#contributors)
    6. [Testing](#testing)
    7. [Contact](#contact)
    
    <br>
    
    ## Installation 
    ----
    ${data.install}
    
    <br>
    
    ## Usage
    ----
    ${data.usage}
    
    <br>
    
    ## License
    ----
    ${data.license}
    
    <br>
    
    ## Contributors
    ----
    ${data.contributors}
    
    <br>
    
    ## Testing
    ----
    ${data.test}
    
    <br>
    
    
    
    ## Contact Me
    ----
    - <https://github.com/${data.github}>
    - <${data.email}>
    
    
    `;


};

module.exports = generateMarkdown;
