//fs for writing file
const fs = require('fs');

//inquirer for prompting user for their response
const inquirer = require('inquirer');

// importing constructor functions
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const path = require("path");

//importing layout template file
const generateTemplate = require('./src/template');


//path where the HTML file will store
const DIST_DIRECTORY = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIRECTORY, "generateTeam.html");

//creating empty array to store user input

const teamMembers = []

//prompting userinput 

function employeeInfo() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Employee Name: ',
            name: 'name',
            validate: function (nameInput) {
                if (nameInput) {
                    return true;
                } else {
                    return 'Please enter Employee Name.';
                }
            }
        },

        {
            type: 'input',
            message: 'Enter Email: ',
            name: 'email',
            validate: function (emailInput) {
                if (emailInput) {
                    return true;
                } else {
                    return 'Please enter Employee e-mail address.';
                }
            }
        },

        {
            type: 'input',
            message: 'Enter Employee Id: ',
            name: 'id',
            validate: function (idInput) {
                if (idInput) {
                    return true;
                } else {
                    return 'Please enter Employee Id.';
                }
            }
        },



        {
            type: 'list',
            message: 'Select Role: ',
            name: 'role',
            choices: ["Manager", "Engineer", "Intern"]

        },

    ])
    .then(answers => {

            if (answers.role === 'Manager') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'office',
                        message:'Enter office number:',
                        validate: officeInput => {
                            if (officeInput) {
                                return true;
                            } else {
                                return 'Please enter office No.';
                            }
                        }
                        
                    }
                ])
                .then(response => {
                    console.log(response.office);
                    const createManagerTeam = new Manager (answers.name, answers.email, answers.id, answers.role, response.office)
                    teamMembers.push(createManagerTeam);
                    addOption()
                })
            }else if(answers.role === 'Engineer' ){
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'gitHub',
                        message:'Enter Github name:',
                        validate: githubInput => {
                            if (githubInput) {
                                return true;
                            } else {
                                return 'Please enter gitHub username.';
                            }
                        }
                    }
                ])
                .then(response => {
                    console.log(response.gitHub);
                    const createEngineerTeam = new Engineer (answers.name, answers.email, answers.id, answers.role, response.gitHub)
                    teamMembers.push(createEngineerTeam);
                    addOption()
                })
            } else if (answers.role === 'Intern'){
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'school',
                        message:'Enter School name:', 
                        validate: function (schoolInput) {
                            if (schoolInput) {
                                return true;
                            } else {
                                return 'Please enter school  name.';
                            }
                        }

                    }
                ])
                .then(response =>{
                    console.log(response.school);
                    const createInternTeam = new Intern (answers.name,  answers.email, answers.id, answers.role, response.school)
                    teamMembers.push(createInternTeam);
                    addOption()
                })
            }

            else {
                const createEmployee = new Employee (answers.name, answers.email, answers.id, answers.role);
                teamMembers.push(createEmployee);
                addOption()

            }

            //genrate file

            const createTeam = () => {
                if (!fs.existsSync(DIST_DIRECTORY)){
                  fs.mkdirSync(DIST_DIRECTORY);
                }fs.writeFileSync(distPath, generateTemplate(teamMembers), "utf-8");
              
              }
           

            //add option 

            function addOption() {
                inquirer.prompt([
                    {
                        type:'confirm',
                        name: 'addMore',
                        message:'Would you like to add another Employee?'
                    }
                ])
                .then(res =>{
                    if(res.addMore === true){
                        employeeInfo(teamMembers);
                    } else {
                        console.log(teamMembers)
                        createTeam(teamMembers)

                    }
                })
            }
        })
}


employeeInfo();







