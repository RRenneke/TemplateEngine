// Code to define and export the Employee class

//Employee constructors
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //return functions
    getName() {
        return this.name; 
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.constructor.name;
    }

}

module.exports = Employee;