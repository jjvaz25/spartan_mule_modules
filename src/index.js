import { appendImage, appendH1, appendH2 } from './homepage'

const contentDiv = document.getElementById('content');
const openingPara = document.querySelector('p');

contentDiv.insertBefore(appendImage(), openingPara);
contentDiv.insertBefore(appendH1("Spartan Mule"), openingPara);
contentDiv.insertBefore(appendH2("The packing list for minimalists"), openingPara);




