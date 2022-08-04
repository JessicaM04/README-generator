const { 
  generateDescription,
  generateInstallation,
  generateUsage,
  generateLicense,
  generateContributing,
  generateTest,
  generateQuestions,
  generateHRef,
  generateSource
} = require('../utils/generateMarkdown');

module.exports = templateData => {
  console.log(templateData);
// destructure projects and about data from templateData based on their property key names
// this will create three variables based on data in templateData
const {name, description, installation, usage, license, contributing, test, username, email} = templateData;

  return `
  <!DOCTYPE html> 
  <html lang="en"> 

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${name}</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">${name}</h1>
        <nav class="flex-row">
          <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/">GitHub</a>
        </nav>
      </div>
    </header>
    <body>
      <div class="nav">
        <h1 class="TOC">Table of Contents</h1>
          <h2><a href="#description">Description</a></h2>
          <h2><a href="#installation">Installation</a></h2>
          <h2><a href="#usage">Usage</a></h2>
          <h2><a href="#license">License</a></h2>
          <h2><a href="#contributing">Contributing</a></h2>
          <h2><a href="#test">Tests</a></h2>
          <h2><a href="questions">Questions</a></h2>
      </div>
    <main class="container my-5">
      ${generateDescription(description)}
      ${generateInstallation(installation)}
      ${generateUsage(usage)}
      ${generateLicense(license)}
      <a href=${generateHRef(license)}>
        <img src=${generateSource(license)} alt="license">
      </a>
      ${generateContributing(contributing)}
      ${generateTest(test)}
      ${generateQuestions(username, email)}
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${name}</h3>
    </footer>
  </body>
  </html>
  `;
};