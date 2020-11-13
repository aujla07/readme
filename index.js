var fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// array of questions for user
const questions = [
{
    type: "input",
    message: "What is the name of your project?",
    name: "title"
},
 {
     type: "input",
     message: "Please give a description of your project?",
name: "description",

 },
 {
      type: "input",
 message: "what is your github username?",
 default: "amanaujla"

 }



];

// function to write README file
function writeToFile(fileName, data) {
fs.writeFile("ReadME.md" + fileName, data err => {
    if (err) throw err;
}

)}

// function to initialize program
function init() {
inquirer.promt(questions).then(answers) =>{
    const response = generateMarkdown(answers);
    console.log(answers);
}}

// function call to initialize program
init();
