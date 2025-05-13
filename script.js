function changeText() {
    const textElement = document.getElementById("dynamic-text");
    textElement.textContent = "You changed the text!";
}

function changeColor() {
    const colorBox = document.getElementById("color-box");
    const colors = ["lightgray", "lightcoral", "lightblue", "lightgreen"];
    const currentColor = colorBox.style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    colorBox.style.backgroundColor = newColor;
}

function addItem() {
    const list = document.getElementById("item-list");
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${list.childElementCount + 1}`;
    list.appendChild(newItem);
}

function removeItem() {
    const list = document.getElementById("item-list");
    if (list.childElementCount > 0) {
        list.removeChild(list.lastElementChild);
    }
}
