const playingField = document.getElementById("playing-field");
playingField.style.backgroundColor = "blue";
document.getElementById("block").style.backgroundColor = "yellow";

const moveRight = function() {
    const block = document.getElementById("block");
    let left = parseInt(block.style.left) || 0;
    left += 15;
    block.style.left = left + "px";
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