// create a new div element
const newH2 = document.createElement("h2");

// and give it some content
const newContent = document.createTextNode("Stan Jungkook");

// add the text node to the newly created div
newH2.appendChild(newContent);

// add the newly created element and its content into the DOM
const existingDiv = document.getElementById("my-target-element");
document.body.appendChild(newH2, existingDiv);