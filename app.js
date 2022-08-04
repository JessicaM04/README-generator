// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your project title? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true; 
      } else {
        console.log('Please enter project title!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project. (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter a description of your project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install the application?',
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
        console.log('Please enter directions for how to install the application!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter a description of how/when to use your project. (Required)',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please enter a description of how/when to use your project!');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license does your project require? (Required)',
    choices: ['MIT', 'ISC', 'Boost', 'Apache'],
    validate: licenseInput => {
      if (licenseInput) {
        return true;
      } else {
        console.log('Please enter your project licensing requirement!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who has contributed to this project? (Required)',
    validate: contributingInput => {
      if (contributingInput) {
        return true;
      } else {
        console.log('Please enter project contributors!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'test',
    message: 'How do you test the project? (Required)',
    validate: testInput => {
      if (testInput) {
        return true;
      } else {
        console.log('Please enter how to test the project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username? (Required)',
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email? (Required)',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your email!');
        return false;
      }
    }
  },
];
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const writeFile = (fileName, fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, fileContent, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if(err) {
        reject(err);
        // return out of the function here to make sure the promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true, 
        message: 'File created!'
      });
    });
  });
};
// TODO: Create a function to initialize app
// function init() {}
const promptUser = (questions) => {
  return inquirer.prompt(questions);
};
// Function call to initialize app
// init(questions);
promptUser(questions)
  .then(promptUserData => {
    return generatePage(promptUserData);
  })
  .then(indexHTML => {
    return writeFile("./dist/index.html", indexHTML);
  })
  ;