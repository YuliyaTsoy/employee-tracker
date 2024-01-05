const db = require("../../config/connection.js");

// Responses from userChoice.js are sent here
// Helper functions for all update queries are below:

function updateEmployeeRole(response) {
  db.query(
    `
    UPDATE employee SET role_id = ${response.updateRole} WHERE employee.id = ${response.updateEmployee}
    `,
    (err, res) => {
      if (err) throw err;
      console.log(`Employee role updated successfully!`);
      const mainMenu = require("../mainMenu.js");
      mainMenu();
    }
  );
};

module.exports = updateEmployeeRole;
