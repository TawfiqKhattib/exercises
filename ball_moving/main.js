const playingField = document.getElementById("playing-field");
playingField.style.backgroundColor = "blue";
document.getElementById("block").style.backgroundColor = "yellow";

const moveRight = function() {
    const block = document.getElementById("block");
    let left = parseInt(block.style.left) || 0;
    left += 15;
    block.style.left = left + "px";
}

const moveUp = function() {
    const block = document.getElementById("block");
    let bottom = parseInt(block.style.top) || 0;
    bottom -= 15;
    block.style.top = bottom + "px";
}
const moveLeft = function() {
    const block = document.getElementById("block");
    let right = parseInt(block.style.left) || 0;
    right -= 15;
    block.style.left = right + "px";
}
const moveDown = function() {
    const block = document.getElementById("block");
    let top = parseInt(block.style.top) || 0;
    top += 15;
    block.style.top = top + "px";
}
const header = document.createElement("h1");
header.innerHTML = "Ball Moving";
header.style.color = "gray";
document.body.appendChild(header, document.body.firstChild)

const subHeader = document.createElement("h2");
subHeader.innerHTML = "Game By: TK";
subHeader.setAttribute("class", "subHdr")
subHeader.style.color = "green";
document.body.appendChild(subHeader)

// const playingField = document.getElementById("playing-field");
// playingField.style.backgroundColor = "blue";
// document.getElementById("block").style.backgroundColor = "yellow";

// const moveRight = function() {
//     const block = document.getElementById("block");
//     let left = parseInt(block.style.left) || 0;
//     left += 15;
//     block.style.left = left + "px";
// }
// const moveLeft = function() {
//     const block = document.getElementById("block");
//     let right = parseInt(block.style.left) || 0;
//     right -= 15;
//     block.style.left = right + "px";
// }
// const moveBottom = function() {
//     const block = document.getElementById("block");
//     let top = parseInt(block.style.top) || 0;
//     top += 15;
//     block.style.top = top + "px";
// }

// const moveTop = function() {
//     const block = document.getElementById("block");
//     let bottom = parseInt(block.style.top) || 0;
//     bottom -= 15;
//     block.style.top = bottom + "px";
// }

// const header = document.createElement("h1");
// header.innerHTML = "Ball Moving";
// header.style.color = "gray";
// document.body.appendChild(header, document.body.firstChild)

// const subHeader = document.createElement("h2");
// subHeader.innerHTML = "Game By: TK";
// subHeader.setAttribute("class", "subHdr")
// subHeader.style.color = "green";
// document.body.appendChild(subHeader)

// const moveTo = function(wdth, topint) {
//     moveRight()
// }