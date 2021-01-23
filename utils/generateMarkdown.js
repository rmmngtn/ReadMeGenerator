// TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// const renderLicenseBadge = (license) => {
//   if (data.license === "MIT") {
//     data.license = mit; 
//   }
//   else if (data.license === "ISC") { 
//     data.license = isc; 
//   }
//   else if (data.license === "Apache 2.0") { 
//     data.license = apache 
//   }
//   else if (data.license === "GNU GPLv3") { 
//     data.license = GPLv3;  
//   }
//   else if (data.license === "BSD") { 
//     data.license = bsd; 
//   }
//   else if (data.license === "None") { 
//     return "" }

// };




// TODO: Create a function that returns the license link
// // If there is no license, return an empty string
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


## Description
​${data.description} 

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
${data.install}

## Usage
​
Use git clone to pull down the repository. 
​
## License
​
${data.license}
  
## Contributing
​
${data.contribute} can contribute to this repository. 
​
## Tests
​
This project uses the ${data.test} test. 
​
## Questions
​
If you have any questions, please contact me directly at <${data.email}>.
More of my work can be found at [rmmngtn](https://github.com/${data.github}).

  `;


};

module.exports = generateMarkdown;
