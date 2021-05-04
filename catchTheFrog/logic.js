const Frog = function() {

    let level = 0
    let frogs = []

    const getFrogs = function() {
        return frogs
    }

    const addFrogs = function() {

        for (let i = 0; i < level; i++) {
            numID = frogs.length + 1
            let num = Math.floor(Math.random() * 15)
            frogs.push({
                size: num,
                id: numID
            })
        }

        return frogs.length
    }

    const getLevel = function() {
        return level
    }

    const countFrogs = function() {
        let number = frogs.length
        return number
    }

    const removeFrog = function(frogID) {
        for (let i = 0; i < frogs.length; i++) {
            if (frogs[i].id === frogID) {
                frogs.splice(i, 1)
            }
        }
    }

    const levelUp = function() {
        level += 1
        addFrogs()
    }

    const randomColor = function() {
        let num1 = Math.floor(Math.random() * 255)
        let num2 = Math.floor(Math.random() * 255)
        let num3 = Math.floor(Math.random() * 255)

        return `rgb(${num1},${num2},${num3})`
    }

    return {
        getFrogs: getFrogs,
        addFrogs: addFrogs,
        getLevel: getLevel,
        countFrogs: countFrogs,
        removeFrog: removeFrog,
        levelUp: levelUp,
        randomColor: randomColor

    }
}

const Timer = function() {
    let timeLeft = 7;
    const start = function() {
        time = setInterval(function() {

            timeLeft = timeLeft - 1;
            if (timeLeft == 5) {
                $(".sec").addClass("yellow")
            }
            if (timeLeft <= 3) {
                $(".sec").addClass("blink")
                $(".sec").removeClass("yellow")
            }
            if (timeLeft == 0) {
                clearInterval(time);
                $("#game").text("game over!")
                $(".sec").removeClass("blink")

            }

            $("#time").text(timeLeft)
        }, 1000);
    }
    const moreTime = function() {
        timeLeft += 4
    }
    return {
        start: start,
        moreTime: moreTime
    }
}