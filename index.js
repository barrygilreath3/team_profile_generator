const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Manager = require('./classes/Manager');
const Engineer = require('./classes/Engineer');
const Intern = require('./classes/Intern');

const generateHtml = require('./utils/generateHtml');
const targetPath = path.resolve(__dirname, 'dist', "team.html");
const targetFolder = path.resolve(__dirname, 'dist');

const team = [];

function mainMenu() {
    inquirer.prompt(
        {
            name: 'switch',
            type:"list",
            message: "What type of employee would you like to create?",
            choices: ['Manager', 'Engineer', 'Intern', '- Exit/Print -']
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
            console.log(team);

            if (!fs.existsSync(targetFolder)) {
                fs.mkdir(targetFolder);
            }

            write();

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
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
        team.push(manager);
        mainMenu();
    }
    );
}

function addEngineer() {
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
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
        team.push(engineer);
        mainMenu();
    }
    );
}

function addIntern() {
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
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(intern);

        // fs.writeFileSync(path.join((targetFolder, 'team.html'), generateHtml(team), 'utf-8');

        mainMenu();
    }
    );
}

function write () {
    fs.writeFileSync(targetPath, generateHtml(team), "utf-8");
}

// Function to initialize the app
function init() {
    mainMenu();
};


init();