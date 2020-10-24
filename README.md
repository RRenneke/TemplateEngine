# TemplateEngine

Template Engine - Employee Summary - Week 10 Homework Assignment 

User Story: 
As a manager, I want to generate a webpage that displays my team's basic info, so that I have quick access to emails and GitHub profiles.

Instructions:
Build a Node CLI that takes in informatino to create a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. This assignment must also pass all unit tests. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user. The different employee types should all inherit some methods and properties from a base class of Employee.


Classes
The project must have the these classes: Employee, Manager, Engineer,
Intern. The tests for these classes in the tests directory must all pass.
The first class is an Employee parent class with the following properties and
methods:

name
id
email
getName()
getId()
getEmail()
getRole() // Returns 'Employee'

The other three classes will extend Employee. In addition to Employee's properties and methods, Manager will also have:

officeNumber
getRole() // Overridden to return 'Manager'

In addition to Employee's properties and methods, Engineer will also have:
github  // GitHub username
getGithub()
getRole() // Overridden to return 'Engineer'

In addition to Employee's properties and methods, Intern will also have:
school
getSchool()
getRole() // Overridden to return 'Intern'
