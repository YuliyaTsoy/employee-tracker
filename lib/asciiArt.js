// Requiring npm package: asciiart-logo
const logo = require("asciiart-logo");

// creates actual logo
function asciiArtLogo() {
  console.log(
    logo({
      name: "Employee Tracker",
      font: "Big",
      lineChars: 10,
      padding: 2,
      margin: 3,
      borderColor: "grey",
      logoColor: "cyan",
      textColor: "green",
    })
      .emptyLine()
      .right("Content Management Systems")
      .emptyLine()
      .render()
  );
}
function quitLogo() {
  console.log(
    logo({
      name: "Thank You! Good Bye!",
      font: "Big",
      lineChars: 10,
      padding: 2,
      margin: 3,
      borderColor: "grey",
      logoColor: "cyan",
      textColor: "green",
    }).render()
  );
}
module.exports = { asciiArtLogo, quitLogo };
