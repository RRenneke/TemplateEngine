const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRender");

const employeeList = [];

// Code will use inquirer to gather information about each team memeber and create an object
// and to create objects for each team member (using the correct classes as blueprints!)
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the employee's first and last name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is their employee ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is their e-mail address?"
    },
    {
        type: "list",
        name: "role",
        message: "What is the employee's role in the team?",
        choices: [{
            name: "Manager"
        },
        {
            name: "Engineer"
        },
        {
            name: "Intern"
        }]
    },
    //only ask a manager
    {
        type: "input",
        name: "officeNumber",
        message: "What is their office number?",
        when: function(answers){
            return answers.role === "Manager";
        }
    },
    //only ask a engineer
    {
        type: "input",
        name: "github",
        message: "What is their Github username?",
        when: function(answers){
            return answers.role === "Engineer";
        }
    },
    //only ask an intern
    {
        type: "input",
        name: "school",
        message: "What school are they attending?",
        when: function(answers){
            return answers.role === "Intern";
        }
    }
];

//pull respones for each person and push them to the main employee list to create a team
function promptUser() {

   inquirer.prompt(questions).then(function(response) {
       if (response.role === "Manager") {
           const newManager = new Manager(response.name, response.id, response.email, response.officeNumber);
           employeeList.push(newManager);
       }
       else if (response.role === "Engineer") {
           const newEngineer = new Engineer(response.name, response.id, response.email, response.github);
           employeeList.push(newEngineer);
       }
       else if (response.role === "Intern") {
           const newIntern = new Intern(response.name, response.id, response.email, response.school);
           employeeList.push(newIntern);
       }
       newEmployee();
   });
};

//function to write the html file with the new team
function newEmployee() {
    inquirer.prompt([
        {
            type:"confirm",
            name:"newEmployee",
            message:"Would you like to enter another employee?",
            default:true
        }
    ]).then(function(answers) {
        if (answers.newEmployee) {
            promptUser();
        }
        else {
            const html = render(employeeList);
            fs.writeFile(outputPath, html, function(err) {
                if (err) throw err;
            })
        }
    })
}

//call to start the promts
promptUser();