// Code to define and export the Intern class

//require Employee to inherit Employee constuctors
const Employee = require("./Employee");

//use extend to add Intern specific constructors, to the Employee ones
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    //only one return function since others are under Employee
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;