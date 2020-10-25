// Code to define and export the Manager class

//require Employee to inherit Employee constuctors
const Employee = require("./Employee");

//use extend to add Mananger specific constructors, to the Employee ones
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //return function since others are under Employee
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;