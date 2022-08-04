// create the about section
const generateDescription = description => {
  if (!description) {
    return '';
  }

  return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Description</h2>
      <p>${description}</p>
    </section>
  `;
};
// const generateTableOfContents = tableOfContents => {
//   if (!tableOfContents {
//     return '';
//   }

//   return `
//     <section class="my-3" id="about">
//       <h2 class="text-dark bg-primary p-2 display-inline-block">Table Of Contents</h2>
//       <p>${tableOfContents}</p>
//     </section>
//   `;
// };
const generateInstallation = installation => {
  if (!installation) {
    return '';
  }

  return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Installation</h2>
      <p>${installation}</p>
    </section>
  `;
};
const generateUsage = usage => {
  if (!usage) {
    return '';
  }

  return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Usage</h2>
      <p>${usage}</p>
    </section>
  `;
};
// const generateLicense = license => {
//   if (!license) {
//     return '';
//   }

//   return `
//     <section class="my-3" id="about">
//       <h2 class="text-dark bg-primary p-2 display-inline-block">License</h2>
//       <p>${license}</p>
//     </section>
//   `;
// };
const generateContributing = contributing => {
  if (!contributing) {
    return '';
  }

  return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Contributing</h2>
      <p>${contributing}</p>
    </section>
  `;
};
const generateTest = test => {
  if (!test) {
    return '';
  }

  return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Tests</h2>
      <p>${test}</p>
    </section>
  `;
};
const generateQuestions = (username, email) => {
  if (!username && !email) {
    return '';
  }

  return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Questions</h2>
      <p>Username: ${username}</p> 
      </br>
      <p>Email: ${email}</p>
    </section>
  `;
};
// create the projects section
const generateProjects = projectsArr => {
  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
      ${projectsArr
        .filter(({ feature }) => feature)
        .map(({ name, description, languages, link }) => {
          return `
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="portfolio-languages">
              Built With:
              ${languages.map(language => language).join(', ')}
            </h5>
            <p>${description}</p>
            <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        `;
        })
        .join('')}

      ${projectsArr
        .filter(({ feature }) => !feature)
        .map(({ name, description, languages, link }) => {
          return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="portfolio-languages">
              Built With:
              ${languages.join(', ')}
            </h5>
            <p>${description}</p>
            <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        `;
        })
        .join('')}
      </div>
    </section>
  `;
};

module.exports = templateData => {
  console.log(templateData);
// destructure projects and about data from templateData based on their property key names
// this will create three variables based on data in templateData
const {name, description, installation, usage, contributing, test, username, email} = templateData;

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
    <main class="container my-5">
      ${generateDescription(description)}
      ${generateInstallation(installation)}
      ${generateUsage(usage)}
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