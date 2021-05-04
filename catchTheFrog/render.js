const Render = function() {
    const renderFrogs = function(frogs) {
        $("#game").empty()
        const arrFrogs = []
        for (let i = 0; i < frogs.length; i++) {
            frogBox = {
                id: frogs[i].id,
                left: ((Math.random() * ($('#game').width() - 100))) + 'px',
                top: frogs[i].size * 4 + 'px',
                size: frogs[i].size,
                color: frog.randomColor()
            }
            arrFrogs.push(frogBox)
        }
        if (arrFrogs.length > 0) {
            const source = $('#menu-template').html();
            const template = Handlebars.compile(source);
            const newHTML = template({ Frogs: arrFrogs });
            $("#game").append(newHTML)
        }
    }
    return {
        render: renderFrogs
    }
}