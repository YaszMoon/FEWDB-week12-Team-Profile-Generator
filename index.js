const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const idQ = {
  type: "input",
  name: "employeeId",
  message: "Enter the Employee ID",
};

const emailQ = {
  type: "input",
  name: "email",
  message: "Enter the email address",
};

// TODO: Write Code to gather information about the development team members, and render the HTML file.
inquirer
  .prompt([
    //manager questions
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?",
    },
    idQ,
    emailQ,
    {
      type: "input",
      name: "officeNumber",
      messgae: "Enter the office number",
    },
  ])
  .then((response) => {
    // populate manager info
    promptForNextEmployee();
  });

const promptForNextEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "nextEmployee",
        message: "Which type of employee would you like to add next?",
        choices: ["Engineer", "Intern", "No more employees to add"],
      }
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
          type: "input",
          name: "name",
          message: "What is the Engineer's name?",
        }
      ,
      idQ,
      emailQ,
      {
        type: "input",
        name: "github",
        message: "Enter the Github username",
      }
    ])
    .then((response) => {
      // add new engineer to employees array
      promptForNextEmployee();
    });
};

const promptForIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Intern's name?",
      },
      idQ,
      emailQ,
      {
        type: "input",
        name: "school",
        message: "What is the name of the school?",
      }
    ])
    .then((response) => {
      // add new intern to employees array
      promptForNextEmployee()
    });
};

const buildPage = () => {
  // render(myArrayOfTeamMembers)
};
