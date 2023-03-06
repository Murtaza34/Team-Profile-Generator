const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// Will push team data to teamMembers Array
const teamMembers = [];

// User starts with managers details
const managerPrompt = () => {
	return inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "Please enter your name:",
				validate: function (input) {
					if (input === "") {
						return "Your name cannot be blank!";
					} else {
						return true;
					}
				},
			},
			{
				type: "input",
				name: "id",
				message: "Please enter your ID:",
				validate: function (input) {
					if (isNaN(input)) {
						return "Your ID must be a number!";
					} else if (input.trim() === "") {
						return "Your ID cannot be blank!";
					} else {
						return true;
					}
				},
			},
			{
				type: "input",
				name: "email",
				message: "Please enter your email address:",
				validate: function (input) {
					if (input === "") {
						return "Your email cannot be blank!";
					} else {
						return true;
					}
				},
			},
			{
				type: "input",
				name: "officeNumber",
				message: "Please enter your office number:",
				validate: function (input) {
					if (isNaN(input)) {
						return "Office number must be a number!";
					} else if (input.trim() === "") {
						return "Office number cannot be blank!";
					} else {
						return true;
					}
				},
			},
		])

		.then((answers) => {
			const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
			teamMembers.push(manager);
			menuPrompt();
		});
};

const menuPrompt = () => {
	return inquirer.prompt([
		{
			type: "list",
			name: "role",
			message: "Please select your role?",
			choices: ["Manager", "Engineer", "Intern"],
		},
	]);
};

// function to initialize program
// function init() {
// 	console.log(
// 		"\n",
// 		"-------------------- Hi, Welcome Team Profile Generator --------------------",
// 		"\n",
// 		"\n",
// 		"1) Answer the questions below to generate your Team Profile",
// 		"\n",
// 		"2) Please NOTE! Pressing enter will jump to the next question. To add new line use <br>.",
// 		"\n",
// 		"3) If you wish to exit, please press Ctrl + C.",
// 		"\n"
// 	);
// 	inquirer.prompt(questions).then((answers) => {
// 		writeToFile("./output/team.html", render({ ...answers }));
// 		console.log(
// 			"\n",
// 			"------------- Your Team Profile has been Successfully Generated! -------------",
// 			"\n",
// 			"----- Below are your results:",
// 			"\n",
// 			answers
// 		);
// 	});
// }

// function call to initialize program
init();
