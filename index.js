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

function createMarkdown(response) {
    return `
    # ${response.title}

# Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contribution)
- [Test](#test)
- [License](#license)
- [Questions](#questions)

## Description
![License](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")
        ${response.desciption}
## Installation
        ${response.installation}
 ## Usage
        ${response.usage}
## Contributors
        ${response.contribution}
## Test
        ${response.test}
## License
        ${response.license}

 ## Questions
    If you have any questions regarding this Project feel free to reach out to my Github account or via Email
- [Github Profile](https://github.com/${response.username})
- Email: ${response.email}   
  `;
}

//Function intializing Program

async function init()  {
    try {
        const response = await userInput();
        const readMe = createMarkdown(response);

        await writeFileAsync('README.md', readMe);
        console.log('Successful File');   
    }
    catch (err) {
        console.log(err);
    }

}

init();

