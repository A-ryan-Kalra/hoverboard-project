const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

const SQUARES = 500;
let killRunTIme = 0;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  let entered = new Array(SQUARES).fill(0);
  //   console.log("entered", entered);

  square.addEventListener("mouseover", () => setColor(square, entered, i));
  square.addEventListener("mouseout", () => removeColor(square, entered, i));

  container.appendChild(square);
}

function setColor(element, entered, i) {
  entered[i] += 1;
  if (entered[i] === 2) {
    alert("You Lost, you hovered over the box " + i);
    clearTimeout(killRunTIme);
  }

  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`;
}

function removeColor(element, entered, i) {
  element.style.background = "#1d1d1d";

  killRunTIme = setTimeout(() => {
    element.style.boxShadow = "0 0 2px #000";

    entered[i] = 0;
  }, 2000);
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
