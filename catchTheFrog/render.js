const Render = function() {
    const renderFrogs = function(frogs) {
        $("#game").empty()
        for (let i = 0; i < frogs.length; i++) {
            frogBox = {
                id: frogs[i].id,
                left: ((Math.random() * ($('#game').width() - 100))) + 'px',
                top: frogs[i].size * 4 + 'px',
                size: frogs[i].size,
                color: frog.randomColor()
            }
            const source = $('#menu-template').html();
            const template = Handlebars.compile(source);
            const newHTML = template(frogBox);
            $("#game").append(newHTML)
        }
    }
    return {
        render: renderFrogs
    }
}