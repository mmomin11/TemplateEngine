// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer extends Employee{
    constructor(id, name, email, username) {
        super(id, name, email, username);
        this.username = username;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.username;
    }
}

module.exports = Engineer;