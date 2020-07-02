// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer extends Employee{
    constructor(id, name, email, GitHubUser) {
        super(id, name, email, GitHubUser);
        this.GitHubUser = GitHubUser;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.GitHubUser;
    }
}

module.exports = Engineer;