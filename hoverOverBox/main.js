const getRandomColor = function() {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]

    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
}
for (let i = 0; i < 5; i++) {
    let box = document.createElement("div")
    box.setAttribute("class", "box")
    box.setAttribute("onmouseenter", "changeBoxColor(this)")
    document.getElementById("container").appendChild(box)

}

const changeBoxColor = function(x) {
    x.style.backgroundColor = getRandomColor()
}