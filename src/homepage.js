function appendImage() {
  const imgElement = document.createElement("img");
  imgElement.classList.add("muleImg");
  imgElement.src = "images/mule_cartoon.png";
  imgElement.alt = "cartoon packing mule";
  return imgElement;
};

function appendH1(text) {
  const h1Element = document.createElement("h1");
  h1Element.innerHTML = text;
  return h1Element;
}

function appendH2(text) {
  const h2Element = document.createElement("h2");
  h2Element.innerHTML = text;
  return h2Element;
}

function appendP() {
  const pElement = document.createElement("p");
  pElement.innerHTML = "Spartan Mule is your personal packing assistant. When you join the Spartan Mule community, you will meet your new best friend, Sparty! Sparty, like most packing mules, is capable of hauling hundreds of pounds of his companions' necessities across the globe. Also like most mules, Sparty is quite stubborn. So what separates Sparty from the rest? Well, he's a minimalist. Sure, he CAN haul enough of your supplies to ride out the rest of your life in an abandonedbomb shelter at the first sign of a zombie attack wait...didn't you say you were just going to Cabo?? but he doesn't WANT to. Sparty will organize and keep track of the supplies you use the most during your trip. He'll also help you ditch the supplies that typically go unused to prevent overpacking in the future!";
  return pElement;
}

export { appendImage, appendH1, appendH2, appendP }