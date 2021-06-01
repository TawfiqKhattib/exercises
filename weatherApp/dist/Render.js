class Renderer {
    constructor() {
        this.source = $('#city-template').html();
        this.template = Handlebars.compile(this.source);
    }
    cityRender = function(cityData) {
        $("#city-container").empty();
        const newHTML = this.template(cityData);
        $("#city-container").append('newHTML');

    }
}