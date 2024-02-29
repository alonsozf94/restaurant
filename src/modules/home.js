import logo from "../assets/bakery_logo.png";

// Home
const home = document.createElement("div");
home.classList.add("home");
const homeLogo = new Image();
homeLogo.setAttribute("id", "home-logo");
homeLogo.src = logo;
home.appendChild(homeLogo);