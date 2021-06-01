const city = new City();
const render = new Renderer()
let cityDataFromApi = []

$("#search").on("click", async function() {
    let input = $("#prod-input").val();
    const cities = await city.getCityData(input)
    render.cityRender(cities);
    // cityDataFromApi = await city.getCityData(input)
    $("#prod-input").val("");
});

$("#save").on("click", async function() {
    let input = $("#prod-input").val();
    const cities = await city.saveCity(input)
    render.cityRender(cityData);
    // cityDataFromApi = await city.saveCity(input);
    $("#prod-input").val("");
});

$("#remove").on("click", function() {
    let input = $("#prod-input").val();
    city.removeCity(input).then(cityData => render.cityRender(cityData));
    // cityDataFromApi = await city.removeCity(input);
    $("#prod-input").val("");
});