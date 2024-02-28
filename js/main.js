const board = document.querySelector("#board");
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });
  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });
  board.append(square);
}

function setColor(elem) {
  const color = getRendomColor();
  elem.style.background = color;
  elem.style.boxShadow = `0 0 2px ${color}, 0 0 5px ${color}`;
}
function removeColor(elem) {
  elem.style.background = "#1d1d1d";
  elem.style.boxShadow = "0 0 2px #000";
}
function getRendomColor() {
  const color = `rgb(${getRandomRgb()}, ${getRandomRgb()}, ${getRandomRgb()})`;
  return color;
}
function getRandomRgb() {
  return Math.floor(Math.random() * 200 + 50);
}
