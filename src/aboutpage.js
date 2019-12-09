import { removeAllChildElements, appendImage, appendH1, appendH2 } from './homepage'

function createAboutPage() {
  const contentDiv = document.getElementById('content');
  removeAllChildElements(contentDiv);
  contentDiv.appendChild(appendImage());
  contentDiv.appendChild(appendH1("About Us"));
  contentDiv.appendChild(appendH2("Why we do what we do"));
  contentDiv.appendChild(appendP());
  createList();
  contentDiv.appendChild(appendP2());
}

function appendP() {
  const pElement = document.createElement("p");
  pElement.innerHTML = "If you've ever caught the travel bug you know the feeling you get when you plop that empty, open suitcase down on your bedroom floor before a trip. Our emotional state tends to follow a path similar to this:"
  return pElement;
}

function appendUl () {
  const ulElement = document.createElement("ul");
  ulElement.classList.add('aboutUl')
  return ulElement;
}

function appendLi(text) {
  const liElement = document.createElement("li");
  liElement.classList.add("aboutListItems")
  liElement.innerHTML = text
  return liElement; 
}

function createList() {
  const contentDiv = document.getElementById('content');
  const ulInContentDiv = contentDiv.appendChild(appendUl());
  ulInContentDiv.appendChild(appendLi("'My plane leaves in 4 hours, better start packing!'"));
  ulInContentDiv.appendChild(appendLi("Emotional high filled with excitment"));
  ulInContentDiv.appendChild(appendLi("Inquisitive, yet still excited 'what exactly do I travel with again?' question to self"));
  ulInContentDiv.appendChild(appendLi("Rummage through all closets and drawers and throw everything you might need on your floor"));
  ulInContentDiv.appendChild(appendLi("A realization that you have no idea what to pack. You may not even know the weather"));
  ulInContentDiv.appendChild(appendLi("You turn around, see all your items scattered across your room like a tornado hit it"));
  ulInContentDiv.appendChild(appendLi("You get hit with a wave of feeling overwhelmed about packing the wrong items and forgetting something important"));
  ulInContentDiv.appendChild(appendLi("You pack literally your entire closet beceause you don't feel like thinking about what you should bring anymore"));
  ulInContentDiv.appendChild(appendLi("You get to the airport, have to cut all lines because you're late, and you have to pay a hefty fee because your bag is overweight"));
}

function appendP2() {
  const pElement = document.createElement("p");
  pElement.innerHTML = "Travel anxiety is a real thing. Even the most experienced travellers suffer from it. There is a lot to be anxious about while travelling. Remembering your passport, currency exchanges, organizing accomodation and transportation from the airport to your accomodation, and more. Some of the anxiety triggers are out of your control. But with packing, you have the power! Packing your bags should symbolize your excitement of what lies ahead. Adventure, friends, good weather, an escape from day-to-day life. We're tired of packing contributing to our travel anxiety, so we created a tool that helps us keep organized and pack exactly what we need, and know exactly where we put it. No more forgetting your toothbrush, no more unnecessarily overweight luggage!"
  return pElement;
}

export { createAboutPage };