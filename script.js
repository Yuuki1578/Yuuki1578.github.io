let interval = 100;

const colorList = [
  "red",
  "green",
  "blue",
  "cyan",
  "purple",
  "orange",
  "yellow",
];

const heading = "Hello there!";
let index = 0;
const section = document.querySelector("header>span");
const sliderInput = document.querySelector("header>form>input");

function randomGen(maxLength) {
  return Math.floor(Math.random() * maxLength);
}

function parseInputValue(inputElement) {
  const value = parseInt(inputElement.value)
  if (isNaN(value)) return 100;
  else return value;
}

function main() {
  if (index >= heading.length)
    index = 0;


  const before = heading.slice(0, index);
  const current = heading[index];
  const after = heading.slice(index + 1, heading.length);
  const colorIndex = randomGen(colorList.length);
  const color = colorList[colorIndex];

  interval = parseInt(parseInputValue(sliderInput), "10");

  const formatted = `
    <h1>
      ${before}<span style="color: ${color}">${current}</span>${after}
    </h1>
    <samp>Interval: ${interval}ms</samp>
  `;

  section.innerHTML = formatted;
  index += 1;
  setTimeout(main, interval);
}

main();
