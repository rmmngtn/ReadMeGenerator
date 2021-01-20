// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === true) { 
    

  }
  else { 
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${title} [![License: ${license}]${badge}]

    ### ${description}
    
    
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
    ${install}
    
    <br>
    
    ## Usage
    ----
    ${usage}
    
    <br>
    
    ## License
    ----
    ${license}
    
    <br>
    
    ## Contributors
    ----
    ${contributors}
    
    <br>
    
    ## Testing
    ----
    ${test}
    
    <br>
    
    
    
    ## Contact Me
    ----
    - <https://github.com/${github}>
    - <${email}>
    
    
    `;


}

module.exports = generateMarkdown;
