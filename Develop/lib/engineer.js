// Code to define and export the Engineer class

//require Employee to inherit Employee constuctors
const Employee = require("./Employee");

//use extend to add Engineer specific constructors, to the Employee ones
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    //only one return function since others are under Employee
    getGithub() {
        return this.github;
    }

}

module.exports = Engineer;