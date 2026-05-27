const interval = 100;
const colorList = ["red", "green", "blue", "cyan", "purple", "orange"];

const title = "Hello there!";
let index = 0;
const section = document.querySelector("header>section");

setInterval(function() {
  if (index >= title.length) {
    index = 0;
  }

  const before = title.slice(0, index);
  const current = title[index];
  const after = title.slice(index + 1, title.length);
  const colorIndex = Math.floor(Math.random() * colorList.length);
  const color = colorList[colorIndex];

  const formatted = `
    <h1>
      ${before}<span style="color: ${color}">${current}</span>${after}
    </h1>
  `

  // section.insertAdjacentHTML("afterbegin", formatted);
  section.innerHTML = formatted;

  index += 1;
}, interval)
