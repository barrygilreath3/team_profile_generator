const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Manager = require('./classes/Manager');
const Engineer = require('./classes/Engineer');
const Intern = require('./classes/Intern');

const generateHtml = require('./utils/generateHtml');
const targetFolder = path.resolve(__dirname, "dist");


const team = [];

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
            console.log(team);
            // process.exit();

            if (!fs.existsSync(targetFolder)) {
                fs.mkdir(targetFolder);
            }
        
            fs.writeFileSync(path.join(targetFolder, 'team.html'), generateHtml(team));

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
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
        team.push(engineer);
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
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(intern);
        mainMenu();
    }
    );
}

// Function to create html file


// Function to initialize the app
function init() {
    // inquirer.prompt().then(function(answers) {
    //     writeToFile('index.html', generateHtml(answers));
    //     console.log('You just made a web page!');
    // })
    mainMenu();
};

init();