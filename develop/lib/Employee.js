// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role="Employee") {
        this.name = name;
        this.id = id; 
        this.email = email;
        this.role = role
    }

    getID() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;