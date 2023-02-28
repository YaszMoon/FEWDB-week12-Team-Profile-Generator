const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const nameQ = {
  type: "input",
  name: "name",
  message: "What is your name?"
}

const idQ = {
  type: "input",
  name: "employeeId",
  message: "Enter your Employee ID"
}

const emailQ = {
  type: "input",
  name: "email",
  message: "Enter your email address"
}

// TODO: Write Code to gather information about the development team members, and render the HTML file.
inquirer
  .prompt([
    //manager questions
    nameQ,
    idQ,
    emailQ,
    {
      type: "input",
      name: "officeNumber",
      messgae: "Enter your office number"
    },
  ])
  .then((response) => {
    // populate manager info
    // promptForNexEmployee ()
  });

const promptForNextEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: 'nextEmployee',
        message: 'Which type of employee would you like to add next?',
        choices: ['Engineer', 'Intern', 'No more employees to add']
      },
    ])
    .then((response) => {
      // if engineer
      //    promptForEngineer
      // else if intern
      //    promptForIntern
      // else
      //    use the functionality from page-template to generate the team
    });
};

const promptForEngineer = () => {
  inquirer
    .prompt([
      {
        //engineer questions
      },
    ])
    .then((response) => {
      // add new engineer to employees array
      // promptForNextEmployee
    });
};

const promptForIntern = () => {
  inquirer
    .prompt([
      {
        //intern questions
      },
    ])
    .then((response) => {
      // add new intern to employees array
      // promptForNextEmployee
    });
};

const buildPage = () => {
  // render(myArrayOfTeamMembers)
};
