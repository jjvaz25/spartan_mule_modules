import { createHomePage } from './homepage';

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", createHomePage);

createHomePage();
