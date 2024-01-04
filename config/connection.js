const mysql = require('mysql2');
require('dotenv').config();

// connects to mysql db 
// use .env for credentials; refer to .env.EXAMPLE
const db = mysql.createConnection(
    {
        host: 'localhost',
        port: '3306',
        user: process.env.DB_USER,
        password: process.env.PASSWORD,
        database: process.env.DB_NAME,
    },
    // confirm connection to db with yellow console log in terminal
    console.log(`SUCCESS! Connected to the employee_db database!`)
); 

module.exports = db;