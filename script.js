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

const heading = "HELLO THERE!";
let index = 0;
const section = document.querySelector(".animation-container");
const sliderInput = document.querySelector(".input-slider");

function randomGen(maxLength) {
  return Math.floor(Math.random() * maxLength);
}

function parseInputValue(inputElement) {
  const value = parseInt(inputElement.value);
  if (isNaN(value)) return 100;
  else return value;
}

function titleAnimation() {
  if (index >= heading.length) index = 0;

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
  setTimeout(titleAnimation, interval);
}

titleAnimation();

let emailBody = "";

function reloadSendButton(parentNode) {
  parentNode.innerHTML = `
    <button>
      <a 
        href="mailto:destuawang@gmail.com?subject=Feedback&body=${emailBody}"
        style="text-decoration: none; color: black;"
        >
        Send!
      </a>
    </button>
  `;
}

function watchTextInput(inputElement, parentNode) {
  inputElement.addEventListener("input", () => {
    emailBody = inputElement.value;
    reloadSendButton(parentNode);
  });
}

const textArea = document.querySelector(".form-textarea");
const sendFeedback = document.querySelector(".form-action");

watchTextInput(textArea, sendFeedback);
