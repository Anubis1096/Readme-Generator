// Generate markdown for README
function markdown(data) {
    return `# ${data.title}
    ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

    ## Description:
     ${data.description}
    ## Table of contents:
    * Installation
    * Usage
    * License
    * Contributing
    * Tests
    * Questions
    ## Installation:
     ${data.installation}
    ## Usage:
     ${data.usage}
    ## License:
     ${data.license}
    ## Contributing:
     ${data.contributing}
    ## Tests: 
     ${data.tests}
    ## Questions: 
     ${data.questions}
  `;
  }
  
  module.exports = markdown;