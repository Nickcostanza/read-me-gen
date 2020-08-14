const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


const writeFileAsync = util.promisify(fs.writeFile);


//function with array of questions to prompt user

function userInput() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of your Project?',
            name: 'title' 
        },
        {
            type: 'input',
            message: 'Enter description of your Project?',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What are the installation instructions?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'What is your application used for?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Who contributed on this project?',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'What are the test instructions?',
            name: 'test'
        },
        {
            type: 'checkbox',
            message: 'Please select a License',
            choices: [
                'MIT',
                'Apache',
                'ISC',
            ],
            name: 'license'
         },
         {
             type: 'input',
             message: 'What is your GitHub Username?',
             name: 'username'
         },
         {
             type: 'input',
             message: 'What is your Email Address?',
             name: 'email'
         },

         
    ]);
}

function createMarkdown(res) {
    return `
    # ${response.title}

    # Table of Contents

    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributors](#contribution)
    - [Test](#test)
    - [Credits](#credits)
    - [License](#license)
    - [Questions](#questions)

    ## Description
        ![License](${res.license})
    ${res.desciption}
    ## Installation
    ${res.installation}
    ## Usage
    ${res.usage}
    ## Contributors
    ${res.contribution}
        
    
}