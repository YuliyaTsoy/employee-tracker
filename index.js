const db = require('./config/connection.js');
const { asciiArtLogo } = require('./lib/asciiArt.js');

// Starts application
init();

// Helper Function to start application
// displays Ascii-art Logo
function init() {
    asciiArtLogo();
    
};