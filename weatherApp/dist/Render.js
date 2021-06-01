class Renderer {
    constructor() {
        this.container_element = $('#city-container');
        this.source = $("#city-template").html();
        this.template = Handlebars.compile(this.source)
    }
    cityRender = function(cityData) {
        this.container_element.html('');
        const newHTML = this.template({ cities: cityData });
        this.container_element.append(newHTML);

    }


}