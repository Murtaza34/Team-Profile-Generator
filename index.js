const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];

console.log(
  "\n",
  "-------------------- Hi, Welcome Team Profile Generator --------------------",
  "\n",
  "\n",
  "1) Answer the questions below to generate your Team Profile",
  "\n",
  "2) If you wish to exit, please press Ctrl + C.",
  "\n"
);

// Start with Manager info:
const buildEmployeeTeam = () => {
  console.log("-------------------- Manager's Info --------------------");

  return inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter your name:",
      validate: function (input) {
        if (input === "") {
          return "Your name cannot be left blank!";
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Please enter your ID number:",
      validate: function (input) {
        if (isNaN(input)) {
          return "Your ID must be a number!";
        } else if (input.trim() === "") {
          return "ID number cannot be left blank!";
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
          return "Email address cannot be left blank!";
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
          return "Office number cannot be left blank!";
        } else {
          return true;
        }
      },
    },
  ])
  .then((answers) => {
    console.log("\n", "----- Below are your results -----", "\n", answers, "\n");
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamMembers.push(manager);
    employeeList();
  });
};

// Options to add new Employee's
const employeeList = () => {
  return inquirer
  .prompt([
    {
      type: "list",
      name: "employeeList",
      message: "Please choose one of the following options:",
      choices: ["Add an Engineer", "Add an Intern", "Generate Team profile"],
    },
  ])
  .then((userChoice) => {
    switch (userChoice.employeeList) {
      case "Add an Engineer":
        addEngineer();
        break;
      case "Add an Intern":
        addIntern();
        break;
      default:
        generateTeam();
    }
  });
};

const addEngineer = () => {
  console.log("\n", "-------------------- Engineer's Info --------------------");

  return inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter your name:",
      validate: function (input) {
        if (input === "") {
          return "Your name cannot be left blank!";
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Please enter your ID number:",
      validate: function (input) {
        if (isNaN(input)) {
          return "Your ID must be a number!";
        } else if (input.trim() === "") {
          return "ID number cannot be left blank!";
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
          return "Email address cannot be left blank!";
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your Github Username:",
      validate: function (input) {
        if (input === "") {
          return "Github username cannot be left blank!";
        } else {
          return true;
        }
      },
    },
  ])

  .then((answers) => {
    console.log("\n", "----- Below are your results -----", "\n", answers, "\n");
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    teamMembers.push(engineer);
    employeeList();
  });
};

const addIntern = () => {
  console.log("\n", "-------------------- Interns's Info --------------------");

  return inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter your name:",
      validate: function (input) {
        if (input === "") {
          return "Your name cannot be left blank!";
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Please enter your ID number:",
      validate: function (input) {
        if (isNaN(input)) {
          return "Your ID must be a number!";
        } else if (input.trim() === "") {
          return "ID number cannot be left blank!";
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
          return "Email address cannot be left blank!";
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "Please enter your school:",
      validate: function (input) {
        if (input === "") {
          return "School cannot be left blank!";
        } else {
          return true;
        }
      },
    },
  ])
  .then((answers) => {
    console.log("\n", "----- Below are your results -----", "\n", answers, "\n");
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    teamMembers.push(intern);
    employeeList();
  });
};

const generateTeam = () => {
  console.log(
    "\n",
    "------------- Your Team Profile has been Successfully Generated! -------------",
    "\n",
    "To view your generated Team HTML file, please navigate to the output directory.",
    "\n"
  );
 
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
};

buildEmployeeTeam();
