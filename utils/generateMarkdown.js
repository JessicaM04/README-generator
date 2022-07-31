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
const generateLicense = license => {
  if (!license) {
    return '';
  }
  const apache = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  const boost = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  const mit = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  const isc = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  let licenseLink;

  switch (license) {
    case "MIT":
      licenseLink = mit;
    case "ISC":
      licenseLink = isc;
    case "Apache":
      licenseLink = apache;
    case "Boost":
      licenseLink = boost;
  }

  return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">License</h2>
      <p>${licenseLink}</p>
    </section>
  `;
};
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

module.exports = {
  generateDescription,
  generateInstallation,
  generateUsage,
  generateLicense,
  generateContributing,
  generateTest,
  generateQuestions
};
