import { createHomePage } from './homepage';
import { createContactPage } from './contactpage';
import { createAboutPage } from './aboutpage'


(function() {
  const homeBtn = document.getElementById("homeBtn");
  homeBtn.addEventListener("click", createHomePage);

  const contactBtn = document.getElementById("contactBtn");
  contactBtn.addEventListener("click", createContactPage);

  const aboutBtn = document.getElementById("aboutBtn");
  aboutBtn.addEventListener("click", createAboutPage);

  createHomePage();
})();

// const homeBtn = document.getElementById("homeBtn");
// homeBtn.addEventListener("click", createHomePage);

// const contactBtn = document.getElementById("contactBtn");
// contactBtn.addEventListener("click", createContactPage);

// const aboutBtn = document.getElementById("aboutBtn");
// aboutBtn.addEventListener("click", createAboutPage);


// createHomePage();
