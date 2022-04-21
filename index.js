const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const jest = require('jest');
const Employee = require('./classes/Employee');
const manager = require('./classes/Manager');
const engineer = require('./classes/Engineer');
const intern = require('./classes/Intern');

const generateHtml = require('./utils/generateHtml');
const Manager = require('./classes/Manager');

// const generateHtml = new generateHtml();

function mainMenu() {
    inquirer.prompt(
        {
            name: 'switch',
            type:"list",
            message: "What type of employee would you like to create?",
            choices: ['Manager', 'Engineer', 'Intern', 'exit']
        }
    ).then(answers =>{
        console.log(answers);

        if(answers.switch === 'Manager') {
            addManager();
        }
        else if (answers.switch === 'Engineer') {
            addEngineer();
        } else if (answers.switch === 'Intern') {
            addIntern();
        }
        else {
            process.exit();
        }
    })
}

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'First Name',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Employee ID #:',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Email Address:',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Office Number?',
            name: 'office'        
        }
    ]).then (answers => {
        console.log(answers);
        mainMenu();
    }
    );
}

function addEngineer () {
    inquirer.prompt([
        {
            type: 'input',
            message: 'First Name',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Employee ID #:',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Email Address:',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Office Number?',
            name: 'office'        
        }
    ]).then (answers => {
        console.log(answers);
        mainMenu();
    }
    );
}

function addEngineer () {
    inquirer.prompt([
        {
            type: 'input',
            message: 'First Name',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Employee ID #:',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Email Address:',
            name: 'email'
        },
        {
            type: 'input',
            message: 'GitHub',
            name: 'gitHub'
        }
    ]).then (answers => {
        console.log(answers);
        mainMenu();
    }
    );
}

function addIntern () {
    inquirer.prompt([
        {
            type: 'input',
            message: 'First Name',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Employee ID #:',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Email Address:',
            name: 'email'
        },
        {
            type: 'input',
            message: 'School?',
            name: 'school'
        }
    ]).then (answers => {
        console.log(answers);
        mainMenu();
    }
    );
}

// Function to create html file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName), data);
    // use this function to run fs.writefile
}

// Function to initialize the app
function init() {
    // inquirer.prompt().then(function(answers) {
    //     writeToFile('index.html', generateHtml(answers));
    //     console.log('You just made a web page!');
    // })
    mainMenu();
};

init();