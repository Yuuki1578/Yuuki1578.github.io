let interval = 100; // milisec
const colorList = [
  "#090618",
  "#C34043",
  "#76946A",
  "#C0A36E",
  "#7E9CD8",
  "#957FB8",
  "#6A9589",
  "#DCD7BA",
  "#727169",
  "#E82424",
  "#98BB6C",
  "#7FB4CA",
  "#938AA9",
  "#7AA89F",
  "#C8C093",
  "#DCD7BA",
  "#DCD7BA",
]; // Kanagawa wave palette, include all but not the background

const heading = "HELLO THERE!"; // h1, index.html only
let index = 0;                  // randomize

// header>span
const section = document.querySelector(".animation-container");
// header>form>input
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
  const before = heading.slice(0, index);
  const current = heading[index];
  const after = heading.slice(index + 1, heading.length);
  const colorIndex = randomGen(colorList.length);
  const color = colorList[colorIndex];

  interval = parseInt(parseInputValue(sliderInput), "10");

  section.innerHTML = `
    <h1>
      ${before}<span style="color: ${color}">${current}</span>${after}
    </h1>
    <span>Interval: ${interval}ms</span>
  `;

  index = (index + 1) % heading.length;
  setTimeout(titleAnimation, interval);
}

titleAnimation();

let emailBody = "";

function reloadSendButton(parentNode) {
  parentNode.innerHTML = `
    <button class="send-email">
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
