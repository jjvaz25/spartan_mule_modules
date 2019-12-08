import { appendImage, appendH1, appendH2, appendP } from './homepage'

const contentDiv = document.getElementById('content');
const openingPara = document.querySelector('p');

contentDiv.appendChild(appendImage());
contentDiv.appendChild(appendH1("Spartan Mule"));
contentDiv.appendChild(appendH2("The packing list for minimalists"));
contentDiv.appendChild(appendP());





