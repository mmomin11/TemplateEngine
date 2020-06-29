const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// create an empty array of members currently in the data
const teamMembers = []

// function for a new managers that will use inquirer to prompt a set of questions to fill data for manager. 
function newManager() {
    inquirer.prompt([
        {
            type: "input", 
            name: "name",
            message: "What is your manager's name?" 
        },
        {
            type: "input",
            name: "id", 
            message: "What is your manager's ID?"
        },
        {
            type: "input",
            name: "email", 
            message: "What is your manager's email?"
        },
        {
            type: "input",
            name: "officeNumber", 
            message: "What is your manager's office number?"
        }
    ]).then(function(answer) {
        const manager = new Manager(answer.name, parseInt(answer.id), answer.email, parseInt(answer.officeNumber));
        teamMembers.push(manager);
        addMember();
    })
}

// prompt for manager to direct to the correct set of questions when adding a new memeber. 
function addMember () {
    inquirer.prompt([
        {
            type: "list",
            name: "type",
            message:"which type of employee would you like to add?",
            choices: [
                "Engineer", 
                "Intern", 
                "N/A"
            ]
        }
// function needs to route to correct set of questions based on "answer"
    ]).then(function(answer) {
        if(answer.type === "Engineer") {
            createEngineer();
        } else if (answer.type === "Intern") {
            createIntern();
        } else render(teamMembers);
    })
}

// after the manager selects engineer in order to create a new memeber then prompt below messages. 
function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "what is your engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "what is your engineer's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "what is your engineer's email?"
        },
        {
            type: "input",
            name: "username",
            message: "what is your engineer's Github username?"
        }
    ]).then(function(answer) {
        const engineer = new Engineer(answer.name, parseInt(answer.id), answer.email, answer.username);
        teamMembers.push(engineer);
        addMember();
    })
}

// create intern function and set of prompts. Similar to above. 
function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "what is your Intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "what is your Intern's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "what is your Intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "what is your intern's school?"
        }
    ]).then(function(answer) {
        const intern = new Intern(answer.name, parseInt(answer.id), answer.email, answer.school);
        teamMembers.push(intern);
        addMember();
    })
}

newManager();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
