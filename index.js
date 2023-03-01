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
  type: "number",
  name: "employeeId",
  message: "Enter the Employee ID",
};

const emailQ = {
  type: "input",
  name: "email",
  message: "Enter the email address",
};

const teamArray = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?",
    },
    idQ,
    emailQ,
    {
      type: "number",
      name: "officeNumber",
      message: "Enter the office number",
    },
  ])
  .then((response) => {
    let newManager = new Manager(
      response.name,
      response.employeeId,
      response.email,
      response.officeNumber
    );
    teamArray.push(newManager);
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
      },
    ])
    .then((response) => {
      if (response.nextEmployee == "Engineer") {
        promptForEngineer();
      } else if (response.nextEmployee == "Intern") {
        promptForIntern();
      } else {
        buildPage();
      }
    });
};

const promptForEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Engineer's name?",
      },
      idQ,
      emailQ,
      {
        type: "input",
        name: "github",
        message: "Enter the Github username",
      },
    ])
    .then((response) => {
      let newEngineer = new Engineer(
        response.name,
        response.employeeId,
        response.email,
        response.github
      );
      teamArray.push(newEngineer);
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
      },
    ])
    .then((response) => {
      let newIntern = new Intern(
        response.name,
        response.employeeId,
        response.email,
        response.school
      );
      teamArray.push(newIntern);
      promptForNextEmployee();
    });
};

const buildPage = () => {
  let data = render(teamArray);
  fs.writeFile(outputPath, data, (err) =>
    err ? console.error(err) : console.log("Team Profile Generated!")
  );
};
