// TODO: Write code to define and export the Employee class
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) { // and whatever else is necessary
        super(name, id, email);
        this.github = github;
    }
}

module.exports = Engineer;