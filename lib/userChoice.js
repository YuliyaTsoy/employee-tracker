const { viewDepartments, viewRoles, viewEmployees } = require("./view.js");
const { addDepartment, addRole, addEmployee } = require("./add.js");
const updateEmployeeRole = require("./update.js");

// REUSABLE FUNCTION
// function called in mainMenu to switch between user choices and trigger a specific query function

function userChoice(response) {
  switch (response.task) {
    case "View all departments":
      viewDepartments();
      break;
    case "View all roles":
      viewRoles();
      break;
    case "View all employees":
      viewEmployees();
      break;
    case "Add a department":
      addDepartment(response);
      break;
    case "Add a role":
      addRole(response);
      break;
    case "Add an employee":
      addEmployee(response);
      break;
    case "Update an employee role":
      updateEmployeeRole(response);
      break;
    case "QUIT":
      process.exit(0);
  }
}

module.exports = userChoice;
