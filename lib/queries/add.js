const db = require('../config/connection.js');

// Responses from userChoice.js are sent here
// Helper functions for all add queries are below:

function addDepartment(response) {
    db.query(`
    INSERT INTO department (name)
    VALUES
    ('${response.department}');
    `, (err, res) => {
        if (err) throw err;
        console.log(`${response.department} department added!`);
        const mainMenu = require('../mainMenu.js');
        mainMenu();
    });
};

function addRole(response) {
    db.query(`
    INSERT INTO role (title, salary, department_id)
    VALUES
    ('${response.roleTitle}', '${response.roleSalary}', '${response.roleDepartment}')
    `, (err, res) => {
        if (err) throw err;
        console.log(`${response.roleTitle} role added!`);
        const mainMenu = require('../mainMenu.js');
        mainMenu();
    });
};

function addEmployee(response) {
    db.query(`
    INSERT INTO employee(first_name, last_name, role_id, manager_id)
    VALUES
    ('${response.employeeFirstName}', '${response.employeeLastName}', '${response.employeeRole}', '${response.employeeManager}' )
    `, (err, res) => {
        if (err) throw err;
        console.log(`Employee ${response.employeeFirstName} ${response.employeeLastName} added!`);
        const mainMenu = require('../mainMenu.js');
        mainMenu();
    });
};


module.exports = { addDepartment, addRole, addEmployee};