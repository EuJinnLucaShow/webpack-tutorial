import "./styles/main.scss";

import example from "./images/example.png";

// Test a background image url in CSS
const imageBackground = document.createElement("div");
imageBackground.classList.add("image");

const imagePublic = document.createElement("img");
imagePublic.src = example;

// Create a class property without a constructor
class Game {
  name = "Violin Charades";
}
const myGame = new Game();
// Create paragraph node
const p = document.createElement("p");
p.textContent = `I like ${myGame.name}.`;

// Create heading node
const heading = document.createElement("h1");
heading.textContent = "Interesting!";

// Append heading node to the DOM
const app = document.querySelector("#root");
app.append(heading, p, imagePublic);
