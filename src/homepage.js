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

export { appendImage, appendH1, appendH2 }