// console.log("Hello World");
// Added inquirer to ask the questions
const inquirer = require("inquirer");
const path = require("path");
const generate = require("././utils/generateMarkdown");
//  input - Possible values: input, number, confirm, list(can only select one think), rawlist, expand, checkbox, password, editor

const fs = require("fs");
const { error } = require("console");
const { cwd } = require("process");

// Description, Installation, Usage, Contributing, and Tests
// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of your application?",
    name: "Title",
  },
  {
    type: "list",
    message: "What is your application about?",
    name: "Description",
    choices: [
      "This is an app demonstrating how to quickly and easily create a README file by using a command-line application using Nodejs.",
    ],
  },
  {
    type: "list",
    message: "How did you install the application?",
    name: "Installation",
    choices: [
      "To install the app, index.js was created. To initialize package.json, npm init -y was installed. To show node modules and package-lock.json, npm install inquirer was added.",
    ],
  },
  {
    type: "list",
    message: "How will the app be used?",
    name: "Usage",
    choices: [
      "The app will be used to demonstrate how quickly and easily create a README file by using a command-line application using Nodejs.",
    ],
  },
  {
    type: "list",
    message: "How can other developers make contributions?",
    name: "Contributions",
    choices: ["Contributions can be made using &mdashs"],
  },

  {
    type: "list",
    message: "How can the app be tested?",
    name: "Tests",
    choices: ["The app can be tested using testing methods Jest, Mocha, Chai."],
  },
  {
    type: "list",
    message: "How can issues be reported?",
    name: "Issues",
    choices: ["Issue can be reported to valkimani3@gmail.com."],
  },
  {
    type: "list",
    message: "What is the License of your application?",
    name: "License",
    choices: ["The application is using an MIT license."],
  },
  {
    type: "input",
    message: "What is your Github Username?",
    name: "GitHubName",
  },

  //
  // Added .then a promise prompted by inquirer.prompt()
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  // Call inquirer.prompt
  //   initiate the inquirer method to prompt your questions
  inquirer
    .prompt(questions)
    // writeFile function should be called within this function
    .then((inquirerResponses) => {
      console.log(inquirerResponses);
      writeToFile("README.md", generate(inquirerResponses));
    });
}
// function call to initialize program
init();
