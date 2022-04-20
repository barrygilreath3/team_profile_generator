const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        inquirer.prompt(
            {
                type: 'input',
                message: 'Employee ID #:',
                name: 'id'
            }
        ).then (answers =>{
            console.log(employee.id);
        });

        return this.id;
    }

    getEmail() {
        inquirer.prompt(
            {
                type: 'input',
                message: 'Email Address:',
                name: 'email'
            }
        ).then (answers =>{
            console.log(employee.email);
        });

        return this.email;
    }

}

module.exports = Employee;