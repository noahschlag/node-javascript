// TODO: Include packages needed for this application
const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")
const generateMd = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [{ type: "input", message: "What is the title of your project?", name: "title" },
{type: "input", message: "Describe your project", name: "description"},
{type: "input", message: "How do you install your app?", name: "installation", default: "npm i"},
{type: "input", messaage: "What is the uses of your application?", name: "usage"},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response =>
    console.log(response) 
    )}

// Function call to initialize app
init();
