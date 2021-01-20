// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (data.license === "MIT") {
    data.license = mit; 
  }
  else if (data.license === "ISC") { 
    data.license = isc; 
  }
  else if (data.license === "Apache 2.0") { 
    data.license = apache 
  }
  else if (data.license === "GNU GPLv3") { 
    data.license = GPLv3;  
  }
  else if (data.license === "BSD") { 
    data.license = bsd; 
  }
  else if (data.license === "None") { 
    return "" }

};




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// const renderLicenseLink = () => {
//   if (data.licence === "MIT") { return "(https://opensource.org/licenses/MIT)" };
//   if (data.license === "ISC") { return "(https://opensource.org/licenses/ISC)" };
//   if (data.license === "Apache 2.0") { return "(https://opensource.org/licenses/Apache-2.0)" };
//   if (data.license === "GNU GPLv3") { return "(https://www.gnu.org/licenses/gpl-3.0)" };
//   if (data.licence === "BSD") { return "(https://opensource.org/licenses/BSD-3-Clause)" };
//   if (data.license === "None") { return "" };
// };

// renderLicenseLink(data.license);

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// const renderLicenseSection = (license) => {

// }

// renderLicenseSection;

// const liscBadge = renderLicenseBadge(data.license);
// const liscLink = renderLicenseLink(data.license);
// const liscSection = renderLicenseSection(data.license);


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 
  [![License: ${liscBadge}]

  ### ${data.description}
    
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
  #### This project is licensed under the terms of the ${data.license} license. Full license here ${liscLink}. 

    
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
