// Imports
import "./style/style.css";
import home from "./modules/home.js"
import menu from "./modules/menu.js"
import about from "./modules/about.js"

// Content
const content = document.querySelector("#content");
content.setAttribute("id", "content");
const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const aboutButton = document.querySelector("#about-btn");

// Functions
function updateContent(newElement) {
  // Update content element content
  content.innerHTML = ``;
  content.appendChild(newElement);
}

// Start
updateContent(about);

homeButton.addEventListener("click", () => updateContent(home));
menuButton.addEventListener("click", () => updateContent(menu));
aboutButton.addEventListener("click", () => updateContent(about));
