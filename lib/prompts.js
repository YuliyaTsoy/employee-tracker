const showDepartments = require("./showDepartments");
const showRoles = require("./showRoles");
const showEmployees = require("./showEmployees");

// Prompts questions to interact with the user
// Inquirer runs in mainMenu.js file

const prompts = [
  // User Options:
  {
    name: "options",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
      "QUIT",
    ],
  },

  // Add new Department
  {
    name: "department",
    type: "input",
    message: "Add Department",
    when: (response) => {
      if (response.options === "Add a department") {
        return true;
      }
      return false;
    },
    // validation checks if the input is not an empty string
    validate: (response) => {
      if (response === "") {
        return console.log("Please add a department name.");
      }
      return true;
    },
  },

  // Add an employee role
  {
    name: "role",
    type: "input",
    message: "Add role",
    when: (response) => {
      if (response.options === "Add a role") {
        return true;
      }
      return false;
    },
    // validation checks if the input is not an empty string
    validate: (response) => {
      if (response === "") {
        return console.log("Please add a role name.");
      }
      return true;
    },
  },
  {
    // Add a role salary

    name: "roleSalary",
    type: "input",
    message: "Please add a role salary",
    when: (response) => {
      if (response.options === "Add a role") {
        return true;
      }
      return false;
    },
    // validation checks if the input is not an empty string
    validate: (response) => {
      if (response === "") {
        return console.log("Please add a valid role salary.");
      }
      return true;
    },
  },
  {
    name: "roleDepartment",
    type: "list",
    message: "Please select appropriate department for the role",
    // function located at showDepartments.js to present current departments in db
    choices: showDepartments,
    when: (response) => {
      if (response.options === "Add a role") {
        return true;
      }
      return false;
    },
  },

  // Add employee
  {
    name: "employeeFirstName",
    type: "input",
    message: "Please enter employee First Name",
    when: (response) => {
      if (response.options === "Add an employee") {
        return true;
      }
      return false;
    },
    // validation checks if the input is not an empty string
    validate: (response) => {
      if (response === "") {
        return console.log("Please enter a valid First Name");
      }
      return true;
    },
  },
  {
    name: "employeeLastName",
    type: "input",
    message: "Please enter employee Last Name",
    when: (response) => {
      if (response.options === "Add an employee") {
        return true;
      }
      return false;
    },
    // validation checks if the input is not an empty string
    validate: (response) => {
      if (response === "") {
        return console.log("Please enter a valid Last Name");
      }
      return true;
    },
  },
  {
    name: "employeeRole",
    type: "list",
    message: "Please select employee Role",
    // function located at showRoles.js to present current roles in db
    choices: showRoles,
    when: (response) => {
      if (response.options === "Add an employee") {
        return true;
      }
      return false;
    },
  },
  {
    name: "employeeManager",
    type: "list",
    message: "Please select employee manager",
    // function located at showEmployees.js to present current employees in db to select as manager
    choices: showEmployees,
    when: (response) => {
      if (response.options === "Add an employee") {
        return true;
      }
      return false;
    },
  },

  // Update an employee role
  {
    name: "updateEmployee",
    type: "list",
    message: "Please select employee to update",
    // reused function located at showEmployees.js to present current employees in db
    choices: showEmployees,
    when: (response) => {
      if (response.options === "Update an employee role") {
        return true;
      }
      return false;
    },
  },
  {
    name: "updateRole",
    type: "list",
    message: "Please select new role",
    // reused function located at showRoles.js to present current roles in db to update
    choices: showRoles,
    when: (response) => {
      if (response.options === "Update an employee role") {
        return true;
      }
      return false;
    },
  },
];

module.exports = prompts;
