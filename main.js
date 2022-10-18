async function getPage() {
    let path = location.pathname
    let selectedClasses = ['bg-gray-900', 'text-white', 'px-3', 'py-2', 'rounded-md', 'text-sm', 'font-medium']
    let unselectedClasses = ['text-gray-300', 'hover:bg-gray-700', 'hover:text-white', 'px-3', 'py-2', 'rounded-md', 'text-sm', 'font-medium']
    let ids = ["home", "encrypt", "decrypt"]

    if (path == "/") {
        homeelement = document.getElementById("home");
        let selectedClassesString = selectedClasses.join(" ")
        let unselectedClassesString = unselectedClasses.join(" ")
        homeelement.className = selectedClassesString;
        ids[0] = undefined;
        ids.sort();
        ids.pop();
        for (let i = 0; i < ids.length; i++) {
            elementNeeded = document.getElementById(ids[i])
            elementNeeded.className = unselectedClassesString;
        }
    }
    if (path == "/encrypt") {
        encryptelement = document.getElementById("encrypt");
        let selectedClassesString = selectedClasses.join(" ")
        let unselectedClassesString = unselectedClasses.join(" ")
        encryptelement.className = selectedClassesString;
        ids[1] = undefined;
        ids.sort();
        ids.pop();
        for (let i = 0; i < ids.length; i++) {
            elementNeeded = document.getElementById(ids[i])
            elementNeeded.className = unselectedClassesString;
        }
    }
    if (path == "/decrypt") {
        decryptelement = document.getElementById("decrypt");
        let selectedClassesString = selectedClasses.join(" ")
        let unselectedClassesString = unselectedClasses.join(" ")
        decryptelement.className = selectedClassesString;
        ids[2] = undefined;
        ids.sort();
        ids.pop();
        for (let i = 0; i < ids.length; i++) {
            elementNeeded = document.getElementById(ids[i])
            elementNeeded.className = unselectedClassesString;
        }
    }
}
getPage()

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "#000";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const fontSize = 16;
const texts = "ABCDEFGHIJKLMNOPQRSTUVXYZ".split("");
const columnCount = Math.ceil(canvas.width / fontSize);
const rowCount = Math.ceil(canvas.height / fontSize);

const rowStatus = [];
for (let i = 0; i < columnCount; i++) {
  rowStatus[i] = Math.floor(Math.random() * rowCount) * -1;
}

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const text = texts[Math.floor(Math.random() * texts.length)];
  rowStatus.forEach((row, column) => {
    ctx.fillStyle = "#48f613";
    ctx.fillText(text, column * fontSize, row * fontSize);

    rowStatus[column] += 1;
    if (rowStatus[column] > rowCount) {
      rowStatus[column] = 0;
    }
  });
}

setInterval(draw, 100);