import "./styles/main.scss";
import banana from "./images/banana.svg";
import example from "./images/example.png";

// Appending to the DOM
const logo = document.createElement("img");
logo.src = banana;

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
app.append(logo, heading, p, imagePublic);
