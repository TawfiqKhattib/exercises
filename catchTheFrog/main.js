const frog = Frog()
const timer = Timer()
const renderer = Render()

renderer.render(frog.addFrogs())

$("#start").on("click", function() {
    frog.levelUp()
    renderer.render(frog.getFrogs())
    $("#frogCount").text(frog.getLevel())
    timer.start()
})

$("#game").on("click", ".items", function() {
    let frogID = $(this).find(".frog").data("id")
    frog.removeFrog(frogID)
    $("#frogCount").text(frog.countFrogs())
    if (frog.countFrogs() === 0) {
        frog.levelUp()
        timer.moreTime()
        $("#levelCount").text(frog.getLevel())
        $("#frogCount").text(frog.getLevel())
        renderer.render(frog.getFrogs())
    }
    renderer.render(frog.getFrogs())
})