import { removeAllChildElements, appendImage, appendH1, appendH2 } from './homepage'

function createContactPage() {
  const contentDiv = document.getElementById('content');
  removeAllChildElements(contentDiv);
  contentDiv.appendChild(appendImage());
  contentDiv.appendChild(appendH1("Contact"));
  contentDiv.appendChild(appendH2("Want to say 'hi'? Get in touch!"));
  contentDiv.appendChild(appendH3("Email: info@spartanmule.com"));
  contentDiv.appendChild(appendH3("Phone: 1-617-spartanmule"));
  contentDiv.appendChild(appendH3("Instagram: @SpartanMule")); 
}

function appendH3(text) {
  const h3Element = document.createElement("h3");
  h3Element.innerHTML = text;
  return h3Element;
}

export { createContactPage };